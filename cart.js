function updateProductInput(productId, price, isIncrease) {
    const productInput = document.getElementById(productId + '-number')
    let productNumber = productInput.value
    if (isIncrease == true) {
        productInput.value = parseInt(productNumber) + 1


    }
    else if (productNumber > 0) {
        productInput.value = parseInt(productNumber) - 1
    }


    productNumber = productInput.value
    const totalProductPrice = document.getElementById(productId + '-total')
    totalProductPrice.innerText = productNumber * price

    calculateTotal()

}
function updateProductQuantity(id) {
    const productInput = document.getElementById(id + '-number')
    const productNumber = parseInt(productInput.value)
    return productNumber
}


function calculateTotal() {
    const glassAmmount = updateProductQuantity('glass') * 1219
    const glass1Ammount = updateProductQuantity('glass1') * 1299
    const glass2Ammount = updateProductQuantity('glass2') * 1100
    const subTotal = glassAmmount + glass1Ammount + glass2Ammount
    const tax = subTotal * 0.15
    const total = subTotal + tax
    document.getElementById('sub-total').innerText = subTotal
    document.getElementById('tax').innerText = tax.toFixed(1)
    document.getElementById('total').innerText = total.toFixed(1)



}



// product-1 plus
document.getElementById('glass-plus').addEventListener('click', function () {
    updateProductInput('glass', 1219, true)

})
// product-1 minus
document.getElementById('glass-minus').addEventListener('click', function () {
    updateProductInput('glass', 1219, false)

})
// product-2 plus
document.getElementById('glass1-plus').addEventListener('click', function () {
    updateProductInput('glass1', 1299, true)

})
// product-2 minus
document.getElementById('glass1-minus').addEventListener('click', function () {
    updateProductInput('glass1', 1299, false)

})
// product-3 plus
document.getElementById('glass2-plus').addEventListener('click', function () {
    updateProductInput('glass2', 1100, true)

})
// product-3 minus
document.getElementById('glass2-minus').addEventListener('click', function () {
    updateProductInput('glass2', 1100, false)

})


