app.controller('mainController', function ($log, $http, $scope, listAccess) {
    $scope.list1 = listAccess.list1;
    $scope.list2 = listAccess.list2;
});