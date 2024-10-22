document.getElementById('countButton').addEventListener('click', function() {
    // Ambil teks dari textarea
    let text = document.getElementById('textInput').value.trim();

    // Memisahkan kata-kata berdasarkan spasi
    let wordsArray = text.split(/\s+/);  // Memisahkan kata berdasarkan spasi

    // Menghitung jumlah kata, filter kata kosong jika ada
    let wordCount = wordsArray.filter(function(word) {
        return word.length > 0;
    }).length;

    // Menampilkan hasil
    document.getElementById('result').textContent = `Total words: ${wordCount}`;
});