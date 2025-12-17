const nodes = {
  internet: { x: 600, y: 30, type: "Internet" },

  isp: { x: 600, y: 100, type: "ISP / WiFi Provider" },

  router: { x: 600, y: 180, type: "Router" },

  core: { x: 600, y: 300, type: "Core Switch" },

  access: { x: 400, y: 450, type: "Access Switch" },

  pc1: { x: 300, y: 620, type: "PC", vlan: 10 },
  pc2: { x: 500, y: 620, type: "PC", vlan: 10 },

  server: { x: 800, y: 450, type: "Server", vlan: 20 }
};

const links = [
  ["internet", "isp"],
  ["isp", "router"],
  ["router", "core"],
  ["core", "access"],
  ["core", "server"],
  ["access", "pc1"],
  ["access", "pc2"]
];

const osiLayers = [
  { id: 7, name: "Application", color: "#38bdf8" },
  { id: 6, name: "Presentation", color: "#818cf8" },
  { id: 5, name: "Session", color: "#a78bfa" },
  { id: 4, name: "Transport (TCP/UDP)", color: "#fbbf24" },
  { id: 3, name: "Network (IP)", color: "#fb7185" },
  { id: 2, name: "Data Link (Ethernet)", color: "#34d399" },
  { id: 1, name: "Physical", color: "#9ca3af" }
];

/* PC → INTERNET */
const path = [
  "pc1",
  "access",
  "core",
  "router",
  "isp",
  "internet"
];
