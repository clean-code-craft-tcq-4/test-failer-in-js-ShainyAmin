const threshold = 100;
function networkAlertStub(celcius) {
    console.log(`Alert! Temperature is ${celcius} degrees`);
    if(celcius <= threshold){
        return 200;
    }
    else {
       
        return 500;
    }

  
}
module.exports= { networkAlertStub }