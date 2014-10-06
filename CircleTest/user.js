function CenterIt() {
	return ;
	var Dim = {
		x: $(document).width(),
		y: $(document).height()
	};
	var ElemDim = {
		x: $(".muhTable").width(),
		y: $(".muhTable").height()
	};
	var ElemPos = $(".muhTable").offset();
	
	// ElemPos.left = (Dim.x - ElemDim.x) / 2;
	 // ElemPos.top = (Dim.y - ElemDim.y) / 2;
	console.log("Resizing to: " + Dim.x + "*" + Dim.y);
	console.log("To: " + ElemPos.top + "," + ElemPos.left);
	$(".muhTable").offset(ElemPos);
}

function Spawn(player)
{
	var ElemDim = {
		x: $(".Table").width(),
		y: $(".Table").height()
	};
	var ElemPos = $(".Table").offset();
	var CentrePos = {
		x: ElemPos.left + (ElemDim.x / 2),
		y: ElemPos.top + (ElemDim.y / 2)
	};
	
	var PlayerPos = {
		x: CentrePos.x + ((ElemDim.x * 2 / 3) * Math.cos(GetPercPerPlayer(players) * PlayersPlaced * Math.PI / 180)) - ($("#player").width() / 2),
		y: CentrePos.y + ((ElemDim.y * 2 / 3) * Math.sin(GetPercPerPlayer(players) * PlayersPlaced * Math.PI / 180)) - ($("#player").height() / 2)
	};
	
	PlayersPlaced++;
		
	$(".Table").append('<div id="player" class="player-' + PlayersPlaced + '">' + player + '</div>');
	$(".player-" + PlayersPlaced).offset({ top: PlayerPos.y, left: PlayerPos.x });
}

function GetPercPerPlayer(rray) {
	return (360 / rray.length);
}

var PlayersPlaced = 0;
var players = [
	"MJ"
];

window.onresize = function(){
	$("#player").remove();
	PlayersPlaced = 0;
	CenterIt();
	players.forEach(Spawn);
};

$(document).ready(function() {
	var Table = document.body.getElementsByClassName("Table")[0].getBoundingClientRect();

	players.forEach(Spawn);
	$("#addSome").click(function() {
		players.push("New");
		$("#player").remove();
		PlayersPlaced = 0;
		players.forEach(Spawn);
	});
});