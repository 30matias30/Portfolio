function newTab(elemento) {

    const url = elemento.getAttribute('data-url');
    window.open(url, '_blank');
}