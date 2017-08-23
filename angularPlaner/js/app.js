var app=angular.module("planerApp", ['ngRoute'])

app.config(function($routeProvider, $locationProvider){
//    $locationProvider.hashPrefix('');
//    $locationProvider.html5Mode({
//        enabled:true,
//        requireBase:
//    })
    $routeProvider
        .when('/', {
        templateUrl: ' ./views/main.html'
    })
    .when('/add', {
        templateUrl: './views/add.html',
        controller:'add'
    })
    
    .when('/delete/:id',{
        template: "",
        controller: 'deleteTaskController'
    })
    
    .when('/store', {
        templateUrl: './views/store.html',
        controller:'get'
    });
});

app.service('task', function(){
    
    this.tasks = [
        { id: 1, title: 'pierwszy tytul',  gendre: 'to jest dramat' },
        { id: 2, title: 'drugi tytul', genre: 'to jest dramat' },
        { id: 3, title: 'trzeci tytul', genre: 'to jest komediodramat' }
    ]
        
    this.counter = this.tasks.length + 1; 
       
    this.add = function(task) {
    this.tasks.push(task);
    }
    this.get = function() {
        return this.tasks;
    }
    
    this.deleteById = function(id){
        for(var i = 0; i < this.tasks.length; i++){
            if(this.tasks[i].id == id){
                break;
            }
        }
        this.tasks.splice(i, 1);
    }
    
})
app.controller('add', function($scope, task){
    $scope.add=function(){
        task.add( {title: $scope.title, desc: $scope.desc} );
    }
})

app.controller('get', function($scope, task){
    $scope.tasks = task.get();
    $scope.delete = function(id){
        task.deleteById(id);
        
    };
});


app.controller('deleteTaskController', function($scope, $routeParams, task, $location) {
    task.deletedById($routeParams.id);
    $location.path('/store');
});