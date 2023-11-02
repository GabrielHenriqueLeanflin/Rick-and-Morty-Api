const characterContainer = document.querySelector('.character-container');
const searchInput = document.querySelector('#search');
const statusFilter = document.querySelector('#status');
const genderFilter = document.querySelector('#gender');


const   API= 'https://rickandmortyapi.com/api'

const defaultFilters = {
    name: '',
    status: '',
    gender: '',
}

async function getCharacters({ name, status, gender}) {
    const response = await fetch (`${API}/character?name=${name}&status=${status}&gender=${gender}`)

    const characters = await response.json()   
    return characters.results
}

async function render({characters}) {
    characters.forEach((character) => {

        return characterContainer.innerHTML += `
        <div class="character">
        <img src="${character.image}" alt="">
        <div class="character-info">
            <h3>${character.name}</h3>
            <span>${character.status}</span>
        </div>
        <a href="char.html"> <input type="button" class="button" value="Ver mais"></a>
        </div>
        `
    })
}

statusFilter.addEventListener('change', async (event) => {
    defaultFilters.status = event.target.value
    characterContainer.innerHTML = ''
    const characters = await getCharacters(defaultFilters)
    render({ characters })
})

genderFilter.addEventListener('change', async (event) => {
    defaultFilters.genero = event.target.value
    characterContainer.innerHTML = ''
    const characters = await getCharacters(defaultFilters)
    render({ characters })
})

searchInput.addEventListener('keyup', async (event) => {
    defaultFilters.name = event.target.value
    characterContainer.innerHTML = ''
    const characters = await getCharacters(defaultFilters)
    render({ characters })
})


async function main() {
    const characters = await getCharacters (defaultFilters)
    render({ characters })
}

main()




