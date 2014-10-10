function CenterIt() {
	return ;
	var Dim = {
		x: $(document).width(),
		y: $(document).height()
	};
	var ElemDim = {
		x: $(".Tab-grid").width(),
		y: $(".Tab-grid").height()
	};
	var ElemPos = $(".muhTable").offset();
	
	console.log("Resizing to: " + Dim.x + "*" + Dim.y);
	console.log("To: " + ElemPos.top + "," + ElemPos.left);
	$(".Tab-grid").offset(ElemPos);
}

function Spawn(player)
{
	var ElemDim = {
		x: $(".Tab-grid").width(),
		y: $(".Tab-grid").height()
	};
	var ElemPos = $(".Tab-grid").offset();
	var CentrePos = {
		x: ElemPos.left + (ElemDim.x / 2),
		y: ElemPos.top + (ElemDim.y / 2)
	};
	
	var PlayerPos = {
		x: CentrePos.x + ((ElemDim.x * 0.7) * Math.cos(GetPercPerPlayer(players) * PlayersPlaced * Math.PI / 180)) - ($("#player-example").width() / 2),
		y: CentrePos.y + ((ElemDim.y * 0.7) * Math.sin(GetPercPerPlayer(players) * PlayersPlaced * Math.PI / 180)) - ($("#player-example").height() / 2)
	};
	
	PlayersPlaced++;
		
	$(".Tab-grid").append('<div id="player" class="player-' + PlayersPlaced + '">' + player + '</div>');
	$(".player-" + PlayersPlaced).offset({ top: PlayerPos.y, left: PlayerPos.x });
}

function GetPercPerPlayer(rray) {
	return (360 / rray.length);
}

function Grow() {
	var ElemDim = {
		x: $(".Tab-grid").width(),
		y: $(".Tab-grid").height()
	};
	
	$(".Tab-grid").width(ElemDim.x + 10);
	$(".Tab-grid").height(ElemDim.y + 10);
	$(".Tab-grid").css({"border-radius": (ElemDim.x + 10) + "px"});
}

var PlayersPlaced = 0;
var players = [
	"MJ"
];

window.onresize = function(){
	$("div#player").remove();
	PlayersPlaced = 0;
	CenterIt();
	players.forEach(Spawn);
};

$(document).ready(function() {
	var Table = document.body.getElementsByClassName("Tab-grid")[0].getBoundingClientRect();

	players.forEach(Spawn);
	$("a#addSome").click(function() {
		if (GetPercPerPlayer(players) <= 20)
			Grow();
		players.push(Math.floor(Math.random() * 100));
		$("div#player").remove();
		PlayersPlaced = 0;
		players.forEach(Spawn);
	});
});