
function formatarNumero(input) {
    // Remove todos os caracteres que não sejam dígitos
    let numero = input.value.replace(/\D/g, '');
  
    // Adiciona um hífen a cada três dígitos
    numero = numero.replace(/(\d{3})(?=\d)/g, '$1.');
  
    // Atualiza o valor do input
    input.value = numero;
  }

  function formatarPhone(input){
      let numero = input.value.replace(

      )
  }

  function formatarCPF(input) {
    // Remove todos os caracteres que não sejam dígitos
    let cpf = input.value.replace(/\D/g, '');
  
    // Adiciona pontos e hífen ao CPF
    cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  
    // Atualiza o valor do input
    input.value = cpf;
  }

  function formatarCEP(input) {
    // Remove todos os caracteres que não sejam dígitos
    let cep = input.value.replace(/\D/g, '');
  
    // Adiciona separadores ao CEP
    cep = cep.replace(/^(\d{5})(\d{3})$/, '$1-$2');
  
    // Atualiza o valor do input
    input.value = cep;
  }

  function formatarPhone(input){
      let phone = input.value.replace(/\D/g, '');

      phone = phone.replace(/^(\d{0})(\d{2})(\d{4})(\d{4})$/, '$1($2)$3-$4')

      input.value = phone;
  } 