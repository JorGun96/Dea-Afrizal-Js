document.getElementById('addTaskButton').addEventListener('click', function() {
    
    // Ambil nilai dari input field
    let taskInput = document.getElementById('taskInput');
    let taskText = taskInput.value.trim();

    // Pastikan input tidak kosong
    if (taskText !== "") {
        // Buat elemen li baru
        let li = document.createElement('li'); // Perbaikan typo dari "docuement"
        li.textContent = taskText;

        // Tambahkan event listener untuk menandai tugas sebagai selesai
        li.addEventListener('click', function() {
            li.classList.toggle('complete');
        });

        // Buat tombol hapus
        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete-btn';

        // Tambahkan event listener untuk menghapus tugas
        deleteBtn.addEventListener('click', function() {
            li.remove();
        });

        // Masukkan tombol hapus ke dalam li
        li.appendChild(deleteBtn);

        // Masukkan li ke dalam ul (task list)
        document.getElementById('taskList').appendChild(li);

        // Kosongkan input field
        taskInput.value = '';
    } else {
        alert("Please enter a task");
    }
});
