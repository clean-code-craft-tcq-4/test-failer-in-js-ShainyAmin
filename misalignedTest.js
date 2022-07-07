const {colorCodePairList} = require('./MisAlignedColorCodePair/misaligned');
const {ActualColorCodePairs} = require('./MisAlignedColorCodePair/actualColorcodePair')
const {expect} = require('chai')

function printColorCodeMisalignementTest() { 
    console.log("printColorCodeMisalignementTest: ", colorCodePairList)
    
    var longestColorCodePairValue = colorCodePairList.reduce( function
   (previousColorCodePairValue, currentColorCodePairValue) { 
       return previousColorCodePairValue.length> currentColorCodePairValue.length ? previousColorCodePairValue : currentColorCodePairValue;

   }

   );
   colorCodePairList.forEach(eachColourCodePairValue => {
   expect(eachColourCodePairValue.length).equals(longestColorCodePairValue.length)
   })

   }

   function falseColorPairTest() {
    console.log("falseColorPairTest: ", colorCodePairList)
   var comparedColorCodePairResult = colorCodePairList.length && ActualColorCodePairs.length &&
   colorCodePairList.every(function(colourPair, index){
   return colourPair === ActualColorCodePairs[index]
   })

   expect(comparedColorCodePairResult).equals(true);
   }

   printColorCodeMisalignementTest();
   falseColorPairTest();