function textGenerator(){
    let paragraphResult = document.querySelector('p')
    let inputTextValue = document.getElementById('textInput').value
    let result = inputTextValue.split('').reverse().join('')

    if (inputTextValue === ''){
        paragraphResult.innerHTML = 'Veuillez saisir un texte.'
    } else {
        paragraphResult.innerHTML = result
    }
}