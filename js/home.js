var info = JSON.parse(localStorage.getItem("userCredentials"));
var userID = info[0].userID;

    function logout(){
      localStorage.removeItem("userCredentials");
      location.replace("../index.html");
    }

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


// $("#viewMypost").click(function(){
//   $.ajax({
//     method : "POST",
//     url : "../php/myposts.php",
//     data : {"userID":userID},
//     success:function(data){
//       console.log(data);
//       displayDT(data);
//     },
//     error : function(){
//       alert("Error");
//     }
//   });
// });

function displayDT(data)
{
  $("#bodyContent").empty();
  for(var i = 0;i<data.length;i++)
  {
    var dT = "<div id='data_post'><p>" + data[i].userName + "</p><br>" +"<img src = ../uploads/" + data[i].id + "." + data[i].type + "><br></div>";
    $("#bodyContent").append(dT);
  }
}


 $("#formUpload").submit(function(e){
  e.preventDefault();
  var fd = new FormData(this);
  fd.append("userID",userID);
  $.ajax({
 contentType:false,
                cache:false,
                processData:false,
                method  : "POST",
                url : "../php/upload.php",
                data : fd,
                success : function(data){
                  console.log(data);
                  location.reload();
                },
                error : function(){
                  alert("Error");
                }

  });
 });






