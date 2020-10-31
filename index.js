$(document).ready(function () {

    var date = moment().subtract(10, 'days').calendar();
    var day = moment().format('dddd');
    var currentHour = moment().format('h');
    var currentAMPM = moment().format('A');
    var saveButton = $('button');
    var scheduldEvent;
