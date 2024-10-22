//alert("Hello World");
//prompt(`please insert your name`);

/*Variable 
Let
Var
Const
*/

/*
Type Data
String
char
integer
double float

*/

/* 
let nama = prompt('What is your name?');
let usia = prompt('How old are you?');

alert('Your name is ' + nama + '' + ' and your age is ' + usia);
*/



/*if else Condition
if (pacar == null){
    pacar = "i dont have girlfriend"
}else{
    "I have girlfriend"
}
*/

/*
let height = 178
let weight = 100
let pacar = 2

switch (pacar){
    case 1:
        pacar = "I have One"
        break
    case 2:
        pacar = "I have 2 hehe Threesome"
        break
    case 3:
        pacar = "I'm Harem"
}

alert(`your weight is ${weight}kg, your height ${height}cm and ${pacar}`)

*/

/*
let saldoAwal = 100000
let saldoAkhir = 20000

const saldoPengurangan = saldoAwal - saldoAkhir

alert (`saldo saya semula ada Rp${saldoAwal} lalu saldo saya sekarang ini Rp${saldoAkhir} maka pengurangan saya sejumlah Rp${saldoPengurangan}`)

*/

/*Array
let teacherName = ['Michael', 'John', 'Mia', 'Mitchel']
teacherName.push('sonia', 'gloria', 'serena')
teacherName.shift()
teacherName.pop()
alert(teacherName)
*/

/*Looping

//for Loop
let number = ['1', '2', '3', '4', '5']
for (let i = 0; i<= number.length; i++){
console.log(number[i])
}

*/

/*
//while loop
let i = 0
do{
    i++
    console.log('Bruh')
}while(i < 10)
*/


//Tugas Kecil
let saldoAwal = prompt('Masukan Saldo Awalmu')
let saldoPengeluaran = prompt('Berapa Pengeluaranmu Hari ini?')
const saldoAkhir = saldoAwal - saldoPengeluaran
alert(`Total Pengeluaranmu Hari ini ialah ${saldoAkhir}`)

let hari = new Date().getDay();
console.log(`Hari ini adalah Hari ${["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"][hari]}`);









