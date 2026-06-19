function login(){
    var nome = $("#nome").val()
    var senha = $("#senha").val()
    if(nome && senha && nome === "admin" && senha === "12345"){
            const user = {
                name: nome,
                dataEntrada: new Date(),
                id: Math.floor(Math.random() * 100000)
            }
            localStorage.setItem("usuario", JSON.stringify(user))
            window.location.href = "../loja"
    }else{
        document.getElementById("error-modal").style.display = "flex"
        document.getElementById("nome").style.border = "3px solid red"
        document.getElementById("password").style.border = "3px solid red"
        
    }
}
function showPassword(){
    var inputSenha = document.querySelector("#senha")
    var inputSenha = document.querySelector("#eye")
    if(inputSenha.getAttribute("type") === "password"){
        inputSenha.setAttribute("type","text")
        img_eye.setAttribute("src","../../public/eye.png")
    }else{
        inputSenha.setAttribute("type","password")
        img_eye.setAttribute("src","../../public/closed-eyes.png")
    }
}
function fecharError(){
    document.getElementById("error-modal").style.display = "flex"
    document.getElementById("nome").style.border = "2px solid black"
    document.getElementById("senha").style.border = "2px solid black"
}