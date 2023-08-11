export const Monstros = [
    {
        id: 1,
        nome: 'pasadelo',
        altura: 7,
        habilidades: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia pariatur a minima sapiente nesciunt illum minus inventore vel ab est reiciendis ipsa dolore cum ipsum vero, corporis architecto iste. Perferendis',
        foto: 'https://robohash.org/pesadelo'
    },
    {
        id: 2,
        nome: 'azulão',
        altura: 2,
        habilidades: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia pariatur a minima sapiente nesciunt illum minus inventore vel ab est reiciendis ipsa dolore cum ipsum vero, corporis architecto iste. Perferendis',
        foto: 'https://robohash.org/azulão'
    },
    {
        id: 3,
        nome: 'palhaço',
        altura: 5,
        habilidades: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia pariatur a minima sapiente nesciunt illum minus inventore vel ab est reiciendis ipsa dolore cum ipsum vero, corporis architecto iste. Perferendis',
        foto: 'https://robohash.org/palhaço'
    },
    {
        id: 4,
        nome: 'bronie',
        altura: 3,
        habilidades: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia pariatur a minima sapiente nesciunt illum minus inventore vel ab est reiciendis ipsa dolore cum ipsum vero, corporis architecto iste. Perferendis',
        foto: 'https://robohash.org/bronie'
    }
]

const secao = document.querySelector('.monstros')
const botao = document.querySelector('.btn')

botao.addEventListener( 'click',() => {
    document.documentElement.classList.toggle('dark')
})

const todosOsMonstros = monstros.map( (monstro) => {
    return <div>
        <p>Nome: ${monstro.nome}</p>
        <p>Altura: ${monstro.altura}</p>
        <img src="${monstro.foto}"></img>
        <p class="habilidades">Habilidades: ${monstro.habilidades}</p>
    </div>
})

secao.innerHTML =todosOsMonstros