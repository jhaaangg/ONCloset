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

<script type="text/javascript" src="../js/jquery.js"></script>
<script type="text/javascript" src="../js/bootstrap.js"></script>
<script type="text/javascript" src="../js/bootstrap.min.js"></script>

<script>

var info = JSON.parse(localStorage.getItem("userCredentials"));
var userID = info[0].userID;

// Grab elements, create settings, etc.
var video = document.getElementById('video');

 $(function(){
  $("#uploadFile").change(function(){
    $("#formUpload").submit();
  });
 });


$(document).ready(function(e){
  $.ajax({
    method : "POST",
  url :"../php/getposts.php",
  success : function(data){
    console.log(data);
    displayDT(data);
  },
  error : function(){
    alert("Error");
  }
  });
});

function displayDT(data)
{
  $("#bodyContent").empty();
  for(var i = 0;i<data.length;i++)
  {
    var dT = "Posted by " + data[i].userName +"<img src = ../uploads/" + data[i].id + "." + data[i].type + " width = 125 height = 125><br>";
    $("#bodyContent").append(dT);
  }
}

// Get access to the camera!
if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    // Not adding `{ audio: true }` since we only want video now
    navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then(function(stream) {
        video.src = window.URL.createObjectURL(stream);
        video.play();
    });
}

// Elements for taking the snapshot
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var video = document.getElementById('video');

// Capture Image 
document.getElementById("snap").addEventListener("click", function() {
	context.drawImage(video, 0, 0, 360, 300);
});
</script>
	
</body>
</html>