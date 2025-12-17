function showNode(id) {
  const n = nodes[id];

  let extra = "";

  if (n.type === "Router") {
    extra = "<p>Layer 3 Routing + NAT</p>";
  }

  if (n.type.includes("ISP")) {
    extra = "<p>WAN Provider<br>Public IP</p>";
  }

  if (n.type === "Internet") {
    extra = "<p>Global TCP/IP Network<br>Cloud Infrastructure</p>";
  }

  panel.innerHTML = `
    <h2>${id.toUpperCase()}</h2>
    <p>Type: ${n.type}</p>
    ${n.vlan ? `<p>VLAN: ${n.vlan}</p>` : ""}
    ${extra}
  `;
}
