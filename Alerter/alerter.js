const {networkAlertStub} = require('./networkStub')

let alertFailureCount = 0;


function alertInCelcius(farenheit) {
    const celcius = (farenheit - 32) * 5 / 9;
    const returnCode = networkAlertStub(celcius);
    if (returnCode != 200) {
        // non-ok response is not an error! Issues happen in life!
        // let us keep a count of failures to report
        // However, this code doesn't count failures!
        // Add a test below to catch this bug. Alter the stub above, if needed.
        
        alertFailureCount += 1;
        console.log("alertFailureCount: ", alertFailureCount);
    }
    else {
        alertFailureCount=0;
        console.log("alertFailureCount: ", alertFailureCount);
    }
    return alertFailureCount;
}

// alertInCelcius(400.5);
// alertInCelcius(303.6);
console.log(`${alertFailureCount} alerts failed.`);
console.log('All is well (maybe!)');
module.exports= {  alertInCelcius};

