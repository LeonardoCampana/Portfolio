let texto = "Sou um desenvolvedor Full-Stack";
let i = 0;

function escrever() {
  if (i < texto.length) {
    document.getElementById("spanName").innerHTML += texto.charAt(i);
    i++;
    setTimeout(escrever, 100);
  }
}
escrever();







