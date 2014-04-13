$(":button").click(function() {
	var isbn = this.id;
	var address="/library/v1/books/"+isbn+"?status=lost"
	alert('About to report lost on ISBN ' + isbn);
	$.ajax({
		url: address,
		type: 'PUT',
		contentType: "application/json",
		dataType: 'json',
		success: function(html){
			$("#status"+isbn).text("lost");
			$("#"+isbn).attr('disabled', 'disabled');
		}, 
		error: msg
	});
});

function msg(e, jqxhr)
{
	alert("couldn`t process ur request: " + jqxhr);
}