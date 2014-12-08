var movieList;

function toDateTime(ts) {
	var dt = new Date(ts);
	return (dt.toISOString());
}

function retrieveMovieList() {
	var a =	$.ajax({url: "./movies.json", type: "GET", dataType: "JSON"}).done(function(data) {
		for (var key in data)
		{
			console.log(key + ":");
			$("#movie_list").append('<option value="' + key.replace(" ", "_") + '">' + key + '</option>');
			for (var val in data[key])
				console.log(toDateTime(data[key][val]));
		}
	}).complete(function(data) {
		movieList = data.responseJSON;
	});
	return a;
}

$(document).ready(function() {
	retrieveMovieList();
	console.log(movieList);
	
	$("#movie_list").change(function() {
		$("#movie_list option:selected").each(function() {
			$("#movie_time").html('');
			if ($(this).text() != "")
			{
				var movie = movieList[$("#movie_list option:selected").text()];
				
				for (var val in movie)
					$("#movie_time").append('<option value="' + movie[val] + '">' + toDateTime(movie[val]) + '</option>');
			}
		})
	});
});