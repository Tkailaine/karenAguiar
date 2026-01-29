//Efeito no Header

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) { // quando rolar mais de 50px
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});


// util para evitar quebrar HTML com caracteres especiais
function escapeHtml(str = "") {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

document.addEventListener("DOMContentLoaded", () => {
  // Ligações dos botões de navegação
  const btnPrev = document.getElementById("btn-anterior");
  const btnNext = document.getElementById("btn-proximo");
  const btnMais = document.getElementById("botao-mais"); // fallback

  if (btnPrev) btnPrev.addEventListener("click", () => carregarVideos(anteriorPaginaToken));
  if (btnNext) btnNext.addEventListener("click", () => carregarVideos(proximaPaginaToken));
  if (btnMais) btnMais.addEventListener("click", () => carregarVideos(proximaPaginaToken));

  // Carrega a primeira página
  carregarVideos();
});


//ANIMAÇÃO DE SURGIMENTO

function animarScroll() {
  const elementos = document.querySelectorAll('.surgir, .surgir-direita, .surgir-esquerda, .surgir-baixo');

  elementos.forEach(el => {
    const posicao = el.getBoundingClientRect().top;
    const alturaTela = window.innerHeight;

    if (posicao < alturaTela - 100) {
      el.classList.add('aparecendo');
    } else {
      el.classList.remove('aparecendo'); // permite repetir ao rolar de volta
    }
  });
}

window.addEventListener('scroll', animarScroll);
window.addEventListener('load', animarScroll);
