const {expect} = require('chai')
const {ActualColorCodePairs} = require('./actualColorcodePair')
var colorCodePairList = [];

var majorColors = ["White ", "Red ", "Black ", "Yellow", "Violet"];
var minorColors = ["Blue ", "Orange", "Green ", "Brown ", "Slate "];

function print_color_map() {
  for (let i = 0; i < majorColors.length; i++) {
     for (let j=0; j < minorColors.length; j++) { 
         colorCodePairList.push(`${i* 5 + j} | ${majorColors[i]} | ${minorColors[j]}`); }
         } 
         return majorColors.length * minorColors.length;
 } 
 
 function printColorCodeMisalignementTest() { 
     var longestColorCodePairValue=colorCodePairList.reduce( function
    (previousColorCodePairValue, currentColorCodePairValue) { 
        return previousColorCodePairValue.length> currentColorCodePairValue.length ? previousColorCodePairValue : currentColorCodePairValue;

    }

    );
    colorCodePairList.forEach(eachColourCodePairValue => {
    expect(eachColourCodePairValue.length).equals(longestColorCodePairValue.length)
    })

    }

    function falseColorPairTest() {
    var comparedColorCodePairResult = colorCodePairList.length && ActualColorCodePairs.length &&
    colorCodePairList.every(function(colourPair, index){
    return colourPair === ActualColorCodePairs[index]
    })

    expect(comparedColorCodePairResult).equals(true);
    }

    result = print_color_map();
    expect(result).equals(25);
    printColorCodeMisalignementTest();
    console.log('All is well (maybe!)');
    falseColorPairTest();