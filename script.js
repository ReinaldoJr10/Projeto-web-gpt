function sendMessage() {
  const textoMensagem = messageInput.value.trim();
  if (textoMensagem !== '') {
    const elementoMensagem = document.createElement('div');
    elementoMensagem.classList.add('message');
    if (textoMensagem.endsWith('')) {
      elementoMensagem.classList.add('user');
    } else {
      elementoMensagem.classList.add('bot');
    }
    elementoMensagem.textContent = textoMensagem;
    
    const containerMensagem = document.querySelector('.message-container');
    containerMensagem.appendChild(elementoMensagem);

    // simula a resposta do site usando uma api
     fetch('https://api.chucknorris.io/jokes/random')
      .then(response => response.json())
      .then(data => {
        const elementoBotMensagem = document.createElement('div');
        elementoBotMensagem.classList.add('message', 'bot');
        elementoBotMensagem.innerHTML = `
          <img src="https://assets.chucknorris.host/img/avatar/chuck-norris.png" >
          <div class="text">${data.value}</div>
        `;
        containerMensagem.appendChild(elementoBotMensagem);
        
        containerMensagem.scrollTo({
          top: containerMensagem.scrollHeight,
          behavior: 'smooth'
        });
      })
      .catch(error => {
        console.error(error);
      });

    
    messageInput.value = '';
    messageInput.focus();
    
    containerMensagem.scrollTo({
      top: containerMensagem.scrollHeight,
      behavior: 'smooth'
    });
  }
}

const messageInput = document.querySelector('#message-input');
messageInput.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    sendMessage();
  }
});

const darkModeToggle = document.querySelector('#dark-mode-toggle');
const body = document.querySelector('body');

darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark');
});
