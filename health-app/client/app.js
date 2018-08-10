// SPDX-License-Identifier: Apache-2.0

'use strict';

var app = angular.module('application', []);

// Angular Controller
app.controller('appController', function($scope, appFactory){

	$("#success_transfer").hide();
	$("#success_create").hide();
	$("#error_transfer").hide();
	$("#error_query").hide();
	
	$scope.queryHospitals = function(){

		appFactory.queryHospitals(function(data){
			var array = [];
			for (var i = 0; i < data.length; i++){
				parseInt(data[i].Key);
				data[i].Record.Key = parseInt(data[i].Key);
				array.push(data[i].Record);
			}
			array.sort(function(a, b) {
			    return parseFloat(a.Key) - parseFloat(b.Key);
			});
			$scope.all_hospitals = array;
		});
	}

	$scope.queryDoctors = function(){

		appFactory.queryDoctors(function(data){
			var array = [];
			for (var i = 0; i < data.length; i++){
				parseInt(data[i].Key);
				data[i].Record.Key = parseInt(data[i].Key);
				array.push(data[i].Record);
			}
			array.sort(function(a, b) {
			    return parseFloat(a.Key) - parseFloat(b.Key);
			});
			$scope.all_doctors = array;
		});
	}

	$scope.queryPatients = function(){

		appFactory.queryPatients(function(data){
			var array = [];
			for (var i = 0; i < data.length; i++){
				parseInt(data[i].Key);
				data[i].Record.Key = parseInt(data[i].Key);
				array.push(data[i].Record);
			}
			array.sort(function(a, b) {
			    return parseFloat(a.Key) - parseFloat(b.Key);
			});
			$scope.all_patients = array;
		});
	}

	$scope.queryReports = function(){

		appFactory.queryReports(function(data){
			var array = [];
			for (var i = 0; i < data.length; i++){
				parseInt(data[i].Key);
				data[i].Record.Key = parseInt(data[i].Key);
				array.push(data[i].Record);
			}
			array.sort(function(a, b) {
			    return parseFloat(a.Key) - parseFloat(b.Key);
			});
			$scope.all_reports = array;
		});
	}

	$scope.query = function(){

		var id = $scope.query_id;

		appFactory.query(id, function(data){
			$scope.query_ = data;

			if ($scope.query_ == "Could not locate "){
				console.log()
				$("#error_query").show();
			} else{
				$("#error_query").hide();
			}
		});
	}

	$scope.createHospital = function(){

		appFactory.createHospital($scope.hospital, function(data){
			$scope.create_hospital = data;
			$("#success_create").show();
		});
	}

	$scope.createDoctor = function(){

		appFactory.createDoctor($scope.doctor, function(data){
			$scope.create_doctor = data;
			$("#success_create").show();
		});
	}

	$scope.createPatient = function(){

		appFactory.createPatient($scope.patient, function(data){
			$scope.create_patient = data;
			$("#success_create").show();
		});
	}

	$scope.createReport = function(){

		appFactory.createReport($scope.report, function(data){
			$scope.create_report = data;
			$("#success_create").show();
		});
	}

	$scope.transferPatient = function(){

		appFactory.transferPatient($scope.transfer, function(data){
			$scope.change_transfer = data;
			if ($scope.change_transfer == "Error: no patient found"){
				$("#error_transfer").show();
				$("#success_transfer").hide();
			} else{
				$("#success_transfer").show();
				$("#error_transfer").hide();
			}
		});
	}

});

// Angular Factory
app.factory('appFactory', function($http){
	
	var factory = {};

    factory.queryHospitals = function(callback){

    	$http.get('/get_hospitals').success(function(output){
			callback(output)
		});
	}

	factory.queryDoctors = function(callback){

    	$http.get('/get_doctors').success(function(output){
			callback(output)
		});
	}

	factory.queryPatients = function(callback){

    	$http.get('/get_patients').success(function(output){
			callback(output)
		});
	}

	factory.queryReports = function(callback){

    	$http.get('/get_reports').success(function(output){
			callback(output)
		});
	}

	factory.query = function(id, callback){
    	$http.get('/query/' + id).success(function(output){
			callback(output)
		});
	}

	factory.createHospital = function(data, callback){

		var hospital = data.hospitalID + "-" + data.name + "-" + data.country + "-" + data.balance;

    	$http.get('/add_hospital/' + hospital).success(function(output){
			callback(output)
		});
	}

	factory.createDoctor = function(data, callback){

		var doctor = data.doctorID + "-" + data.name + "-" + data.hospitalID + "-" + data.balance;

    	$http.get('/add_doctor/' + doctor).success(function(output){
			callback(output)
		});
	}

	factory.createPatient = function(data, callback){

		var patient = data.patientID + "-" + data.name + "-" +data.reportID + "-" + data.hospitalID + "-" + data.balance;

    	$http.get('/add_patient/' + patient).success(function(output){
			callback(output)
		});
	}

	factory.createReport = function(data, callback){

		var report = data.reportID + "-" + data.patientID + "-" + data.hospitalID + "-" + data.fee;

    	$http.get('/add_report/' + report).success(function(output){
			callback(output)
		});
	}

	factory.transferPatient = function(data, callback){

		var transfer = data.patientID + "-" + data.hospitalID;

    	$http.get('/transfer_patient/'+ transfer).success(function(output){
			callback(output)
		});
	}

	return factory;
});


