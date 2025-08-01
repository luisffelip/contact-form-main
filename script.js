 const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Impede envio automático

    let valido = true;

    // Inputs
    const nome = document.getElementById("name1");
    const sobrenome = document.getElementById("name2");
    const email = document.getElementById("email");
    const radios = document.getElementsByName("resposta");
    const mensagem = document.getElementById("msg");
    const checkbox = document.getElementById("checkbox");

    // Spans de erro
    const msg1 = document.getElementById("msg1");
    const msg2 = document.getElementById("msg2");
    const msg3 = document.getElementById("msg3");
    const msg4 = document.getElementById("msg4");
    const msg5 = mensagem.nextElementSibling;
    const msg6 = checkbox.parentElement.nextElementSibling;

    // Valida Nome
    if (nome.value.trim() === "") {
      msg1.style.display = "block";
      valido = false;
    } else {
      msg1.style.display = "none";
    }

    // Valida Sobrenome
    if (sobrenome.value.trim() === "") {
      msg2.style.display = "block";
      valido = false;
    } else {
      msg2.style.display = "none";
    }

    // Valida Email
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim());
    if (!emailValido) {
      msg3.style.display = "block";
      valido = false;
    } else {
      msg3.style.display = "none";
    }

    // Valida Radio
    let radioSelecionado = false;
    for (let r of radios) {
      if (r.checked) {
        radioSelecionado = true;
        break;
      }
    }
    if (!radioSelecionado) {
      msg4.style.display = "block";
      valido = false;
    } else {
      msg4.style.display = "none";
    }

    // Valida Mensagem
    if (mensagem.value.trim() === "") {
      msg5.style.display = "block";
      valido = false;
    } else {
      msg5.style.display = "none";
    }

    // Valida Checkbox
    if (!checkbox.checked) {
      msg6.style.display = "block";
      valido = false;
    } else {
      msg6.style.display = "none";
    }

    // Enviar se tudo estiver ok
    if (valido) {
      alert("Formulário enviado com sucesso!");
      form.reset(); // limpa o formulário
    }
  });