function triggerIncident() {
  incident.active = true;
  incident.message = "Firewall → Core Switch outage";

  state.nodes.switch1.status = "offline";
}

function resolveIncident() {
  incident.active = false;
  incident.message = "";

  Object.values(state.nodes).forEach(n => n.status = "online");
}

setTimeout(triggerIncident, 6000);
setTimeout(resolveIncident, 14000);
