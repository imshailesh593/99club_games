<?php 

include("serive/samparka.php");	
include("trx3.php");	    
	
$currentDate = date('Ymd');
$timeInSeconds = time() % 86400; 
$sequenceNumber = intval($timeInSeconds / 180); 
$uniqueSequence = str_pad($sequenceNumber, 4, '0', STR_PAD_LEFT); 
$bartamankalakrama = $currentDate . "10302" . $uniqueSequence;
$bartamankalakrama = $bartamankalakrama + 1;

$prathama = $bartamankalakrama; 
$sesa = $currentDate . "10302" . sprintf("%04d", ceil(86400 / 180)); 


$tarika = date('Y-m-d H:i:s');
	
$dekhakalakrama = mysqli_query($conn,"select atadaaidi from `gelluonduhogu_trx3` order by kramasankhye desc limit 1");
$kaladhadi = mysqli_num_rows($dekhakalakrama);
$kalakramadhadi = mysqli_fetch_array($dekhakalakrama);

if($kaladhadi == null){
	$tathya = mysqli_query($conn,"INSERT INTO `gelluonduhogu_trx3` (`atadaaidi`,`dinankavannuracisi`) VALUES ('".$bartamankalakrama."','".$tarika."')");
}
else if($prathama > $kalakramadhadi['atadaaidi']){
	$katiba = mysqli_query($conn,"TRUNCATE TABLE `gelluonduhogu_trx3`");
	$tathya = mysqli_query($conn,"INSERT INTO `gelluonduhogu_trx3` (`atadaaidi`,`dinankavannuracisi`) VALUES ('".$prathama."','".$tarika."')");
}
else{
	$parabartikrama = $kalakramadhadi['atadaaidi'] + 1;
	$tathya = mysqli_query($conn,"INSERT INTO `gelluonduhogu_trx3` (`atadaaidi`,`dinankavannuracisi`) VALUES ('".$parabartikrama."','".$tarika."')");
}
?>

