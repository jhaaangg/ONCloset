var Search = function(){
	if ($('#keyword')!= '') {
		$.ajax({
			url : '../php.search.php',
			type : 'POST',
			data : {keyword: $('#keyword').val()},
			success: function(response){
				if (response.success) {
					var output = '';
					console.log(response.data);
					for(var i = 0; i < response.data.length; i++){
						output += "<a id='result_small_view' href='#' onclick='OpenResult("+response.data[i].userId+")'><div id='result_container'><p id='food_name'>"+response.data[i].userName"</p><p id='user_of_post'><a href='#'><b>"+response.data[i].userId.userName+"</b></a></p></div></div></div></div></a>";
					}
					$('#search_results').html(output);
				}else{
					$('#keyword').val('');
					$('#search_results').html('<center><i>'+response.error+'</i></center>');
				}
			}
		});
	}else{
		alert('Please fill up search box.');
	}
}
function OpenResult(id){
	$.ajax({
		url : '../php'
	})
}