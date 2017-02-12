<?php 
header("Access-Control-Allow-Origin:*");
	include('connection.php');

	$keyword = $_POST['keyword'];

	$data = array();
	$sql = "SELECT users.userName FROM dbtest JOIN users ON dbtest.userId = users.userId WHERE dbtest.usersName LIKE '%$keyword%' OR dbtest.usersName LIKE '%$keyword%' OR users.userName LIKE '%$keyword%' AND status = 1 GROUP BY userId";
	$result = mysqli_query($con, $sql);

	if(mysqli_num_rows($result) > 0){
		while($row = mysqli_fetch_assoc($result)){
			$user_id = $row['userId'];
			$sql_user = "SELECT * FROM users WHERE userId = '$user_id'";
			$result_user = mysqli_query($con, $sql_user);
			$row_user = mysqli_fetch_assoc($result_user);
			$row['userId'] = $row_user;
			array_push($data, $row);
		}
		
		$array = array(
	        'success' => true,
	        'data' => $data
	    );
	    $object = (object) $array;
	}


	else{
		$array = array(
	        'success' => false,
	        'error' => 'No record in database.'
	    );
	    $object = (object) $array;
	}
header('Content-type: application/json');
echo json_encode($object);
?>