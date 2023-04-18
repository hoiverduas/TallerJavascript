function cambiarTema() {
	var temaSeleccionado = document.getElementById("temas").value;
	document.body.className = temaSeleccionado;
}

const acordions = document.querySelectorAll('.acordion');

acordions.forEach(acordion => {
  acordion.addEventListener('click', () => {
    acordion.classList.toggle('active');
    const panel = acordion.nextElementSibling;
    if (panel.style.display === 'block') {
      panel.style.display = 'none';
    } else {
      panel.style.display = 'block';
    }
  });
});


  