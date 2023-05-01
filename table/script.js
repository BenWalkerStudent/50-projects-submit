

document.querySelector(".btn").addEventListener("click", () => {
  document.querySelector(".table").classList.toggle("change");

  

    setTimeout(()=> {
        
        document.querySelector('.letter').style.fontFamily = 'arial'

        document.querySelector('.letter').textContent = 'loser'
    
    }
    , 3000)

  



});
