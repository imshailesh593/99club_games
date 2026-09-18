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
						$cronScript = 'ktrx.php';
						$seqCode = '10301';
						$oedajnahb = 'gelluonduhogu_trx';
						$phalitansaTable = 'gellaluhogiondu_trx';

						if($typeId == 13){
							$oedajnahb = 'gelluonduhogu_trx';
							$phalitansaTable = 'gellaluhogiondu_trx';
							$intervalM = 1;
							$cronScript = 'ktrx.php';
							$seqCode = '10301';
						}
						else if($typeId == 14){
							$oedajnahb = 'gelluonduhogu_trx3';
							$phalitansaTable = 'gellaluhogiondu_trx3';
							$intervalM = 3;
							$cronScript = 'ktrx3.php';
							$seqCode = '10302';
						}
						else if($typeId == 15){
							$oedajnahb = 'gelluonduhogu_trx5';
							$phalitansaTable = 'gellaluhogiondu_trx5';
							$intervalM = 5;
							$cronScript = 'ktrx5.php';
							$seqCode = '10303';
						}
						else if($typeId == 16){
							$oedajnahb = 'gelluonduhogu_trx10';
							$phalitansaTable = 'gellaluhogiondu_trx10';
							$intervalM = 10;
							$cronScript = 'ktrx10.php';
							$seqCode = '10304';
						}

						$intervalSec = $intervalM * 60;

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
							$endTimeTs = $startTimeTs + $intervalSec;
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

						if(!$samasyesreni || empty($samasyesreni['dinankavannuracisi']) || $now >= (strtotime($samasyesreni['dinankavannuracisi']) + $intervalSec)){
							$currentDate = date('Ymd');
							$timeInSeconds = time() % 86400;
							$seq = str_pad(intval($timeInSeconds / $intervalSec), 4, '0', STR_PAD_LEFT);
							$fallbackPeriod = $currentDate . $seqCode . $seq;
							$tarika = date('Y-m-d H:i:s');
							$conn->query("INSERT INTO `$oedajnahb` (`atadaaidi`,`dinankavannuracisi`) VALUES ('$fallbackPeriod', '$tarika')");
							$samasyesreni = ['atadaaidi' => $fallbackPeriod, 'dinankavannuracisi' => $tarika];
						}

						$data['predraw']['issueNumber'] = $samasyesreni['atadaaidi'];
						$data['predraw']['startTime'] = $samasyesreni['dinankavannuracisi'];
						$ondusamaya = strtotime($samasyesreni['dinankavannuracisi']) + $intervalSec;
						$data['predraw']['endTime'] = date('Y-m-d H:i:s', $ondusamaya);
						$data['predraw']['serviceTime'] = date('Y-m-d H:i:s');
						$data['predraw']['intervalM'] = $intervalM;

						$settledQuery = "SELECT kalaparichaya, bh, hash, dinankavannuracisi
						  FROM ".$phalitansaTable."
						  ORDER BY shonu DESC LIMIT 1";
						$settledRes = $conn->query($settledQuery);
						$settledRow = $settledRes ? mysqli_fetch_array($settledRes) : null;

						$data['settled']['issueNumber'] = $settledRow ? $settledRow['kalaparichaya'] : '';
						$data['settled']['sumCount'] = null;
						$data['settled']['premium'] = 1;
						$data['settled']['blockID'] = $settledRow ? $settledRow['hash'] : '';
						$data['settled']['number'] = $settledRow ? $settledRow['bh'] : '';
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
