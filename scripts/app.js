'use strict';

var App = angular.module('App', [
    'ui.router',
    'firebase'
]);

App.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/tasks');

    $stateProvider
        .state('tasks', {
            url: '/tasks',
            templateUrl: 'templates/PurchasesManagerTaskCtrl.html',
            controller: 'PurchasesManagerTaskCtrl'
        })
        .state('tasks.edit', {
            url: '/edit/:day/:purchaseIndex',
            templateUrl: 'templates/AddEditTaskDialog.html',
            controller: 'AddEditTaskDialogCtrl'
        })
        .state('tasks.add', {
            url: '/add/:day',
            templateUrl: 'templates/AddEditTaskDialog.html',
            controller: 'AddEditTaskDialogCtrl'
        })
});