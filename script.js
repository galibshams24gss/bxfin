var app = angular.module("BxFin", ["ngRoute", "ngTouch","ngAnimate"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "home.html",
		controller : "homeController" 
	})
	.when("/solution", {
        templateUrl : "solution.html",
				controller : "solutionController"
	})
})

.directive('ngCarousel', function($timeout) {
	return function(scope, element, attrs) {
	  var el = element[0];
	  var timer;
	  var containerEl = el.querySelector("ul");
	  var slidesEl = containerEl.querySelectorAll("li");
	  scope.numSlides = slidesEl.length;
	  scope.curSlide = 1;

	  scope.$watch('curSlide', function(num) {
		num = (num % scope.numSlides) + 1;
		containerEl.style.left = (-1*100*(num-1)) + '%';
	  });
	  
	  el.style.position = 'relative';
	  el.style.overflow = 'hidden';

	  containerEl.style.position = 'absolute';
	  containerEl.style.width = (scope.numSlides*100)+'%';
	  containerEl.style.listStyleType = 'none';
	  containerEl.style.margin =0;
	  containerEl.style.padding=0;
	  containerEl.style.transition = '1s';
	  
	  for(var i=0; i<slidesEl.length; i++) {
		var slideEl = slidesEl[i];
		slideEl.style.display = 'inline-block';
		slideEl.style.width = (100/scope.numSlides) + '%';
	  }
	};
  })

	.controller("homeController", function($scope){
		var vm = $scope;
		vm.home = {
			text1: "Galib Shams Sunny",
			text2: "Github",
			text3: "MyGithub.com.au"
		};
	})

	.controller("solutionController", function($scope, $http){
		var vm = $scope;
		vm.displayPage = {
			heading: "Display Record"
		};
		vm.modifiedOne = "Asia Pacific";
		vm.modifiedTwo = string="North America";

		$http.get("customersModel.json").then(function(data){
			vm.currentlist = data.data.customers;
     },function(error){
      console.log(error, 'can not get data.');
	});
	})