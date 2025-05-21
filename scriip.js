const produtos = document.getElementsByClassName("items")

for (let i = 0; i < produtos.length; i++) {
    produtos[i].addEventListener("click", function() {
    alert("funcionou");
});
}

