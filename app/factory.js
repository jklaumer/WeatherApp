(function() {
    'use strict';

    angular
        .module('app')
        .factory('weatherFactory', weatherFactory);

    weatherFactory.$inject = ['$http','$q'];

    /* @ngInject */
    function weatherFactory($http, $q) {
        var service = {
            getWeather: getWeather
        };

        return service;

        ////////////////

        function getWeather(place) {
            
        var URL = 'http://api.openweathermap.org/data/2.5/weather'; 

            // console.log("hi");

            return $http({
            url: URL,
            method: 'GET',
            params: {
            
            APPID: '95d3848a0e4ebc8054b58514460873e8',
            q: place,
            units: 'imperial',

               }

            }).then(function(result){
                console.log(result);
              return result;
            });
        }

    }
})();



