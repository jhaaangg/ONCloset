<?php 
require_once "connection.php";

$sql = "Select * from tbl_uploads INNER JOIN users ON tbl_uploads.userId = users.userId";
$result = mysqli_query($connection,$sql);
$num_rows = mysqli_num_rows($result);
$arr = array();
if($num_rows > 0)
{
	while($rows = mysqli_fetch_array($result)){
		array_push($arr,array(
			"userName"=>$rows["userName"],
			"id"=>$rows["id"],
			"type"=>$rows["type"]
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