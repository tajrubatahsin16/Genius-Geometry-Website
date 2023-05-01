function getAreaValue(inputOne, inputTwo, outputOne, appendOne, appendTwo){
    const inOne = document.getElementById(inputOne);
    const inOneValue = inOne.value;
    const inTwo = document.getElementById(inputTwo);
    const inTwoValue = inTwo.value;

    const resultField = document.getElementById(outputOne);

    if(Math.sign(inOneValue) === 1 && Math.sign(inTwoValue) === 1){
        const Area = 0.5 * inOneValue * inTwoValue;

        const li = document.createElement('li');

        li.append(appendOne);
        li.appendChild(document.createTextNode(Area));
        resultField.appendChild(li);
        li.append(appendTwo);
        li.style.display = 'inline-block';
        li.style.marginTop = '12px';


        const button = document.createElement("button");
        button.type = 'button';
        button.innerHTML = "Convert To m²";
        var container = document.getElementById('result-list');
        container.appendChild(button);
        button.style.backgroundColor = 'rgb(14, 165, 233)';
        button.style.color = 'white';
        button.style.borderRadius = '5px';
        button.style.display = 'inline-block';
        button.style.marginLeft = '50px';
        button.style.marginTop = '12px';

    }
    else{
        alert('Please, give valid input');
    }
}

// GETTING TRIANGLE AREA
document.getElementById('btn-triangle').addEventListener('click', function(){
    getAreaValue('base-field', 'height-field', 'result-list', 'Triangle  ', "cm²");
});


// GETTING RHOMBUS AREA
document.getElementById('btn-rhombus').addEventListener('click', function(){
    getAreaValue('diagonalOne-field', 'diagonalTwo-field', 'result-list', 'Rhombus  ', "cm²");
});


// GETTING PENTAGON AREA
document.getElementById('btn-pentagon').addEventListener('click', function(){
    getAreaValue('p-field', 'b-field', 'result-list', 'Pentagon  ', "cm²");
});