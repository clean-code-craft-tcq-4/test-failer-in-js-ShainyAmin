const {expect} = require('chai');

function size(cms) {
    // console.log("isNaN: ",typeof cms,cms)
    if((typeof cms) != 'string')
   { 
    console.log("isNaN: ",typeof cms,cms)
       if (cms <= 38) {
        return 'S';
    } else if (cms > 38 && cms < 42) {
        return 'M';
    } else {
        return 'L';
    }}
    else{
        return 'NaN';
    }
}

expect(size(37)).equals('S');
expect(size(38)).equals('S');
expect(size('38')).equals('NaN')
expect(size(40)).equals('M');
expect(size(43)).equals('L');
console.log('All is well (maybe!)');
