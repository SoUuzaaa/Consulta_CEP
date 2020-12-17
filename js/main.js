function consultarCEP() {
    $(".barra-progresso").show()
    var cep = document.getElementById("cep").value //var que irá armazenar o valor de entrada do input
    var url = `http://viacep.com.br/ws/${cep}/json/` 
    console.log(url)

    $.ajax({
        url: url,
        type: "GET",
        success: function(response) {
            console.log(response)
            $("#logradouro").html(response.logradouro)
            $("#complemento").html(response.complemento)
            $("#bairro").html(response.bairro)
            $("#localidade").html(response.localidade)
            $("#uf").html(response.uf)
            $("#ddd").html(response.ddd)
            $("#titulo_cep").html(`CEP: ${response.cep}`)
            $(".cep").show()
            $(".barra-progresso").hide()
        },
        error: function(response) {
            alert("CEP invalido!")
            $(".barra-progresso").hide()
        }
    })
}

//Esconde barra de progresso e o texto CEP, enquanto não fazer a requisição
$(function() {
    $(".cep").hide()
    $(".barra-progresso").hide()
})
