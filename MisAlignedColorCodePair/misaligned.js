const {expect} = require('chai')

var colorCodePairList = [];

var majorColors = ["White", "Red", "Black", "Yellow", "Violet"];
var minorColors = ["Blue ", "Orange", "Green ", "Brown ", "Slate "];

const longestMajorColorsString = majorColors.reduce( function
    (previousMajorColorsValue, currentMajorColorsValue) { 
        return previousMajorColorsValue.length> currentMajorColorsValue.length ? previousMajorColorsValue.length : currentMajorColorsValue.length;
 
    }
 
    );
const longestMinorColorsString = minorColors.reduce( function
        (previousMinorColorsValue, currentMinorColorsValue) { 
            return previousMinorColorsValue.length> currentMinorColorsValue.length ? previousMinorColorsValue.length : currentMinorColorsValue.length;
     
        }
     
        );
    

function addBlankSpace(totalBlankSpace, sampleString){
    for(i = 0; i<totalBlankSpace;i++){
        sampleString = sampleString+' '
    }
    return sampleString;
}

function correctMisalingendString(stringArray, longeststringArrayLength) {
    var newStringArray = []
    stringArray.forEach(stringValue => {
        var stringValueLength = stringValue.length;
        var lengthDifference = longeststringArrayLength - stringValueLength;
        newStringArray.push(addBlankSpace(lengthDifference, stringValue))
    })
    return newStringArray;

}

function print_color_map() {
    majorColors = correctMisalingendString(majorColors, longestMajorColorsString);
    minorColors = correctMisalingendString(minorColors, longestMinorColorsString)
  for (let i = 0; i < majorColors.length; i++) {
     for (let j=0; j < minorColors.length; j++) { 
         var longestPairNumberLength = ((majorColors.length * minorColors.length).toString()).length;
         var pairNumber = (((i* (minorColors.length) + j)+1).toString()).length
         console.log('longestPairNumberLength: ',longestPairNumberLength, pairNumber)
          if(longestPairNumberLength == pairNumber)
          {
              colorCodePairList.push(`${((i* (minorColors.length) + j)+1)} | ${majorColors[i]} | ${minorColors[j]}`); 
          }
          else {
              var differenceLength = longestPairNumberLength - pairNumber;
              var newPairNumber = addBlankSpace(differenceLength, ((i* (minorColors.length) + j)+1).toString());
              colorCodePairList.push(`${newPairNumber} | ${majorColors[i]} | ${minorColors[j]}`); 

          }
         }
        } 

         return majorColors.length * minorColors.length;
 } 

 print_color_map();
 console.log("colorCodePairList: ",colorCodePairList)
 
 module.exports= { colorCodePairList};

    //  result = print_color_map();
    //  console.log("addSpace: ", addBlankSpace(2, 'Apple'),"|")
    //  console.log(colorCodePairList)
    // // expect(result).equals(25);
    // // printColorCodeMisalignementTest();
    // // console.log('All is well (maybe!)');
    // // falseColorPairTest();