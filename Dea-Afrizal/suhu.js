document.getElementById('convertButton').addEventListener('click', function(){
    let tempt = document.getElementById('temperatureInput').value;
    let type = document.getElementById('conversionType').value;
    let result = '';

    //make sure temperature is not empty
    if(tempt === ''){
        alert ('Please Input the Number');
        return;
    }
    
    //Change input to number
    tempt = parseFloat(tempt);

    //Type of converstion
    if(type === 'CtoF'){
        result = (tempt * 9/5) + 32;
        result = `${tempt}°C = ${result.toFixed(2)}°F`;
    }else if(type === 'FtoC'){
        result = (tempt - 32) * 5/9;
        result = `${tempt}°F = ${result.toFixed(2)}°C`;
    }

    document.getElementById('result').textContent = result;
});