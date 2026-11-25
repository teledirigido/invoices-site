<template>
  <figure ref="figure" class="nz" role="img" :aria-label="$t('index.flowDiagram.ariaLabel')">
    <div class="nz-stage" aria-hidden="true">
      <!-- Connectors: wide layout (800 x 440) -->
      <svg class="nz-svg nz-svg--desktop" viewBox="64 36 672 368" focusable="false">
        <defs>
          <radialGradient id="nz-glow-d" cx="50%" cy="50%" r="50%">
            <stop offset="0" stop-color="var(--nz-glow)" stop-opacity="0.9" />
            <stop offset="0.55" stop-color="var(--nz-glow)" stop-opacity="0.35" />
            <stop offset="1" stop-color="var(--nz-glow)" stop-opacity="0" />
          </radialGradient>
        </defs>

        <circle class="nz-glow" cx="400" cy="220" r="150" fill="url(#nz-glow-d)" />
        <circle class="nz-ring" cx="400" cy="220" r="112" />
        <circle class="nz-ring nz-ring--outer" cx="400" cy="220" r="182" />

        <!-- Inputs -> centre -->
        <path class="nz-line" d="M182.8 73.5 L400 220" />
        <path class="nz-line" d="M143.7 165.5 L400 220" />
        <path class="nz-line" d="M143.7 274.5 L400 220" />
        <path class="nz-line" d="M182.8 366.5 L400 220" />
        <!-- Centre -> models -->
        <path class="nz-line" d="M400 220 L628.4 118.3" />
        <path class="nz-line" d="M400 220 L650 220" />
        <path class="nz-line" d="M400 220 L628.4 321.7" />

        <path
          class="nz-pulse nz-pulse--in"
          pathLength="100"
          style="--d: 0s"
          d="M182.8 73.5 L400 220"
        />
        <path
          class="nz-pulse nz-pulse--in"
          pathLength="100"
          style="--d: 0.3s"
          d="M143.7 165.5 L400 220"
        />
        <path
          class="nz-pulse nz-pulse--in"
          pathLength="100"
          style="--d: 0.15s"
          d="M143.7 274.5 L400 220"
        />
        <path
          class="nz-pulse nz-pulse--in"
          pathLength="100"
          style="--d: 0.45s"
          d="M182.8 366.5 L400 220"
        />
        <path
          class="nz-pulse nz-pulse--out"
          pathLength="100"
          style="--d: 2.4s"
          d="M400 220 L628.4 118.3"
        />
        <path
          class="nz-pulse nz-pulse--out"
          pathLength="100"
          style="--d: 2.6s"
          d="M400 220 L650 220"
        />
        <path
          class="nz-pulse nz-pulse--out"
          pathLength="100"
          style="--d: 2.8s"
          d="M400 220 L628.4 321.7"
        />
      </svg>

      <!-- Connectors: narrow layout (360 x 600) -->
      <svg class="nz-svg nz-svg--mobile" viewBox="0 0 360 600" focusable="false">
        <defs>
          <radialGradient id="nz-glow-m" cx="50%" cy="50%" r="50%">
            <stop offset="0" stop-color="var(--nz-glow)" stop-opacity="0.9" />
            <stop offset="0.55" stop-color="var(--nz-glow)" stop-opacity="0.35" />
            <stop offset="1" stop-color="var(--nz-glow)" stop-opacity="0" />
          </radialGradient>
        </defs>

        <circle class="nz-glow" cx="180" cy="300" r="130" fill="url(#nz-glow-m)" />
        <circle class="nz-ring" cx="180" cy="300" r="96" />

        <path class="nz-line" d="M112 48 L180 300" />
        <path class="nz-line" d="M248 48 L180 300" />
        <path class="nz-line" d="M62 130 L180 300" />
        <path class="nz-line" d="M298 130 L180 300" />
        <path class="nz-line" d="M180 300 L72 470" />
        <path class="nz-line" d="M180 300 L288 470" />
        <path class="nz-line" d="M180 300 L180 552" />

        <path class="nz-pulse nz-pulse--in" pathLength="100" style="--d: 0s" d="M112 48 L180 300" />
        <path
          class="nz-pulse nz-pulse--in"
          pathLength="100"
          style="--d: 0.3s"
          d="M248 48 L180 300"
        />
        <path
          class="nz-pulse nz-pulse--in"
          pathLength="100"
          style="--d: 0.15s"
          d="M62 130 L180 300"
        />
        <path
          class="nz-pulse nz-pulse--in"
          pathLength="100"
          style="--d: 0.45s"
          d="M298 130 L180 300"
        />
        <path
          class="nz-pulse nz-pulse--out"
          pathLength="100"
          style="--d: 2.4s"
          d="M180 300 L72 470"
        />
        <path
          class="nz-pulse nz-pulse--out"
          pathLength="100"
          style="--d: 2.6s"
          d="M180 300 L288 470"
        />
        <path
          class="nz-pulse nz-pulse--out"
          pathLength="100"
          style="--d: 2.8s"
          d="M180 300 L180 552"
        />
      </svg>

      <!-- Inputs: --x/--y wide layout, --mx/--my narrow layout -->
      <span class="nz-node nz-node--in" style="--x: 17.68%; --y: 10.19%; --mx: 31.11%; --my: 8%">
        {{ $t('index.flowDiagram.invoices') }}
      </span>
      <span class="nz-node nz-node--in" style="--x: 11.86%; --y: 35.19%; --mx: 68.89%; --my: 8%">
        {{ $t('index.flowDiagram.expenses') }}
      </span>
      <span
        class="nz-node nz-node--in"
        style="--x: 11.86%; --y: 64.81%; --mx: 17.22%; --my: 21.67%"
      >
        {{ $t('index.flowDiagram.customers') }}
      </span>
      <span
        class="nz-node nz-node--in"
        style="--x: 17.68%; --y: 89.81%; --mx: 82.78%; --my: 21.67%"
      >
        {{ $t('index.flowDiagram.suppliers') }}
      </span>

      <!-- Centre -->
      <div ref="hub" class="nz-hub">
        <svg class="nz-logo" viewBox="0 0 512 512" focusable="false">
          <defs>
            <linearGradient id="nz-logo-bg" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stop-color="#faf1e7" />
              <stop offset="1" stop-color="#e4caa8" />
            </linearGradient>
          </defs>
          <rect width="512" height="512" rx="72" fill="url(#nz-logo-bg)" />
          <path fill="#000" d="M149 399V128h21.7L345 391.5V128h16v271h-25.4L165 141v258z" />
        </svg>
      </div>

      <!-- Models -->
      <span class="nz-node nz-node--out" style="--x: 83.99%; --y: 22.36%; --mx: 20%; --my: 78.33%">
        Modelo 130
        <span class="nz-code">{{ $t('index.flowDiagram.irpf') }}</span>
      </span>
      <span class="nz-node nz-node--out" style="--x: 87.2%; --y: 50%; --mx: 80%; --my: 78.33%">
        Modelo 303
        <span class="nz-code">{{ $t('index.flowDiagram.vat') }}</span>
      </span>
      <span class="nz-node nz-node--out" style="--x: 83.99%; --y: 77.64%; --mx: 50%; --my: 92%">
        Modelo 349
        <span class="nz-code">{{ $t('index.flowDiagram.euClients') }}</span>
      </span>
    </div>
  </figure>
