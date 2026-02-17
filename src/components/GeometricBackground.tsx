"use client";

import { useEffect, useRef } from "react";

interface Triangle {
  x: number;
  y: number;
  size: number;
  rotation: number;
  rotationSpeed: number;
  baseRotationSpeed: number;
  vx: number;
  vy: number;
  baseVx: number;
  baseVy: number;
  opacity: number;
  baseOpacity: number;
}

const REPEL_RADIUS = 200;
const REPEL_STRENGTH = 2;

export function GeometricBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let triangles: Triangle[] = [];

    function resize() {
      canvas!.width = window.innerWidth;
      canvas!.height = window.innerHeight;
    }

    function createTriangles() {
      const count = Math.floor((window.innerWidth * window.innerHeight) / 120000);
      triangles = Array.from({ length: Math.max(count, 4) }, () => {
        const baseVx = (Math.random() - 0.5) * 0.3;
        const baseVy = (Math.random() - 0.5) * 0.3;
        const baseRotationSpeed = (Math.random() - 0.5) * 0.003;
        const baseOpacity = 0.15 + Math.random() * 0.15;
        return {
          x: Math.random() * canvas!.width,
          y: Math.random() * canvas!.height,
          size: 50 + Math.random() * 100,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: baseRotationSpeed,
          baseRotationSpeed,
          vx: baseVx,
          vy: baseVy,
          baseVx,
          baseVy,
          opacity: baseOpacity,
          baseOpacity,
        };
      });
    }

    function drawTriangle(t: Triangle) {
      ctx!.save();
      ctx!.translate(t.x, t.y);
      ctx!.rotate(t.rotation);
      ctx!.beginPath();
      ctx!.moveTo(0, -t.size);
      ctx!.lineTo(-t.size * 0.866, t.size * 0.5);
      ctx!.lineTo(t.size * 0.866, t.size * 0.5);
      ctx!.closePath();
      ctx!.strokeStyle = `rgba(99, 102, 241, ${t.opacity})`;
      ctx!.lineWidth = 1;
      ctx!.stroke();
      ctx!.restore();
    }

    function animate() {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);

      for (const t of triangles) {
        const dx = t.x - mouse.current.x;
        const dy = t.y - mouse.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < REPEL_RADIUS && dist > 0) {
          const force = (1 - dist / REPEL_RADIUS) * REPEL_STRENGTH;
          const nx = dx / dist;
          const ny = dy / dist;
          t.vx += nx * force;
          t.vy += ny * force;
          t.rotationSpeed = t.baseRotationSpeed + force * 0.02;
          t.opacity = Math.min(t.baseOpacity + force * 0.15, 0.5);
        } else {
          t.opacity += (t.baseOpacity - t.opacity) * 0.05;
          t.rotationSpeed += (t.baseRotationSpeed - t.rotationSpeed) * 0.05;
        }

        // dampen back to base velocity
        t.vx += (t.baseVx - t.vx) * 0.02;
        t.vy += (t.baseVy - t.vy) * 0.02;

        t.x += t.vx;
        t.y += t.vy;
        t.rotation += t.rotationSpeed;

        if (t.x < -t.size) t.x = canvas!.width + t.size;
        if (t.x > canvas!.width + t.size) t.x = -t.size;
        if (t.y < -t.size) t.y = canvas!.height + t.size;
        if (t.y > canvas!.height + t.size) t.y = -t.size;

        drawTriangle(t);
      }

      animationId = requestAnimationFrame(animate);
    }

    function onMouseMove(e: MouseEvent) {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    }

    function onMouseLeave() {
      mouse.current.x = -1000;
      mouse.current.y = -1000;
    }

    resize();
    createTriangles();
    animate();

    window.addEventListener("resize", () => {
      resize();
      createTriangles();
    });
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseleave", onMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0"
      aria-hidden="true"
    />
  );
}
