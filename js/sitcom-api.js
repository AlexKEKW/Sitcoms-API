let index;

function consultaSitcom() {
    let sitcom = document.getElementById('inputSitcom').value

    const index = parseInt(sitcom);
    if (isNaN(index) || index >= 23 || index === 0) {
        alert("Consulta inválida. Consulte a documentação do projeto para saber por quais índices você pode buscar.");
        return;
    }


    let url = `http://localhost:3000/sitcoms/${sitcom}`

    fetch(url)
        .then(function (response) {
            response.json()
                .then(function (data) {
                    console.log(data)
                    mostrarSitcom(data)
                })
        })
        .catch(function (error) {
            console.log(error);
        });
}

function mostrarSitcom(data) {

    let resultado = document.querySelector('#resultado')

    resultado.innerHTML = `<h4>Sitcom: ${data}</h4>`
}
