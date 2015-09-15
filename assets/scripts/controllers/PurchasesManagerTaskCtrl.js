module.exports = function ($scope, $firebaseObject) {
    var ref = new Firebase("https://brilliant-torch-8395.firebaseio.com/days"),
        syncObject = $firebaseObject(ref);

    $scope.allPurchases = {};
    syncObject.$bindTo($scope, "allPurchases").then(function () {
        $scope.setPurchases();
    });

    $scope.days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    $scope.selectedDay = 0;

    $scope.changeDay = function (dayIndex) {
        $scope.selectedDay = dayIndex;
        $scope.setPurchases();
    };

    $scope.setPurchases = function () {
        $scope.purchases = $scope.allPurchases[$scope.days[$scope.selectedDay]];
    };
}