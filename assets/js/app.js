drawNetwork();

document.getElementById("play").onclick = () => {
  running = true;
  runOSISimulation();
};

document.getElementById("pause").onclick = () => running = false;
document.getElementById("reset").onclick = () => location.reload();
