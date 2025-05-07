document.addEventListener('DOMContentLoaded', () => {
    const lengthelement = document.getElementById('length');
    const sliderelement = document.getElementById('slider');
    const uppercaseelement = document.getElementById('upperCase');
    const lowercaseelement = document.getElementById('lowerCase');
    const numberselement = document.getElementById('numbers');
    const symbolselement = document.getElementById('symbols');
    const resulteleelement = document.getElementById('result');
    const generateelement = document.getElementById('generate');
  
    const uppercase = getArray('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    const lowercase = getArray('abcdefghijklmnopqrstuvwxyz');
    const numbers = getArray('0123456789');
    const symbols = getArray('!@#$%^&*<>?:;~{}');
  
    function getArray(str) {
      return str.split('');
    }
  
    sliderelement.addEventListener('input', function () {
        lengthelement.value = this.value;
      });
      
      
      lengthelement.addEventListener('input', function () {
        sliderelement.value = this.value;
      });

    generateelement.addEventListener('click', () => {
      const length = Number(lengthelement.value);
      const uppercasechecked = uppercaseelement.checked;
      const lowercasechecked = lowercaseelement.checked;
      const numberchecked = numberselement.checked;
      const symbolchecked = symbolselement.checked;
  
      const password = generatepass(
        length,
        uppercasechecked,
        lowercasechecked,
        numberchecked,
        symbolchecked
      );
  
      resulteleelement.innerHTML = password;
    });
  
    function generatepass(
      length,
      uppercasechecked,
      lowercasechecked,
      numberchecked,
      symbolchecked
    ) {
      if (length === 0) {
        alert('Please enter a password length!');
        return '';
      }
  
      let passArray = [];
      if (uppercasechecked) passArray = passArray.concat(uppercase);
      if (lowercasechecked) passArray = passArray.concat(lowercase);
      if (numberchecked) passArray = passArray.concat(numbers);
      if (symbolchecked) passArray = passArray.concat(symbols);
  
      if (passArray.length === 0) {
        alert('You gotta check at least one character type!');
        return '';
      }
  
      const result = [];
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * passArray.length);
        result.push(passArray[randomIndex]);
      }
  
      return result.join('');
    }
  });
  