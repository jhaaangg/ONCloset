// var info = JSON.parse(localStorage.getItem("userCredentials"));
// var userID = info[0].userID;

// // Grab elements, create settings, etc.
// var video = document.getElementById('video');

//  $(function(){
//   $("#uploadFile").change(function(){
//     $("#formUpload").submit();
//   });
//  });


// $(document).ready(function(e){
//   $.ajax({
//     method : "POST",
//   url :"../php/getposts.php",
//   success : function(data){
//     console.log(data);
//     displayDT(data);
//   },
//   error : function(){
//     alert("Error");
//   }
//   });
// });

// function displayDT(data)
// {
//   $("#bodyContent").empty();
//   for(var i = 0;i<data.length;i++)
//   {
//     var dT = "Posted by " + data[i].userName +"<img src = ../uploads/" + data[i].id + "." + data[i].type + " width = 125 height = 125><br>";
//     $("#bodyContent").append(dT);
//   }
// }

// Get access to the camera!
// if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
//     // Not adding `{ audio: true }` since we only want video now
//     navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then(function(stream) {
//         video.src = window.URL.createObjectURL(stream);
//         video.play();
//     });
// }

// // Elements for taking the snapshot
// var canvas = document.getElementById('canvas');
// var context = canvas.getContext('2d');
// var video = document.getElementById('video');

// // Capture Image 
// document.getElementById("snap").addEventListener("click", function() {
// 	context.drawImage(video, 0, 0, 360, 300);
// });