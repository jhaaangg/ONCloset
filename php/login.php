<?php 
	require_once "connection.php";

	$arr = array();
		$email = $_POST["email"];
		$pass = $_POST["pass"];
		// $pass = hash('sha256', $pass);
		$sql = "select * from users where userEmail = '$email' and userPass = '$pass' ";
		$result = mysqli_query($connection,$sql);

		$num_rows = mysqli_num_rows($result);

		if($num_rows > 0 )
		{
			while($rows = mysqli_fetch_array($result)){
				array_push($arr,array(
					"userID" => $rows["userId"],
					"userName" =>$rows["userName"],
					"userEmail"=>$rows["userEmail"],
					"userPass" =>$rows["userPass"]
					));
			}

			header("Content-type:application/json");
			echo json_encode($arr);
		}
		else
		{
			echo 0;
		}

	
?>