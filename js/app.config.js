App.config(function ($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/tasks');

    $stateProvider
        .state('tasks', {
            url: '/tasks',
            templateUrl: 'js/layout/TaskManager.html',
            controller: 'TaskManagerController'
        })
        .state('tasks.edit', {
            url: '/edit',
            templateUrl: 'js/AddEditTaskDialog/AddEditTaskDialog.html',
            controller: 'AddEditTaskDialogController'
        })
});