const one = document.querySelector('#one')

const two = document.querySelector('#two')

const three = document.querySelector('#three')

const four = document.querySelector('#four')

const five = document.querySelector('#five')

one.classList.add('selected')

one.addEventListener('click',()=>{
    
    one.classList.add('selected')

    two.classList.remove('selected')

    three.classList.remove('selected')

    four.classList.remove('selected')

    five.classList.remove('selected')
    
})

two.addEventListener('click',()=>{
    
    one.classList.remove('selected')

    two.classList.add('selected')

    three.classList.remove('selected')

    four.classList.remove('selected')

    five.classList.remove('selected')
    
})

three.addEventListener('click',()=>{
    
    one.classList.remove('selected')

    two.classList.remove('selected')

    three.classList.add('selected')

    four.classList.remove('selected')

    five.classList.remove('selected')
    
})

four.addEventListener('click',()=>{
    
    one.classList.remove('selected')

    two.classList.remove('selected')

    three.classList.remove('selected')

    four.classList.add('selected')

    five.classList.remove('selected')
    
})

five.addEventListener('click',()=>{
    
    one.classList.remove('selected')

    two.classList.remove('selected')

    three.classList.remove('selected')

    four.classList.remove('selected')

    five.classList.add('selected')
    
})

const container = document.querySelector('.container')

const color1 = document.querySelector('.color-1')

const color2 = document.querySelector('.color-2')


color2.addEventListener('click', ()=> {

    container.classList.add('change')

})

color1.addEventListener('click', ()=> {

    container.classList.remove('change')

})