<?php include ("../serive/samparka.php");?>
<?php 
if(isset($_GET['amount'])){
    $ramt = htmlspecialchars(mysqli_real_escape_string($conn, $_GET['amount']));
} else {
    $ramt = 0;
}



$activeUSDT = '';
$activeQR = '';

// Step 1: Get active USDT address from deyyamrici where sthiti = '1'
$queryUSDT = "SELECT maulya FROM deyyamrici WHERE sthiti = '1' LIMIT 1";
$resultUSDT = mysqli_query($conn, $queryUSDT);

if ($resultUSDT && mysqli_num_rows($resultUSDT) > 0) {
    $rowUSDT = mysqli_fetch_assoc($resultUSDT);
    $activeUSDT = $rowUSDT['maulya'];
}

// Step 2: Get active QR filename from images_usdt where sthiti = '1'
$queryQR = "SELECT filename FROM images_usdt WHERE status = '1' LIMIT 1";
$resultQR = mysqli_query($conn, $queryQR);

if ($resultQR && mysqli_num_rows($resultQR) > 0) {
    $rowQR = mysqli_fetch_assoc($resultQR);
    $activeQR = "../images_usdt/" . $rowQR['filename'];
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
$serial = 'PUSDT' . $date . $time . rand(1000,9999);

$tyid = htmlspecialchars(mysqli_real_escape_string($conn, $_GET['tyid']));
$uid = htmlspecialchars(mysqli_real_escape_string($conn, $_GET['uid']));
$sign = htmlspecialchars(mysqli_real_escape_string($conn, $_GET['sign']));
$urlInfo = htmlspecialchars(mysqli_real_escape_string($conn, $_GET['urlInfo']));
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
    <title>USDT Payment Gateway | Secure Transaction</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/clipboard@2.0.8/dist/clipboard.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <style>
        :root {
            --primary: #10B981;
            --primary-dark: #059669;
            --primary-light: #34D399;
            --bg-color: #FFFFFF;
            --card-color: #FFFFFF;
            --text-primary: #111827;
            --text-secondary: #4B5563;
            --text-muted: #6B7280;
            --border-color: #E5E7EB;
            --success: #10B981;
            --warning: #F59E0B;
            --error: #EF4444;
            --info: #3B82F6;
            --radius-sm: 4px;
            --radius-md: 8px;
            --radius-lg: 12px;
            --shadow-sm: 0 1px 3px rgba(0,0,0,0.05);
            --shadow-md: 0 4px 6px rgba(0,0,0,0.05);
            --shadow-lg: 0 10px 15px rgba(0,0,0,0.05);
            --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Inter', sans-serif;
            background-color: var(--bg-color);
            color: var(--text-primary);
            line-height: 1.5;
            -webkit-font-smoothing: antialiased;
        }
        
        .payment-container {
            max-width: 480px;
            margin: 0 auto;
            background: var(--bg-color);
            min-height: 100vh;
            display: flex;
            flex-direction: column;
        }
        
        .payment-header {
            background: var(--primary);
            color: white;
            padding: 20px;
            text-align: center;
            position: relative;
            box-shadow: var(--shadow-md);
        }
        
        .logo {
            font-weight: 700;
            font-size: 20px;
            margin-bottom: 5px;
        }
        
        .header-subtitle {
            font-size: 14px;
            opacity: 0.9;
            font-weight: 400;
        }
        
        .payment-body {
            flex: 1;
            padding: 24px;
        }
        
        .payment-card {
            background: var(--card-color);
            border-radius: var(--radius-lg);
            box-shadow: var(--shadow-sm);
            border: 1px solid var(--border-color);
            padding: 24px;
            margin-bottom: 24px;
        }
        
        .section-title {
            font-size: 16px;
            font-weight: 600;
            color: var(--text-primary);
            margin-bottom: 16px;
            display: flex;
            align-items: center;
            gap: 8px;
        }
        
        .section-title svg {
            width: 20px;
            height: 20px;
            color: var(--primary);
        }
        
        .amount-display {
            text-align: center;
            margin-bottom: 16px;
        }
        
        .amount-label {
            font-size: 14px;
            color: var(--text-secondary);
            margin-bottom: 8px;
        }
        
        .amount-value {
            font-size: 32px;
            font-weight: 700;
            color: var(--text-primary);
        }
        
        .network-badge {
            display: inline-block;
            background: rgba(16, 185, 129, 0.1);
            color: var(--primary-dark);
            padding: 4px 10px;
            border-radius: var(--radius-sm);
            font-size: 12px;
            font-weight: 600;
            margin-left: 8px;
            vertical-align: middle;
        }
        
        .payment-details {
            margin-bottom: 16px;
        }
        
        .detail-row {
            display: flex;
            justify-content: space-between;
            margin-bottom: 12px;
            font-size: 14px;
        }
        
        .detail-label {
            color: var(--text-secondary);
        }
        
        .detail-value {
            font-weight: 500;
            color: var(--text-primary);
        }
        
        .qr-container {
            text-align: center;
            margin: 20px 0;
        }
        
        .qr-code {
            width: 240px;
            height: 240px;
            margin: 0 auto;
            background: white;
            border-radius: var(--radius-md);
            padding: 5px;
            border: 1px solid var(--border-color);
        }
        
        .qr-code img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
        
        .address-container {
            background: rgba(16, 185, 129, 0.05);
            border: 1px solid rgba(16, 185, 129, 0.1);
            border-radius: var(--radius-md);
            padding: 16px;
            margin-bottom: 20px;
            position: relative;
            overflow: hidden;
        }
        
        .address-container::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 4px;
            height: 100%;
            background: var(--primary);
        }
        
        .address-value {
            font-family: 'Roboto Mono', monospace;
            font-size: 14px;
            word-break: break-all;
            margin-bottom: 16px;
            color: var(--text-primary);
            position: relative;
            padding-left: 10px;
        }
        
        .action-buttons {
            display: flex;
            gap: 12px;
        }
        
        .btn {
            padding: 12px 16px;
            border-radius: var(--radius-md);
            font-weight: 500;
            font-size: 14px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            cursor: pointer;
            transition: var(--transition);
            border: none;
            white-space: nowrap;
            flex: 1;
        }
        
        .btn-primary {
            background-color: var(--primary);
            color: white;
        }
        
        .btn-primary:hover {
            background-color: var(--primary-dark);
        }
        
        .btn-outline {
            background-color: transparent;
            color: var(--primary);
            border: 1px solid var(--primary);
        }
        
        .btn-outline:hover {
            background-color: rgba(16, 185, 129, 0.05);
        }
        
        .btn-icon {
            width: 18px;
            height: 18px;
        }
        
        .txid-section {
            margin-top: 24px;
        }
        
        .txid-input-container {
            position: relative;
            margin-bottom: 16px;
        }
        
        .txid-input {
            width: 100%;
            padding: 14px 16px 14px 48px;
            border: 1px solid var(--border-color);
            border-radius: var(--radius-md);
            font-size: 14px;
            transition: var(--transition);
            background: var(--card-color);
            color: var(--text-primary);
        }
        
        .txid-input:focus {
            outline: none;
            border-color: var(--primary);
            box-shadow: 0 0 0 2px rgba(16, 185, 129, 0.2);
        }
        
        .txid-label {
            position: absolute;
            left: 16px;
            top: 50%;
            transform: translateY(-50%);
            color: var(--primary);
            font-weight: 600;
            font-size: 14px;
        }
        
        .submit-btn-container {
            margin-top: 16px;
        }
        
        .submit-btn {
            width: 100%;
            height: 50px;
            padding: 14px;
            background: var(--primary);
            color: white;
            border: none;
            border-radius: var(--radius-md);
            font-weight: 600;
            font-size: 16px;
            cursor: pointer;
            transition: var(--transition);
            display: flex;
            flex-direction: ;
            align-items: center;
            justify-content: center;
            gap: 4px;
        }
        
        .submit-btn:hover {
            background: var(--primary-dark);
        }
        
        .submit-btn svg {
            width: 16px;
            height: 16px;
        }
        
        .instructions-container {
            margin: 15px;
            padding: 20px;
            background: rgba(249, 250, 251, 0.8);
            border-radius: var(--radius-md);
            border: 1px solid var(--border-color);
        }
        
        .instructions-list {
            list-style: none;
            margin-top: 12px;
        }
        
        .instructions-list li {
            margin-bottom: 12px;
            font-size: 14px;
            color: var(--text-secondary);
            display: flex;
            gap: 8px;
            align-items: flex-start;
        }
        
        .instructions-list li:before {
            content: "•";
            color: var(--primary);
            font-weight: bold;
            display: inline-block;
            width: 1em;
            margin-left: -1em;
        }
        
        .highlight {
            font-weight: 600;
            color: var(--primary-dark);
        }
        
        .serial-number {
            font-size: 12px;
            color: var(--text-muted);
            text-align: center;
            margin: 8px 0 16px;
            font-family: 'Roboto Mono', monospace;
        }
        
        .status-badge {
            display: inline-block;
            padding: 4px 8px;
            border-radius: var(--radius-sm);
            font-size: 12px;
            font-weight: 600;
            background: rgba(16, 185, 129, 0.1);
            color: var(--primary-dark);
        }
        
        .toast {
            position: fixed;
            bottom: 24px;
            left: 50%;
            transform: translateX(-50%);
            background: var(--text-primary);
            color: white;
            padding: 12px 24px;
            border-radius: var(--radius-md);
            font-size: 14px;
            box-shadow: var(--shadow-lg);
            z-index: 1000;
            opacity: 0;
            transition: opacity 0.3s ease;
            max-width: 90%;
            text-align: center;
        }
        
        .toast.show {
            opacity: 1;
        }
        
        @media (max-width: 480px) {
            .payment-body {
                padding: 16px;
            }
            
            .payment-card {
                padding: 16px;
            }
            
            .amount-value {
                font-size: 28px;
            }
        }
    </style>
