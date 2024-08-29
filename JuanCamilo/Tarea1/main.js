const url = 'https://randomuser.me/api/';
const boton = document.getElementById('boton')
const contenido = document.querySelector('#contenido');



const mostrarData = async() =>{
    const res = await fetch(url);
    const data = await res.json();
    console.log(data)
    contenido.innerHTML = `<img src='${data.results[0].picture.large}'>
                            <p>${data.results[0].cell}</p>
                            <p>${data.results[0].email}</p>
                            <p>${data.results[0].gender}</p>
                            <p>${data.results[0].name.first} ${data.results[0].name.last}</p>
`
}

boton.addEventListener('click', mostrarData); 

