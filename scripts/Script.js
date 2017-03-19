/// <reference path="angular.min.js />

var myApp = angular.module("myModule", []);

// controllers are anonymouse functions
//var myController = function ($scope) {
//    $scope.message = "Hi There from MyController";
//};

// register controller with modeul using name and function reference
//myApp.controller("myController", myController);

// cleaner - inline syntax to create and register controller
// the job of controller is to build a model for the view
// which it does by attaching the model to the scope
//  note that the scope is not the model, tha data attached to the scope is the model
// (can actually do all in one line using method chaining)
myApp.controller("myController", function ($scope) {
    var emp = {
        firstname: "bob",
        lastname: "smith",
        gender: "male"
    };
    $scope.emp = emp;

    var empList = [
        { firstname: "Onsey", lastname: "smith", dob: new Date("oct 4 1962"), salary: 10000, tot: 0 },
        { firstname: "Twosey", lastname: "jones", dob: new Date("jan 14 1982"), salary: 20000, tot: 0 },
        { firstname: "Trisey", lastname: "brown", dob: new Date("feb 22 1992"), salary: 30000, tot: 0 }];
    $scope.empList = empList;

    $scope.message = "Hi There from myController";
	
	$scope.AddOne = function (rec) {
		rec.tot++;
	};
	
	$scope.SubOne = function (rec) {
		rec.tot--;
	};
	
	$scope.RowLimit = 2;
	$scope.sortCol = "lastname";
});