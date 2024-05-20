// Mengambil elemen dengan id "display" dari HTML dan menyimpannya ke dalam variabel display
const display = document.getElementById("display");

// Fungsi untuk menambahkan input ke dalam nilai yang ditampilkan
function appendToDisplay(input) {
  display.value += input; // Menambahkan input ke dalam nilai yang sudah ada pada display
}

// Fungsi untuk membersihkan nilai yang ditampilkan
function clearDisplay() {
  display.value = ""; // Mengosongkan nilai yang ditampilkan pada display
}

// Fungsi untuk menghitung nilai yang ditampilkan
function calculate() {
  try {
    display.value = eval(display.value); // Menghitung nilai yang ada pada display menggunakan fungsi eval() dan menampilkan hasilnya
  } catch (error) {
    display.value = "Error"; // Jika terjadi error dalam evaluasi, menampilkan pesan error
  }
}

// Fungsi untuk menghapus karakter terakhir dari nilai yang ditampilkan
function deleteLastCharacter() {
  display.value = display.value.slice(0, -1); // Menghapus karakter terakhir dari nilai yang ditampilkan pada display
}
