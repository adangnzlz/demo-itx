!function(){"use strict";angular.module("app-module").controller("app-controller",function($scope){var app=this;app.show=!1,$scope.$on("toggle",function(event,data){app.show=!app.show}),$scope.$on("close",function(event,data){app.close()}),app.close=function(){app.show=!1}})}();