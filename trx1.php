<?php
include("serive/samparka.php");


$samasye = "SELECT atadaaidi
	  FROM gelluonduhogu_trx
	  ORDER BY kramasankhye DESC LIMIT 1";
	$samasyephalitansa = $conn->query($samasye);
	$samasyesreni = mysqli_fetch_array($samasyephalitansa);
	
	if(!empty($samasyesreni['atadaaidi'])){
		$gadhipathuli = "SELECT ojana, ketebida
		  FROM bajikattuttate_trx
		  WHERE kalaparichaya = ".$samasyesreni['atadaaidi']."
		  ORDER BY parichaya DESC LIMIT 1";
		$gadhipathuliphala = $conn->query($gadhipathuli);
		$gadhipathulidhadi = mysqli_num_rows($gadhipathuliphala);

// Check if we fetched the `atadaaidi` value (kalaparichaya)
if ($samasyesreni && !empty($samasyesreni['atadaaidi'])) {
    $kalaparichaya = $samasyesreni['atadaaidi']; // Store the kalaparichaya value
    $issueNumber = $kalaparichaya;

    $checkSettled = mysqli_query($conn, "SELECT shonu FROM `gellaluhogiondu_trx` WHERE kalaparichaya = '$kalaparichaya' LIMIT 1");
    if ($checkSettled && mysqli_num_rows($checkSettled) > 0) {
        return;
    }

    $url = "https://api.trongrid.io/wallet/getnowblock";
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_TIMEOUT, 3);
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        'Content-Type: application/json',
        'TRON-PRO-API-KEY: 681ec57a-5e59-4192-9128-9bcd30ac1692'
    ]);
    $response = @curl_exec($ch);
    curl_close($ch);

    $blockData = $response ? @json_decode($response, true) : null;
    if (isset($blockData['block_header']['raw_data']['number']) && !empty($blockData['blockID'])) {
        $blockNumber = $blockData['block_header']['raw_data']['number'];
        $hash = $blockData['blockID'];
    } else {
        $lastBlockQuery = "SELECT `bh` FROM `gellaluhogiondu_trx` ORDER BY `shonu` DESC LIMIT 1";
        $lastBlockResult = $conn->query($lastBlockQuery);
        $lastBlockRow = $lastBlockResult ? $lastBlockResult->fetch_assoc() : null;
        $lastBlock = !empty($lastBlockRow['bh']) ? intval($lastBlockRow['bh']) : 68000000;
        $blockNumber = $lastBlock + 1;
        $hash = "0000000004" . bin2hex(random_bytes(27));
    }

    $block = $blockNumber;

    // Fetch the last numeric character from the hash
    $kadimesucyanka = null;
    for ($i = strlen($hash) - 1; $i >= 0; $i--) {
        if (is_numeric($hash[$i])) {
            $kadimesucyanka = (int)$hash[$i];
            break;
        }
    }

    if ($kadimesucyanka === null) {
        $kadimesucyanka = rand(0, 9);
    }

    if ($kadimesucyanka == 0) {
        $banna = 'red,violet';
    } elseif ($kadimesucyanka == 5) {
        $banna = 'green,violet';
    } elseif (in_array($kadimesucyanka, [1, 3, 7, 9])) {
        $banna = 'green';
    } elseif (in_array($kadimesucyanka, [2, 4, 6, 8])) {
        $banna = 'red';
    } else {
        $banna = 'red';
    }

    $dinanka = date('Y-m-d H:i:s');
    $yadrcchikasankhye = $kadimesucyanka;

    // Insert data into the gellaluhogiondu_trx table
    $tathya = mysqli_query(
        $conn,
        "INSERT INTO `gellaluhogiondu_trx` 
        (`kalaparichaya`, `bele`, `phalitansa`, `banna`, `bh`, `hash`, `phalitansadaprakara`, `dinankavannuracisi`) 
        VALUES 
        ('" . $issueNumber . "', 
         '" . $kadimesucyanka . "', 
         '" . $kadimesucyanka . "', 
         '" . $banna . "', 
         '" . $block . "', 
         '" . $hash . "', 
         'uncensored', 
         '" . $dinanka . "')"
    );
          
          

            if($kadimesucyanka == 0){
  $nabikarana = "UPDATE bajikattuttate_trx set phalaphala = 'gagner', sesabida = ROUND(sesabida * 1.5, 2), ergebnis = '".$kadimesucyanka."', zufallig = '".$yadrcchikasankhye."', tiarikala = '".$dinanka."' WHERE kalaparichaya = '".$issueNumber."' AND ojana = '10'";
  $conn->query($nabikarana);
  $nabikarana = "UPDATE shonu_kaichila
  INNER JOIN (
    SELECT byabaharkarta, SUM(sesabida) AS total_paid
    FROM bajikattuttate_trx
    WHERE kalaparichaya = '".$issueNumber."' 
    AND ojana = '10' 
    AND phalaphala ='gagner'
    GROUP BY byabaharkarta
  )  AS subquery ON shonu_kaichila.balakedara = subquery.byabaharkarta
  SET shonu_kaichila.motta = TRUNCATE(shonu_kaichila.motta + subquery.total_paid, 2)
  ";
  $conn->query($nabikarana);
  
  $nabikarana = "UPDATE bajikattuttate_trx set phalaphala = 'gagner', sesabida = ROUND(sesabida * 4.5, 2), ergebnis = '".$kadimesucyanka."', zufallig = '".$yadrcchikasankhye."', tiarikala = '".$dinanka."' WHERE kalaparichaya = '".$issueNumber."' AND ojana = '12'";
  $conn->query($nabikarana);
  $nabikarana = "UPDATE shonu_kaichila
  INNER JOIN (
    SELECT byabaharkarta, SUM(sesabida) AS total_paid
    FROM bajikattuttate_trx
    WHERE kalaparichaya = '".$issueNumber."' 
    AND ojana = '12' 
    AND phalaphala ='gagner'
    GROUP BY byabaharkarta
  )  AS subquery ON shonu_kaichila.balakedara = subquery.byabaharkarta
  SET shonu_kaichila.motta = TRUNCATE(shonu_kaichila.motta + subquery.total_paid, 2)
  ";
  $conn->query($nabikarana);
  
  $nabikarana = "UPDATE bajikattuttate_trx set phalaphala = 'gagner', sesabida = ROUND(sesabida * 9, 2), ergebnis = '".$kadimesucyanka."', zufallig = '".$yadrcchikasankhye."', tiarikala = '".$dinanka."' WHERE kalaparichaya = '".$issueNumber."' AND ojana = '0'";
  $conn->query($nabikarana);
  $nabikarana = "UPDATE shonu_kaichila
  INNER JOIN (
    SELECT byabaharkarta, SUM(sesabida) AS total_paid
    FROM bajikattuttate_trx
    WHERE kalaparichaya = '".$issueNumber."' 
    AND ojana = '0' 
    AND phalaphala ='gagner'
    GROUP BY byabaharkarta
  )  AS subquery ON shonu_kaichila.balakedara = subquery.byabaharkarta
  SET shonu_kaichila.motta = TRUNCATE(shonu_kaichila.motta + subquery.total_paid, 2)
  ";
  $conn->query($nabikarana);
  
  $nabikarana = "UPDATE bajikattuttate_trx set phalaphala = 'gagner', sesabida = ROUND(sesabida * 2, 2), ergebnis = '".$kadimesucyanka."', zufallig = '".$yadrcchikasankhye."', tiarikala = '".$dinanka."' WHERE kalaparichaya = '".$issueNumber."' AND ojana = '14'";
  $conn->query($nabikarana);
  $nabikarana = "UPDATE shonu_kaichila
  INNER JOIN (
    SELECT byabaharkarta, SUM(sesabida) AS total_paid
    FROM bajikattuttate_trx
    WHERE kalaparichaya = '".$issueNumber."' 
    AND ojana = '14' 
    AND phalaphala ='gagner'
    GROUP BY byabaharkarta
  )  AS subquery ON shonu_kaichila.balakedara = subquery.byabaharkarta
  SET shonu_kaichila.motta = TRUNCATE(shonu_kaichila.motta + subquery.total_paid, 2)
  ";
  $conn->query($nabikarana);
}
if($kadimesucyanka == 1){
  $nabikarana = "UPDATE bajikattuttate_trx set phalaphala = 'gagner', sesabida = ROUND(sesabida * 2, 2), ergebnis = '".$kadimesucyanka."', zufallig = '".$yadrcchikasankhye."', tiarikala = '".$dinanka."' WHERE kalaparichaya = '".$issueNumber."' AND ojana = '11'";
  $conn->query($nabikarana);
  $nabikarana = "UPDATE shonu_kaichila
  INNER JOIN (
    SELECT byabaharkarta, SUM(sesabida) AS total_paid
    FROM bajikattuttate_trx
    WHERE kalaparichaya = '".$issueNumber."' 
    AND ojana = '11' 
    AND phalaphala ='gagner'
    GROUP BY byabaharkarta
  )  AS subquery ON shonu_kaichila.balakedara = subquery.byabaharkarta
  SET shonu_kaichila.motta = TRUNCATE(shonu_kaichila.motta + subquery.total_paid, 2)
  ";
  $conn->query($nabikarana);
          
  $nabikarana = "UPDATE bajikattuttate_trx set phalaphala = 'gagner', sesabida = ROUND(sesabida * 9, 2), ergebnis = '".$kadimesucyanka."', zufallig = '".$yadrcchikasankhye."', tiarikala = '".$dinanka."' WHERE kalaparichaya = '".$issueNumber."' AND ojana = '1'";
  $conn->query($nabikarana);
  $nabikarana = "UPDATE shonu_kaichila
  INNER JOIN (
    SELECT byabaharkarta, SUM(sesabida) AS total_paid
    FROM bajikattuttate_trx
    WHERE kalaparichaya = '".$issueNumber."' 
    AND ojana = '1' 
    AND phalaphala ='gagner'
    GROUP BY byabaharkarta
  )  AS subquery ON shonu_kaichila.balakedara = subquery.byabaharkarta
  SET shonu_kaichila.motta = TRUNCATE(shonu_kaichila.motta + subquery.total_paid, 2)
  ";
  $conn->query($nabikarana);
  
  $nabikarana = "UPDATE bajikattuttate_trx set phalaphala = 'gagner', sesabida = ROUND(sesabida * 2, 2), ergebnis = '".$kadimesucyanka."', zufallig = '".$yadrcchikasankhye."', tiarikala = '".$dinanka."' WHERE kalaparichaya = '".$issueNumber."' AND ojana = '14'";
  $conn->query($nabikarana);
  $nabikarana = "UPDATE shonu_kaichila
  INNER JOIN (
    SELECT byabaharkarta, SUM(sesabida) AS total_paid
    FROM bajikattuttate_trx
    WHERE kalaparichaya = '".$issueNumber."' 
    AND ojana = '14' 
    AND phalaphala ='gagner'
    GROUP BY byabaharkarta
  )  AS subquery ON shonu_kaichila.balakedara = subquery.byabaharkarta
  SET shonu_kaichila.motta = TRUNCATE(shonu_kaichila.motta + subquery.total_paid, 2)
  ";
  $conn->query($nabikarana);
}
if($kadimesucyanka == 2){
  $nabikarana = "UPDATE bajikattuttate_trx set phalaphala = 'gagner', sesabida = ROUND(sesabida * 2, 2), ergebnis = '".$kadimesucyanka."', zufallig = '".$yadrcchikasankhye."', tiarikala = '".$dinanka."' WHERE kalaparichaya = '".$issueNumber."' AND ojana = '10'";
  $conn->query($nabikarana);
  $nabikarana = "UPDATE shonu_kaichila
  INNER JOIN (
    SELECT byabaharkarta, SUM(sesabida) AS total_paid
    FROM bajikattuttate_trx
    WHERE kalaparichaya = '".$issueNumber."' 
    AND ojana = '10' 
    AND phalaphala ='gagner'
    GROUP BY byabaharkarta
  )  AS subquery ON shonu_kaichila.balakedara = subquery.byabaharkarta
  SET shonu_kaichila.motta = TRUNCATE(shonu_kaichila.motta + subquery.total_paid, 2)
  ";
  $conn->query($nabikarana);
          
  $nabikarana = "UPDATE bajikattuttate_trx set phalaphala = 'gagner', sesabida = ROUND(sesabida * 9, 2), ergebnis = '".$kadimesucyanka."', zufallig = '".$yadrcchikasankhye."', tiarikala = '".$dinanka."' WHERE kalaparichaya = '".$issueNumber."' AND ojana = '2'";
  $conn->query($nabikarana);
  $nabikarana = "UPDATE shonu_kaichila
  INNER JOIN (
    SELECT byabaharkarta, SUM(sesabida) AS total_paid
    FROM bajikattuttate_trx
    WHERE kalaparichaya = '".$issueNumber."' 
    AND ojana = '2' 
    AND phalaphala ='gagner'
    GROUP BY byabaharkarta
  )  AS subquery ON shonu_kaichila.balakedara = subquery.byabaharkarta
  SET shonu_kaichila.motta = TRUNCATE(shonu_kaichila.motta + subquery.total_paid, 2)
  ";
  $conn->query($nabikarana);
  
  $nabikarana = "UPDATE bajikattuttate_trx set phalaphala = 'gagner', sesabida = ROUND(sesabida * 2, 2), ergebnis = '".$kadimesucyanka."', zufallig = '".$yadrcchikasankhye."', tiarikala = '".$dinanka."' WHERE kalaparichaya = '".$issueNumber."' AND ojana = '14'";
  $conn->query($nabikarana);
  $nabikarana = "UPDATE shonu_kaichila
  INNER JOIN (
    SELECT byabaharkarta, SUM(sesabida) AS total_paid
    FROM bajikattuttate_trx
    WHERE kalaparichaya = '".$issueNumber."' 
    AND ojana = '14' 
    AND phalaphala ='gagner'
    GROUP BY byabaharkarta
  )  AS subquery ON shonu_kaichila.balakedara = subquery.byabaharkarta
  SET shonu_kaichila.motta = TRUNCATE(shonu_kaichila.motta + subquery.total_paid, 2)
  ";
  $conn->query($nabikarana);
}
if($kadimesucyanka == 3){
  $nabikarana = "UPDATE bajikattuttate_trx set phalaphala = 'gagner', sesabida = ROUND(sesabida * 2, 2), ergebnis = '".$kadimesucyanka."', zufallig = '".$yadrcchikasankhye."', tiarikala = '".$dinanka."' WHERE kalaparichaya = '".$issueNumber."' AND ojana = '11'";
  $conn->query($nabikarana);
  $nabikarana = "UPDATE shonu_kaichila
  INNER JOIN (
    SELECT byabaharkarta, SUM(sesabida) AS total_paid
    FROM bajikattuttate_trx
    WHERE kalaparichaya = '".$issueNumber."' 
    AND ojana = '11' 
    AND phalaphala ='gagner'
    GROUP BY byabaharkarta
  )  AS subquery ON shonu_kaichila.balakedara = subquery.byabaharkarta
  SET shonu_kaichila.motta = TRUNCATE(shonu_kaichila.motta + subquery.total_paid, 2)
  ";
  $conn->query($nabikarana);
          
  $nabikarana = "UPDATE bajikattuttate_trx set phalaphala = 'gagner', sesabida = ROUND(sesabida * 9, 2), ergebnis = '".$kadimesucyanka."', zufallig = '".$yadrcchikasankhye."', tiarikala = '".$dinanka."' WHERE kalaparichaya = '".$issueNumber."' AND ojana = '3'";
  $conn->query($nabikarana);
  $nabikarana = "UPDATE shonu_kaichila
  INNER JOIN (
    SELECT byabaharkarta, SUM(sesabida) AS total_paid
    FROM bajikattuttate_trx
    WHERE kalaparichaya = '".$issueNumber."' 
    AND ojana = '3' 
    AND phalaphala ='gagner'
    GROUP BY byabaharkarta
  )  AS subquery ON shonu_kaichila.balakedara = subquery.byabaharkarta
  SET shonu_kaichila.motta = TRUNCATE(shonu_kaichila.motta + subquery.total_paid, 2)
  ";
  $conn->query($nabikarana);
  
  $nabikarana = "UPDATE bajikattuttate_trx set phalaphala = 'gagner', sesabida = ROUND(sesabida * 2, 2), ergebnis = '".$kadimesucyanka."', zufallig = '".$yadrcchikasankhye."', tiarikala = '".$dinanka."' WHERE kalaparichaya = '".$issueNumber."' AND ojana = '14'";
  $conn->query($nabikarana);
  $nabikarana = "UPDATE shonu_kaichila
  INNER JOIN (
    SELECT byabaharkarta, SUM(sesabida) AS total_paid
    FROM bajikattuttate_trx
    WHERE kalaparichaya = '".$issueNumber."' 
    AND ojana = '14' 
    AND phalaphala ='gagner'
    GROUP BY byabaharkarta
  )  AS subquery ON shonu_kaichila.balakedara = subquery.byabaharkarta
  SET shonu_kaichila.motta = TRUNCATE(shonu_kaichila.motta + subquery.total_paid, 2)
  ";
  $conn->query($nabikarana);
}
if($kadimesucyanka == 4){
  $nabikarana = "UPDATE bajikattuttate_trx set phalaphala = 'gagner', sesabida = ROUND(sesabida * 2, 2), ergebnis = '".$kadimesucyanka."', zufallig = '".$yadrcchikasankhye."', tiarikala = '".$dinanka."' WHERE kalaparichaya = '".$issueNumber."' AND ojana = '10'";
  $conn->query($nabikarana);
  $nabikarana = "UPDATE shonu_kaichila
  INNER JOIN (
    SELECT byabaharkarta, SUM(sesabida) AS total_paid
    FROM bajikattuttate_trx
    WHERE kalaparichaya = '".$issueNumber."' 
    AND ojana = '10' 
    AND phalaphala ='gagner'
    GROUP BY byabaharkarta
  )  AS subquery ON shonu_kaichila.balakedara = subquery.byabaharkarta
  SET shonu_kaichila.motta = TRUNCATE(shonu_kaichila.motta + subquery.total_paid, 2)
  ";
  $conn->query($nabikarana);
          
  $nabikarana = "UPDATE bajikattuttate_trx set phalaphala = 'gagner', sesabida = ROUND(sesabida * 9, 2), ergebnis = '".$kadimesucyanka."', zufallig = '".$yadrcchikasankhye."', tiarikala = '".$dinanka."' WHERE kalaparichaya = '".$issueNumber."' AND ojana = '4'";
  $conn->query($nabikarana);
  $nabikarana = "UPDATE shonu_kaichila
  INNER JOIN (
    SELECT byabaharkarta, SUM(sesabida) AS total_paid
    FROM bajikattuttate_trx
    WHERE kalaparichaya = '".$issueNumber."' 
    AND ojana = '4' 
    AND phalaphala ='gagner'
    GROUP BY byabaharkarta
  )  AS subquery ON shonu_kaichila.balakedara = subquery.byabaharkarta
  SET shonu_kaichila.motta = TRUNCATE(shonu_kaichila.motta + subquery.total_paid, 2)
  ";
  $conn->query($nabikarana);
  
  $nabikarana = "UPDATE bajikattuttate_trx set phalaphala = 'gagner', sesabida = ROUND(sesabida * 2, 2), ergebnis = '".$kadimesucyanka."', zufallig = '".$yadrcchikasankhye."', tiarikala = '".$dinanka."' WHERE kalaparichaya = '".$issueNumber."' AND ojana = '14'";
  $conn->query($nabikarana);
  $nabikarana = "UPDATE shonu_kaichila
  INNER JOIN (
    SELECT byabaharkarta, SUM(sesabida) AS total_paid
    FROM bajikattuttate_trx
    WHERE kalaparichaya = '".$issueNumber."' 
    AND ojana = '14' 
    AND phalaphala ='gagner'
    GROUP BY byabaharkarta
  )  AS subquery ON shonu_kaichila.balakedara = subquery.byabaharkarta
  SET shonu_kaichila.motta = TRUNCATE(shonu_kaichila.motta + subquery.total_paid, 2)
  ";
  $conn->query($nabikarana);
}
if($kadimesucyanka == 5){
  $nabikarana = "UPDATE bajikattuttate_trx set phalaphala = 'gagner', sesabida = ROUND(sesabida * 1.5, 2), ergebnis = '".$kadimesucyanka."', zufallig = '".$yadrcchikasankhye."', tiarikala = '".$dinanka."' WHERE kalaparichaya = '".$issueNumber."' AND ojana = '11'";
  $conn->query($nabikarana);
  $nabikarana = "UPDATE shonu_kaichila
  INNER JOIN (
    SELECT byabaharkarta, SUM(sesabida) AS total_paid
    FROM bajikattuttate_trx
    WHERE kalaparichaya = '".$issueNumber."' 
    AND ojana = '11' 
    AND phalaphala ='gagner'
    GROUP BY byabaharkarta
  )  AS subquery ON shonu_kaichila.balakedara = subquery.byabaharkarta
  SET shonu_kaichila.motta = TRUNCATE(shonu_kaichila.motta + subquery.total_paid, 2)
  ";
  $conn->query($nabikarana);
  
  $nabikarana = "UPDATE bajikattuttate_trx set phalaphala = 'gagner', sesabida = ROUND(sesabida * 4.5, 2), ergebnis = '".$kadimesucyanka."', zufallig = '".$yadrcchikasankhye."', tiarikala = '".$dinanka."' WHERE kalaparichaya = '".$issueNumber."' AND ojana = '12'";
  $conn->query($nabikarana);
  $nabikarana = "UPDATE shonu_kaichila
  INNER JOIN (
    SELECT byabaharkarta, SUM(sesabida) AS total_paid
    FROM bajikattuttate_trx
    WHERE kalaparichaya = '".$issueNumber."' 
    AND ojana = '12' 
    AND phalaphala ='gagner'
    GROUP BY byabaharkarta
  )  AS subquery ON shonu_kaichila.balakedara = subquery.byabaharkarta
  SET shonu_kaichila.motta = TRUNCATE(shonu_kaichila.motta + subquery.total_paid, 2)
  ";
  $conn->query($nabikarana);
  
  $nabikarana = "UPDATE bajikattuttate_trx set phalaphala = 'gagner', sesabida = ROUND(sesabida * 9, 2), ergebnis = '".$kadimesucyanka."', zufallig = '".$yadrcchikasankhye."', tiarikala = '".$dinanka."' WHERE kalaparichaya = '".$issueNumber."' AND ojana = '5'";
  $conn->query($nabikarana);
  $nabikarana = "UPDATE shonu_kaichila
  INNER JOIN (
    SELECT byabaharkarta, SUM(sesabida) AS total_paid
    FROM bajikattuttate_trx
    WHERE kalaparichaya = '".$issueNumber."' 
    AND ojana = '5' 
    AND phalaphala ='gagner'
    GROUP BY byabaharkarta
  )  AS subquery ON shonu_kaichila.balakedara = subquery.byabaharkarta
  SET shonu_kaichila.motta = TRUNCATE(shonu_kaichila.motta + subquery.total_paid, 2)
  ";
  $conn->query($nabikarana);
  
  $nabikarana = "UPDATE bajikattuttate_trx set phalaphala = 'gagner', sesabida = ROUND(sesabida * 2, 2), ergebnis = '".$kadimesucyanka."', zufallig = '".$yadrcchikasankhye."', tiarikala = '".$dinanka."' WHERE kalaparichaya = '".$issueNumber."' AND ojana = '13'";
  $conn->query($nabikarana);
  $nabikarana = "UPDATE shonu_kaichila
  INNER JOIN (
    SELECT byabaharkarta, SUM(sesabida) AS total_paid
    FROM bajikattuttate_trx
    WHERE kalaparichaya = '".$issueNumber."' 
    AND ojana = '13' 
    AND phalaphala ='gagner'
    GROUP BY byabaharkarta
  )  AS subquery ON shonu_kaichila.balakedara = subquery.byabaharkarta
  SET shonu_kaichila.motta = TRUNCATE(shonu_kaichila.motta + subquery.total_paid, 2)
  ";
  $conn->query($nabikarana);
}
if($kadimesucyanka == 6){
  $nabikarana = "UPDATE bajikattuttate_trx set phalaphala = 'gagner', sesabida = ROUND(sesabida * 2, 2), ergebnis = '".$kadimesucyanka."', zufallig = '".$yadrcchikasankhye."', tiarikala = '".$dinanka."' WHERE kalaparichaya = '".$issueNumber."' AND ojana = '10'";
  $conn->query($nabikarana);
  $nabikarana = "UPDATE shonu_kaichila
  INNER JOIN (
    SELECT byabaharkarta, SUM(sesabida) AS total_paid
    FROM bajikattuttate_trx
    WHERE kalaparichaya = '".$issueNumber."' 
    AND ojana = '10' 
    AND phalaphala ='gagner'
    GROUP BY byabaharkarta
  )  AS subquery ON shonu_kaichila.balakedara = subquery.byabaharkarta
  SET shonu_kaichila.motta = TRUNCATE(shonu_kaichila.motta + subquery.total_paid, 2)
  ";
  $conn->query($nabikarana);
          
  $nabikarana = "UPDATE bajikattuttate_trx set phalaphala = 'gagner', sesabida = ROUND(sesabida * 9, 2), ergebnis = '".$kadimesucyanka."', zufallig = '".$yadrcchikasankhye."', tiarikala = '".$dinanka."' WHERE kalaparichaya = '".$issueNumber."' AND ojana = '6'";
  $conn->query($nabikarana);
  $nabikarana = "UPDATE shonu_kaichila
  INNER JOIN (
    SELECT byabaharkarta, SUM(sesabida) AS total_paid
    FROM bajikattuttate_trx
    WHERE kalaparichaya = '".$issueNumber."' 
    AND ojana = '6' 
    AND phalaphala ='gagner'
    GROUP BY byabaharkarta
  )  AS subquery ON shonu_kaichila.balakedara = subquery.byabaharkarta
  SET shonu_kaichila.motta = TRUNCATE(shonu_kaichila.motta + subquery.total_paid, 2)
  ";
  $conn->query($nabikarana);
  
  $nabikarana = "UPDATE bajikattuttate_trx set phalaphala = 'gagner', sesabida = ROUND(sesabida * 2, 2), ergebnis = '".$kadimesucyanka."', zufallig = '".$yadrcchikasankhye."', tiarikala = '".$dinanka."' WHERE kalaparichaya = '".$issueNumber."' AND ojana = '13'";
  $conn->query($nabikarana);
  $nabikarana = "UPDATE shonu_kaichila
  INNER JOIN (
    SELECT byabaharkarta, SUM(sesabida) AS total_paid
    FROM bajikattuttate_trx
    WHERE kalaparichaya = '".$issueNumber."' 
    AND ojana = '13' 
    AND phalaphala ='gagner'
    GROUP BY byabaharkarta
  )  AS subquery ON shonu_kaichila.balakedara = subquery.byabaharkarta
  SET shonu_kaichila.motta = TRUNCATE(shonu_kaichila.motta + subquery.total_paid, 2)
  ";
  $conn->query($nabikarana);
}
if($kadimesucyanka == 7){
  $nabikarana = "UPDATE bajikattuttate_trx set phalaphala = 'gagner', sesabida = ROUND(sesabida * 2, 2), ergebnis = '".$kadimesucyanka."', zufallig = '".$yadrcchikasankhye."', tiarikala = '".$dinanka."' WHERE kalaparichaya = '".$issueNumber."' AND ojana = '11'";
  $conn->query($nabikarana);
  $nabikarana = "UPDATE shonu_kaichila
  INNER JOIN (
    SELECT byabaharkarta, SUM(sesabida) AS total_paid
    FROM bajikattuttate_trx
    WHERE kalaparichaya = '".$issueNumber."' 
    AND ojana = '11' 
    AND phalaphala ='gagner'
    GROUP BY byabaharkarta
  )  AS subquery ON shonu_kaichila.balakedara = subquery.byabaharkarta
  SET shonu_kaichila.motta = TRUNCATE(shonu_kaichila.motta + subquery.total_paid, 2)
  ";
  $conn->query($nabikarana);
          
  $nabikarana = "UPDATE bajikattuttate_trx set phalaphala = 'gagner', sesabida = ROUND(sesabida * 9, 2), ergebnis = '".$kadimesucyanka."', zufallig = '".$yadrcchikasankhye."', tiarikala = '".$dinanka."' WHERE kalaparichaya = '".$issueNumber."' AND ojana = '7'";
  $conn->query($nabikarana);
  $nabikarana = "UPDATE shonu_kaichila
  INNER JOIN (
    SELECT byabaharkarta, SUM(sesabida) AS total_paid
    FROM bajikattuttate_trx
    WHERE kalaparichaya = '".$issueNumber."' 
    AND ojana = '7' 
    AND phalaphala ='gagner'
    GROUP BY byabaharkarta
  )  AS subquery ON shonu_kaichila.balakedara = subquery.byabaharkarta
  SET shonu_kaichila.motta = TRUNCATE(shonu_kaichila.motta + subquery.total_paid, 2)
  ";
  $conn->query($nabikarana);
  
  $nabikarana = "UPDATE bajikattuttate_trx set phalaphala = 'gagner', sesabida = ROUND(sesabida * 2, 2), ergebnis = '".$kadimesucyanka."', zufallig = '".$yadrcchikasankhye."', tiarikala = '".$dinanka."' WHERE kalaparichaya = '".$issueNumber."' AND ojana = '13'";
  $conn->query($nabikarana);
  $nabikarana = "UPDATE shonu_kaichila
  INNER JOIN (
    SELECT byabaharkarta, SUM(sesabida) AS total_paid
    FROM bajikattuttate_trx
    WHERE kalaparichaya = '".$issueNumber."' 
    AND ojana = '13' 
    AND phalaphala ='gagner'
    GROUP BY byabaharkarta
  )  AS subquery ON shonu_kaichila.balakedara = subquery.byabaharkarta
  SET shonu_kaichila.motta = TRUNCATE(shonu_kaichila.motta + subquery.total_paid, 2)
  ";
  $conn->query($nabikarana);
}
if($kadimesucyanka == 8){
  $nabikarana = "UPDATE bajikattuttate_trx set phalaphala = 'gagner', sesabida = ROUND(sesabida * 2, 2), ergebnis = '".$kadimesucyanka."', zufallig = '".$yadrcchikasankhye."', tiarikala = '".$dinanka."' WHERE kalaparichaya = '".$issueNumber."' AND ojana = '10'";
  $conn->query($nabikarana);
  $nabikarana = "UPDATE shonu_kaichila
  INNER JOIN (
    SELECT byabaharkarta, SUM(sesabida) AS total_paid
    FROM bajikattuttate_trx
    WHERE kalaparichaya = '".$issueNumber."' 
    AND ojana = '10' 
    AND phalaphala ='gagner'
    GROUP BY byabaharkarta
  )  AS subquery ON shonu_kaichila.balakedara = subquery.byabaharkarta
  SET shonu_kaichila.motta = TRUNCATE(shonu_kaichila.motta + subquery.total_paid, 2)
  ";
  $conn->query($nabikarana);
          
  $nabikarana = "UPDATE bajikattuttate_trx set phalaphala = 'gagner', sesabida = ROUND(sesabida * 9, 2), ergebnis = '".$kadimesucyanka."', zufallig = '".$yadrcchikasankhye."', tiarikala = '".$dinanka."' WHERE kalaparichaya = '".$issueNumber."' AND ojana = '8'";
  $conn->query($nabikarana);
  $nabikarana = "UPDATE shonu_kaichila
  INNER JOIN (
    SELECT byabaharkarta, SUM(sesabida) AS total_paid
    FROM bajikattuttate_trx
    WHERE kalaparichaya = '".$issueNumber."' 
    AND ojana = '8' 
    AND phalaphala ='gagner'
    GROUP BY byabaharkarta
  )  AS subquery ON shonu_kaichila.balakedara = subquery.byabaharkarta
  SET shonu_kaichila.motta = TRUNCATE(shonu_kaichila.motta + subquery.total_paid, 2)
  ";
  $conn->query($nabikarana);
  
  $nabikarana = "UPDATE bajikattuttate_trx set phalaphala = 'gagner', sesabida = ROUND(sesabida * 2, 2), ergebnis = '".$kadimesucyanka."', zufallig = '".$yadrcchikasankhye."', tiarikala = '".$dinanka."' WHERE kalaparichaya = '".$issueNumber."' AND ojana = '13'";
  $conn->query($nabikarana);
  $nabikarana = "UPDATE shonu_kaichila
  INNER JOIN (
    SELECT byabaharkarta, SUM(sesabida) AS total_paid
    FROM bajikattuttate_trx
    WHERE kalaparichaya = '".$issueNumber."' 
    AND ojana = '13' 
    AND phalaphala ='gagner'
    GROUP BY byabaharkarta
  )  AS subquery ON shonu_kaichila.balakedara = subquery.byabaharkarta
  SET shonu_kaichila.motta = TRUNCATE(shonu_kaichila.motta + subquery.total_paid, 2)
  ";
  $conn->query($nabikarana);
}
if($kadimesucyanka == 9){
  $nabikarana = "UPDATE bajikattuttate_trx set phalaphala = 'gagner', sesabida = ROUND(sesabida * 2, 2), ergebnis = '".$kadimesucyanka."', zufallig = '".$yadrcchikasankhye."', tiarikala = '".$dinanka."' WHERE kalaparichaya = '".$issueNumber."' AND ojana = '11'";
  $conn->query($nabikarana);
  $nabikarana = "UPDATE shonu_kaichila
  INNER JOIN (
    SELECT byabaharkarta, SUM(sesabida) AS total_paid
    FROM bajikattuttate_trx
    WHERE kalaparichaya = '".$issueNumber."' 
    AND ojana = '11' 
    AND phalaphala ='gagner'
    GROUP BY byabaharkarta
  )  AS subquery ON shonu_kaichila.balakedara = subquery.byabaharkarta
  SET shonu_kaichila.motta = TRUNCATE(shonu_kaichila.motta + subquery.total_paid, 2)
  ";
  $conn->query($nabikarana);
          
  $nabikarana = "UPDATE bajikattuttate_trx set phalaphala = 'gagner', sesabida = ROUND(sesabida * 9, 2), ergebnis = '".$kadimesucyanka."', zufallig = '".$yadrcchikasankhye."', tiarikala = '".$dinanka."' WHERE kalaparichaya = '".$issueNumber."' AND ojana = '9'";
  $conn->query($nabikarana);
  $nabikarana = "UPDATE shonu_kaichila
  INNER JOIN (
    SELECT byabaharkarta, SUM(sesabida) AS total_paid
    FROM bajikattuttate_trx
    WHERE kalaparichaya = '".$issueNumber."' 
    AND ojana = '9' 
    AND phalaphala ='gagner'
    GROUP BY byabaharkarta
  )  AS subquery ON shonu_kaichila.balakedara = subquery.byabaharkarta
  SET shonu_kaichila.motta = TRUNCATE(shonu_kaichila.motta + subquery.total_paid, 2)
  ";
  $conn->query($nabikarana);
  
  $nabikarana = "UPDATE bajikattuttate_trx set phalaphala = 'gagner', sesabida = ROUND(sesabida * 2, 2), ergebnis = '".$kadimesucyanka."', zufallig = '".$yadrcchikasankhye."', tiarikala = '".$dinanka."' WHERE kalaparichaya = '".$issueNumber."' AND ojana = '13'";
  $conn->query($nabikarana);
  $nabikarana = "UPDATE shonu_kaichila
  INNER JOIN (
    SELECT byabaharkarta, SUM(sesabida) AS total_paid
    FROM bajikattuttate_trx
    WHERE kalaparichaya = '".$issueNumber."' 
    AND ojana = '13' 
    AND phalaphala ='gagner'
    GROUP BY byabaharkarta
  )  AS subquery ON shonu_kaichila.balakedara = subquery.byabaharkarta
  SET shonu_kaichila.motta = TRUNCATE(shonu_kaichila.motta + subquery.total_paid, 2)
  ";
  $conn->query($nabikarana);
}
$nabikarana_dui = "UPDATE bajikattuttate_trx set ergebnis = '".$kadimesucyanka."', zufallig = '".$yadrcchikasankhye."', tiarikala = '".$dinanka."' WHERE kalaparichaya = '".$issueNumber."'";
$conn->query($nabikarana_dui);

}
}
?>
