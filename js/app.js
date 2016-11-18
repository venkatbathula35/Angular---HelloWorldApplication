var app = angular.module('myApp', []);

app.controller('Maincontroller', function($scope, $http){
	$scope.DefaultName = "Venkat Reddy";

	$scope.submit = function(inputname){

		$scope.DefaultName = $scope.inputname;
		
		console.log($scope.inputname);
	}
});