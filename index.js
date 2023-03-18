let list = document.querySelector(".carusel__item2")
let next = document.querySelector("#next2")
let prev = document.querySelector("#prev2")
let list1 = document.querySelector(".carusel__item1")
let next1 = document.querySelector("#next1")
let prev1 = document.querySelector("#prev1")


function slider() {
    list.style.transform = `translateX(${-index*510}px)`
}
index = 0
next.addEventListener("click", () => {

    index++;
    if (index > 3) {
        index = 0
    }
    slider()

})
prev.addEventListener("click", () => {
    index--;
    if (index < 0) {
        index = 3
    }

    slider()
})

function slider1() {
    list1.style.transform = `translateX(${-index*380}px)`
}

index = 0
next1.addEventListener("click", () => {

    index++;
    if (index > 4) {
        index = 0
    }
    slider1()

})
prev1.addEventListener("click", () => {
    index--;
    if (index < 0) {
        index = 4
    }

    slider1()
})
