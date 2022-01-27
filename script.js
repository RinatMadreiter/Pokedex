let currentPokemon;
let amountOfDigitsInID = 3;
let typeColors = [
    {
        "type": "Grass",
        "color": "#7fd530d1"
    },
    {
        "type": "Fire",
        "color": "#e73820c7"
    },
    {
        "type": "Water",
        "color": "#8ae9ffd9"
    },
    {
        "type": "Bug",
        "color": "#468366a6"
    },
    {
        "type": "Normal",
        "color": "#c3cacd59"
    },
    {
        "type": "Poison",
        "color": "#937ce99c"
    },
    {
        "type": "Electric",
        "color": "#ffe100"
    },
    {
        "type": "Ground",
        "color": "#dcc200d6"
    },
    {
        "type": "Fairy",
        "color": "#f9dad9b3"
    },
    {
        "type": "Fighting",
        "color": "#a3611c61"
    },
    {
        "type": "Psychic",
        "color": "#ee848c94"
    },
    {
        "type": "Rock",
        "color": "#88878080"
    },
    {
        "type": "Ghost",
        "color": "#664497a6"
    },
    {
        "type": "Ice",
        "color": "#84cdf7c9"
    },
    {
        "type": "Dragon",
        "color": "#f9be00d6"
    }
]

/**
 * define variables: audios
 * lower the volume of all audios to 30%
 */
let audioTheme = new Audio('./sounds/themesong.mp3');
audioTheme.volume = 0.05;

async function loadPokemon() {
    let i = 1;
    for (i = 1; i <= 30; i++) {

        let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        let response = await fetch(url);
        currentPokemon = await response.json(); //response as JSON
        createPokemonCardHTML(i);
        renderPokemonInfo(i, currentPokemon);
        capitalizeFLetterName(i, currentPokemon);
        capitalizeFLetterType(i, currentPokemon);
        let currentID = currentPokemon['id'];
        addLeadingZerosToID(currentID, amountOfDigitsInID)
        updateID(i, currentID);
        styleCardAccordingToType(i);
    }
}


async function loadClickedPokemonAsJson(clickedPokemon) {
    let j = clickedPokemon;
    let url = `https://pokeapi.co/api/v2/pokemon/${j}`;
    let response = await fetch(url);
    currentClickedPokemon = await response.json();
    renderSinglePokemonUpperPart(currentClickedPokemon);
    renderSinglePokemonLowerPart(currentClickedPokemon);
}

function renderSinglePokemonUpperPart(clickedPokemon) {
    let currentPokemonImg = clickedPokemon['sprites']['other']['dream_world']['front_default'];
    document.getElementById(`single-pokemoncard-view-img`).src = currentPokemonImg;
    document.getElementById(`single-pokemoncard-view-name`).innerHTML = clickedPokemon['name'];
    document.getElementById(`single-pokemoncard-view-type`).innerHTML = clickedPokemon['types'][0]['type']['name'];
    document.getElementById(`single-pokemoncard-view-id`).innerHTML = `#${clickedPokemon['id']}`;
    capitalizeFLetterNameSinglePokemon(clickedPokemon);
    capitalizeFLetterTypeSinglePokemon(clickedPokemon);
    renderSinglePokemonID(clickedPokemon);
    styleCardAccordingToTypeSingle();
    
}


function renderSinglePokemonLowerPart(currentClickedPokemon) {
    renderSinglePokemonStats(clickedPokemon);
}

function renderSinglePokemonStats(clickedPokemon) {
    createSinglePokemonStatsVariables(clickedPokemon)
}

function createSinglePokemonStatsVariables(clickedPokemon) {
    let currentPokemonHp = clickedPokemon['stats']['0']['base_stat'];
    let currentPokemonAttack = clickedPokemon['stats']['1']['base_stat'];
    let currentPokemonDefense = clickedPokemon['stats']['2']['base_stat'];
    let currentPokemonSpecialattack = clickedPokemon['stats']['3']['base_stat'];
    let currentPokemonSpecialdefense = clickedPokemon['stats']['4']['base_stat'];
    let currentPokemonSpeed = clickedPokemon['stats']['5']['base_stat'];
}

function displayKlickedPokemon(clickedPokemon) {
    loadClickedPokemonAsJson(clickedPokemon);
    document.getElementById('single-pokemon-view').classList.remove('d-none');
    document.getElementById('single-pokemoncard-view').classList.remove('animate-zoom-out');
    document.getElementById('single-pokemoncard-view').classList.add('animate-zoom-in');
}

function closeClickedPokemon() {
    document.getElementById('single-pokemoncard-view').classList.remove('animate-zoom-in');
    document.getElementById('single-pokemoncard-view').classList.add('animate-zoom-out');
    setTimeout(hideSinglePokemonView, 480);
}

function hideSinglePokemonView() {
    document.getElementById('single-pokemon-view').classList.add('d-none');
}



