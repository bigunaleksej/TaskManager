(function () {
    App.factory('Tasks', [
        '$http',
        tasks
    ]);

    function tasks($http) {
        var service = {
            get: getTasks
        };

        return service;

        function getTasks() {
            return $http.get('API/data.json').then(function(response){
                return response.data;
            });;
        }
    }
})();
