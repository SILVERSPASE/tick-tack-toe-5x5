app.controller('myCtrl', function($scope) {

	$scope.width = 20;
	$scope.height = 20;
	$scope.field = {};
	$scope.greenScore = 0;
	$scope.yellowScore = 0;
	$scope.greenTurn = true;  
	$scope.winScreen = false;


	for (var i = 0; i < $scope.height; i++){
		$scope.field[i] = {};
		for (var j = 0; j < $scope.width; j++){
			$scope.field[i][j] = '';
		}
	}





	// for (var i = 0; i < $scope.height; i++){
	// 	$scope.field[i] = {};
	// 	for (var j = 0; j < $scope.width; j++){
	// 		$scope.field[i][j] = i + j;
	// 	}

	// }
	// console.log($scope.field);


	// $scope.winTemplates = {
	// 	1: { 1: true,  2: true,  3: true,  4: false, 5: false, 6: false, 7: false, 8: false, 9: false },
	// 	2: { 1: false, 2: false, 3: false, 4: true,  5: true,  6: true,  7: false, 8: false, 9: false },
	// 	3: { 1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: true,  8: true,  9: true },
	// 	4: { 1: true,  2: false, 3: false, 4: true,  5: false, 6: false, 7: true,  8: false, 9: false },
	// 	5: { 1: false, 2: true,  3: false, 4: false, 5: true,  6: false, 7: false, 8: true,  9: false },
	// 	6: { 1: false, 2: false, 3: true,  4: false, 5: false, 6: true,  7: false, 8: false, 9: true },
	// 	7: { 1: true,  2: false, 3: false, 4: false, 5: true,  6: false, 7: false, 8: false, 9: true },
	// 	8: { 1: false, 2: false, 3: true,  4: false, 5: true,  6: false, 7: true,  8: false, 9: false }
	// };

	// $scope.greenTurn = true;  
	// $scope.winScreen = false;
	// $scope.winText = '';

	// $scope.allTurns = 0;


//x: columnKey);
//y: rowKey);

	$scope.cellClick = function(rowKey, columnKey) {
		rowKey = parseInt(rowKey);
		columnKey = parseInt(columnKey);
		if ($scope.field[columnKey][rowKey] == '' && !$scope.winScreen) {
			$scope.field[columnKey][rowKey] = ($scope.greenTurn ? 'green' : 'yellow');
			$scope.greenTurn = !$scope.greenTurn;
			}
		
	// win condition
		for (var ox = 1; ox <=5; ox++){
			if($scope.field[columnKey][rowKey-ox] == 'green'){
				console.log(rowKey-ox + 'test to right');
				$scope.greenScore++;
				console.log($scope.greenScore);
				if ($scope.greenScore == 4){
					console.log('green won! to right');
					$scope.winScreen = true;
				}
			} else {
				for (var ox = 1; ox <=5; ox++){
					if($scope.field[columnKey][rowKey-ox] == 'green'){
						console.log(rowKey-ox + 'test to left');
						$scope.greenScore++;
						console.log($scope.greenScore);
						if ($scope.greenScore == 4){
							console.log('green won! to left');
							$scope.winScreen = true;
							}
						}
					}
				}
			$scope.greenScore = 0;
		}
			
		

			// win condiion
		// for (var ox = -5; ox <= 5; ox++){
		// 	if($scope.field[columnKey][rowKey-ox] == 'green'){
		// 		$scope.greenScore++;
		// 		if ($scope.greenScore == 5){
		// 			console.log('green won!');
		// 			$scope.winScreen = true;
		// 		} 
		// 	} else {
		// 		$scope.greenScore = 0;
		// 	}
		// }
	}
});
