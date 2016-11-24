var sapientApp = angular.module('sapientApp',['ui.router']);

sapientApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/sapient');
    
    $stateProvider
        
        .state('sapient', {
            url: '/sapient',
            templateUrl: 'views/sapient.html',
            controller :'sapientCtrl',
            controllerAs :'$ctrl'
        })
        

});