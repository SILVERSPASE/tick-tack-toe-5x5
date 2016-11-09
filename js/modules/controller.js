app.controller('myCtrl', function($scope) {

$scope.width = 20;
$scope.height = 20;
$scope.field = {};
$scope.greenScore = 0;
$scope.yellowScore = 0;
$scope.greenTurn = true;  
$scope.winScreen = false;
$scope.winText = '';
$scope.showResetButton = false;


$scope.createField = function() {
	for (var i = 0; i < $scope.height; i++) {
		$scope.field[i] = {};
		for (var j = 0; j < $scope.width; j++) {
			$scope.field[i][j] = '';
		}
	}
}

// $scope.createField = function(width, height) {
// 	for (var i = 0; i < $scope.height; i++) {
// 		$scope.field[i] = {};
// 		for (var j = 0; j < $scope.width; j++) {
// 			$scope.field[i][j] = '';
// 		}
// 	}
// }

$scope.createField();

//x: columnKey);
//y: rowKey);

$scope.newGame = function() {
	$scope.field = {};
	$scope.greenScore = 0;
	$scope.yellowScore = 0;
	$scope.greenTurn = true;  
	$scope.winScreen = false;
	$scope.createField();
};

$scope.cellClick = function(rowKey, columnKey) {
	rowKey = parseInt(rowKey);
	columnKey = parseInt(columnKey);
	if (!$scope.winScreen && $scope.field[columnKey][rowKey] == '') {
		$scope.showResetButton = true;
		$scope.field[columnKey][rowKey] = ($scope.greenTurn ? 'green' : 'yellow');
		$scope.greenTurn = !$scope.greenTurn;
	
	// win condition
	//horizontal win green
		for (var ox = 1; ox <=5; ox++) {
			if ($scope.field[columnKey][rowKey + ox] == 'green') {
				$scope.greenScore++;
				if ($scope.greenScore == 4) {
					$scope.winText = 'Green Player WON!';
					$scope.winScreen = true;
				}
			} else {
				for (oy = 1; oy <=5; oy++) {
					if ($scope.field[columnKey][rowKey - oy] == 'green') {
					$scope.greenScore++;
						if ($scope.greenScore == 4) {
							$scope.winText = 'Green Player WON!';
							$scope.winScreen = true;
						}
					} else {
						$scope.greenScore = 0;
						break;
					}
				}
			}
		}
	//horizontal win yellow
		for (var ox = 1; ox <=5; ox++) {
			if ($scope.field[columnKey][rowKey + ox] == 'yellow') {
				$scope.yellowScore++;
				if ($scope.yellowScore == 4) {
					$scope.winText = 'Yellow Player WON!';
					$scope.winScreen = true;
				}
			} else {
				for (oy = 1; oy <=5; oy++) {
					if ($scope.field[columnKey][rowKey - oy] == 'yellow') {
					$scope.yellowScore++;
						if ($scope.yellowScore == 4) {
							$scope.winText = 'Yellow Player WON!';
							$scope.winScreen = true;
						}
					} else {
						$scope.yellowScore = 0;
						break;
					}
				}
			}
		}

	//vertikal win green
		for (var ox = 1; ox <=5; ox++) {
			if ($scope.field[columnKey + ox] && $scope.field[columnKey + ox][rowKey] == 'green') {
				$scope.greenScore++;
				if ($scope.greenScore == 4) {
					$scope.winText = 'Green Player WON!';
					$scope.winScreen = true;
				}
			} else {
				for (oy = 1; oy <=5; oy++) {
					if ($scope.field[columnKey - oy] && $scope.field[columnKey - oy][rowKey] == 'green') {
						$scope.greenScore++;
						if ($scope.greenScore == 4) {
							$scope.winText = 'Green Player WON!';
							$scope.winScreen = true;
						}
					} else {
						$scope.greenScore = 0;
						break;
					}
				}
			}
		}

	//vertikal win yellow
		for (var ox = 1; ox <=5; ox++) {
			if ($scope.field[columnKey + ox] && $scope.field[columnKey + ox][rowKey] == 'yellow') {
				$scope.yellowScore++;
				if ($scope.yellowScore == 4) {
					$scope.winText = 'Yellow Player WON!';
					$scope.winScreen = true;
				}
			} else {
				for (oy = 1; oy <=5; oy++) {
					if ($scope.field[columnKey - oy] && $scope.field[columnKey - oy][rowKey] == 'yellow') {
					$scope.yellowScore++;
						if ($scope.yellowScore == 4) {
							$scope.winText = 'Yellow Player WON!';
							$scope.winScreen = true;
						}
					} else {
						$scope.yellowScore = 0;
						break;
					}
				}
			}
		}

	// diagonal left to right win green
		for (var ox = 1; ox <=5; ox++) {
			if ($scope.field[columnKey + ox] && $scope.field[columnKey + ox][rowKey + ox] == 'green') {
				$scope.greenScore++;
				if ($scope.greenScore == 4) {
					$scope.winText = 'Green Player WON!';
					$scope.winScreen = true;
				}
			} else {
				for (oy = 1; oy <=5; oy++) {
					if ($scope.field[columnKey - oy] && $scope.field[columnKey - oy][rowKey - oy] == 'green') {
					$scope.greenScore++;
						if ($scope.greenScore == 4) {
							$scope.winText = 'Green Player WON!';
							$scope.winScreen = true;
						}
					} else {
						$scope.greenScore = 0;
						break;
					}
				}
			}
		}

	// diagonal right to left win green
		for (var ox = 1; ox <=5; ox++) {
			if ($scope.field[columnKey - ox] && $scope.field[columnKey - ox][rowKey + ox] == 'green') {
				$scope.greenScore++;
				if ($scope.greenScore == 4) {
					$scope.winText = 'Green Player WON!';
					$scope.winScreen = true;
				}
			} else {
				for (oy = 1; oy <=5; oy++) {
					if ($scope.field[columnKey + oy] && $scope.field[columnKey + oy][rowKey - oy] == 'green') {
					$scope.greenScore++;
						if ($scope.greenScore == 4) {
							$scope.winText = 'Green Player WON!';
							$scope.winScreen = true;
						}
					} else {
						$scope.greenScore = 0;
						break;
					}
				}
			}
		}

	// diagonal left to right win yellow
		for (var ox = 1; ox <=5; ox++) {
			if ($scope.field[columnKey + ox] && $scope.field[columnKey + ox][rowKey + ox] == 'yellow') {
				$scope.yellowScore++;
				if ($scope.yellowScore == 4) {
					$scope.winText = 'Yellow Player WON!';
					$scope.winScreen = true;
				}
			} else {
				for (oy = 1; oy <=5; oy++) {
					if ($scope.field[columnKey - oy] && $scope.field[columnKey - oy][rowKey - oy] == 'yellow') {
					$scope.yellowScore++;
						if ($scope.yellowScore == 4) {
							$scope.winText = 'Yellow Player WON!';
							$scope.winScreen = true;
						}
					} else {
						$scope.yellowScore = 0;
						break;
					}
				}
			}
		}

	// diagonal right to left win yellow
		for (var ox = 1; ox <=5; ox++) {
			if ($scope.field[columnKey - ox] && $scope.field[columnKey - ox][rowKey + ox] == 'yellow') {
				$scope.yellowScore++;
				if ($scope.yellowScore == 4) {
					$scope.winText = 'Yellow Player WON!';
					$scope.winScreen = true;
				}
			} else {
				for (oy = 1; oy <=5; oy++) {
					if ($scope.field[columnKey + oy] && $scope.field[columnKey + oy][rowKey - oy] == 'yellow') {
					$scope.yellowScore++;
						if ($scope.yellowScore == 4) {
							$scope.winText = 'Yellow Player WON!';
							$scope.winScreen = true;
						}
					} else {
						$scope.yellowScore = 0;
						break;
					}
				}
			}
		}
	}
} 
});


