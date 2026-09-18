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
	
	if ($_SERVER['REQUEST_METHOD'] != 'GET') {
		if (isset($shonupost['language']) && isset($shonupost['random']) && isset($shonupost['signature']) && isset($shonupost['timestamp']) && isset($shonupost['typeId'])) {
			$language = htmlspecialchars(mysqli_real_escape_string($conn, $shonupost['language']));			
			$random = htmlspecialchars(mysqli_real_escape_string($conn, $shonupost['random']));
			$signature = htmlspecialchars(mysqli_real_escape_string($conn, $shonupost['signature']));
			$typeId = htmlspecialchars(mysqli_real_escape_string($conn, $shonupost['typeId']));
			$shonustr = '{"language":'.$language.',"random":"'.$random.'","typeId":'.$typeId.'}';
			$shonusign = strtoupper(md5($shonustr));
			if($shonusign == $signature){
				$bearer = explode(" ", $_SERVER['HTTP_AUTHORIZATION']);
				$author = $bearer[1];				
				$is_jwt_valid = is_jwt_valid($author);
				$data_auth = json_decode($is_jwt_valid, 1);
				if($data_auth['status'] === 'Success') {
					$sesquery = "SELECT akshinak
					  FROM shonu_subjects
					  WHERE akshinak = '$author'";
					$sesresult=$conn->query($sesquery);
					$sesnum = mysqli_num_rows($sesresult);
					if($sesnum == 1){
						$intervalM = 1;
						$cronScript = 'niyamitakelasa_kemuru.php';
						$issueTable = 'gelluonduhogu_kemuru';
						if($typeId == 9){
							$oedajnahb = 'gellaluhogiondu_kemeru_phalitansa';
							$issueTable = 'gelluonduhogu_kemuru';
							$intervalM = 1;
							$cronScript = 'niyamitakelasa_kemuru.php';
						}
						else if($typeId == 10){
							$oedajnahb = 'gellaluhogiondu_kemeru_phalitansa_drei';
							$issueTable = 'gelluonduhogu_kemuru_drei';
							$intervalM = 3;
							$cronScript = 'niyamitakelasa_kemuru_drei.php';
						}
						else if($typeId == 11){
							$oedajnahb = 'gellaluhogiondu_kemeru_phalitansa_funf';
							$issueTable = 'gelluonduhogu_kemuru_funf';
							$intervalM = 5;
							$cronScript = 'niyamitakelasa_kemuru_funf.php';
						}
						else if($typeId == 12){
							$oedajnahb = 'gellaluhogiondu_kemeru_phalitansa_zehn';
							$issueTable = 'gelluonduhogu_kemuru_zehn';
							$intervalM = 10;
							$cronScript = 'niyamitakelasa_kemuru_zehn.php';
						}

						// If the active period has expired, run cron to complete draw and settle
						$chkIssueQ = $conn->query("SELECT atadaaidi, dinankavannuracisi FROM `$issueTable` ORDER BY kramasankhye DESC LIMIT 1");
						$chkIssueRow = $chkIssueQ ? mysqli_fetch_array($chkIssueQ) : null;
						if ($chkIssueRow && !empty($chkIssueRow['dinankavannuracisi'])) {
							$startTs = strtotime($chkIssueRow['dinankavannuracisi']);
							if (time() >= ($startTs + $intervalM * 60)) {
								$cronPath = dirname(dirname(dirname(__DIR__))) . '/' . $cronScript;
								if (file_exists($cronPath)) {
									$phpBin = '/Users/dexter/Library/Application Support/Herd/bin/php81';
									if (!file_exists($phpBin)) {
										$phpBin = 'php';
									}
									@exec(escapeshellcmd($phpBin) . " " . escapeshellarg($cronPath) . " > /dev/null 2>&1");
								}
							}
						}

						$samasye = "SELECT kalaparichaya, phalitansa, bele
						  FROM ".$oedajnahb."
						  ORDER BY shonu DESC LIMIT 1";
						$samasyephalitansa = $conn->query($samasye);
						$salu = $samasyephalitansa ? mysqli_fetch_array($samasyephalitansa) : null;
						
						if (!function_exists('checkThreeDigitNumber')) {
							function checkThreeDigitNumber($number) {
								$output = ['allDifferent' => false, 'consecutive' => false, 'anyTwoSame' => false, 'allSame' => false];
								if (preg_match('/^[1-6]{3}$/', (string)$number)) {
									$digits = str_split((string)$number);
									$d1 = (int)$digits[0];
									$d2 = (int)$digits[1];
									$d3 = (int)$digits[2];
									$output['allDifferent'] = ($d1 !== $d2 && $d1 !== $d3 && $d2 !== $d3);
									$output['consecutive'] = (max($d1, $d2, $d3) - min($d1, $d2, $d3) == 2) &&
															 (abs($d1 - $d2) == 1 || abs($d1 - $d3) == 1 || abs($d2 - $d3) == 1);
									$output['anyTwoSame'] = ($d1 === $d2 || $d1 === $d3 || $d2 === $d3);
									$output['allSame'] = ($d1 === $d2 && $d2 === $d3);
								}
								return $output;
							}
						}
						
						$issueNumber = ($salu && isset($salu['kalaparichaya'])) ? $salu['kalaparichaya'] : date('Ymd') . '101010001';
						$bele = ($salu && !empty($salu['bele']) && preg_match('/^[1-6]{3}$/', (string)$salu['bele'])) ? (string)$salu['bele'] : '123';
						$phalitansa = ($salu && isset($salu['phalitansa'])) ? (int)$salu['phalitansa'] : array_sum(str_split($bele));
						
						$checkbele = checkThreeDigitNumber($bele);
						$gameType = 0;
						if($checkbele['allSame']){
							$data['gameType'] = 3;
						}
						else if($checkbele['anyTwoSame']){
							$data['gameType'] = 2;
						}
						else if($checkbele['consecutive']){
							$data['gameType'] = 1;
						}
						else if($checkbele['allDifferent']){
							$data['gameType'] = 0;
						}
						
						$data['issueNumber'] = $issueNumber;
						$data['sumCount'] = (int)$phalitansa;
						$data['premium'] = $bele;
						
						$res['data'] = $data;
						$res['code'] = 0;
						$res['msg'] = 'Succeed';
						$res['msgCode'] = 0;
						http_response_code(200);
						echo json_encode($res);					
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