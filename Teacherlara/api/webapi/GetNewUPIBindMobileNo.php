<?php
// path: /api/webapi/GetNewUPIBindMobileNo.php
include "../../conn.php";
include "../../functions2.php";

header("Content-Type: application/json; charset=utf-8");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
header("Access-Control-Allow-Methods: POST, GET");

date_default_timezone_set("Asia/Kolkata");
$now = date("Y-m-d H:i:s");

// helper: normalize mobile (remove spaces, +, dashes)
function normalize_mobile($m) {
    if ($m === null) return null;
    $m = trim($m);
    $m = str_replace([' ', '-', '(', ')', '+'], '', $m);
    // if starts with 0 and length 11/10 -> keep, else if 10 digits -> add country code maybe not
    return $m;
}

// Read incoming body (json)
$body = file_get_contents("php://input");
$input = json_decode($body, true);

// Accept GET query too
$query = $_GET;

// Gather candidate keys from multiple possible names
$candidates = [];

// From JSON body
if (is_array($input)) {
    foreach (['data','mobile','mobileNo','phone','msisdn','phoneNumber','mobile_no'] as $k) {
        if (isset($input[$k]) && $input[$k] !== '') {
            $candidates[] = normalize_mobile($input[$k]);
        }
    }
    // also sometimes nested
    if (isset($input['payload']) && is_array($input['payload'])) {
        foreach ($input['payload'] as $k=>$v) {
            if (in_array($k, ['data','mobile','mobileNo','phone','msisdn'])) {
                $candidates[] = normalize_mobile($v);
            }
        }
    }
}

// From POST form (application/x-www-form-urlencoded)
if ($_POST) {
    foreach (['data','mobile','mobileNo','phone','msisdn'] as $k) {
        if (isset($_POST[$k]) && $_POST[$k] !== '') {
            $candidates[] = normalize_mobile($_POST[$k]);
        }
    }
}

// From query string
foreach (['data','mobile','mobileNo','phone','msisdn'] as $k) {
    if (isset($query[$k]) && $query[$k] !== '') {
        $candidates[] = normalize_mobile($query[$k]);
    }
}

// Try Authorization token (Bearer)
$token = "";
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    $parts = explode(" ", $_SERVER['HTTP_AUTHORIZATION']);
    if (isset($parts[1])) $token = $parts[1];
}

// If JWT present, try to get user mobile from DB (preferred)
$mobile_found = null;
if ($token) {
    $valid = is_jwt_valid($token);
    $auth = json_decode($valid, true);
    if (is_array($auth) && isset($auth['status']) && $auth['status'] === 'Success') {
        $user_id = intval($auth['payload']['id']);

        // 1) try upi_withdrawal table (if exists) for mobile
        $q1 = mysqli_query($conn, "SELECT mobile, upi_id FROM upi_withdrawal WHERE user_id = '$user_id' LIMIT 1");
        if ($q1 && mysqli_num_rows($q1) > 0) {
            $r1 = mysqli_fetch_assoc($q1);
            if (!empty($r1['mobile'])) $mobile_found = normalize_mobile($r1['mobile']);
            // if mobile empty but upi_id exists, we may return mobile from another source below
        }

        // 2) try upi_bind (older table) if not found
        if (!$mobile_found) {
            $q2 = mysqli_query($conn, "SELECT mobile FROM upi_bind WHERE user_id = '$user_id' LIMIT 1");
            if ($q2 && mysqli_num_rows($q2) > 0) {
                $r2 = mysqli_fetch_assoc($q2);
                if (!empty($r2['mobile'])) $mobile_found = normalize_mobile($r2['mobile']);
            }
        }

        // 3) fallback - khate table: use duravani (used earlier in your code)
        if (!$mobile_found) {
            $q3 = mysqli_query($conn, "SELECT duravani FROM khate WHERE byabaharkarta = '$user_id' ORDER BY shonu DESC LIMIT 1");
            if ($q3 && mysqli_num_rows($q3) > 0) {
                $r3 = mysqli_fetch_assoc($q3);
                if (!empty($r3['duravani'])) $mobile_found = normalize_mobile($r3['duravani']);
            }
        }
    }
}

// If not found from token, check candidates from request
if (!$mobile_found) {
    foreach ($candidates as $c) {
        if ($c === null || $c === '') continue;
        // basic validation: digits length 10 or 12 (with country code) or 11 (leading 0)
        $digits = preg_replace('/\D+/', '', $c);
        if (strlen($digits) >= 10 && strlen($digits) <= 13) {
            $mobile_found = $digits;
            break;
        }
    }
}

// Final fallback: if nothing found, return Param Invalid (but try to be permissive)
if (!$mobile_found) {
    // If original site returned code 0 with empty data, you can change this behavior.
    // But default: Param Invalid
    echo json_encode([
        "code" => 7,
        "msg" => "Param Invalid",
        "msgCode" => 6,
        "serviceNowTime" => $now
    ]);
    exit;
}

// If mobile looks like local 10-digit, maybe ensure country code (if required by frontend)
if (strlen($mobile_found) == 10) {
    // keep as-is or add country code if you want: uncomment next line to add '91'
    // $mobile_found = '91'.$mobile_found;
}

// Return EXACT original-style response
echo json_encode([
    "data" => $mobile_found,
    "code" => 0,
    "msg" => "Succeed",
    "msgCode" => 0,
    "serviceNowTime" => $now
]);
exit;