function createPokemonCardHTML(currentNumber) {
    let pokemonCardsContainer = document.getElementById('pokemon-cards-container');
    pokemonCardsContainer.innerHTML += `
    <div class="pokemon-card" id="pokemon-card${currentNumber}" onclick="displayKlickedPokemon(${currentNumber})">
        <div class="pokemon-id-number" id= "pokemon-id${currentNumber}"></div>
        <div class="pokemon-name" id="pokemonName${currentNumber}">Name</div>
        <div class="pokemon-img-type-container">
            <div class="type-container" >
                <span id="type${currentNumber}"></span>
            </div>
            <div class="img-container">
                <img id="pokemonMainImg${currentNumber}" class="pokemon-img"></img>
            </div>
        </div>
    </div>`;
}


function renderPokemonInfo(currentNumber, currentPokemon) {
    let currentPokemonImg = currentPokemon['sprites']['other']['dream_world']['front_default'];
    document.getElementById(`pokemonMainImg${currentNumber}`).src = currentPokemonImg;
    document.getElementById(`pokemonName${currentNumber}`).innerHTML = currentPokemon['name'];
    document.getElementById(`type${currentNumber}`).innerHTML += currentPokemon['types'][0]['type']['name'];
    document.getElementById(`pokemon-id${currentNumber}`).innerHTML = `#${currentPokemon['id']}`;
}


function styleCardAccordingToType(currentNumber) {
    let currentType = document.getElementById(`type${currentNumber}`);
    let currentPokemonCard = document.getElementById(`pokemon-card${currentNumber}`);
    for (let index = 0; index < typeColors.length; index++) {
        if (currentType.innerHTML == typeColors[index]['type']) {
            currentPokemonCard.style.backgroundColor = typeColors[index]['color'];
        }
    }
}

function styleCardAccordingToTypeSingle() {
    let currentType = document.getElementById(`single-pokemoncard-view-type`);
    let clickedPokemonUpperPart = document.getElementById(`single-pokemon-upper-part`);
    for (let index = 0; index < typeColors.length; index++) {
        if (currentType.innerHTML == typeColors[index]['type']) {
            clickedPokemonUpperPart.style.backgroundColor = typeColors[index]['color'];
        }
    }
}


function capitalizeFLetterName(currentNumber, currentPokemon) {
    let input = document.getElementById(`pokemonName${currentNumber}`);
    let string = currentPokemon['name'];
    input.innerHTML = string[0].toUpperCase() +
        string.slice(1);
}

function capitalizeFLetterNameSinglePokemon(clickedPokemon) {
    let input = document.getElementById(`single-pokemoncard-view-name`);
    let string = clickedPokemon['name'];
    input.innerHTML = string[0].toUpperCase() +
        string.slice(1);
}

function capitalizeFLetterType(currentNumber, currentPokemon) {
    let input = document.getElementById(`type${currentNumber}`);
    let string = currentPokemon['types'][0]['type']['name'];
    input.innerHTML = string[0].toUpperCase() +
        string.slice(1);
}


function capitalizeFLetterTypeSinglePokemon(clickedPokemon) {
    let input = document.getElementById(`single-pokemoncard-view-type`);
    let string = clickedPokemon['types'][0]['type']['name'];
    input.innerHTML = string[0].toUpperCase() +
        string.slice(1);
}

function updateID(currentNumber, currentID) {
    let updatedID = addLeadingZerosToID(currentID, amountOfDigitsInID);
    document.getElementById(`pokemon-id${currentNumber}`).innerHTML = `#${updatedID}`;
}


function updateSingleID(SinglecurrentID) {
    let updatedID = addLeadingZerosToID(SinglecurrentID, amountOfDigitsInID);
    document.getElementById(`single-pokemoncard-view-id`).innerHTML = `#${updatedID}`;
}

function addLeadingZerosToID(num, size) {
    num = num.toString();
    while (num.length < size) num = "0" + num;
    return num;
}


function renderSinglePokemonID(clickedPokemon) {
    let SinglecurrentID = clickedPokemon['id'];
    addLeadingZerosToID(SinglecurrentID, amountOfDigitsInID)
    updateSingleID(SinglecurrentID);
}

function playTheme() {
    audioTheme.play();
}

function stopTheme() {
    audioTheme.pause();
}

/**
 * todo: first letter pokemonName uppercase, helpful tutorial> https://www.geeksforgeeks.org/how-to-make-first-letter-of-a-string-uppercase-in-javascript/
 * Todo: Show in for-loop 1)Name 2)Type 3)IMG 4)ID done
 
 * Todo change Colors according to the type: 1) Grass 2) Fire 3) Water 4) Bug 5) Normal 6) Poison 7) Electric 8) Ground 9) Fairy 10)Fighting 11) Psychic 12) Rock 13) Ghost 14) Ice 15) Dragon Done
 * Todo: add background-music pokemon theme
 * 
 * 
 * 
 */