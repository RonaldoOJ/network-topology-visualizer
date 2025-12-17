function showLayer(layer) {
  panel.innerHTML = `
    <h2>OSI Layer ${layer.id}</h2>
    <p>${layer.name}</p>
    <p>Encapsulation active</p>
  `;
}
