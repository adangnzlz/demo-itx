function homeDirective(){return{bindToController:!0,controller:function($scope){console.log("Home is loaded")},controllerAs:"vm",restrict:"C",scope:{controller:"="},templateUrl:"./templates/home.html"}}angular.module("layouts.home",[]).directive("home",homeDirective);