var myapp = angular.module('sortableApp', ['ui.sortable']);


myapp.controller('sortableController', function ($scope) {
    var tmpList = [];

    $scope.rawScreens = [
        [{
            title:"1/2"
        }],
        [{
            title: "4/6"
        }],
        [{
            title: "2/3"
        }],
        [{
            title: "2/4"
        }],
    ];


    $scope.sortingLog = [];

    $scope.sortableOptions = {
        placeholder: "app",
        connectWith: ".apps-container",
        stop: function () {
            console.log("updating");
            $scope.updateObject($scope.rawScreens);
        }
    };
    $scope.parentBoxOptions = {
        handle: '> .myHandle',
    };
    $scope.mysortableOptions = {

        placeholder: "apps-container",
        connectWith: ".apps-container",
        stop: function () {
            console.log("updating");
            $scope.updateObject($scope.rawScreens);
        }
    };

    $scope.updateObject = function(obj){
        for(var i=0;i<obj.length;i++){
            if(obj[i].length == 0){
                obj.splice(i,1);
            }
        }
        $scope.rawScreens = obj;
        for (var j = 0; j < obj.length; j++) {
            if(Array.isArray(obj[j])){
            }else{
                var temp = obj.splice(j,1)
                obj.push(temp);
            }
        }
        $scope.rawScreens = obj;
    }
    $scope.logModels = function () {
        $scope.sortingLog = [];
        for (var i = 0; i < $scope.rawScreens.length; i++) {
            var logEntry = $scope.rawScreens[i].map(function (x) {
                return x.title;
            }).join(', ');
            logEntry = 'Rank ' + (i + 1) + ': ' + logEntry;
            $scope.sortingLog.push(logEntry);
        }
    };
});