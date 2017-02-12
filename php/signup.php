<?php 
	require_once "connection.php";
	$name = $_POST["fname"];
	$pass =$_POST["pass"];
	$email = $_POST["email"];

	$sql = "select * from users where userEmail = '$email'";
	$result = mysqli_query($connection,$sql);

	if(mysqli_num_rows($result) > 0 ){
		echo 0;
	}
	else
	{
		$sql = "insert into users(userName,userEmail,userPass)values('$name','$email','$pass')";
		$result = mysqli_query($connection,$sql);

		$id = mysqli_insert_id($connection);

		$sql = "select * from users where userId = $id";
		$result = mysqli_query($connection,$sql);

		$arr = array();
		$rows = mysqli_fetch_array($result);
			array_push($arr,array(
					"userID" => $rows["userId"],
					"userName" =>$rows["userName"],
					"userEmail"=>$rows["userEmail"],
					"userPass" =>$rows["userPass"]
					));

		header("Content-type:application/json");
		echo json_encode($arr);
		
	}

?>