!function(){"use strict";angular.module("app-module").run(function($q,$rootScope,$state,$stateParams,menuService,$appState){menuService.getRoutes().success(function(data){$appState.addState("home"),function createStates(values,$appState){angular.forEach(values,function(value){value.subcategories&&value.subcategories.length>0&&createStates(value.subcategories,$appState),value.despliega||$appState.addState(value.name.toLowerCase())})}(data.categories,$appState),$state.go("home")})})}();