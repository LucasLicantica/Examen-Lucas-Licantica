function cambiarModo() {
  const color = document.getElementById("main");
  const colorHeader = document.getElementById("links-header");
  const colorFooter = document.getElementById("links-footer");
  const borderHeader = document.getElementById("header");

  color.className = color.className === "" ? "dark-light-mode-color" : "";
  colorHeader.className = colorHeader.className = ""
    ? "dark-light-mode-color"
    : "";
  colorFooter.className = colorFooter.className = ""
    ? "dark-light-mode-color"
    : "";
  borderHeader.className = borderHeader.className === "" ? "header-dark" : "";
}
