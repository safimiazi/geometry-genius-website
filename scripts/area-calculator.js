function calculateTriangleArea(){
    //get triangle base value
    const baseField = document.getElementById('triangle-base');
    const baseText = baseField.value;
    const base = parseFloat(baseText);
    console.log(base)

    //get triangle height value
    const heightField = document.getElementById('triangle-height');
    const heightText = heightField.value;
    const height = parseFloat(heightText);
    console.log(height)

    //get area
    const area = 0.5 * base * height;
    console.log(area)

    //get the element value of triangle area
    const areaSpan = document.getElementById('triangle-area');
    areaSpan.innerText = area;

}


function calculateRectangleArea(){
    //get rectangle width value 
    const widthField = document.getElementById('rectangle-width');
    const widthText = widthField.value;
    const width = parseFloat(widthText);
    console.log(width)

    //get rectangle length value
const lengthField = document.getElementById('rectangle-length');
const lengthText = lengthField.value;
const length = parseFloat(lengthText)
console.log(length);

const area = width * length;
console.log(area)
//show rectangle area
const rectangleAreaSpan = document.getElementById('rectangle-area');
rectangleAreaSpan.innerText = area;
}

function calculateEllipseArea(){
const majorRadius = getInputValue('ellipse-major-radius');
const minorRadius = getInputValue('ellipse-minor-radius');
const area = 3.14 * majorRadius * minorRadius;
const areaTwoDecimal = area.toFixed(2);
setElementInnerText('ellipse-area', areaTwoDecimal)
}

//reusable function --> reduce duplicate code 
function calculateParallelogramArea(){
//    const base = document.getElementById('parallelogram-base');
     const base = getInputValue('parallelogram-base')
   const height = getInputValue('parallelogram-height');
   const area = base * height;
   setElementInnerText('parallelogram-area', area)
}

function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText)
    return value;
}

function setElementInnerText(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}


