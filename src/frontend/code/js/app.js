var app = angular.module("app", ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider,$locationProvider){
	$routeProvider
		.when("/home",{
			templateUrl:"public/views/template/index.html"
		})
		.when("/about",{
			templateUrl:"public/views/template/about.html"
		})
		.when("/portfolio",{
			templateUrl:"public/views/template/portfolio.html"
		})
		.when("/feature",{
			templateUrl:"public/views/template/feature.html"
		})
		.when("/contacts",{
			templateUrl:"public/views/template/contacts.html"
		})
		.otherwise({
			redirectTo: "/"
		});
		$locationProvider.html5Mode(true);
}]);