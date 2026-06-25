$(document).ready(function() {
    const carrinho = JSON.parse(localStorage.getItem("carrinho")) || []
    const listaElement = $("#lista")
    const totalElement = $("#total")

    function exibirCarrinho() {  // ✅ nome padronizado com C maiúsculo
        listaElement.empty()
        let totalPreco = 0
        $.each(carrinho, function(index, item) {
            const listaItem = $("<li>").text(`${item.desc} - preco: $${item.preco.toFixed(2)}`)
            const removeButton = $("<button>").text("❌").css("margin-left", "10px").click(function() {
                removerItem(index)
            })
            listaItem.append(removeButton)
            listaElement.append(listaItem)
            totalPreco += item.preco
        })
        totalElement.text(`total: $${totalPreco.toFixed(2)}`)
    }

    function removerItem(index) {
        carrinho.splice(index, 1)
        localStorage.setItem("carrinho", JSON.stringify(carrinho))
        exibirCarrinho()  // ✅ já estava correto aqui
    }

    exibirCarrinho()  // ✅ já estava correto aqui
})

function gerar() {
    const listaElement = document.getElementById("lista")
    const totalElement = document.getElementById("total")
    const listaClone = listaElement.cloneNode(true)
    $(listaClone).find("button").remove()
    const listaHtml = listaClone.innerHTML
    const totalHtml = totalElement.innerHTML  // ✅ typo "totalhTML" corrigido
    const conteudoHtml = `
    <html>
        <head>
            <meta charset="UTF-8">
        </head>
        <body>
            <h1>PEDIDO CONFIRMADO</h1>
            <h3>Agradecemos sua compra e sua preferencia.</h3>
            <br>
            ${listaHtml}
            <br>
            ${totalHtml}
        </body>
    </html>`
    const blob = new Blob([conteudoHtml], { type: "application/msword" })
    const link = document.createElement("a")
    link.href = URL.createObjectURL(blob)
    link.download = "pedido.doc"
    link.click()
    document.getElementById("pedido").style.display = "block"
}

function successClose() {
    document.getElementById("pedido").style.display = "none"
}
