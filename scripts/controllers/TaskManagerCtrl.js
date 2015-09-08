(function () {
    App.controller('TaskManagerCtrl', [
            '$scope',
            'Tasks',
            TaskManagerCtrl
        ]);

    function TaskManagerCtrl($scope, Tasks) {
        $scope.days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        $scope.selectedDay = 0;
        setPurchases($scope.days[$scope.selectedDay]);

        $scope.setItem = function(index){
            $scope.selectedDay = index;
            setPurchases($scope.days[$scope.selectedDay])
        };

        $scope.addTask = function() {
            console.info('modal');
            $('.modal').modal()
        }

        function setPurchases(day) {
            Tasks.get().then(function(response){
                $scope.purchases = response[day];
            });
        }


    }
})();