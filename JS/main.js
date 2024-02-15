$(document).ready(function(){

    $('#telefone').mask('(00) 00000-0000', {
        placeholder: 'ex: (00) 12345-6789'
    })

    $('#cpf').mask('000.000.000-00', {
        placeholder: 'ex: 123.456.789-00'
    })

    $('#cep').mask('00000-00', {
        placeholder: 'ex: 12345-00'
    })

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            cpf: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            endereço: {
                required: true
            },
            cep: {
                required: true
            },
        },
        messages:  {
            nome: 'Favor inserir o seu nome',
            cpf: 'Favor inserir o seu CPF',
            email: 'Favor inserir o seu e-mail',
            telefone: 'Favor inserir o seu telefone',
            endereço: 'Favor inserir o seu endereço',
            cep: 'Favor inserir o seu cep',
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
            alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })

})