<!DOCTYPE html>
<html>
<head>

  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">

<link rel="stylesheet" type="text/css" href="../css/bootstrap.css">
<link rel="stylesheet" type="text/css" href="../css/bootstrap.min.css">
<link rel="stylesheet" type="text/css" href="../css/bootstrap-theme.css">
<link rel="stylesheet" type="text/css" href="../css/bootstrap-theme.min.css">
<link rel="stylesheet" type="text/css" href="../css/ionicons.css">
<link rel="stylesheet" type="text/css" href="../css/ionicons.min.css">
<link rel="stylesheet" type="text/css" href="../css/css.css">
<link rel="stylesheet" type="text/css" href="../css/style.css">

</head>

<body>

<video id="video" width="360" height="300" autoplay></video>
<button id="snap">Take a photo</button>
<canvas id="canvas" width="360" height="300"></canvas>

 	<form enctype="multipart/form-data" id = "formUpload">
    <a href="camaccess.html"><span class="ion-ios-camera">
    <input type = "file" name = "uploadFile" id = "uploadFile">
    </span></a>
    </form>


<!-- <input type="file" accept="image/*;capture=camera">
 -->
<script type="text/javascript" src="../js/jquery.js"></script>
<script type="text/javascript" src="../js/bootstrap.js"></script>
<script type="text/javascript" src="../js/bootstrap.min.js"></script>

<script src = "../js/camaccess.js"></script>
	
</body>
</html>