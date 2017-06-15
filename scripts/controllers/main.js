'use strict';

/**
 * @ngdoc function
 * @name searchApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the searchApp
 */
angular.module('searchApp')
	.controller('MainCtrl', function ($scope, $q, FilmsData, CharactersData) {


		$scope.showChar = false;

		$scope.showCharacters = function(){

			$scope.showChar = true;
		};
		
		function fetchCharacterDetail(item) {
		
			var deferred = $q.defer();
			var charNameDetail = [];
			var pathArray = item.split('/');
			var test = pathArray[5];
			CharactersData.query(
			{
				'pid': test
			}, function (res) {

				if (res) {
					$scope.intermediateData = res.name;
				
				}
			charNameDetail.push($scope.intermediateData, item);
				
			deferred.resolve(charNameDetail);
			}, function(res) {// on error
				
				deferred.reject( res.errors[0]);
			});
			
			return deferred.promise;
			
		}

		$scope.mainControlPromise = FilmsData.query(
			{}, function (response) {

				if (response) {

					$scope.filmsData = response.results;
					$scope.count = response.count;
					
					angular.forEach($scope.filmsData, function (elem) {
						angular.forEach(elem.characters, function (item) {
							
							
							
							fetchCharacterDetail(item).then(function(response) {// on success

								angular.forEach(elem.characters, function(key, value){
									if(key === response[1]){
										elem.characters[value] = response[0];
									}
								});

							});
								
						});
						
						
					});
				} else {

					$scope.noData = true;
				}
			});
	});
