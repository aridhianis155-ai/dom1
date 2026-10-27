const button = document.querySelectorAll('.fa-plus-circle,.fa-minus-circle')
button.forEach(btn     =>{
    btn.addEventListener("click",()=>{
        const incr=btn.classList.contains("fa-plus-circle")
        const quantity=incr
        ? btn.nextElementSibling
        : btn.previousElementSibling
        quantity.textContent=Math.max(0,
            Number(quantity.textContent) + ( incr? 1 :  -1))
        updateTotal()
    })

})
const coeur = document.querySelectorAll(".fa-heart")
coeur.forEach(heart =>{
    heart.addEventListener("click",() =>{
       if (heart.style.color === "red") {
        heart.style.color = "gray"
       }else{
        heart.style.color="red"
       }
        
    })
})
const remove =document.querySelectorAll(".fa-trash-alt")
remove.forEach(rm =>{
    rm.addEventListener("click" , ()=>{
        const card = rm.closest(".card")
        card.remove()
        updateTotal()
    })
})
const price = document.querySelector(".total")
const summaryProducts = document.querySelector(".summary-products")
const compteu = document.querySelector(".cart-count")
function updateTotal() {
    const cards = [...document.querySelectorAll(".list-products .card")]
    let total = 0
    let itemcom=0
    summaryProducts.replaceChildren()

    cards.forEach(card => {
        const unitPrice = Number(card.querySelector(".unit-price").textContent.replace("$", "").trim())
        const quantity = Number(card.querySelector(".quantity").textContent)
        total += unitPrice * quantity
        itemcom+=quantity

        if (quantity > 0) {
            const item = document.createElement("p")
            item.textContent = `${card.querySelector(".card-title").textContent} × ${quantity}`
            summaryProducts.append(item)
        }
    })

    price.textContent = ` ${total} $`
    compteu.textContent = `${itemcom}`
}

updateTotal()