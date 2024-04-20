let click = document.querySelectorAll(".click")
let verme = document.getElementById("red")
let li = document.querySelectorAll("li")

let seleciona = new Audio("./sound/select.mp3")
let confima = new Audio("./sound/confirm.mp3")
let save = new Audio("./sound/save.mp3")

console.log(click)

click.forEach((div) => {
    div.classList.remove("click")
    const para = div.className
    div.addEventListener("click", function mudar(){
        let secao = document.getElementById(para)

        confima.play()
        save.play()
        console.log(div)
        
        verme.style.display = "block"
        verme.style.animation = "normal 0.6s aparece"
        verme.classList.add('aparecer')
        setTimeout(()=>{
            secao.scrollIntoView();
            verme.classList.remove('aparecer');
            verme.style.animation = "infinite 0.6s desaparece"
            setTimeout(() => {
                verme.style.display = "none"
            }, 600)
        }, 1400)
    });
    div.addEventListener("mouseover", function selecionar(){
        seleciona.play()
    })
    div.classList.add("click")
})

li.forEach((div) => {
    div.addEventListener("click", function mudar(){
        confima.play()
    });
    div.addEventListener("mouseover", function selecionar(){
        seleciona.play()
    })
})