</template>

<script lang="ts" setup>
// Cursor-following logo shadow. Desktop pointers only; skipped for touch and reduced motion.
const figure = ref<HTMLElement | null>(null);
const hub = ref<HTMLElement | null>(null);

const RANGE = 520; // px from the logo at which the shadow reaches its max offset
const DIRECTION = 1; // 1: shadow moves towards the cursor. -1: away from it (cursor as light source)

let x = 0;
let y = 0;
let active = false;
let frame = 0;

const update = () => {
  frame = 0;
  if (!figure.value || !hub.value) return;
  const r = hub.value.getBoundingClientRect();
  let dx = 0;
  let dy = 0;
  if (active) {
    dx = (x - (r.left + r.width / 2)) / RANGE;
    dy = (y - (r.top + r.height / 2)) / RANGE;
    const len = Math.hypot(dx, dy);
    if (len > 1) {
      dx /= len;
      dy /= len;
    }
  }
  figure.value.style.setProperty('--nz-sx', (dx * DIRECTION).toFixed(3));
  figure.value.style.setProperty('--nz-sy', (dy * DIRECTION).toFixed(3));
};
const queue = () => {
  if (!frame) frame = requestAnimationFrame(update);
};
const onPointerMove = (e: PointerEvent) => {
  x = e.clientX;
  y = e.clientY;
  active = true;
  queue();
};
const onPointerOut = (e: PointerEvent) => {
  if (!e.relatedTarget) {
    // cursor left the window
    active = false;
    queue();
  }
};

let enabled = false;

onMounted(() => {
  const finePointer = matchMedia('(hover: hover) and (pointer: fine)');
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  if (!finePointer.matches || reducedMotion.matches) return;

  enabled = true;
  window.addEventListener('pointermove', onPointerMove, { passive: true });
  window.addEventListener('pointerout', onPointerOut);
  window.addEventListener('scroll', queue, { passive: true });
});

onBeforeUnmount(() => {
  if (!enabled) return;
  window.removeEventListener('pointermove', onPointerMove);
  window.removeEventListener('pointerout', onPointerOut);
  window.removeEventListener('scroll', queue);
  if (frame) cancelAnimationFrame(frame);
});
</script>

