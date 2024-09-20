document.getElementById('number').addEventListener('blur', () => {
    NumberValid();
})
document.getElementById('text').addEventListener('blur', () => {
    TextValid();
})

document.getElementById('validationForm').addEventListener('submit', (event)=>{
    event.preventDefault()
    if(NumberValid() && TextValid()){
        document.getElementById('successMessage').textContent = 'vse prav'
    }else {
        document.getElementById('successMessage').textContent = '';
    }
})

function NumberValid() {
    const numberInput = document.getElementById('number').value

    if(numberInput === '') {
        document.getElementById('numberError').textContent = "Pustoe pole"
        return false;
    }else if(isNaN(numberInput)){
        document.getElementById('numberError').textContent = "Cifri vvodi"
        return false;
    }else {
        document.getElementById('numberError').textContent = '';
        return true;
    }
}

function TextValid() {
    const textInput = document.getElementById('text').value

    if(textInput === '') {
        document.getElementById('textError').textContent = "Pustoe pole"
        return false;
    }else if(!/^[a-zA-Z]/.test(textInput)){
        document.getElementById('textError').textContent = "Bukvi vvodi"
        return false;
    }else {
        document.getElementById('textError').textContent = '';
        return true;
    }
}