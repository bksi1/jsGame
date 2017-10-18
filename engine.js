window.onload = function() {
  function renderLevel(level, gameHolder) {
	  for (i=0; i< level.length; i++) {
		  for(j=0; j<level[i].length; j++) {
			var currentElemColor = level[i][j];
			var colorCLass = "";
			switch (currentElemColor) {
				case 1: colorCLass="levelActive"; break;
				case -1: colorCLass="levelWall"; break;
				case 2: colorCLass="levelGoal"; break;
			}
			var levelBox = document.createElement("div");
			levelBox.className = "levelBox " + colorCLass;
			console.log(levelBox);
			gameHolder.appendChild(levelBox);
		  }
		  var rowEnd = document.createElement("br");
		  rowEnd.className="clear";
		  gameHolder.appendChild(rowEnd);
	  }
  }
  var level1 = levels[2];
  var gameHolder = document.getElementById("gameContainer");
  renderLevel(level1, gameHolder);
};