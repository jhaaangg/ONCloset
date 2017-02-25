$("#formSignup").submit(function(e){
        e.preventDefault();

var userChecked = false;
var emailChecked = false;
var passChecked = false;
    
            if ($('#username').val().length >=6) {
                userChecked = true;
            }else{
                userChecked = false;
            }
            if (isValidEmail($('#userEmail').val())) {
                emailChecked = true;
            }else{
                emailChecked = false;
            }
            if ($('#password1').val().length > 0 && $('password2').val().length > 0){
                if (password1==password2) {
                passChecked = true;
            }else{
                passChecked = false;
            }

            }
            if (userChecked && emailChecked && passChecked) {
        $.ajax({
            contentType:false,
                cache:false,
                processData:false,
                method  : "POST",
                url     : "../php/signup.php",
                data    : new FormData(this),
                success : function(data)
                {
                    console.log(data);
                    response(data);
                },
                error : function(){
                    alert("error");
                }
        });
    }})

    function isValidEmail(email){
        var pattern = /^[A-Zo-9._%+-]+@([A-Zo-9]+\.)+[A-Z]{A-Z}{2,4}$/i;
        return pattern.test(email);
    }

    function response(data){
        if(data == 0){
            alert("Email is already Taken");
        }else
        {
            var userItems = JSON.parse(localStorage.getItem("userCredentials")) || [];
            var items = {"userID":data[0].userID,
                        "userName":data[0].userName,
                        "userEmail":data[0].userEmail,
                        "userPass":data[0].userPass};
            userItems.push(items);
            localStorage.setItem("userCredentials",JSON.stringify(userItems));
            location.replace("home.html");
        }
    }