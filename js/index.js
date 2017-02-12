$("#formLogin").submit(function(e){
            e.preventDefault();
            
            $.ajax({
                contentType:false,
                cache:false,
                processData:false,
                method  : "POST",
                url     : "php/login.php",
                data    : new FormData(this),
                success :  function(data)
                {
                    console.log(data);
                    saveToLocal(data);
                },
                error:function()
                {
                    alert("Error");
                }
            });

        });


        function saveToLocal(data)
        {
            if(data == 0)
			{
				alert("Invalid username/password");
			}
			else
			{
			var userItems = JSON.parse(localStorage.getItem("userCredentials")) || [];
            var items = {"userID":data[0].userID,
                        "userName":data[0].userName,
                        "userEmail":data[0].userEmail,
                        "userPass":data[0].userPass};
            userItems.push(items);
            localStorage.setItem("userCredentials",JSON.stringify(userItems));
			location.replace("pages/home.html");
			}
			
        }