<?php 
    // Database connection
    include "../../conn.php";
    include "../../functions2.php";
    
    header('Content-Type: application/json; charset=utf-8');
    header('Access-Control-Allow-Origin: *'); 
    header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
    header('Access-Control-Allow-Headers: *');
    
    date_default_timezone_set("Asia/Kolkata");
    
    $res = ['code' => 0, 'msg' => 'Success', 'data' => null];
    
    $shonubody = file_get_contents("php://input");
    $shonupost = json_decode($shonubody, true);

    if ($shonupost === null) {
        $shonupost = []; 
    }
    
    $gameCode = isset($shonupost['gameCode']) ? (string)$shonupost['gameCode'] : '800'; 
    $vendorCode = isset($shonupost['vendorCode']) ? $shonupost['vendorCode'] : '';
    
    $gameLaunchUrl = "";
    
    // Fixed: Removed the comma from "800,"
    if ($gameCode == "800") {
        $gameLaunchUrl = "https://99club.vbrao.com/av/index.html"; 
    } 
    else if ($gameCode == "100") {
        $gameLaunchUrl = "https://99club.vbrao.com/game100/mine.html"; 
    }
    else if ($gameCode == "121") {
        $gameLaunchUrl = "https://99club.vbrao.com/game121/index.html"; 
    }
    
    else {
        $gameLaunchUrl = "https://99club.vbrao.com/";
    $res['code'] = 0;
    $res['msg'] = 'Game launched successfully';
    $res['data'] = ['url' => $gameLaunchUrl];

    http_response_code(200);
    echo json_encode($res);
    exit;
?>