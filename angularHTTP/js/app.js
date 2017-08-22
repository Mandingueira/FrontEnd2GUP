var app = angular.module('webapp', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
//    $locationProvider.html5Mode({
//        enabled: true,
//        requireBase: false
//    });
//    $locationProvider.hashPrefix('');
    $routeProvider
    .when('/', {
       templateUrl: './views/main.html',
        controller: 'first'
    })
    .when('/users', {
        templateUrl: './views/users.html',
        controller: 'first'
    })
    .when('/user/:id', {
        templateUrl: './views/user.html',
        controller: 'userController'
    })
    .when('/animals', {
        templateUrl: './views/animals.html',
        controller: 'animalController'
    });
});

app.controller('first', function($scope, $http) {
    // $http(/*obiekt konfiguracyjny*/)
    //    .then(/*success handler*/, 
    //          /*error handler*/);
    $http({
        method: "GET",
        url: "http://localhost:3000/users"
    }).then(function(success) {
        $scope.users = success.data;
    }, function(error) {
        console.error(error);
    });
});

app.controller('userController', function($scope, $http, $routeParams) {
    $http({
        url: 'http://localhost:3000/users/' + $routeParams.id,
        method: 'GET'
    }).then(function(success) {
        $scope.user = success.data;
    }, function(error) {
        console.error(error);
    });
});

app.controller('animalController', function($scope, $http) {
    $http({
        url: 'http://localhost:3000/animals',
        method: 'GET'
    }).then(function(success) {
        $scope.animals = success.data;
    }, function(error) {
        console.error(error);
    });
});

