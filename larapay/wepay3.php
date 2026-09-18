<?php include ("../serive/samparka.php");?>
<?php
if(isset($_GET['amount'])){
    $ramt = htmlspecialchars(mysqli_real_escape_string($conn, $_GET['amount']));
} else {
    $ramt = 0;
}

// Format amount to 2 decimal places
$dot_pos = strpos($ramt, '.');
if ($dot_pos === false) {
    $ramt = $ramt . '.00';
} else {
    $after_dot = substr($ramt, $dot_pos + 1);
    $after_dot_length = strlen($after_dot);
    if ($after_dot_length > 2) {
        $after_dot = substr($after_dot, 0, 2);
        $ramt = substr($ramt, 0, $dot_pos + 1) . $after_dot;
    } elseif ($after_dot_length < 2) {
        $zeros_to_add = 2 - $after_dot_length;
        $ramt = $ramt . str_repeat('0', $zeros_to_add);
    }
}

$date = date("Ymd");
$time = time();
$serial = 'P' . $date . $time . rand(1000,9999);
$tyid = htmlspecialchars(mysqli_real_escape_string($conn, $_GET['tyid']));
$uid = htmlspecialchars(mysqli_real_escape_string($conn, $_GET['uid']));
$sign = htmlspecialchars(mysqli_real_escape_string($conn, $_GET['sign']));
$urlInfo = htmlspecialchars(mysqli_real_escape_string($conn, $_GET['urlInfo']));

// Get random UPI and QR code from database
$s_upi = "SELECT maulya FROM deyya WHERE sthiti='1' ORDER BY RAND() LIMIT 1";
$r_upi = mysqli_query($conn, $s_upi);
$f_upi = mysqli_fetch_array($r_upi);
$upi_id = $f_upi['maulya'];

// Generate QR code with current UPI ID in JPG format
$qrData = "upi://pay?pa=" . $upi_id . "&pn=Recipient&am=" . $ramt . "&cu=INR";
$qr_code_image = "https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=" . urlencode($qrData) . "&margin=10&color=2C3E50&bgcolor=F8F9FA&format=jpg";

// Generate UPI payment links
$phonepe_link = "phonepe://pay?pa=".$upi_id."&pn=Merchant&am=".$ramt."&cu=INR";
$paytm_link = "paytmmp://pay?pa=".$upi_id."&pn=Merchant&am=".$ramt."&cu=INR";
$gpay_link = "tez://upi/pay?pa=".$upi_id."&pn=Merchant&am=".$ramt."&cu=INR";
?>

<?php
$res = [
    'code' => 405,
    'message' => 'Illegal access!',
];