</head>
<body>
    <div class="payment-container">
        <div class="payment-header">
            <div class="logo">USDT Payment Gateway</div>
            <div class="header-subtitle">Secure Crypto Transaction</div>
        </div>
        
        <div class="payment-body">
            <div class="payment-card">
                <div class="amount-display">
                    <div class="amount-label">AMOUNT TO PAY</div>
                    <div class="amount-value">$<?php echo $ramt; ?> <span class="network-badge">TRC20</span></div>
                    <div class="serial-number">Transaction ID: <?php echo $serial; ?></div>
                </div>
                
                <div class="payment-details">
                    <div class="detail-row">
                        <span class="detail-label">Payment Status:</span>
                        <span class="detail-value status-badge">Pending</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">Minimum Amount:</span>
                        <span class="detail-value">10 USDT</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">Network Fee:</span>
                        <span class="detail-value">1 USDT</span>
                    </div>
                </div>
                
                <div class="qr-container">
                    <div class="qr-code">
                        <img src="<?php echo $activeQR; ?>" alt="USDT QR Code">
                    </div>
                </div>
                
                <div class="address-container">
                    <div class="address-value"><?php echo $activeUSDT; ?></div>
                    <div class="action-buttons">
                        <button class="btn btn-outline" id="saveQrBtn">
                            <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                <polyline points="7 10 12 15 17 10"></polyline>
                                <line x1="12" y1="15" x2="12" y2="3"></line>
                            </svg>
                            Save QR
                        </button>
                        <button class="btn btn-primary" id="copyAddressBtn">
                            <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                            </svg>
                            Copy Address
                        </button>
                    </div>
                </div>
                
                <div class="txid-section">
                    <div class="section-title">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                            <polyline points="14 2 14 8 20 8"></polyline>
                            <line x1="16" y1="13" x2="8" y2="13"></line>
                            <line x1="16" y1="17" x2="8" y2="17"></line>
                            <polyline points="10 9 9 9 8 9"></polyline>
                        </svg>
                        Submit Transaction ID
                    </div>
                    
                    <div class="txid-input-container">
                        <input type="text" class="txid-input" id="refno" placeholder="Enter your USDT Transaction ID" maxlength="64">
                        <span class="txid-label">TXID:</span>
                    </div>
                    
                    <div class="submit-btn-container">
                        <button class="submit-btn" id="submitBtn">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                            </svg>
                            Verify Payment
                        </button>
                    </div>
                </div>
                
                
            </div>
        </div>
        
        <div class="instructions-container">
                    <div class="section-title">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="12" y1="8" x2="12" y2="12"></line>
                            <line x1="12" y1="16" x2="12.01" y2="16"></line>
                        </svg>
                        Payment Instructions
                    </div>
                    
                    <ul class="instructions-list">
                        <li>Send <span class="highlight">exactly $<?php echo $ramt; ?></span> USDT to the address above</li>
                        <li>Use <span class="highlight">TRC20 network</span> for this transaction</li>
                        <li>After payment, submit your Transaction ID (TXID) above</li>
                        <li>Do not send from exchange wallets directly</li>
                        <li>Payment will be verified within 1-10 minutes</li>
                    </ul>
                </div>
    </div>
    
    <div class="toast" id="toast"></div>
    
    <script>
        // Simple toast notification
        function showToast(message, duration = 3000) {
            const toast = document.getElementById('toast');
            toast.textContent = message;
            toast.classList.add('show');
            
            setTimeout(() => {
                toast.classList.remove('show');
            }, duration);
        }
        
        // Copy Address functionality
        new ClipboardJS('#copyAddressBtn', {
            text: function() {
                return '<?php echo $activeUSDT; ?>';
            }
        }).on('success', function() {
            showToast("USDT address copied to clipboard");
        }).on('error', function() {
            showToast("Failed to copy address");
        });
        
        // Save QR Code
        document.getElementById('saveQrBtn').addEventListener('click', function() {
            const link = document.createElement('a');
            link.href = '<?php echo $activeQR; ?>';
            link.download = 'USDT-Payment-QR-<?php echo $ramt; ?>.png';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            showToast("QR code saved");
        });
        
        // Auto-submit when TXID is complete
        document.getElementById('refno').addEventListener('input', function() {
            if (this.value.length >= 12) {
                document.getElementById('submitBtn').click();
            }
        });
        
        // Submit TXID
        document.getElementById('submitBtn').addEventListener('click', function() {
            const txid = document.getElementById('refno').value.trim();
            
            if (txid.length < 12) {
                showToast("Please enter a valid Transaction ID (TXID)");
                return;
            }
            
            showToast("Verifying your payment...");
            
            // AJAX call to submit TXID
            $.ajax({
                type: "POST",
                url: "adddeposit.php",
                data: {
                    amt: '<?php echo $ramt; ?>',
                    refnum: txid,
                    srl: '<?php echo $serial; ?>',
                    source: "usdt",
                    upi: '<?php echo $activeUSDT; ?>',
                    userId: '<?php echo $userId; ?>',
                    token: '<?php echo $shonusign; ?>'
                },
                success: function(response) {
                    const arr = response.split('~');
                    if (arr[0] == 1) {
                        setTimeout(function() {
                            window.location.href = 'depositconfirm.php?amt=<?php echo $ramt; ?>&refnum=' + txid + '&srl=<?php echo $serial; ?>&userId=<?php echo $userId; ?>&token=<?php echo $shonusign; ?>';
                        }, 1500);
                    } else if(arr[0] == 0) {
                        showToast("Payment verification failed");
                    } else if(arr[0] == 2) {
                        showToast("This TXID has already been used");
                    } else if(arr[0] == 3) {
                        showToast("Please wait 1 minute before retrying");
                    } else if(arr[0] == 4) {
                        showToast("Account issue - please contact support");
                    }
                },
                error: function() {
                    showToast("Network error - please try again");
                }
            });
        });
    </script>
</body>
</html>
<?php
        }
        else{
            $res['code'] = 10000;
            $res['success'] = 'false';
            $res['message'] = 'Sorry, The system is busy, please try again later!';
            
            header('Content-Type: text/html; charset=utf-8');
            http_response_code(200);
            echo json_encode($res);    
        }
    }
    else{
        header('Content-Type: application/json; charset=utf-8');
        http_response_code(200);
        echo json_encode($res);    
    }
?>