var sapientApp = angular.module('sapientApp',['ui.router']);

sapientApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/sapient');
    
    $stateProvider
        
        .state('sapient', {
            url: '/sapient',
            template:" <sapient-app-comp></sapient-app-comp>",
        })
           .state('firebase', {
            url: '/firebase',
            template:" <firebase-app-comp></sapient-app-comp>",
        })
        

});
