/// <reference path="../typings/angularjs/angular.d.ts"/>
var app=angular.module('ashes2015',['firebase','ui.router']);

app.config(["$stateProvider","$urlRouterProvider",
	function($stateProvider,$urlRouterProvider){
		$stateProvider
		.state("home",{
			url:'/',
			templateUrl:'home.html',            
			title:'Ashes Home'
		})
		.state("newmatches",{
			url:'/new_matches',
			templateUrl:"new_matches.html",
            controller:"MatchSaveCtrl",	    
			title:'Add New Match'			
		})
        .state("newplayers",{
			url:'/new_players',
			templateUrl:"new_players.html",
            controller:"PlayerSaveCtrl",	    
			title:'Add New Player'			
		})
        .state("404",{
            url:'/404',
            template:'<h1>404...Page Not Found</h1>',
            title:'Page Not Found'
        });
        $urlRouterProvider.otherwise('/404');
		$urlRouterProvider.when("", "/");
	}]);
	
app.run(['$state','$rootScope',function ($state,$rootScope) {
    // $state.transitionTo('home');
	$rootScope.$on('$stateChangeSuccess', function (event, current) {
            event.preventDefault();

            if (current.hasOwnProperty("title")) {
                $rootScope.title = current.title;
            }
        });
}]);
