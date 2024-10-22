document.querySelector('.addBook').addEventListener('click', function(){
    let book = document.querySelector('.bookTitle');
    let author = document.querySelector('.bookAuthor');
    let li = document.createElement('li');

    let taskText = book.value.trim() + " by " + author.value.trim();

    // Memastikan input tidak kosong
    if (book.value !== "" && author.value !== "") {
        li.textContent = taskText;

        // Menambahkan kelas selesai saat diklik
        li.addEventListener('click', function(){
            li.classList.toggle('complete');
        });

        // Membuat tombol hapus
        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete-btn';

        // Fungsi untuk menghapus buku
        deleteBtn.addEventListener('click', function(){
            li.remove();
        });

        // Memasukkan tombol hapus ke dalam li
        li.append(deleteBtn);

        // Memasukkan li ke dalam ul
        document.querySelector('.xbookList').appendChild(li);

        // Mengosongkan input
        book.value = '';
        author.value = '';

    } else {
        alert('Please input the Book Title and Author');
    }
});
