(function() {
    'use strict';

    angular
        .module('app')
        .controller('mainController', mainController);

    mainController.$inject = ['$http', 'weatherFactory'];
    
    /* @ngInject */
    function mainController($http, weatherFactory) {
        var vm = this;

        vm.title = 'mainController';
        vm.SearchHistory = []; 
        vm.placeInput;
        vm.name = ''; 
        vm.temp;
        vm.desc;
        vm.lat;
        vm.long;
        vm.pressure;
        vm.humid;
        vm.low;
        vm.high;
        vm.speed;
        vm.dt;
        vm.icon;
        

        vm.place;
        
        activate();


        ////////////////

        function activate() {
        }
        
        vm.showWeather = function(name){
            weatherFactory.getWeather(name).then(function(result) {
                
                  vm.name = result.data.name;
                  vm.desc = result.data.weather[0].description; //Need to drill down with data dot weather [0] etc for vm's 
                  vm.temp = result.data.main.temp; //.data.main.temp
                  vm.lat = result.data.coord.lat; //.data.coord.lat
                  vm.long = result.data.coord.lon;
                  vm.pressure = result.data.main.pressure;
                  vm.humid = result.data.main.humidity;
                  vm.low =result.data.main.temp_min;
                  vm.high =result.data.main.temp_max;
                  vm.speed = result.data.wind.speed;
                  vm.dt = result.data.dt; 
                  vm.icon = result.data.weather[0].icon; 
                  // vm.place = result.data.name;

                  

                  
                  vm.SearchHistory.push({
                    
                    name: vm.name,
                    timestamp:new Date()

                    // place: vm.place,
                    // dt: vm.dt
                  });
                  console.log(vm.SearchHistory);


                  
                  });

              }

        vm.getWeather = function(name){

          weatherFactory(name).then(function (result) {
          
          });

        }
    }
})();
