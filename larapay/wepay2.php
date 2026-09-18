
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
    <title>UPI Payment | QuickPay</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.8/clipboard.min.js"></script>
    <style>
        :root {
            --primary: #2563eb;
            --primary-dark: #1d4ed8;
            --primary-light: #3b82f6;
            --secondary: #10b981;
            --danger: #ef4444;
            --success: #10b981;
            --warning: #f59e0b;
            --light: #f8fafc;
            --light-gray: #f1f5f9;
            --medium-gray: #e2e8f0;
            --dark-gray: #64748b;
            --text-primary: #1e293b;
            --text-secondary: #475569;
        }
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Poppins', sans-serif;
        }
        
        body {
            background-color: #f8fafc;
            color: var(--text-primary);
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
            box-shadow: 0 0 15px rgba(0,0,0,0.05);
        }
        
        .header {
            background: white;
            padding: 1.25rem;
            text-align: center;
            border-bottom: 1px solid var(--light-gray);
        }
        
        .logo {
            font-size: 1.25rem;
            font-weight: 600;
            color: var(--primary);
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            margin-bottom: 0.5rem;
        }
        
        .logo i {
            font-size: 1.5rem;
        }
        
        .amount-section {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            margin-bottom: 1rem;
        }
        
        .amount-icon {
            color: var(--primary);
            font-size: 1.75rem;
        }
        
        .amount-value {
            font-size: 2.25rem;
            font-weight: 700;
            color: var(--text-primary);
        }
        
        .timer-container {
            background: white;
            padding: 0.75rem 1rem;
            border-bottom: 1px solid var(--light-gray);
        }
        
        .timer {
            background: #fffbeb;
            color: var(--warning);
            padding: 0.75rem;
            text-align: center;
            font-weight: 600;
            font-size: 0.85rem;
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
        }
        
        .timer i {
            font-size: 0.9rem;
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
            padding-bottom: 5rem;
        }
        
        .section {
            margin-bottom: 1.5rem;
        }
        
        .section-title {
            font-size: 0.9rem;
            font-weight: 600;
            color: var(--dark-gray);
            margin-bottom: 0.75rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
        
        .section-title i {
            color: var(--primary);
            font-size: 1rem;
        }
        
        .qr-container {
            text-align: center;
            margin: 1rem 0;
        }
        
        .qr-code {
            width: 200px;
            height: 200px;
            margin: 0 auto;
            padding: 0.75rem;
            background: white;
            border-radius: 8px;
            position: relative;
            border: 1px solid var(--light-gray);
            box-shadow: 0 4px 6px rgba(0,0,0,0.05);
        }
        
        .qr-code img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
        
        .qr-badge {
            position: absolute;
            bottom: -0.5rem;
            left: 50%;
            transform: translateX(-50%);
            background: var(--primary);
            color: white;
            padding: 0.3rem 1rem;
            border-radius: 15px;
            font-size: 0.65rem;
            font-weight: 600;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        
        .payment-methods {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            margin: 1.25rem 0;
        }
        
        .payment-method {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0.9rem 1rem;
            background: white;
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.2s;
            border: 1px solid var(--light-gray);
            box-shadow: 0 1px 3px rgba(0,0,0,0.05);
        }
        
        .payment-method:hover {
            /*border-color: var(--primary);*/
            transform: translateY(0px);
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }
        
        .payment-method-left {
            display: flex;
            align-items: center;
            gap: 1rem;
        }
        
        .payment-method-icon {
            width: 2.25rem;
            height: 2.25rem;
            object-fit: contain;
            border-radius: 6px;
            padding: 0.4rem;
            background: white;
            border: 1px solid var(--light-gray);
        }
        
        .payment-method-name {
            font-size: 0.85rem;
            font-weight: 500;
            color: var(--text-primary);
        }
        
        .payment-method-arrow {
            color: var(--dark-gray);
            font-size: 0.8rem;
        }
        
        .btn {
            padding: 0.8rem 1.25rem;
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
        }
        
        .btn-primary {
            background-color: var(--primary);
            color: white;
        }
        
        .btn-primary:hover {
            background-color: var(--primary-dark);
            transform: translateY(-2px);
        }
        
        .btn-block {
            width: 100%;
            display: flex;
        }
        
        .instructions-container {
            background: var(--light);
            border-radius: 8px;
            padding: 1rem;
            margin-top: 1rem;
            border: 1px solid var(--light-gray);
        }
        
        .instructions-list {
            list-style: none;
        }
        
        .instructions-list li {
            margin-bottom: 0.5rem;
            font-size: 0.75rem;
            color: var(--text-secondary);
            display: flex;
            gap: 0.5rem;
            align-items: flex-start;
            line-height: 1.4;
        }
        
        .instructions-list li::before {
            content: "•";
            color: var(--primary);
            font-weight: bold;
            font-size: 1rem;
            line-height: 1;
        }
        
        .highlight {
            font-weight: 600;
            color: var(--primary);
        }
        
        .utr-input-container {
            position: relative;
            margin-bottom: 1.25rem;
        }
        
        .utr-input {
            width: 100%;
            padding: 0.9rem 0.9rem 0.9rem 3rem;
            border: 1px solid var(--light-gray);
            border-radius: 8px;
            font-size: 0.9rem;
            transition: all 0.2s;
            background: white;
            color: var(--text-primary);
            box-shadow: 0 1px 3px rgba(0,0,0,0.05);
        }
        
        .utr-input:focus {
            outline: none;
            border-color: var(--primary);
            box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
        }
        
        .utr-input::placeholder {
            color: var(--dark-gray);
            font-size: 0.85rem;
        }
        
        .utr-label {
            position: absolute;
            left: 0.9rem;
            top: 50%;
            transform: translateY(-50%);
            color: var(--primary);
            font-weight: 600;
            font-size: 0.85rem;
        }
        
        .fixed-bottom {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            background: white;
            padding: 0.8rem;
            box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.05);
            max-width: 480px;
            margin: 0 auto;
            border-top: 1px solid var(--light-gray);
            z-index: 10;
        }
        
        .submit-btn {
            width: 100%;
            padding: 0.9rem;
            background: var(--primary);
            color: white;
            border: none;
            border-radius: 8px;
            font-weight: 600;
            font-size: 0.95rem;
            cursor: pointer;
            transition: all 0.2s;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            box-shadow: 0 2px 6px rgba(37, 99, 235, 0.2);
        }
        
        .submit-btn:hover {
            background: var(--primary-dark);
            transform: translateY(-2px);
            box-shadow: 0 4px 8px rgba(37, 99, 235, 0.3);
        }
        
        .submit-btn i {
            font-size: 1rem;
        }
        
        .toast {
            position: fixed;
            bottom: 70px;
            left: 50%;
            transform: translateX(-50%);
            background: var(--text-primary);
            color: white;
            padding: 0.7rem 1.25rem;
            border-radius: 6px;
            font-size: 0.8rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            z-index: 100;
            opacity: 0;
            transition: opacity 0.3s;
            max-width: 90%;
        }
        
        .toast.show {
            opacity: 1;
        }
        
        .toast i {
            font-size: 1rem;
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
        
        @media (max-width: 480px) {
            .container {
                max-width: 100%;
            }
            
            .amount-value {
                font-size: 2rem;
            }
            
            .amount-icon {
                font-size: 1.5rem;
            }
            
            .qr-code {
                width: 180px;
                height: 180px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="logo">
                <i class="fas fa-wallet"></i>
                QuickPay
            </div>
            <div class="amount-section">
               <!-- <i class="fas fa-rupee-sign amount-icon"></i>-->
                <div class="amount-value">₹ <?php echo $ramt; ?></div>
            </div>
        </div>
        
     <!--   <div class="timer-container">
            <div class="timer">
                <i class="fas fa-clock"></i>
                Complete payment in: <span id="timer">05:00</span>
            </div>
        </div>
        -->
        <div class="content">
            <!-- QR Code Section -->
            <div class="section">
                <div class="section-title">
                    <i class="fas fa-qrcode"></i>
                    Scan QR Code
                </div>
                
                <div class="qr-container">
                    <div class="qr-code">
                        <img src="<?php echo $qr_code_image; ?>" alt="UPI QR Code">
                     <!--   <div class="qr-badge">Scan & Pay</div>  -->
                    </div>
                </div>
            </div>
            
            <!-- Payment Methods Section -->
            <div class="section">
                <div class="section-title">
                    <i class="fas fa-mobile-alt"></i>
                    Payment Apps
                </div>
                
                <div class="payment-methods">
                    <div class="payment-method" id="phonepeBtn">
                        <div class="payment-method-left">
                            <img src="https://logos-download.com/wp-content/uploads/2021/01/PhonePe_Logo.png" alt="PhonePe" class="payment-method-icon">
                            <span class="payment-method-name">PhonePe</span>
                        </div>
                        <i class="fas fa-chevron-right payment-method-arrow"></i>
                    </div>
                    <div class="payment-method" id="paytmBtn">
                        <div class="payment-method-left">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Paytm_logo.png/800px-Paytm_logo.png" alt="Paytm" class="payment-method-icon">
                            <span class="payment-method-name">Paytm</span>
                        </div>
                        <i class="fas fa-chevron-right payment-method-arrow"></i>
                    </div>
                    <div class="payment-method" id="gpayBtn">
                        <div class="payment-method-left">
                        <img width="40" height="40" src="https://img.icons8.com/fluency/48/google-pay-new.png" alt="google-pay-new"/>
                            <span class="payment-method-name">Google Pay</span>
                        </div>
                        <i class="fas fa-chevron-right payment-method-arrow"></i>
                    </div>
                </div>
                
                <button class="btn btn-primary btn-block" id="payWithUpiBtn" style="margin-top: 1rem;">
                    <i class="fas fa-wallet"></i>
                    Pay with Any UPI App
                </button>
            </div>
            
            <!-- UTR Section -->
            <div class="section">
                <div class="section-title">
                    <i class="fas fa-receipt"></i>
                    Payment Reference
                </div>
                
                <div class="utr-input-container">
                    <input type="text" class="utr-input" id="refno" placeholder="Enter 12-digit UTR/Reference number" maxlength="12">
                    <span class="utr-label">UTR#</span>
                </div>
            </div>
            
            <!-- Instructions Section -->
            <div class="section">
                <div class="section-title">
                    <i class="fas fa-info-circle"></i>
                    Instructions
                </div>
                
                <div class="instructions-container">
                    <ul class="instructions-list">
                        <li>Scan QR code or use any UPI app to pay <span class="highlight">₹<?php echo $ramt; ?></span></li>
                        <li>Complete payment within <span class="highlight">5 minutes</span> to avoid expiration</li>
                        <li>Enter 12-digit UTR number after successful payment</li>
                        <li>Payment verification takes 2-5 minutes</li>
                        <li>Do not refresh or close this page</li>
                    </ul>
                </div>
            </div>
        </div>
        
        <div class="fixed-bottom">
            <button class="submit-btn" id="submitBtn">
                <i class="fas fa-check-circle"></i>
                Verify Payment
            </button>
        </div>
    </div>
    
    <div id="toast" class="toast">
        <i class="fas fa-check-circle"></i>
        <span id="toast-message">Message</span>
    </div>
    
    <script>
        $(document).ready(function() {
            // Toast notification system
            function showToast(message, type = 'success') {
                const toast = $('#toast');
                const toastMessage = $('#toast-message');
                
                toast.removeClass('success error warning').addClass(type);
                toastMessage.text(message);
                
                setTimeout(() => {
                    toast.addClass('show');
                }, 100);
                
                setTimeout(() => {
                    toast.removeClass('show');
                }, 3000);
            }
            
            // Timer functionality
            function startTimer(duration, display) {
                var timer = duration, minutes, seconds;
                var interval = setInterval(function() {
                    minutes = parseInt(timer / 60, 10);
                    seconds = parseInt(timer % 60, 10);
                    
                    minutes = minutes < 10 ? "0" + minutes : minutes;
                    seconds = seconds < 10 ? "0" + seconds : seconds;
                    
                    display.text(minutes + ":" + seconds);
                    
                    if (--timer < 0) {
                        clearInterval(interval);
                        display.text("00:00");
                        showToast("Time's up! Generating new payment link...", 'warning');
                        
                        // Refresh payment details when timer ends
                        refreshPaymentDetails();
                        
                        // Reset timer
                        timer = duration;
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
                        
                        // Update QR Code
                        const newQrCode = $(doc).find('.qr-code img').attr('src');
                        $('.qr-code img').attr('src', newQrCode);
                        
                        showToast("Payment details updated", 'success');
                    },
                    error: function() {
                        showToast("Failed to refresh payment details", 'error');
                    }
                });
            }
            
            // Initialize timer
            var fiveMinutes = 60 * 5;
            var display = $('#timer');
            startTimer(fiveMinutes, display);
            
            // Pay with UPI button
            $('#payWithUpiBtn').on('click', function() {
                showToast("Opening UPI app...", 'success');
                setTimeout(() => {
                    window.location.href = "upi://pay?pa=<?php echo $upi_id; ?>&pn=Merchant&am=<?php echo $ramt; ?>&cu=INR";
                }, 1000);
            });
            
            // UPI app buttons
            $('#phonepeBtn').on('click', function() {
                showToast("Opening PhonePe...", 'success');
                setTimeout(() => {
                    window.location.href = "<?php echo $phonepe_link; ?>";
                }, 1000);
            });
            
            $('#paytmBtn').on('click', function() {
                showToast("Opening Paytm...", 'success');
                setTimeout(() => {
                    window.location.href = "<?php echo $paytm_link; ?>";
                }, 1000);
            });
            
            $('#gpayBtn').on('click', function() {
                showToast("Opening Google Pay...", 'success');
                setTimeout(() => {
                    window.location.href = "<?php echo $gpay_link; ?>";
                }, 1000);
            });
            
            // Auto-submit when 12 digits entered
            $('#refno').on('input', function() {
                if (this.value.length === 12) {
                    $('#submitBtn').click();
                }
            });
            
            // Submit UTR
            $('#submitBtn').on('click', function() {
                var utr = $('#refno').val().trim();
                
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