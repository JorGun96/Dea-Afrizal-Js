document.getElementById('heightButton').addEventListener('click', function() {
    let height = document.getElementById('heightInput').value;
    let type = document.getElementById('conversionType').value;
    let result = '';

    //Memastikan Placeholder di isi
    if(height === ''){
        alert('Please Input the Number!!');
        return;
    }

    //mengubah input jadi angka
    height = parseFloat(height);

    if(type === 'MtoKM'){
        result = height / 1000;
        result = `${height} Meter = ${result} Kilometer`;
    }else if(type === 'KMtoM'){
        result = height * 1000;
        result = `${height} Kilometer = ${result} Meter`;
    }

    document.getElementById('result').textContent = result;

});