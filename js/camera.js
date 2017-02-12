        $("#myImage").on('click', cameraTakePicture);

        function cameraTakePicture() {
            navigator.camera.getPicture(onSuccess, onFail, { quality: 50, 
              destinationType: Camera.DestinationType.DATA_URL 
            });
        }

        function onSuccess(imageData){
            var image = document.getElementById("myImage");
            var dataUrl = "data:image/jpeg;base64," + imageData;

            document.getElementById('fileToUpload').value = dataUrl;
            document.getElementById('myImage').src = dataUrl;
        }

        function onFail(message){
          alert('Failed because: ' + message);
        }


        // var account_id = sessionStorage.getItem('account_id');
        // var account_name = sessionStorage.getItem('account_name');
        // $('#user_id').val(account_id);
        $('#myform').submit(function(e){
            e.preventDefault();
             $('#uploadBtn').text('Uploading...');
            if($('#outfit_name').val() != ''){{
                    $.ajax({
                        url: domain + 'api/validate_image.php',
                        type: 'POST',
                        data: new FormData(this),
                        processData: false,
                        contentType: false,
                        success: function(response){
                            if(response.success){
                                console.log(response);
                                location.href = '../index.html';
                            }else{
                                $('#uploadBtn').text('UPLOAD');
                                console.log(response.error);
                            }
                            
                        },
                        error: function(jqXHR){
                            $('#uploadBtn').text('UPLOAD');
                            console.log(jqXHR.responseText);
                        }
                    });//end ajax
                }
            }else{
                $('#uploadBtn').text('UPLOAD');
            }//end if #outfit_name
        });//end of submit