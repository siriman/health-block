//SPDX-License-Identifier: Apache-2.0

var createDoctor = require('./createDoctor.js');
var createHospital = require('./createHospital.js');
var createPatient = require('./createPatient.js');
var createReport = require('./createReport.js');
var query = require('./query.js');
var queryHospitals = require('./queryHospitals.js');
var queryDoctors = require('./queryDoctors.js');
var queryPatients = require('./queryPatients.js');
var queryReports = require('./queryReports.js');
var transferPatient = require('./transferPatient.js');

module.exports = function(app){

  app.get('/get_hospitals', function(req, res){
    queryHospitals.get_hospitals(req, res);
  });

  app.get('/get_doctors', function(req, res){
    queryDoctors.get_doctors(req, res);
  });

  app.get('/get_patients', function(req, res){
    queryPatients.get_patients(req, res);
  });

  app.get('/get_reports', function(req, res){
    queryReports.get_reports(req, res);
  });

  app.get('/add_hospital/:hospital', function(req, res){
    createHospital.add_hospital(req, res);
  });

  app.get('/add_doctor/:doctor', function(req, res){
    createDoctor.add_doctor(req, res);
  });

  app.get('/add_patient/:patient', function(req, res){
    createPatient.add_patient(req, res);
  });

  app.get('/add_report/:report', function(req, res){
    createReport.add_report(req, res);
  });

  app.get('/query/:id', function(req, res){
    query.query(req, res);
  });
  app.get('/transfer_patient/:transfer', function(req, res){
    transferPatient.transfer_patient(req, res);
  });
}
