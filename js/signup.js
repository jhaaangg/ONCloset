$("#formSignup").submit(function(e){
        e.preventDefault();
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
    });

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