const svg = document.getElementById("topology");

function drawNetwork() {

  links.forEach(([a, b]) => {
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", nodes[a].x);
    line.setAttribute("y1", nodes[a].y);
    line.setAttribute("x2", nodes[b].x);
    line.setAttribute("y2", nodes[b].y);
    line.classList.add("link");
    svg.appendChild(line);
  });

  Object.entries(nodes).forEach(([id, n]) => {
    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", n.x);
    circle.setAttribute("cy", n.y);
    circle.setAttribute("r", id === "internet" ? 22 : 18);

    circle.classList.add("node");

    if (n.type === "PC") circle.classList.add("pc");
    if (n.type === "Access Switch") circle.classList.add("access");
    if (n.type === "Core Switch") circle.classList.add("core");
    if (n.type === "Router") circle.classList.add("router");
    if (n.type === "Server") circle.classList.add("server");
    if (n.type.includes("ISP")) circle.classList.add("isp");
    if (n.type === "Internet") circle.classList.add("internet");

    circle.addEventListener("click", () => showNode(id));
    svg.appendChild(circle);
  });
}
