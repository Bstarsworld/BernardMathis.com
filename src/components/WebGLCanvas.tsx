import React, { useEffect, useRef, useState } from 'react';

interface WebGLCanvasProps {
  className?: string;
}

export type ShaderMode = 'led-volume' | 'cyber-grid' | 'chroma-wave';

export const WebGLCanvas: React.FC<WebGLCanvasProps> = ({ className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [shaderMode, setShaderMode] = useState<ShaderMode>('led-volume');
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isSupported, setIsSupported] = useState<boolean>(true);
  const mouseRef = useRef<{ x: number; y: number; targetX: number; targetY: number }>({
    x: 0.5,
    y: 0.5,
    targetX: 0.5,
    targetY: 0.5,
  });
  const modeRef = useRef<number>(0);

  // Update mode index whenever state changes
  useEffect(() => {
    switch (shaderMode) {
      case 'led-volume':
        modeRef.current = 0;
        break;
      case 'cyber-grid':
        modeRef.current = 1;
        break;
      case 'chroma-wave':
        modeRef.current = 2;
        break;
    }
  }, [shaderMode]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const glContext = canvas.getContext('webgl2') || canvas.getContext('webgl');
    if (!glContext) {
      setIsSupported(false);
      return;
    }
    const gl: WebGLRenderingContext | WebGL2RenderingContext = glContext;
    const targetCanvas = canvas;

    const vsSource = `
      attribute vec2 a_position;
      varying vec2 v_uv;
      void main() {
        v_uv = (a_position + 1.0) * 0.5;
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;

    const fsSource = `
      precision highp float;
      varying vec2 v_uv;
      uniform vec2 u_resolution;
      uniform vec2 u_mouse;
      uniform float u_time;
      uniform int u_mode;

      // Simplex noise approximation
      vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

      float snoise(vec2 v) {
        const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
        vec2 i  = floor(v + dot(v, C.yy));
        vec2 x0 = v -   i + dot(i, C.xx);
        vec2 i1;
        i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
        vec4 x12 = x0.xyxy + C.xxzz;
        x12.xy -= i1;
        i = mod289(i);
        vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
        vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
        m = m*m;
        m = m*m;
        vec3 x = 2.0 * fract(p * C.www) - 1.0;
        vec3 h = abs(x) - 0.5;
        vec3 ox = floor(x + 0.5);
        vec3 a0 = x - ox;
        m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
        vec3 g;
        g.x  = a0.x  * x0.x  + h.x  * x0.y;
        g.yz = a0.yz * x12.xz + h.yz * x12.yw;
        return 130.0 * dot(m, g);
      }

      void main() {
        vec2 st = gl_FragCoord.xy / u_resolution.xy;
        float aspect = u_resolution.x / u_resolution.y;
        vec2 uv = (st - 0.5) * vec2(aspect, 1.0);

        // Interaction coordinates
        vec2 m = (u_mouse - 0.5) * vec2(aspect, 1.0);
        float distToMouse = length(uv - m);
        float mouseGlow = smoothstep(0.6, 0.05, distToMouse) * 0.25;

        vec3 color = vec3(0.027, 0.035, 0.055); // Deep abyss slate background

        float t = u_time * 0.25;

        if (u_mode == 0) {
          // MODE 0: Virtual Production LED Volume Waves
          float n1 = snoise(uv * 1.6 + vec2(t * 0.3, t * 0.15));
          float n2 = snoise(uv * 3.2 - vec2(t * 0.2, -t * 0.25));
          float waves = sin(uv.y * 5.0 + n1 * 3.0 + t) * cos(uv.x * 4.0 + n2 * 2.0 - t * 0.6);
          waves = smoothstep(-0.8, 0.9, waves);

          // LED Volume lighting palette (Cyan, Emerald, Deep Indigo)
          vec3 col1 = vec3(0.02, 0.08, 0.15); // Deep cyan/navy
          vec3 col2 = vec3(0.02, 0.45, 0.55); // Luminous cyan
          vec3 col3 = vec3(0.04, 0.65, 0.45); // Emerald phosphor

          vec3 ledColor = mix(col1, col2, waves * 0.6 + n1 * 0.3);
          ledColor = mix(ledColor, col3, smoothstep(0.4, 0.9, n2) * 0.4);

          // Scanline / LED pixel grid effect
          float scanline = sin(gl_FragCoord.y * 0.8) * 0.04;
          ledColor -= scanline;

          color = ledColor + mouseGlow * vec3(0.0, 0.8, 0.9);

        } else if (u_mode == 1) {
          // MODE 1: Cyber Perspective Viewport Grid (Unreal Engine inspired)
          vec2 gridUv = uv;
          gridUv.y += 0.35;
          float pDepth = max(0.02, -gridUv.y);
          vec2 pGrid = vec2(gridUv.x / pDepth, 1.0 / pDepth + t * 2.0);

          vec2 gridLines = abs(fract(pGrid * 0.8) - 0.5);
          float linePattern = min(gridLines.x, gridLines.y);
          float gridAlpha = 1.0 - smoothstep(0.0, 0.04, linePattern);
          gridAlpha *= smoothstep(0.0, 0.8, pDepth); // fade to horizon

          vec3 gridColor = vec3(0.05, 0.6, 0.8) * gridAlpha * 0.5;
          float horizonGlow = smoothstep(0.2, 0.0, abs(gridUv.y)) * 0.35;
          
          color += gridColor + horizonGlow * vec3(0.1, 0.4, 0.7) + mouseGlow * vec3(0.2, 0.9, 0.7);

        } else {
          // MODE 2: Chroma Dispersion Wave (DaVinci Scope & Color Science)
          float rWave = snoise(uv * 2.2 + vec2(t * 0.4 + 0.02, 0.0));
          float gWave = snoise(uv * 2.2 + vec2(t * 0.4, 0.0));
          float bWave = snoise(uv * 2.2 + vec2(t * 0.4 - 0.02, 0.0));

          vec3 chroma;
          chroma.r = smoothstep(0.1, 0.7, rWave) * 0.45;
          chroma.g = smoothstep(0.0, 0.8, gWave) * 0.40;
          chroma.b = smoothstep(-0.1, 0.9, bWave) * 0.65;

          color = mix(color, chroma, 0.65) + mouseGlow * vec3(0.4, 0.2, 0.9);
        }

        // Vignette
        float vignette = length(st - 0.5);
        color *= 1.0 - smoothstep(0.4, 0.95, vignette) * 0.65;

        gl_FragColor = vec4(color, 1.0);
      }
    `;

    function compileShader(type: number, source: string) {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error('Shader compile error:', gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    }

    const vs = compileShader(gl.VERTEX_SHADER, vsSource);
    const fs = compileShader(gl.FRAGMENT_SHADER, fsSource);
    if (!vs || !fs) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error('Program link error:', gl.getProgramInfoLog(program));
      return;
    }

    gl.useProgram(program);

    // Fullscreen triangle quad
    const positions = new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]);
    const posBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, posBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);

    const aPosition = gl.getAttribLocation(program, 'a_position');
    gl.enableVertexAttribArray(aPosition);
    gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);

    const uResolution = gl.getUniformLocation(program, 'u_resolution');
    const uMouse = gl.getUniformLocation(program, 'u_mouse');
    const uTime = gl.getUniformLocation(program, 'u_time');
    const uMode = gl.getUniformLocation(program, 'u_mode');

    let animationFrameId: number;
    let startTime = performance.now();

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      const width = window.innerWidth;
      const height = window.innerHeight;
      if (targetCanvas.width !== width * dpr || targetCanvas.height !== height * dpr) {
        targetCanvas.width = width * dpr;
        targetCanvas.height = height * dpr;
        gl.viewport(0, 0, targetCanvas.width, targetCanvas.height);
      }
    }

    resize();
    window.addEventListener('resize', resize);

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.targetX = e.clientX / window.innerWidth;
      mouseRef.current.targetY = 1.0 - e.clientY / window.innerHeight;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    let active = true;

    function render(currentTime: number) {
      if (!active) return;
      if (isPlaying) {
        // Smooth mouse easing
        mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
        mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

        gl.useProgram(program);
        gl.uniform2f(uResolution, targetCanvas.width, targetCanvas.height);
        gl.uniform2f(uMouse, mouseRef.current.x, mouseRef.current.y);
        gl.uniform1f(uTime, (currentTime - startTime) * 0.001);
        gl.uniform1i(uMode, modeRef.current);

        gl.drawArrays(gl.TRIANGLES, 0, 6);
      }
      animationFrameId = requestAnimationFrame(render);
    }

    animationFrameId = requestAnimationFrame(render);

    return () => {
      active = false;
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (program) gl.deleteProgram(program);
      if (vs) gl.deleteShader(vs);
      if (fs) gl.deleteShader(fs);
      if (posBuffer) gl.deleteBuffer(posBuffer);
    };
  }, [isPlaying]);

  return (
    <>
      <canvas
        ref={canvasRef}
        className={`fixed inset-0 pointer-events-none z-0 w-full h-full opacity-60 ${className}`}
        style={{ filter: 'blur(0.5px)' }}
        aria-hidden="true"
      />

      {/* Floating WebGL Shader Control Pill for user interactivity */}
      <div 
        id="shader-control-panel"
        className="fixed bottom-5 right-5 z-40 hidden sm:flex items-center gap-2 p-1.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/10 shadow-xl text-xs font-mono text-slate-300"
      >
        <div className="flex items-center gap-1.5 px-2.5 py-1">
          <span className="relative flex h-2 w-2">
            <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${isPlaying ? 'bg-cyan-400 opacity-75' : 'bg-slate-500'}`} />
            <span className={`relative inline-flex rounded-full h-2 w-2 ${isPlaying ? 'bg-cyan-500' : 'bg-slate-400'}`} />
          </span>
          <span className="text-slate-400 text-[11px] uppercase tracking-wider">WebGL Shader</span>
        </div>

        <div className="flex items-center gap-1 bg-black/40 rounded-full p-0.5">
          <button
            type="button"
            id="shader-btn-led"
            onClick={() => setShaderMode('led-volume')}
            className={`px-2.5 py-1 rounded-full text-[11px] transition-all ${
              shaderMode === 'led-volume'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold'
                : 'text-slate-400 hover:text-white'
            }`}
            title="LED Volume Virtual Production Waves"
          >
            LED Aurora
          </button>
          <button
            type="button"
            id="shader-btn-grid"
            onClick={() => setShaderMode('cyber-grid')}
            className={`px-2.5 py-1 rounded-full text-[11px] transition-all ${
              shaderMode === 'cyber-grid'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold'
                : 'text-slate-400 hover:text-white'
            }`}
            title="Unreal Perspective Cyber Grid"
          >
            UE5 Grid
          </button>
          <button
            type="button"
            id="shader-btn-chroma"
            onClick={() => setShaderMode('chroma-wave')}
            className={`px-2.5 py-1 rounded-full text-[11px] transition-all ${
              shaderMode === 'chroma-wave'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold'
                : 'text-slate-400 hover:text-white'
            }`}
            title="DaVinci RGB Chroma Dispersion"
          >
            Chroma
          </button>
        </div>

        <button
          type="button"
          id="shader-btn-toggle-play"
          onClick={() => setIsPlaying(!isPlaying)}
          className="px-2 py-1 text-[11px] text-slate-400 hover:text-cyan-300 transition-colors"
          title={isPlaying ? "Pause background shader animation" : "Resume shader"}
        >
          {isPlaying ? "❚❚" : "▶"}
        </button>
      </div>
    </>
  );
};