<style scoped lang="scss">
.nz {
  /* Tokens */
  --nz-ink: #1c1a17;
  --nz-muted: #7a7065;
  --nz-line: #e4ddd4;
  --nz-ring: #d6cabb;
  --nz-glow: #ecd6b8;
  --nz-pulse-in: #c9a27c; /* data coming in */
  --nz-pulse-out: #8a5a2b; /* models going out */
  --nz-badge-from: #faf1e7;
  --nz-badge-to: #e4caa8;
  --nz-cycle: 4.8s;
  --nz-sx: 0; /* logo shadow offset, set by JS */
  --nz-sy: 0;

  container: nz / inline-size;
  margin: 0;
  width: 100%;
  max-width: 880px;
  margin-inline: auto;
  color: var(--nz-ink);
}

.nz-stage {
  position: relative;
  aspect-ratio: 672 / 368;
  font-size: clamp(12px, 2.23cqi, 18px);
}

/* Connector layer */
.nz-svg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: visible;
}
.nz-svg--mobile {
  display: none;
}

.nz-ring {
  fill: none;
  stroke: var(--nz-ring);
  stroke-width: 1;
  stroke-linecap: round;
  stroke-dasharray: 0.5 6;
  vector-effect: non-scaling-stroke;
}
.nz-ring--outer {
  opacity: 0.55;
}

.nz-line {
  fill: none;
  stroke: var(--nz-line);
  stroke-width: 1;
  vector-effect: non-scaling-stroke;
}

.nz-pulse {
  fill: none;
  stroke-width: 2.5;
  stroke-linecap: round;
  stroke-dasharray: 7 200;
  stroke-dashoffset: 7;
  opacity: 0;
  animation: nz-flow var(--nz-cycle) infinite;
  animation-delay: var(--d, 0s);
}
.nz-pulse--in {
  stroke: var(--nz-pulse-in);
}
.nz-pulse--out {
  stroke: var(--nz-pulse-out);
}

@keyframes nz-flow {
  0% {
    stroke-dashoffset: 7;
    opacity: 0;
    animation-timing-function: cubic-bezier(0.45, 0, 0.55, 1);
  }
  4% {
    opacity: 1;
  }
  40% {
    stroke-dashoffset: -100;
    opacity: 1;
  }
  41%,
  100% {
    stroke-dashoffset: -100;
    opacity: 0;
  }
}

.nz-glow {
  transform-box: fill-box;
  transform-origin: center;
  animation: nz-breathe var(--nz-cycle) ease-in-out infinite;
}
@keyframes nz-breathe {
  0%,
  100% {
    opacity: 0.75;
    transform: scale(0.96);
  }
  45% {
    opacity: 1;
    transform: scale(1.04);
  }
}

/* Centre: Nitidez logo. --nz-sx / --nz-sy (-1 to 1) move the large shadow layer with the cursor. */
.nz-hub {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 70px;
  aspect-ratio: 1;
  transform: translate(-50%, -50%);
  border-radius: 14.06%; /* matches rx="72" on the 512 logo */
  box-shadow:
    0 0 0 1px rgba(28, 26, 23, 0.05),
    0 1px 2px rgba(120, 86, 44, 0.12),
    calc(var(--nz-sx) * 1.6cqi) calc(var(--nz-sy) * 1.6cqi + 1.1cqi) 3.2cqi -0.5cqi
      rgba(120, 86, 44, 0.34);
  transition: box-shadow 0.4s cubic-bezier(0.2, 0.7, 0.2, 1);
}
.nz-logo {
  display: block;
  width: 100%;
  height: 100%;
}

/* Nodes (pills) */
.nz-node {
  position: absolute;
  left: var(--x);
  top: var(--y);
  transform: translate(-50%, -50%);
  display: inline-flex;
  align-items: center;
  gap: 0.5em;
  padding: 0.62em 1.15em;
  background: #fff;
  border: 1px solid rgba(28, 26, 23, 0.06);
  border-radius: 999px;
  box-shadow:
    0 1px 2px rgba(28, 26, 23, 0.04),
    0 6px 16px -6px rgba(28, 26, 23, 0.1);
  color: var(--nz-ink);
  line-height: 1.2;
  letter-spacing: -0.005em;
  font-size: 14px;
  white-space: nowrap;
}
.nz-node--out {
  padding-left: 1em;
}

.nz-code {
  padding: 0.22em 0.6em;
  border-radius: 999px;
  font-weight: 500;
  // background: linear-gradient(180deg, var(--nz-badge-from), var(--nz-badge-to));
  background: var(--nz-badge-from);
  font-size: 0.9em;
  font-variant-numeric: tabular-nums;
  letter-spacing: 0.01em;
}

/* Narrow layout: inputs on top, models underneath */
@container nz (max-width: 420px) {
  .nz-stage {
    aspect-ratio: 360 / 600;
    font-size: clamp(11px, 3.6cqi, 14px);
  }
  .nz-svg--desktop {
    display: none;
  }
  .nz-svg--mobile {
    display: block;
  }
  .nz-hub {
    width: 25%;
  }
  .nz-node {
    left: var(--mx);
    top: var(--my);
  }
}

@media (prefers-reduced-motion: reduce) {
  .nz-pulse {
    display: none;
  }
  .nz-glow {
    animation: none;
  }
  .nz-hub {
    transition: none;
  }
}
</style>
