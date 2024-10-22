document.getElementById('weightButton').addEventListener('click', function(){
    let weight = document.getElementById('weightInput').value;
    let type = document.getElementById('conversionType').value;
    let result = '';

    if(weight === ''){
        alert('Please input the Number');
        return;
    }

    weight = parseFloat(weight);

    if(type === 'KGtoG'){
        result = weight * 1000;
        result = `${weight} KG = ${result} G`;
    }else if(type === 'GtoKG' ){
        result = weight / 1000;
        result = `${weight} G = ${result} KG`;
    }

    document.getElementById('result').textContent = result;
})