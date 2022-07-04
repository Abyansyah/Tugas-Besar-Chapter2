function hasil() {
  var nama = document.getElementById('nama').value;
  var telepon = document.getElementById('telepon').value;

  var pilih = document.getElementById('pilih').value;

  var pesan = document.getElementById('pesan').value;

  if (nama != '' && pilih != '' && telepon != '' && pesan != '') {
    Swal.fire({
      title: 'Apakah kamu yakin?',
      text: 'Data kamu' + '\n' + 'Nama Kamu : ' + nama + '\n' + 'Pilihan : ' + pilih + '\n' + 'Telepon : ' + telepon + '\n' + ' Pesan : ' + pesan,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Berhasil', 'Pesan anda telah terkirim', 'success');
        document.getElementById('nama').value = '';
        document.getElementById('telepon').value = '';
        document.getElementById('pilih').value = '';
        document.getElementById('pesan').value = '';
      }
    });

    return true;
  } else {
    Swal.fire('Anda belum mengisi', 'Isi dulu ya', 'warning');
  }
}
