let caixaFoto = document.querySelector(".foto");
let irLogin = document.getElementById("RegistrarBtn");
let irRegister = document.getElementById("LoginBtn");

// ^ acima eu peguei os elementos que eu ia precisar do html com DOM, e guardei em variaveis.
     
                          
irRegister.addEventListener("click", () => {  // adcionei um evento ao clicar no botão que guardei na variavel irRegister.
  caixaFoto.style.right = "50vw"; // mudei o estilo do right que eu disse no css que precisava para animar suavemente.

  setTimeout(() => { // uma função do js que roda o codigo depois do tempo definido, no caso desse depois de 200ms.
    caixaFoto.style.backgroundImage = "url(imgs/banquin.png)"; // vai mudar a imagem de fundo 200ms depois dela começar a se mecher.
  }, 200); // <-- 200ms ai onde define o delay.
});

irLogin.addEventListener("click", () => { // outro evento de click nesse caso para voltar para onde tava origem.
  caixaFoto.style.right = "0"; // mesma que tava difina no css ao roda o programa ao inicar. 

  setTimeout(() => { // delay de 200ms para trocar, da mesma forma da outra, voltando para imagem posteiro.
    caixaFoto.style.backgroundImage = "url(imgs/fundo.png)";
  }, 200);
});

// tudo isso para fazer a função de animação da pessoa que quer fazer cadatro ou login, ao clica nos textos sublinhados.