if (isset($_GET['tyid']) && isset($_GET['amount']) && isset($_GET['uid']) && isset($_GET['sign']) && isset($_GET['urlInfo'])) {
    $userId = $uid;
    $userPhoto = '1';
    $numquery = "SELECT mobile, codechorkamukala FROM shonu_subjects WHERE id = ".$userId;
    $numresult = $conn->query($numquery);
    $numarr = mysqli_fetch_array($numresult);
    $userName = '91'.$numarr['mobile'];
    $nickName = $numarr['codechorkamukala'];
    
    $creaquery = "SELECT createdate FROM shonu_subjects WHERE id = ".$userId;
    $crearesult = $conn->query($creaquery);
    $creaarr = mysqli_fetch_array($crearesult);
    
    $knbdstr = '{"userId":'.$userId.',"userPhoto":"'.$userPhoto.'","userName":'.$userName.',"nickName":"'.$nickName.'","createdate":"'.$creaarr['createdate'].'"}';
    $shonusign = strtoupper(hash('sha256', $knbdstr));
    
    $urlarr = explode(",", $urlInfo);
    $theirurl = $urlarr[0];
    $myurl = 'https://91clubgame.site/';
    
    if($myurl){
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>UPI Payment | SecurePay</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <script src="assets/js/wepay/jquery-2.2.4.min.js"></script>
    <script src="assets/js/wepay/clipboard.min.js"></script>
    <style>
        :root {
    --primary: green;         /* Red base */
    --primary-dark: #b91c1c;     /* Darker red */
    --primary-light: #f87171;    /* Lighter red */
    --danger: #ef4444;           /* You may keep or tweak if needed */
    --success: #10b981;
    --warning: #f59e0b;
    --gray-50: #f9fafb;
    --gray-100: #f3f4f6;
    --gray-200: #e5e7eb;
    --gray-300: #d1d5db;
    --gray-400: #9ca3af;
    --gray-500: #6b7280;
    --gray-600: #4b5563;
    --gray-700: #374151;
    --gray-800: #1f2937;
    --gray-900: #111827;
}
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Poppins', sans-serif;
        }
        body {
            background-color: white;
            color: var(--gray-800);
            line-height: 1.5;
            -webkit-font-smoothing: antialiased;
        }
        .container {
            max-width: 480px;
            margin: 0 auto;
            background: white;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            position: relative;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.05);
        }
        .header {
            background: white;
            color: var(--gray-800);
            padding: 1.25rem;
            text-align: center;
            font-weight: 600;
            font-size: 1.1rem;
            border-bottom: 1px solid var(--gray-200);
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
        }
        .header-logo {
            color: var(--primary);
            font-size: 1.5rem;
        }
        .amount-section {
            padding: 1.5rem;
            text-align: center;
            background: white;
            position: relative;
        }
        .amount-label {
            font-size: 0.875rem;
            color: var(--gray-500);
            margin-bottom: 0.5rem;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        .amount-value {
            font-size: 2.25rem;
            font-weight: 700;
            color: var(--gray-900);
            position: relative;
            display: inline-block;
        }
        .amount-value::before {
            content: '₹';
            position: absolute;
            left: -1.25rem;
            top: 50%;
            transform: translateY(-50%);
            font-size: 1.5rem;
            color: var(--gray-500);
        }
        .timer-container {
            background: white;
            padding: 0.75rem;
            border-bottom: 1px solid var(--gray-200);
            box-shadow: 0 2px 4px rgba(0,0,0,0.03);
        }
        .timer {
            background: linear-gradient(135deg, #fee2e2, #fef2f2);
            color: var(--danger);
            padding: 0.75rem;
            text-align: center;
            font-weight: 600;
            font-size: 0.95rem;
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.75rem;
            position: relative;
            overflow: hidden;
        }
        .timer::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(90deg, 
                          rgba(239, 68, 68, 0) 0%, 
                          rgba(239, 68, 68, 0.1) 50%, 
                          rgba(239, 68, 68, 0) 100%);
            animation: shine 2s infinite;
        }
        @keyframes shine {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
        }
        .timer i {
            font-size: 1.1rem;
            animation: pulse 1.5s infinite;
        }
        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.1); }
            100% { transform: scale(1); }
        }
        .content {
            flex: 1;
            padding: 1.25rem;
            padding-bottom: 6rem;
        }
        .section-title {
            font-size: 0.95rem;
            font-weight: 600;
            color: var(--gray-800);
            margin-bottom: 1rem;
            display: flex;
            align-items: center;
            gap: 0.75rem;
        }
        .section-title i {
            color: var(--primary);
            font-size: 1.1rem;
        }
        .card {
            background: white;
            border-radius: 12px;
            padding: 1.25rem;
            margin-bottom: 1.25rem;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
            border: 1px solid var(--gray-200);
        }
        .qr-container {
            text-align: center;
            margin: 1.5rem 0;
        }
        .qr-code {
            width: 200px;
            height: 200px;
            margin: 0 auto;
            padding: 0.75rem;
            background: white;
            border-radius: 8px;
            position: relative;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
            border: 1px solid var(--gray-200);
            animation: float 3s ease-in-out infinite;
        }
        @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-5px); }
            100% { transform: translateY(0px); }
        }
        .qr-code img {
            width: 100%;
            height: 100%;
            object-fit: contain;
            border-radius: 4px;
        }
        .qr-badge {
            position: absolute;
            bottom: -0.75rem;
            left: 50%;
            transform: translateX(-50%);
            background: var(--primary);
            color: white;
            padding: 0.5rem 1.25rem;
            border-radius: 20px;
            font-size: 0.75rem;
            font-weight: 600;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        .qr-actions {
            display: flex;
            gap: 0.75rem;
            margin-top: 1.75rem;
            justify-content: center;
        }
        .btn {
            padding: 0.75rem 1.25rem;
            border-radius: 8px;
            font-weight: 500;
            font-size: 0.85rem;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            cursor: pointer;
            transition: all 0.2s;
            border: none;
            white-space: nowrap;
        }
        .btn-primary {
            background-color: var(--primary);
            color: white;
            box-shadow: 0 2px 6px rgba(79, 70, 229, 0.3);
        }
        .btn-primary:hover {
            background-color: var(--primary-dark);
            transform: translateY(-2px);
            box-shadow: 0 4px 8px rgba(79, 70, 229, 0.4);
        }
        .btn-outline {
            background-color: white;
            color: var(--primary);
            border: 1px solid var(--primary);
        }
        .btn-outline:hover {
            background-color: var(--gray-50);
            transform: translateY(-2px);
        }
        .upi-id-container {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            margin-bottom: 1.25rem;
        }
        .upi-id {
            flex: 1;
            font-family: 'Roboto Mono', monospace;
            font-size: 0.9rem;
            color: var(--gray-800);
            word-break: break-all;
            padding: 0.75rem;
            background: var(--gray-50);
            border-radius: 8px;
            border: 1px solid var(--gray-200);
            box-shadow: 0 1px 2px rgba(0,0,0,0.05);
        }
        .copy-btn {
            background: var(--primary);
            color: white;
            border: none;
            padding: 0.75rem;
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.2s;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 2px 4px rgba(79, 70, 229, 0.2);
        }
        .copy-btn:hover {
            background: var(--primary-dark);
            transform: translateY(-2px);
        }
        .instructions-list {
            list-style: none;
        }
        .instructions-list li {
            margin-bottom: 0.75rem;
            font-size: 0.85rem;
            color: var(--gray-700);
            display: flex;
            gap: 0.75rem;
            align-items: flex-start;
            line-height: 1.5;
        }
        .instructions-list li::before {
            content: "";
            display: inline-block;
            width: 6px;
            height: 6px;
            background-color: var(--primary);
            border-radius: 50%;
            margin-top: 0.5rem;
            flex-shrink: 0;
        }
        .highlight {
            font-weight: 600;
            color: var(--danger);
            background: rgba(239, 68, 68, 0.1);
            padding: 0.15rem 0.3rem;
            border-radius: 4px;
        }
        .utr-input-container {
            position: relative;
            margin-bottom: 1.25rem;
        }
        .utr-input {
            width: 100%;
            padding: 1rem 1rem 1rem 3.5rem;
            border: 1px solid var(--gray-300);
            border-radius: 8px;
            font-size: 0.95rem;
            transition: all 0.2s;
            background: white;
            color: var(--gray-800);
            box-shadow: 0 1px 3px rgba(0,0,0,0.05);
        }
        .utr-input:focus {
            outline: none;
            border-color: var(--primary);
            box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.2);
        }
        .utr-input::placeholder {
            color: var(--gray-400);
        }
        .utr-label {
            position: absolute;
            left: 1rem;
            top: 50%;
            transform: translateY(-50%);
            color: var(--primary);
            font-weight: 600;
            font-size: 0.9rem;
        }
        .fixed-bottom {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            background: white;
            padding: 1rem;
            box-shadow: 0 -5px 15px rgba(0, 0, 0, 0.05);
            max-width: 480px;
            margin: 0 auto;
            border-top: 1px solid var(--gray-200);
            z-index: 20;
        }
        .submit-btn {
            width: 100%;
            padding: 1rem;
            background: var(--primary);
            color: white;
            border: none;
            border-radius: 8px;
            font-weight: 600;
            font-size: 1rem;
            cursor: pointer;
            transition: all 0.2s;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.75rem;
            box-shadow: 0 4px 8px rgba(79, 70, 229, 0.3);
        }
        .submit-btn:hover {
            background: var(--primary-dark);
            transform: translateY(-2px);
            box-shadow: 0 6px 12px rgba(79, 70, 229, 0.4);
        }
        .submit-btn:active {
            transform: translateY(0);
        }
        .upi-apps {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 0.75rem;
            margin-top: 1.25rem;
        }
        .upi-app {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.5rem;
            padding: 0.75rem;
            background: white;
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.2s;
            border: 1px solid var(--gray-200);
            box-shadow: 0 2px 4px rgba(0,0,0,0.00);
        }
        .upi-app:hover {
            transform: translateY(-3px);
            box-shadow: 0 6px 12px rgba(0,0,0,0.1);
            border-color: var(--primary);
        }
        .upi-app-icon {
            width: 2.75rem;
            height: 2.75rem;
            object-fit: contain;
            border-radius: 50%;
            padding: 0.5rem;
            background: white;
            box-shadow: 0 2px 4px rgba(0,0,0,0.0);
          /*  border: 1px solid var(--gray-200);*/
            transition: all 0.2s;
        }
        .upi-app:hover .upi-app-icon {
            transform: scale(1.1);
        }
        .upi-app-name {
            font-size: 0.75rem;
            font-weight: 500;
            color: var(--gray-700);
            text-align: center;
        }
        .security-badge {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            margin-top: 1rem;
            font-size: 0.75rem;
            color: var(--gray-600);
        }
        .security-badge i {
            color: var(--success);
        }
        .toast {
            position: fixed;
            bottom: 80px;
            left: 50%;
            transform: translateX(-50%);
            background: var(--gray-800);
            color: white;
            padding: 0.75rem 1.25rem;
            border-radius: 8px;
            font-size: 0.85rem;
            display: flex;
            align-items: center;
            gap: 0.75rem;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
            z-index: 100;
            opacity: 0;
            transition: opacity 0.3s;
        }
        .toast.show {
            opacity: 1;
        }
        .toast i {
            font-size: 1.1rem;
        }
        .toast.success i {
            color: var(--success);
        }
        .toast.error i {
            color: var(--danger);
        }
        .toast.warning i {
            color: var(--warning);
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <i class="fas fa-wallet header-logo"></i>
            SecurePay UPI Gateway
        </div>
        
        <div class="amount-section">
            <div class="amount-label">Amount to pay</div>
            <div class="amount-value"><?php echo $ramt; ?></div>
        </div>
        
     <!--   <div class="timer-container">
            <div class="timer">
                <i class="fas fa-clock"></i>
                Complete payment in: <span id="timer">05:00</span>
            </div>
        </div>
   -->     
        <div class="content">
            <div class="section-title">
                <i class="fas fa-qrcode"></i>
                Pay via QR Code
            </div>
            
            <div class="card">
                <div class="qr-container">
                    <div class="qr-code">
                        <img src="<?php echo $qr_code_image; ?>" alt="UPI QR Code">
                        <!--<div class="qr-badge">SCAN TO PAY</div>-->
                    </div>
                    
                    <div class="qr-actions">
                        <button class="btn btn-outline" id="saveQrBtn">
                            <i class="fas fa-download"></i>
                            Save QR
                        </button>
                        <button class="btn btn-primary" id="payWithUpiBtn">
                            <i class="fas fa-mobile-alt"></i>
                            Pay with UPI
                        </button>
                    </div>
                </div>
            </div>
            
            <div class="section-title">
                <i class="fas fa-id-card"></i>
                UPI Payment Details
            </div>
            
            <div class="card">
                <div class="upi-id-container">
                    <div class="upi-id"><?php echo $upi_id; ?></div>
                    <button class="copy-btn" id="copyUpiBtn" title="Copy UPI ID">
                        <i class="far fa-copy"></i>
                    </button>
                </div>
                
                <div class="upi-apps">
                    <div class="upi-app" id="phonepeBtn">
                        <img src="https://logos-download.com/wp-content/uploads/2021/01/PhonePe_Logo.png" alt="PhonePe" class="upi-app-icon">
                        <span class="upi-app-name">PhonePe</span>
                    </div>
                    <div class="upi-app" id="paytmBtn">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Paytm_logo.png/800px-Paytm_logo.png" alt="Paytm" class="upi-app-icon">
                        <span class="upi-app-name">Paytm</span>
                    </div>
                    <div class="upi-app" id="gpayBtn">
                        <img width="48" height="48" src="https://img.icons8.com/color/48/google-pay.png" alt="google-pay"/>
                        <span class="upi-app-name">GPay</span>
                    </div>
                </div>
                
                <div class="security-badge">
                    <i class="fas fa-shield-alt"></i>
                    <span>Secure & Encrypted Payment</span>
                </div>
            </div>
            
            <div class="section-title">
                <i class="fas fa-info-circle"></i>
                Payment Instructions
            </div>
            
            <div class="card">
                <ul class="instructions-list">
                    <li>Pay <span class="highlight">exactly ₹<?php echo $ramt; ?></span> to the given UPI ID/QR code</li>
                    <li>Complete payment within <span class="highlight">5 minutes</span> to avoid expiration</li>
                    <li>After payment, submit the 12-digit UTR/Reference number below</li>
                    <li>Do not reuse this UPI ID for another transaction</li>
                    <li>Payment verification typically takes 2-5 minutes</li>
                </ul>
            </div>
            
            <div class="section-title">
                <i class="fas fa-receipt"></i>
                Payment Reference
            </div>
            
            <div class="card">
                <div class="utr-input-container">
                    <input type="text" class="utr-input" id="refno" placeholder="Enter 12-digit UTR number" maxlength="12">
                    <span class="utr-label">UTR#</span>
                </div>
            </div>
        </div>
        
        <div class="fixed-bottom">
            <button class="submit-btn" id="submitBtn">
                <i class="fas fa-paper-plane"></i>
                Submit Payment Details
            </button>
        </div>
    </div>
    
    <div id="toast" class="toast">
        <i class="fas fa-check-circle"></i>
        <span id="toast-message">Message</span>
    </div>
    
    <script>
        // Toast notification system
        function showToast(message, type = 'success') {
            const toast = document.getElementById('toast');
            const toastMessage = document.getElementById('toast-message');
            
            toast.className = 'toast';
            toast.classList.add(type);
            toastMessage.textContent = message;
            
            setTimeout(() => {
                toast.classList.add('show');
            }, 100);
            
            setTimeout(() => {
                toast.classList.remove('show');
            }, 3000);
        }

        // Cookie-based Countdown Timer
        function getCookie(name) {
            const value = `; ${document.cookie}`;
            const parts = value.split(`; ${name}=`);
            if (parts.length === 2) return parts.pop().split(';').shift();
        }
        
        function setCookie(name, value, minutes) {
            const date = new Date();
            date.setTime(date.getTime() + (minutes * 60 * 1000));
            document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
        }
        
        function startTimer(duration, display) {
            var timer = duration, minutes, seconds;
            
            // Check if timer exists in cookie
            const savedTime = getCookie('paymentTimer');
            if(savedTime) {
                timer = parseInt(savedTime);
                if(timer <= 0) {
                    // Timer expired, refresh UPI and QR
                    refreshPaymentDetails();
                    timer = duration; // Reset timer
                }
            } else {
                // Set initial timer cookie
                setCookie('paymentTimer', timer, 10); // 10 minutes expiry
            }
            
            var interval = setInterval(function () {
                minutes = parseInt(timer / 60, 10);
                seconds = parseInt(timer % 60, 10);
                
                minutes = minutes < 10 ? "0" + minutes : minutes;
                seconds = seconds < 10 ? "0" + seconds : seconds;
                
                display.textContent = minutes + ":" + seconds;
                
                // Update cookie every second
                setCookie('paymentTimer', timer - 1, 10);
                
                if (--timer < 0) {
                    clearInterval(interval);
                    display.textContent = "00:00";
                    showToast("Time's up! Generating new payment link...", 'warning');
                    
                    // Refresh payment details when timer ends
                    refreshPaymentDetails();
                    
                    // Reset timer
                    timer = duration;
                    setCookie('paymentTimer', timer, 10);
                    startTimer(duration, display);
                }
            }, 1000);
        }
        
        function refreshPaymentDetails() {
            showToast("Generating new payment link...", 'warning');
            
            // AJAX call to refresh payment details
            $.ajax({
                url: window.location.href,
                type: 'GET',
                data: {
                    refresh: true,
                    amount: '<?php echo $ramt; ?>',
                    tyid: '<?php echo $tyid; ?>',
                    uid: '<?php echo $uid; ?>',
                    sign: '<?php echo $sign; ?>',
                    urlInfo: '<?php echo $urlInfo; ?>'
                },
                success: function(response) {
                    // Parse the response and update the page
                    const parser = new DOMParser();
                    const doc = parser.parseFromString(response, 'text/html');
                    
                    // Update UPI ID
                    const newUpiId = doc.querySelector('.upi-id').textContent;
                    document.querySelector('.upi-id').textContent = newUpiId;
                    
                    // Update QR Code
                    const newQrCode = doc.querySelector('.qr-code img').src;
                    document.querySelector('.qr-code img').src = newQrCode;
                    
                    // Update payment links
                    showToast("Payment details updated", 'success');
                },
                error: function() {
                    showToast("Failed to refresh payment details", 'error');
                }
            });
        }
        
        // Initialize timer
        window.onload = function () {
            var fiveMinutes = 60 * 5,
                display = document.querySelector('#timer');
            startTimer(fiveMinutes, display);
        };
        
        // Copy UPI ID
        var clipboard = new ClipboardJS('#copyUpiBtn', {
            text: function() {
                return '<?php echo $upi_id; ?>';
            }
        });
        
        clipboard.on('success', function(e) {
            showToast("UPI ID copied to clipboard", 'success');
            e.clearSelection();
        });
        
        clipboard.on('error', function(e) {
            showToast("Failed to copy UPI ID", 'error');
        });
        
        // Save QR Code
        document.getElementById('saveQrBtn').addEventListener('click', function() {
            var link = document.createElement('a');
            link.href = '<?php echo $qr_code_image; ?>';
            link.download = 'SecurePay_QR_<?php echo $ramt; ?>.png';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            showToast("QR code saved to downloads", 'success');
        });
        
        // Pay with UPI button
        document.getElementById('payWithUpiBtn').addEventListener('click', function() {
            showToast("Opening UPI app...", 'success');
            setTimeout(() => {
                window.location.href = "upi://pay?pa=<?php echo $upi_id; ?>&pn=Merchant&am=<?php echo $ramt; ?>&cu=INR";
            }, 1000);
        });
        
        // UPI app buttons
        document.getElementById('phonepeBtn').addEventListener('click', function() {
            showToast("Opening PhonePe...", 'success');
            setTimeout(() => {
                window.location.href = "<?php echo $phonepe_link; ?>";
            }, 1000);
        });
        
        document.getElementById('paytmBtn').addEventListener('click', function() {
            showToast("Opening Paytm...", 'success');
            setTimeout(() => {
                window.location.href = "<?php echo $paytm_link; ?>";
            }, 1000);
        });
        
        document.getElementById('gpayBtn').addEventListener('click', function() {
            showToast("Opening Google Pay...", 'success');
            setTimeout(() => {
                window.location.href = "<?php echo $gpay_link; ?>";
            }, 1000);
        });
        
        // Auto-submit when 12 digits entered
        document.getElementById('refno').addEventListener('input', function() {
            if (this.value.length === 12) {
                document.getElementById('submitBtn').click();
            }
        });
        
        // Submit UTR
        document.getElementById('submitBtn').addEventListener('click', function() {
            var utr = document.getElementById('refno').value.trim();
            
            if (utr.length !== 12) {
                showToast("Please enter a valid 12-digit UTR number", 'error');
                return;
            }
            
            showToast("Verifying payment...", 'warning');
            
            // AJAX call to submit UTR
            $.ajax({
                type: "POST",
                url: "adddeposit.php",
                data: {
                    amt: '<?php echo $ramt; ?>',
                    refnum: utr,
                    srl: '<?php echo $serial; ?>',
                    source: "wepay",
                    upi: '<?php echo $upi_id; ?>',
                    userId: '<?php echo $userId; ?>',
                    token: '<?php echo $shonusign; ?>'
                },
                success: function(response) {
                    var arr = response.split('~');
                    if (arr[0] == 1) {
                        setTimeout(function() {
                            window.location.href = 'depositconfirm.php?amt=<?php echo $ramt; ?>&refnum=' + utr + '&srl=<?php echo $serial; ?>&userId=<?php echo $userId; ?>&token=<?php echo $shonusign; ?>';
                        }, 1900);
                    } else if(arr[0] == 0) {
                        showToast("Payment verification failed", 'error');
                    } else if(arr[0] == 2) {
                        showToast("This UTR has already been used", 'error');
                    } else if(arr[0] == 3) {
                        showToast("Please wait 1 minute before retrying", 'warning');
                    } else if(arr[0] == 4) {
                        showToast("Account suspended - contact support", 'error');
                    }
                },
                error: function() {
                    showToast("Network error - please try again", 'error');
                }
            });
        });
    </script>
</body>
</html>
<?php
    } else {
        $res['code'] = 10000;
        $res['success'] = 'false';
        $res['message'] = 'Sorry, The system is busy, please try again later!';
        header('Content-Type: text/html; charset=utf-8');
        http_response_code(200);
        echo json_encode($res);
    }
} else {
    header('Content-Type: application/json; charset=utf-8');
    http_response_code(200);
    echo json_encode($res);
}
?>