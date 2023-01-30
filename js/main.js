function cambiar(imagen){
    let img = document.querySelector('img');
    let titulo = document.querySelector('#titulo');
    img.style.width="20%";
    switch (imagen) {
        case 1:
            img.src = "./img/1.jpg";
            titulo.style.color="red";
            break;
        case 2:
            img.src = "./img/2.jpg";
            titulo.style.color="green";
            break;
        case 3:
            img.src = "./img/3.jpg";
            titulo.style.color="blue";
            break;
        default:
            alert(imagen)        
    }
}