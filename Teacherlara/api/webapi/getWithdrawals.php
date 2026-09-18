<?php 
    include "../../conn.php";
    include "../../functions2.php";
    
    header('Content-Type: application/json; charset=utf-8');
    header('Strict-Transport-Security: max-age=31536000');
    header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization');
    header('Access-Control-Allow-Credentials: true');
    $origin = isset($_SERVER['HTTP_ORIGIN']) ? $_SERVER['HTTP_ORIGIN'] : '';
    header('Access-Control-Allow-Origin: ' . $origin);
    header('vary: Origin');
    
    date_default_timezone_set("Asia/Kolkata");
    $shnunc = date("Y-m-d H:i:s");
    $res = [
        'code' => 11,
        'msg' => 'Method not allowed',
        'msgCode' => 12,
        'serviceNowTime' => $shnunc,
    ];
    $shonubody = file_get_contents("php://input");
    $shonupost = json_decode($shonubody, true);
    
    function replaceWithAsterisks($inputString) {
        if (strlen($inputString) < 10) {
            return $inputString;
        }
        $before = substr($inputString, 0, 6);
        $toReplace = substr($inputString, 6, 4);
        $after = substr($inputString, 10);
        $replaced = str_repeat('*', strlen($toReplace));
        $resultString = $before . $replaced . $after;
        return $resultString;
    }
    
    // Helper function to check if table exists
    function tableExists($conn, $tableName) {
        $check = $conn->query("SHOW TABLES LIKE '" . $conn->real_escape_string($tableName) . "'");
        return $check && $check->num_rows > 0;
    }
    
    if ($_SERVER['REQUEST_METHOD'] != 'GET') {
        if (isset($shonupost['language']) && isset($shonupost['random']) && isset($shonupost['signature']) && isset($shonupost['withdrawid'])) {
            $language = htmlspecialchars(mysqli_real_escape_string($conn, $shonupost['language']));
            $random = htmlspecialchars(mysqli_real_escape_string($conn, $shonupost['random']));
            $signature = htmlspecialchars(mysqli_real_escape_string($conn, $shonupost['signature']));
            $withdrawid = htmlspecialchars(mysqli_real_escape_string($conn, $shonupost['withdrawid']));
            $shonustr = '{"language":'.$language.',"random":"'.$random.'","withdrawid":'.$withdrawid.'}';
            $shonusign = strtoupper(md5($shonustr));
            
            if($shonusign == $signature){
                // Check if authorization header exists
                if(!isset($_SERVER['HTTP_AUTHORIZATION'])) {
                    $res['code'] = 4;
                    $res['msg'] = 'Authorization header missing';
                    $res['msgCode'] = 2;
                    http_response_code(401);
                    echo json_encode($res);
                    exit();
                }
                
                $bearer = explode(" ", $_SERVER['HTTP_AUTHORIZATION']);
                $author = isset($bearer[1]) ? $bearer[1] : '';
                
                if(empty($author)) {
                    $res['code'] = 4;
                    $res['msg'] = 'Invalid authorization token';
                    $res['msgCode'] = 2;
                    http_response_code(401);
                    echo json_encode($res);
                    exit();
                }
                
                $is_jwt_valid = is_jwt_valid($author);
                $data_auth = json_decode($is_jwt_valid, 1);
                
                if(isset($data_auth['status']) && $data_auth['status'] === 'Success') {
                    // Check if akshinak table exists
                    if(!tableExists($conn, 'shonu_subjects')) {
                        $res['code'] = 4;
                        $res['msg'] = 'System configuration error';
                        $res['msgCode'] = 2;
                        http_response_code(500);
                        echo json_encode($res);
                        exit();
                    }
                    
                    $sesquery = "SELECT akshinak FROM shonu_subjects WHERE akshinak = '$author'";
                    $sesresult = $conn->query($sesquery);
                    $sesnum = $sesresult ? mysqli_num_rows($sesresult) : 0;
                    
                    if($sesnum == 1){
                        $shonuid = isset($data_auth['payload']['id']) ? (int)$data_auth['payload']['id'] : 0;
                        
                        if($shonuid == 0) {
                            $res['code'] = 4;
                            $res['msg'] = 'Invalid user ID';
                            $res['msgCode'] = 2;
                            http_response_code(401);
                            echo json_encode($res);
                            exit();
                        }
                        
                        // Check if hintegedukolli table exists for withdrawal count
                        $withdrawalsMade = 0;
                        if(tableExists($conn, 'hintegedukolli')) {
                            $today = date("Y-m-d");
                            $samasye_1 = "SELECT COUNT(*) AS count 
                                          FROM hintegedukolli 
                                          WHERE balakedara = $shonuid 
                                          AND DATE(dinankavannuracisi) = '$today'";
                            $samasyephalitansa_1 = $conn->query($samasye_1);
                            if($samasyephalitansa_1) {
                                $row = $samasyephalitansa_1->fetch_assoc();
                                $withdrawalsMade = (int)$row['count'];
                            }
                        }
                        
                        $withdrawalsRemaining = max(0, 3 - $withdrawalsMade);
                        
                        // Check daily withdrawal limit
                        if ($withdrawalsMade >= 3) {
                            $res = [
                                'code' => 8,
                                'msg' => 'Daily withdrawal limit reached',
                                'msgCode' => 9,
                                'serviceNowTime' => date("Y-m-d H:i:s"),
                            ];
                            http_response_code(200);
                            echo json_encode($res);
                            exit();
                        }
                        
                        // ===========================================
                        // NEED TO BET CALCULATION SYSTEM
                        // ===========================================
                        
                        // 1. Get total deposits - check if thevani table exists
                        $total_deposit = 0;
                        if(tableExists($conn, 'thevani')) {
                            $deposit_query = $conn->query("
                                SELECT COALESCE(SUM(motta), 0) as total_deposit 
                                FROM thevani 
                                WHERE balakedara = $shonuid 
                                AND sthiti = '1'
                            ");
                            if($deposit_query) {
                                $deposit_data = $deposit_query->fetch_assoc();
                                $total_deposit = floatval($deposit_data['total_deposit']);
                            }
                        }
                        
                        // 2. Get total bonuses - check if user_extra_funds table exists
                        $total_bonus = 0;
                        if(tableExists($conn, 'user_extra_funds')) {
                            $bonus_query = $conn->query("
                                SELECT COALESCE(SUM(amount), 0) as total_bonus 
                                FROM user_extra_funds 
                                WHERE userid = $shonuid 
                                AND transaction_type = 'credit'
                            ");
                            if($bonus_query) {
                                $bonus_data = $bonus_query->fetch_assoc();
                                $total_bonus = floatval($bonus_data['total_bonus']);
                            }
                        }
                        
                        // 3. Get bet multiplier - check if withdrawal_rules table exists
                        $bet_multiplier = 3.00;
                        if(tableExists($conn, 'withdrawal_rules')) {
                            $multiplier_query = $conn->query("
                                SELECT bet_multiplier 
                                FROM withdrawal_rules 
                                WHERE withdraw_type = 0 
                                LIMIT 1
                            ");
                            if($multiplier_query && $multiplier_query->num_rows > 0) {
                                $multiplier_data = $multiplier_query->fetch_assoc();
                                $bet_multiplier = isset($multiplier_data['bet_multiplier']) ? floatval($multiplier_data['bet_multiplier']) : 3.00;
                            }
                        }
                        
                        // 4. Calculate base required bet
                        $base_required_bet = ($total_deposit + $total_bonus) * $bet_multiplier;
                        
                        // 5. Get user's adjustments - check if user_bet_adjust table exists
                        $total_increase = 0;
                        $total_decrease = 0;
                        if(tableExists($conn, 'user_bet_adjust')) {
                            $adj_query = $conn->query("
                                SELECT 
                                    COALESCE(SUM(CASE WHEN adjust_type = 'increase' THEN adjust_amount ELSE 0 END), 0) as total_increase,
                                    COALESCE(SUM(CASE WHEN adjust_type = 'decrease' THEN adjust_amount ELSE 0 END), 0) as total_decrease
                                FROM user_bet_adjust 
                                WHERE user_id = $shonuid
                            ");
                            if($adj_query) {
                                $adj_data = $adj_query->fetch_assoc();
                                $total_increase = floatval($adj_data['total_increase']);
                                $total_decrease = floatval($adj_data['total_decrease']);
                            }
                        }
                        
                        // 6. Calculate final required bet with adjustments
                        $final_required_bet = $base_required_bet + $total_increase - $total_decrease;
                        
                        // Ensure final_required_bet is not negative
                        if ($final_required_bet < 0) {
                            $final_required_bet = 0;
                        }
                        
                        // 7. Get user's total bet amount from all tables
                        $bet_tables = [
                            'bajikattuttate_trx',
                            'bajikattuttate_trx3', 
                            'bajikattuttate_trx5',
                            'bajikattuttate_trx10',
                            'bajikattuttate',
                            'bajikattuttate_drei',
                            'bajikattuttate_funf',
                            'bajikattuttate_zehn',
                            'bajikattuttate_kemuru',
                            'bajikattuttate_kemuru_drei',
                            'bajikattuttate_kemuru_funf',
                            'bajikattuttate_kemuru_zehn',
                            'bajikattuttate_aidudi',
                            'bajikattuttate_aidudi_drei',
                            'bajikattuttate_aidudi_funf',
                            'bajikattuttate_aidudi_zehn'
                        ];
                        
                        $total_bet = 0;
                        foreach($bet_tables as $table) {
                            if(tableExists($conn, $table)) {
                                $bet_query = $conn->query("SELECT COALESCE(SUM(ketebida), 0) as total FROM $table WHERE byabaharkarta = '$shonuid'");
                                if($bet_query) {
                                    $bet_data = $bet_query->fetch_assoc();
                                    $total_bet += floatval($bet_data['total']);
                                }
                            }
                        }
                        
                        // 8. Calculate NEED TO BET
                        $needToBetAmount = max(0, $final_required_bet - $total_bet);
                        
                        // 9. Get user's total balance - check if shonu_kaichila table exists
                        $totalBalance = 0;
                        if(tableExists($conn, 'shonu_kaichila')) {
                            $balanceQuery = $conn->query("
                                SELECT COALESCE(motta, 0) as total_balance 
                                FROM shonu_kaichila 
                                WHERE balakedara = $shonuid
                                LIMIT 1
                            ");
                            if($balanceQuery) {
                                $balanceData = $balanceQuery->fetch_assoc();
                                $totalBalance = floatval($balanceData['total_balance']);
                            }
                        }
                        
                        // 10. Calculate withdrawable amount
                        $withdrawableAmount = ($needToBetAmount > 0) ? 0 : $totalBalance;
                        
                        // Initialize data array
                        $data = [];
                        $data['withdrawalslist'] = [];
                        
                        // WithdrawID specific handling
                        if($withdrawid == 1 || $withdrawid == 2 || $withdrawid == 3){
                            // Common withdrawal rules
                            $data["withdrawalsrule"]["withdrawCount"] = 3;
                            $data["withdrawalsrule"]["withdrawRemainingCount"] = $withdrawalsRemaining;
                            $data["withdrawalsrule"]["startTime"] = "00:00";
                            $data["withdrawalsrule"]["endTime"] = "23:59";
                            $data["withdrawalsrule"]["fee"] = 0;
                            $data["withdrawalsrule"]["maxPrice"] = 50000;
                            $data["withdrawalsrule"]["amount"] = $totalBalance;
                            $data["withdrawalsrule"]["amountofCode"] = $needToBetAmount;
                            $data["withdrawalsrule"]["canWithdrawAmount"] = $withdrawableAmount;
                            $data["withdrawalsrule"]["c2cUnitAmount"] = 0;
                            $data["withdrawalsrule"]["uRate"] = 93;
                            $data["withdrawalsrule"]["uGold"] = 0;
                            
                            if($withdrawid == 1){
                                // BANK WITHDRAWAL
                                $data["withdrawalsrule"]["minPrice"] = 110;
                                
                                if(tableExists($conn, 'khate')) {
                                    $samasye = "SELECT phalanubhavi FROM khate WHERE byabaharkarta = $shonuid AND khatehesaru != 'TRC' ORDER BY shonu DESC LIMIT 1";
                                    $samasyephalitansa = $conn->query($samasye);
                                    $samasyephalitansa_dhadi = $samasyephalitansa ? mysqli_num_rows($samasyephalitansa) : 0;
                                    
                                    if($samasyephalitansa_dhadi >= 1){
                                        $samasyephalitansa_sreni = mysqli_fetch_array($samasyephalitansa);                        
                                        $data['lastBandCarkName'] = $samasyephalitansa_sreni['phalanubhavi'];
                                        
                                        $samasye = "SELECT shonu, khatehesaru, khatesankhye, kod, duravani FROM khate WHERE byabaharkarta = $shonuid AND khatehesaru != 'TRC' ORDER BY shonu DESC";
                                        $samasyephalitansa = $conn->query($samasye);
                                        $i = 0;
                                        $data['withdrawalslist'] = [];
                                        if($samasyephalitansa) {
                                            while($row = mysqli_fetch_array($samasyephalitansa)){
                                                $data['withdrawalslist'][$i]['bid'] = $row['shonu'];
                                                $data['withdrawalslist'][$i]['bankName'] = $row['khatehesaru'];
                                                $data['withdrawalslist'][$i]['beneficiaryName'] = '';
                                                $data['withdrawalslist'][$i]['accountNo'] = replaceWithAsterisks($row['khatesankhye']);
                                                $data['withdrawalslist'][$i]['ifsCode'] = $row['kod'];
                                                $data['withdrawalslist'][$i]['withType'] = 1;
                                                $data['withdrawalslist'][$i]['mobileNo'] = replaceWithAsterisks($row['duravani']);
                                                $data['withdrawalslist'][$i]['bankProvince'] = '';
                                                $data['withdrawalslist'][$i]['bankCity'] = '';
                                                $data['withdrawalslist'][$i]['bankAddress'] = '';
                                                $i++;
                                            }
                                        }
                                    } else {
                                        $data['lastBandCarkName'] = null;
                                    }
                                } else {
                                    $data['lastBandCarkName'] = null;
                                }
                            }
                            else if($withdrawid == 2){
                                // UPI WITHDRAWAL
                                $data["withdrawalsrule"]["minPrice"] = 110;
                                $data['lastBandCarkName'] = null;
                                $data['withdrawalslist'] = [];
                                
                                if(tableExists($conn, 'upi_withdrawal')) {
                                    $samasye = "SELECT * FROM upi_withdrawal WHERE user_id = $shonuid ORDER BY id DESC LIMIT 1";
                                    $samasyephalitansa = $conn->query($samasye);
                                    $samasyephalitansa_dhadi = $samasyephalitansa ? mysqli_num_rows($samasyephalitansa) : 0;
                                    
                                    if($samasyephalitansa_dhadi >= 1){
                                        $samasyephalitansa_sreni = mysqli_fetch_assoc($samasyephalitansa);                        
                                        $data['lastBandCarkName'] = $samasyephalitansa_sreni['name'] ?? null;
                                        
                                        $samasye = "SELECT * FROM upi_withdrawal WHERE user_id = $shonuid ORDER BY id DESC";
                                        $samasyephalitansa = $conn->query($samasye);
                                        $i = 0;
                                        if($samasyephalitansa) {
                                            while($row = mysqli_fetch_assoc($samasyephalitansa)){
                                                $data['withdrawalslist'][$i]['bid'] = $row['id'];
                                                $data['withdrawalslist'][$i]['bankName'] = $row['name'] ?? '';
                                                $data['withdrawalslist'][$i]['beneficiaryName'] = '';
                                                $data['withdrawalslist'][$i]['accountNo'] = $row['upi_id'] ?? '';
                                                $data['withdrawalslist'][$i]['ifsCode'] = '';
                                                $data['withdrawalslist'][$i]['withType'] = 2;
                                                $data['withdrawalslist'][$i]['mobileNo'] = $row['mobile'] ?? '';
                                                $data['withdrawalslist'][$i]['bankProvince'] = '';
                                                $data['withdrawalslist'][$i]['bankCity'] = '';
                                                $data['withdrawalslist'][$i]['bankAddress'] = '';
                                                $data['withdrawalslist'][$i]['upiName'] = $row['name'] ?? '';
                                                $data['withdrawalslist'][$i]['upiAccount'] = $row['upi_id'] ?? '';
                                                $data['withdrawalslist'][$i]['bankCode'] = '';
                                                $data['withdrawalslist'][$i]['isKycOnline'] = false;
                                                $i++;
                                            }
                                        }
                                    }
                                } elseif(tableExists($conn, 'khate')) {
                                    // Fallback to khate table for UPI
                                    $samasye = "SELECT phalanubhavi FROM khate WHERE byabaharkarta = $shonuid AND (khatehesaru LIKE '%UPI%' OR khatehesaru LIKE '%UPI') ORDER BY shonu DESC LIMIT 1";
                                    $samasyephalitansa = $conn->query($samasye);
                                    $samasyephalitansa_dhadi = $samasyephalitansa ? mysqli_num_rows($samasyephalitansa) : 0;
                                    
                                    if($samasyephalitansa_dhadi >= 1){
                                        $samasyephalitansa_sreni = mysqli_fetch_assoc($samasyephalitansa);                        
                                        $data['lastBandCarkName'] = $samasyephalitansa_sreni['phalanubhavi'];
                                        
                                        $samasye = "SELECT shonu, khatehesaru, khatesankhye, kod, duravani FROM khate WHERE byabaharkarta = $shonuid AND (khatehesaru LIKE '%UPI%' OR khatehesaru LIKE '%UPI') ORDER BY shonu DESC";
                                        $samasyephalitansa = $conn->query($samasye);
                                        $i = 0;
                                        if($samasyephalitansa) {
                                            while($row = mysqli_fetch_assoc($samasyephalitansa)){
                                                $data['withdrawalslist'][$i]['bid'] = $row['shonu'];
                                                $data['withdrawalslist'][$i]['bankName'] = $row['khatehesaru'];
                                                $data['withdrawalslist'][$i]['beneficiaryName'] = '';
                                                $data['withdrawalslist'][$i]['accountNo'] = $row['khatesankhye'];
                                                $data['withdrawalslist'][$i]['ifsCode'] = $row['kod'];
                                                $data['withdrawalslist'][$i]['withType'] = 2;
                                                $data['withdrawalslist'][$i]['mobileNo'] = $row['duravani'];
                                                $data['withdrawalslist'][$i]['bankProvince'] = '';
                                                $data['withdrawalslist'][$i]['bankCity'] = '';
                                                $data['withdrawalslist'][$i]['bankAddress'] = '';
                                                $data['withdrawalslist'][$i]['upiName'] = '';
                                                $data['withdrawalslist'][$i]['upiAccount'] = $row['khatesankhye'];
                                                $data['withdrawalslist'][$i]['bankCode'] = '';
                                                $data['withdrawalslist'][$i]['isKycOnline'] = false;
                                                $i++;
                                            }
                                        }
                                    }
                                }
                            }
                            else if($withdrawid == 3){
                                // TRC WITHDRAWAL
                                $data["withdrawalsrule"]["minPrice"] = 930;
                                
                                if(tableExists($conn, 'khate')) {
                                    $samasye = "SELECT phalanubhavi FROM khate WHERE byabaharkarta = $shonuid AND khatehesaru = 'TRC' ORDER BY shonu DESC LIMIT 1";
                                    $samasyephalitansa = $conn->query($samasye);
                                    $samasyephalitansa_dhadi = $samasyephalitansa ? mysqli_num_rows($samasyephalitansa) : 0;
                                    
                                    if($samasyephalitansa_dhadi >= 1){
                                        $samasyephalitansa_sreni = mysqli_fetch_array($samasyephalitansa);                        
                                        $data['lastBandCarkName'] = $samasyephalitansa_sreni['phalanubhavi'];
                                        
                                        $samasye = "SELECT shonu, khatehesaru, khatesankhye, kod, duravani FROM khate WHERE byabaharkarta = $shonuid AND khatehesaru = 'TRC' ORDER BY shonu DESC";
                                        $samasyephalitansa = $conn->query($samasye);
                                        $i = 0;
                                        $data['withdrawalslist'] = [];
                                        if($samasyephalitansa) {
                                            while($row = mysqli_fetch_array($samasyephalitansa)){
                                                $data['withdrawalslist'][$i]['bid'] = $row['shonu'];
                                                $data['withdrawalslist'][$i]['bankName'] = $row['khatehesaru'];
                                                $data['withdrawalslist'][$i]['beneficiaryName'] = '';
                                                $data['withdrawalslist'][$i]['accountNo'] = replaceWithAsterisks($row['khatesankhye']);
                                                $data['withdrawalslist'][$i]['ifsCode'] = $row['kod'];
                                                $data['withdrawalslist'][$i]['withType'] = 1;
                                                $data['withdrawalslist'][$i]['mobileNo'] = replaceWithAsterisks($row['duravani']);
                                                $data['withdrawalslist'][$i]['bankProvince'] = '';
                                                $data['withdrawalslist'][$i]['bankCity'] = '';
                                                $data['withdrawalslist'][$i]['bankAddress'] = '';
                                                $i++;
                                            }
                                        }
                                    } else {
                                        $data['lastBandCarkName'] = null;
                                    }
                                } else {
                                    $data['lastBandCarkName'] = null;
                                }
                            }

                            $res['data'] = $data;
                            $res['code'] = 0;
                            $res['msg'] = 'Succeed';
                            $res['msgCode'] = 0;
                            http_response_code(200);
                            echo json_encode($res);
                        } else {
                            $res['code'] = 7;
                            $res['msg'] = 'Invalid withdraw ID';
                            $res['msgCode'] = 6;
                            http_response_code(200);
                            echo json_encode($res);
                        }
                    }
                    else{
                        $res['code'] = 4;
                        $res['msg'] = 'No operation permission';
                        $res['msgCode'] = 2;
                        http_response_code(401);
                        echo json_encode($res);
                    }                    
                }
                else{                    
                    $res['code'] = 4;
                    $res['msg'] = 'No operation permission';
                    $res['msgCode'] = 2;
                    http_response_code(401);
                    echo json_encode($res);                    
                }
            }
            else{
                $res['code'] = 5;
                $res['msg'] = 'Wrong signature';
                $res['msgCode'] = 3;
                http_response_code(200);
                echo json_encode($res);                
            }
        }
        else{
            $res['code'] = 7;
            $res['msg'] = 'Param is Invalid';
            $res['msgCode'] = 6;
            http_response_code(200);
            echo json_encode($res);            
        }        
    } else {        
        http_response_code(405);
        echo json_encode($res);
    }
?>