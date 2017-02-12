<?php 
require_once "connection.php";

$postFile = $_FILES["uploadFile"]["name"];
$userID = $_POST["userID"];


$ext = pathinfo($postFile,PATHINFO_EXTENSION);


$sql = "insert into tbl_uploads(userId,type)values($userID,'$ext')";

$result = mysqli_query($connection,$sql);

$id = mysqli_insert_id($connection);

move_uploaded_file($_FILES["uploadFile"]["tmp_name"],"../uploads/" . $id . "." . $ext);

?>