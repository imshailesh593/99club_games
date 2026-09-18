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
		if (isset($shonupost['language']) && isset($shonupost['random']) && isset($shonupost['signature']) && isset($shonupost['timestamp'])) {
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
						if($typeId == 9){
							$oedajnahb = 'gelluonduhogu_kemuru';
							$intervalM = 1;
							$cronScript = 'niyamitakelasa_kemuru.php';
						}
						else if($typeId == 10){
							$oedajnahb = 'gelluonduhogu_kemuru_drei';
							$intervalM = 3;
							$cronScript = 'niyamitakelasa_kemuru_drei.php';
						}
						else if($typeId == 11){
							$oedajnahb = 'gelluonduhogu_kemuru_funf';
							$intervalM = 5;
							$cronScript = 'niyamitakelasa_kemuru_funf.php';
						}
						else if($typeId == 12){
							$oedajnahb = 'gelluonduhogu_kemuru_zehn';
							$intervalM = 10;
							$cronScript = 'niyamitakelasa_kemuru_zehn.php';
						}

						$samasye = "SELECT atadaaidi, dinankavannuracisi
						  FROM ".$oedajnahb."
						  ORDER BY kramasankhye DESC LIMIT 1";
						$samasyephalitansa=$conn->query($samasye);
						$samasyesreni = $samasyephalitansa ? mysqli_fetch_array($samasyephalitansa) : null;

						$now = time();
						$isExpired = false;
						if(!$samasyesreni || empty($samasyesreni['dinankavannuracisi'])){
							$isExpired = true;
						} else {
							$startTimeTs = strtotime($samasyesreni['dinankavannuracisi']);
							$endTimeTs = $startTimeTs + ($intervalM * 60);
							if($now >= $endTimeTs){
								$isExpired = true;
							}
						}

						if($isExpired && isset($cronScript)){
							$cronPath = dirname(dirname(dirname(__DIR__))) . '/' . $cronScript;
							if(file_exists($cronPath)){
								$phpBin = '/Users/dexter/Library/Application Support/Herd/bin/php81';
								if(!file_exists($phpBin)){
									$phpBin = 'php';
								}
								@exec(escapeshellcmd($phpBin) . " " . escapeshellarg($cronPath) . " > /dev/null 2>&1");
								$samasyephalitansa = $conn->query($samasye);
								$samasyesreni = $samasyephalitansa ? mysqli_fetch_array($samasyephalitansa) : null;
							}
						}

						if(!$samasyesreni || empty($samasyesreni['dinankavannuracisi']) || $now >= (strtotime($samasyesreni['dinankavannuracisi']) + $intervalM * 60)){
							$currentDate = date('Ymd');
							$timeInSeconds = time() % 86400;
							$seqCode = ($typeId == 9) ? '10101' : (($typeId == 10) ? '10102' : (($typeId == 11) ? '10103' : '10104'));
							$seq = str_pad(intval($timeInSeconds / ($intervalM * 60)), 4, '0', STR_PAD_LEFT);
							$fallbackPeriod = $currentDate . $seqCode . $seq;
							$tarika = date('Y-m-d H:i:s');
							$conn->query("INSERT INTO `$oedajnahb` (`atadaaidi`,`dinankavannuracisi`) VALUES ('$fallbackPeriod', '$tarika')");
							$samasyesreni = ['atadaaidi' => $fallbackPeriod, 'dinankavannuracisi' => $tarika];
						}
						
						$data['issueNumber'] = $samasyesreni['atadaaidi'];
						$data['startTime'] = $samasyesreni['dinankavannuracisi'];
						$ondusamaya = strtotime('+' . $intervalM . ' minute', strtotime($samasyesreni['dinankavannuracisi']));
						$data['endTime'] = date('Y-m-d H:i:s', $ondusamaya);
						$data['serviceTime'] = date('Y-m-d H:i:s');
						$data['intervalM'] = $intervalM;
						
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