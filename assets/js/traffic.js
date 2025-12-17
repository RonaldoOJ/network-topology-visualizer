function animatePacket(from, to, color, cb) {
  const packet = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  packet.classList.add("packet");
  packet.setAttribute("fill", color);

  let t = 0;
  const steps = 60;

  const x1 = nodes[from].x;
  const y1 = nodes[from].y;
  const x2 = nodes[to].x;
  const y2 = nodes[to].y;

  svg.appendChild(packet);

  function step() {
    t++;
    const x = x1 + (x2 - x1) * (t / steps);
    const y = y1 + (y2 - y1) * (t / steps);
    packet.setAttribute("cx", x);
    packet.setAttribute("cy", y);

    if (t < steps) requestAnimationFrame(step);
    else {
      packet.remove();
      cb && cb();
    }
  }

  step();
}
