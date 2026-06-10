function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle("light");

  // pegar a tag img
  const img = document.querySelector("#profile img");

  // substituir a imgem

  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a img light
    img.setAttribute("src", "./assets/perfil-normal.jpg");
  } else {
    // se tiver sem light mode, manter imagem normal
    img.setAttribute(
      "src",
      "./assets/ffbb873d-7b30-46b5-8423-4c3e34921437.jpg",
    );
    img.setAttribute(
      "alt",
      "Foto do Mayk Brito sorrindo, usando oculos e camisapreta, barba e fundo amarelo",
    );
  }
}
