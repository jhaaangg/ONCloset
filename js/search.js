        $(document).ready(function(){
            // $("body").css("display", "none");
            // $("body").fadeIn(2000);

            
        });

        var Search = function(){
            if($('#keyword') != ''){
                
                $.ajax({
                    url: '../php/search.php',
                    type: 'POST',
                    data: {keyword: $('#keyword').val()},
                    success: function(response){
                        if(response.success){
                            var output = '';
                            console.log(response.data);
                            for(var i = 0; i < response.data.length; i++){
                                output += "<a id='result_small_view' href='#' onclick='OpenResult("+response.data[i].foodId+")'><div id='result_container'><img src='"+ domain +"/foodtographs/"+response.data[i].foodto+"'><div class='outer'><div class='middle'><div class='inner'><p id='food_name'>"+response.data[i].foodName+"</p><p id='food_loc'>"+response.data[i].foodLocation+"</p><p id='user_of_post'><a href='#'><b>"+response.data[i].userId.userName+"</b></a></p></div></div></div></div></a>";
                            }
                            $('#search_results').html(output);
                           
                        }else{
                            $('#keyword').val(''); 
                            $('#search_results').html('<center><i>'+response.error+'</i></center>');
                        }
                    }
                });
            }else{
                alert('Please fill up search box!');
            }
        }

        $(document).ready(function(){
            // $('#result_large_view img').on('click', function(event){
            //     $('#navbar_search_result').fadeToggle('show');
            //     $('#footer_search_result').fadeToggle('show');
            // });
            $('#close_search_preview').on('click', function(event) { 
                $('#result_large_view').fadeToggle('show');
            });
        });
