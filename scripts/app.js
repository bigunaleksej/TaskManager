'use strict';

var App = angular.module('App', [
    'ui.router'
]);

App.config(function ($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/tasks');

    $stateProvider
        .state('tasks', {
            url: '/tasks',
            templateUrl: 'templates/TaskManager.html',
            controller: 'TaskManagerCtrl'
        })
        .state('tasks.edit', {
            url: '/edit',
            templateUrl: 'templates/AddEditTaskDialog.html',
            controller: 'AddEditTaskDialogCtrl'
        })
});