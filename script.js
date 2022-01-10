const btnSubmit = document.querySelector('#buttonSubmit')

async function fetchCEP () {    
    const inputCep = document.querySelector('#btnCep')
    const result = document.querySelector('.result') 
    

    if (inputCep.value.length < 8 ) {
        alert('Por favor, digite um número de CEP válido com 8 dígitos')
    } else {
        const elementsChilds = document.querySelectorAll('.result p')
        if (elementsChilds.value != '') {
            elementsChilds.forEach((intem)=> {
                intem.parentNode.removeChild(intem)
        })}
        
        
        try { 
            const CEP = await fetch(`https://viacep.com.br/ws/${inputCep.value}/json/`)
            const response = await CEP.json()
            const {cep, logradouro, bairro, localidade, ddd} = response
        
            function mostrarResult(prefixo, nCep) {
                
                const paragrafo = document.createElement('p')
                paragrafo.textContent = `${prefixo} ${nCep}`
                
                result.appendChild (paragrafo)
                
            }

            mostrarResult('CEP: ', cep)
            mostrarResult('Logradouro: ', logradouro)
            mostrarResult('Bairro: ', bairro)
            mostrarResult('Localidade: ', localidade)
            mostrarResult('DDD: ', ddd)

            inputCep.value = ''
            inputCep.focus()
        } 

        catch (error) {
            console.log(error.message)
        }

     
}}


    btnSubmit.addEventListener('click', fetchCEP)  




