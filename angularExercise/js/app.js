var app = angular.module('webapp', ['ngRoute']);
var baseAJAXUrl = 'http://localhost:3000/';

app.controller('mainController', function($scope, $http){
    // kod, ktory sie wykona po uruchomieniu kontrolera
    $http({
        url: baseAJAXUrl + 'subject',
        method: 'GET'
    }).then(function(success){
        $scope.subjects = success.data;
    }, function(error) {
        console.error(error);        
    });
    
    $scope.actualEditId = null;
    // kod, ktory sie wykona po wywolaniu funkcji edit
    $scope.edit = function(subject) {
        //alert(subject.id);
        if($scope.actualEditId != subject.id){
            $scope.actualEditId = subject.id;
        } else {
           // alert("ten komunikat juz jest edytowany");
            $http({
                url: baseAJAXUrl + 'subject/' + subject.id,
                method: 'PUT',
                data: {
                    name: subject.name
                }
            }).then(function(success){
                console.log(success.data);    
                $scope.actualEditId = null;
            },function(error){
                console.error(error);
            });
        }
    }
    $scope.tryEdit = function(keyCode, subject){
        if(keyCode === 13){
            $scope.edit(subject);
        }
    }
});
