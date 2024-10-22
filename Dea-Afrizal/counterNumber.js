// Ambil elemen textarea dan elemen counter
const textInput = document.getElementById('textInput');
const counter = document.querySelector('.counter');

// Tambahkan event listener pada textarea untuk mendeteksi input
textInput.addEventListener('input', function() {
    // Ambil panjang teks yang sudah diketik
    const textLength = textInput.value.length;

    // Update elemen counter dengan jumlah karakter
    counter.textContent = `Jumlah karakter: ${textLength}`;
});
