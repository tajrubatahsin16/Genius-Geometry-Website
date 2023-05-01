function getAreaValueSecond(inputOne, inputTwo, outputOne, appendOne, appendTwo){
    const inOne = document.getElementById(inputOne);
    const inOneValue = inOne.value;
    const inTwo = document.getElementById(inputTwo);
    const inTwoValue = inTwo.value;

    const resultField = document.getElementById(outputOne);

    if(Math.sign(inOneValue) === 1 && Math.sign(inTwoValue) === 1){
        const Area = (3.1416 * inOneValue * inTwoValue).toFixed(2);

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

// GETTING ELLIPSE AREA
document.getElementById('btn-ellipse').addEventListener('click', function(){
    getAreaValueSecond('a-field', 'b1-field', 'result-list', 'Ellipse  ', "cm²");
});