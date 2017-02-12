<?php 
header("Access-Control-Allow-Origin:*");
require_once 'connection.php';
$id = $_POST['id'];
// $food_name_nowhitespace = preg_replace('/\s/', '', $food_name);
$userId = $_POST['userId'];
// $location = $_POST['food_location'];
// $today = date("mdY").time();
$dataUrl = $_POST['fileToUpload'];

$file = $dataUrl;

$filedata = str_replace(' ', '+', $file);
$filedata = substr($filedata, strpos($filedata, ",")+1);
$filedata = base64_decode($filedata);
$filepath = "../uploads/"."_".$userId."_".".png";

$file = fopen($filepath, 'w');
fwrite($file, $filedata);
fclose($file);

$sql = "INSERT INTO tbl_uploads (id, userId,type) VALUES (NULL, ".$userId.", '".$id."')";

if(mysqli_query($conn, $sql)){
 $array = array(
  'success' => 'true',
 );
 $object = (object) $array;
}

header('Content-type: application/json');
echo json_encode($object);
?>




	