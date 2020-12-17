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
            $("#bairro").html(response.bairro)
            $("#localidade").html(response.localidade)
            $("#uf").html(response.uf)
            $("#titulo_cep").html(`CEP: ${response.cep}`)
            $(".cep").show()
            $(".barra-progresso").hide()
        },
        error: function(response) {
            alert("CEP invalido!")
        }
    })
}

$(function() {
    $(".cep").hide()
    $(".barra-progresso").hide()
})
