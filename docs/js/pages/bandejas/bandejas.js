function bandejasDirective(){return{bindToController:!0,controller:function($scope,bandejasService){var bc=this;bandejasService.getBandejas().success(function(data){bc.bandejas=data.products})},controllerAs:"bc",restrict:"E",scope:{controller:"="},templateUrl:"./templates/bandejas.html"}}angular.module("pages.bandejas",[]).directive("bandejas",bandejasDirective);