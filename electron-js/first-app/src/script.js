const input_password = document.querySelector('#input-password');
const span_password = document.querySelector('#span-password');

function generatePassword() {
   if (input_password.value == '') {
      alert('Introduza um tamanho.');
      return;
   }

   let charset = 'abcdefghijlmnopqrstuvxzkwyABCDEFGHIJLMNOPQRSTUVXZKWY0123456789';
   let newPassword = '';

   for (let i = 0, numberOfCharacters = charset.length; i < input_password.value; i++) {
      newPassword += charset.charAt(Math.floor(Math.random() * numberOfCharacters));
   }

   let result = document.createTextNode(newPassword);
   span_password.appendChild(result);
}