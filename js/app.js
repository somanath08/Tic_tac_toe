var original;
const human = 'O';
const ai = 'X';
const winCombos = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [6, 4, 2]];

const cells = document.querySelectorAll(".cell");
startGame();

function startGame() {
	document.querySelector(".endgame").style.display = "none";
	original = Array.from(Array(9).keys());
	for (var i = 0; i < cells.length; i++) {
		cells[i].innerText = "";
		cells.style.removeProperty('background-color');
		cells.addEventListener('click', turnClick, false);
	}
}

function turnClick(s) {
	console.log(s.target.id);
}
