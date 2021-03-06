const {alertInCelcius} = require('../Alerter/alerter');
const {networkAlertStub} = require('./networkStub');

const {expect} = require('chai');

let threshold = 100;
let actualAlertFailureCount = 0;

function testAlerter(farenheit) {
    const celcius = (farenheit - 32) * 5 / 9;
    if(celcius <= threshold){
        return 200;
    }
    else {
        actualAlertFailureCount += 1;
        return 500;
    }

}

expect(networkAlertStub(250)).equals(testAlerter(250));
 expect(alertInCelcius(250)).equals(actualAlertFailureCount);


