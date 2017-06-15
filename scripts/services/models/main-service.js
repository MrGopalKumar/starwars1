'use strict';
var apiService = angular.module('apiService', ['ngResource']);

/* Films data */

apiService.factory("FilmsData", function($resource) {
	var _url = " https://swapi.co/api/films/";
	//var _url = "/static-json/static-lists/view-static-list-response.json";

	return $resource(_url, {}, {
		
		"query" : {
			method : "GET",
			headers : {
				'Content-Type' : 'application/json'
			}
		}
	});
});

apiService.factory("CharactersData", function($resource) {
	var _url = " https://swapi.co/api/people/:pid";
	//var _url = "/static-json/static-lists/view-static-list-response.json";

	return $resource(_url, {}, {
		
		"query" : {
			method : "GET",
			headers : {
				'Content-Type' : 'application/json'
			}
		}
	});
});
