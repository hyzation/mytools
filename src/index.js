let theInput1 = document.getElementById("theInput1")
let theInput2 = document.getElementById("theInput2")
let theInput3 = document.getElementById("theInput3")
let result = document.getElementById("result")

let value1 = theInput1.value
let value2 = theInput2.value
let value3 = theInput3.value || 0

theInput1.addEventListener("input", function (e) {
    value1 = e.target.value
    result.innerHTML = (value1 / value2 * value3).toFixed(3) + 'vw'
    copy(result.innerHTML)
})

theInput2.addEventListener("input", function (e) {
    value2 = e.target.value
    result.innerHTML = (value1 / value2 * value3).toFixed(3) + 'vw'
    copy(result.innerHTML)
})

theInput3.addEventListener("input", function (e) {
    value3 = e.target.value
    result.innerHTML = (value1 / value2 * value3).toFixed(3) + 'vw'
    copy(result.innerHTML)
})

function copy(e) {
    navigator.clipboard.writeText(e).then(() => {
        console.log(e);
    });
}