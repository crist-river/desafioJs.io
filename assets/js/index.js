precio = 400000

precioSpan = document.querySelector(".precio-inicial")
precioSpan.innerHTML = precio


total = document.querySelector(".valor-total")
cant = document.querySelector(".cantidad")
act = cant.innerHTML
tot = total.innerHTML


const botonSum = document.querySelector("#botonMax")
const botonMin = document.querySelector("#botonMin")

//suma
botonSum.addEventListener('click',function(){
cant.innerHTML = ++act
total.innerHTML = precio * + act
})

//resta
botonMin.addEventListener('click',function(){
    cant.innerHTML = --act
    total.innerHTML = precio * + act
})