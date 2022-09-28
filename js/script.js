//Country Flags API
//https://countryflagsapi.com/png/br

//Variaveis
const seach = document.querySelector('#seach')
const inputBusca = document.querySelector('#input-busca');
const bandeira = document.querySelector('#bandeira')
const mostra = document.querySelector('#mostra');



//Evento
seach.addEventListener('click', () => {
    const country = inputBusca.value;
    const URL = `https://countryflagsapi.com/png/${country}`;
    bandeira.setAttribute("src", URL);

    if(country === "" ){
        console.log('erro!');
        alert('Erro na pesquisa')
    }

    mostra.classList.add('hide')
    console.log(country);
})


inputBusca.addEventListener('keyup', (e) => {
    if (e.code === "Enter"){
        const country = inputBusca.value;
    const URL = `https://countryflagsapi.com/png/${country}`;
    bandeira.setAttribute("src", URL);

    if(country === "" ){
        console.log('erro!');
        alert('Erro na pesquisa')
    }

    mostra.classList.add('hide')
    console.log(country);
    }
})