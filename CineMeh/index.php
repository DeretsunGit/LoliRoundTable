<!DOCTYPE HTML>
<html>
	<head>
		<title>CineMeh</title>
		
		<link rel="stylesheet"  href="./style.css" />
		
		<meta charset="UTF-8" />
		
		<script src="./jquery.min.js"></script>
		<script src="./main.js"></script>
	</head>
	<body>
		<form>
			<div id="select_a_movie">
				<h1>Select a movie</h1>
				<p>
					<label>Movie</label>
					<select name="my_movie" id="movie_list">
						 <option value="none" selected></option>
					</select>
				</p>
			</div>
			
			<div id="select_datetime">
				<h1>Select a date and time</h1>
				<p>
					<label>Time</label>
					<select name="my_time" id="movie_time">
					</select>
				</p>
			</div>
		</form>
	</body>
</html>
