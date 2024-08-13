const buttonDOM = document.querySelector('button');
const pDOM = document.querySelector('p');
const url = "https://api.chucknorris.io/jokes/random"

buttonDOM.addEventListener('click', getJoke);

function getJoke() {
    fetch(url).then(res => res.json())
        .then(data => pDOM.innerHTML = data.value)
}