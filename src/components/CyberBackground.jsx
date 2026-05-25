import { useEffect, useRef } from "react";

const CYAN = { r: 34, g: 211, b: 238 };
const INDIGO = { r: 129, g: 140, b: 248 };

function getNodeCount(width) {
  if (width < 480) return 35;
  if (width < 768) return 50;
  if (width < 1200) return 65;
  return 85;
}

const CyberBackground = () => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const frameRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = 0;
    let height = 0;
    let nodes = [];

    const speed = prefersReducedMotion ? 0.15 : 0.75;

    const initNodes = () => {
      const count = prefersReducedMotion ? 25 : getNodeCount(width);
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * speed,
        vy: (Math.random() - 0.5) * speed,
        radius: Math.random() * 2 + 1.2,
        pulse: Math.random() * Math.PI * 2,
      }));
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      initNodes();
    };

    const onMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const onMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    const maxLinkDist = () => (width < 768 ? 130 : 175);

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      const linkDist = maxLinkDist();
      const { x: mx, y: my } = mouseRef.current;

      for (const node of nodes) {
        node.x += node.vx;
        node.y += node.vy;
        node.pulse += 0.035;

        if (node.x <= 2 || node.x >= width - 2) node.vx *= -1;
        if (node.y <= 2 || node.y >= height - 2) node.vy *= -1;

        node.x = Math.max(2, Math.min(width - 2, node.x));
        node.y = Math.max(2, Math.min(height - 2, node.y));

        if (!prefersReducedMotion) {
          const dx = mx - node.x;
          const dy = my - node.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 160 && dist > 0) {
            const force = (160 - dist) / 160;
            node.x -= (dx / dist) * force * 1.2;
            node.y -= (dy / dist) * force * 1.2;
          }
        }

        const glow = 0.55 + Math.sin(node.pulse) * 0.25;
        const grad = ctx.createRadialGradient(
          node.x,
          node.y,
          0,
          node.x,
          node.y,
          node.radius * 5
        );
        grad.addColorStop(0, `rgba(${CYAN.r}, ${CYAN.g}, ${CYAN.b}, ${glow})`);
        grad.addColorStop(1, `rgba(${CYAN.r}, ${CYAN.g}, ${CYAN.b}, 0)`);

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * 3, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${CYAN.r}, ${CYAN.g}, ${CYAN.b}, 0.95)`;
        ctx.fill();
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist > linkDist) continue;

          const alpha = (1 - dist / linkDist) * 0.38;
          const midX = (a.x + b.x) / 2;
          const midY = (a.y + b.y) / 2;
          const mouseDist = Math.hypot(mx - midX, my - midY);
          const boost = mouseDist < 200 ? (1 - mouseDist / 200) * 0.45 : 0;

          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `rgba(${CYAN.r}, ${CYAN.g}, ${CYAN.b}, ${alpha + boost})`;
          ctx.lineWidth = 0.8 + boost;
          ctx.stroke();

          const midAlpha = (1 - dist / linkDist) * 0.15;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(midX, midY);
          ctx.strokeStyle = `rgba(${INDIGO.r}, ${INDIGO.g}, ${INDIGO.b}, ${midAlpha})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }

      if (mx > 0 && my > 0 && !prefersReducedMotion) {
        for (const node of nodes) {
          const dx = mx - node.x;
          const dy = my - node.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 220) {
            const alpha = (1 - dist / 220) * 0.25;
            ctx.beginPath();
            ctx.moveTo(mx, my);
            ctx.lineTo(node.x, node.y);
            ctx.strokeStyle = `rgba(${CYAN.r}, ${CYAN.g}, ${CYAN.b}, ${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      frameRef.current = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseleave", onMouseLeave);
    frameRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <div className="cyber-bg" aria-hidden>
      <div className="cyber-bg-base" />
      <canvas ref={canvasRef} className="cyber-bg-canvas" />
      <div className="cyber-bg-orb cyber-bg-orb--1" />
      <div className="cyber-bg-orb cyber-bg-orb--2" />
      <div className="cyber-bg-orb cyber-bg-orb--3" />
      <div className="cyber-grid cyber-bg-grid" />
      <div className="cyber-bg-glow" />
      <div className="cyber-bg-vignette" />
      <div className="cyber-bg-scanline" />
    </div>
  );
};

export default CyberBackground;
