let angkaAcak = Math.floor(Math.random() * 100) + 1;

let tebakBenar = false;

let attempts = 0;

while (!tebakBenar){
    let user = prompt('Tebak Angka dari 1 sampai 10');

    user = Number(user)

    attempts++;

    //jika benar
    if(user == angkaAcak){
        alert(`selamat kamu berhasil menebak dalam ${attempts} percobaan`)
        tebakBenar = true;
    }else if(user < angkaAcak){
        alert('Wah angkanya terlalu rendah, coba lagi')
    }else if(user > angkaAcak){
        alert('Angka kamu ketinggian coba lagi')
    }
}