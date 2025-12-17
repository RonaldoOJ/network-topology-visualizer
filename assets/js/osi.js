let running = false;

function runOSISimulation() {
  let layerIndex = 0;

  function nextLayer() {
    if (!running || layerIndex >= osiLayers.length) return;

    const layer = osiLayers[layerIndex];
    showLayer(layer);

    let i = 0;
    function move() {
      if (i >= path.length - 1) {
        layerIndex++;
        setTimeout(nextLayer, 600);
        return;
      }
      animatePacket(path[i], path[i + 1], layer.color, () => {
        i++;
        move();
      });
    }
    move();
  }

  nextLayer();
}

