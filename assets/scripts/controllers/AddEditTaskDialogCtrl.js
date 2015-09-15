module.exports = function ($scope, $state, $stateParams) {
    var purchase = {},
        $addEditTaskDialog = $('#addEditTaskDialog');

    $scope.submitted = false;
    $scope.isEditPage = ($state.$current.toString().indexOf('edit') !== -1);

    if ($scope.isEditPage) {
        $scope.dialogTitle = 'Edit';
        purchase = $scope.purchases[$stateParams.purchaseIndex];
    } else {
        $scope.dialogTitle = 'Add';
    }

    $addEditTaskDialog.modal();
    $addEditTaskDialog.on('hidden.bs.modal', function () {
        $state.go('tasks')
    });

    $scope.purchase = {
        name: purchase.name,
        store: purchase.store,
        price: purchase.price,
        description: purchase.description
    };

    $scope.add = function () {
        $scope.submitted = true;

        if (!$scope.purchaseForm.$error.required) {
            $addEditTaskDialog.modal('hide');
            $scope.purchases.push($scope.purchase);
        }
    };

    $scope.save = function () {
        $scope.submitted = true;

        if (!$scope.purchaseForm.$error.required) {
            $addEditTaskDialog.modal('hide');
            $scope.purchases[$stateParams.purchaseIndex] = $scope.purchase;
        }
    };

    $scope.remove = function () {
        $scope.purchases.splice($stateParams.purchaseIndex, 1);
    };
}
