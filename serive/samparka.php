<?php
	$conn = mysqli_connect('localhost', 'clubvbra_bull34', 'clubvbra_bull34', 'clubvbra_bull34');
	
	if (!$conn) {
		echo "Error: " . mysqli_connect_error();
		exit();
	}
	
	date_default_timezone_set("Asia/Kolkata"); 
?>