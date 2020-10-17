const map = L.map('mapid').setView([-12.2588122,-38.9642765], 14);

//create and add tileLayer 13.84z
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
})

let marker

//create and add marker
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    //remove icon
    marker && map.removeLayer(marker);

    // add icon layer
    marker = L.marker([lat, lng], {icon}).addTo(map);
})

// adiciona o campo de fotos
function addPhotoField() {
    // Pegar o container de fotos id #images
    const container = document.querySelector('#images');
    // pegar o container para duplicar class .new-image
    const fieldsContainer = document.querySelectorAll('.new-upload');
    // realizar o clone da última imagem adicionada (duplicação)
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true);

    // verifica se o input está vazio, se sim, não adicioanr ao console de imagens
    const input = newFieldContainer.children[0];

    if(input.value == "") {
        return;
    }
    // limpar o campo antes de adicionar ao container de imagens
    input.value = "";

    // adicionar o clone ao container de #images
    container.appendChild(newFieldContainer);
}


function deleteField(event) {
    const span = event.currentTarget;

    const fieldsContainer = document.querySelectorAll('.new-upload');

    if(fieldsContainer.length <= 1) {
        //limpar o valor do campo
        span.parentNode.children[0].value = "";
        return;
    }

    // deletar o campo
    span.parentNode.remove();
}

// seleção do sim e não (funciona fim de semana?)
function toggleSelect(event) {
    // retirar a class .active (dos dois buttons)
    document.querySelectorAll('.button-select button')
        .forEach( button => {
            button.classList.remove('active');
        });
        
    // colocar class .active
    const button = event.currentTarget;
    button.classList.add('active');

    // att o meu input hidden com o valor selecionado
    const input = document.querySelector('[name="open_on_weekends"]');
    
    input.value = button.dataset.value;

    // verificar se sim ou não
    

    //pegar o button clicado

}

function validate(event) {
    /*var lat = document.querySelector('[name=lat]').value = lat;
    var lng = document.querySelector('[name=lng]').value = lng;
    
    if(lat == "" && lng == "") {
        alert('Selecione um ponto no mapa')
        event.preventDefault()
    }*/
}