function showSection(sectionId) {
  const sections = document.querySelectorAll(".content-section");
  sections.forEach((sec) => sec.classList.remove("active"));

  const target = document.getElementById(sectionId);
  target.classList.add("active");

  // Mostrar/esconder barras de filtro
  const filtrosHerois = document.getElementById("filtros");
  const filtrosItens = document.getElementById("filtros-itens");

  if (sectionId === "items") {
    filtrosHerois.style.display = "none";
    filtrosItens.style.display = "flex";
  } else {
    filtrosHerois.style.display = "flex";
    filtrosItens.style.display = "none";
  }
}
