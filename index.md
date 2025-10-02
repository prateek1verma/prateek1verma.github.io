---
layout: default
title: Home
---
<div class="hero">
  <div class="card">
    <h1>Independent Researcher in Gene Drives & Eco‑evolutionary Dynamics</h1>
    <p>I build theory and tools for genetic control of vector‑borne diseases, from mating‑system aware gene drive dynamics to resistance management and risk assessment. I lead cross‑disciplinary efforts with public health, ecology, and policy partners.</p>
    <div>
      <span class="pill">Gene Drives</span>
      <span class="pill">Mathematical Modelling</span>
      <span class="pill">Eco‑evolutionary Dynamics</span>
      <span class="pill">Optimal Control</span>
    </div>
    <p style="margin-top:14px">
      <a class="btn" href="/assets/PrateekVerma_CV.pdf">Download CV</a>
      <a class="btn" href="{{ site.author.scholar }}">Google Scholar</a>
    </p>
  </div>
  <div class="visual">
    <div class="glow"></div>
    <!-- Minimal DNA/maths motif -->
    <svg viewBox="0 0 420 300" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="g" x1="0" x2="1">
          <stop offset="0%" stop-color="rgba(63,77,95,0.85)"/>
          <stop offset="100%" stop-color="rgba(89,102,120,0.85)"/>
        </linearGradient>
      </defs>
      <g fill="none" stroke="url(#g)" stroke-width="2">
        <path d="M40 20 C 120 80, 60 140, 140 200 S 80 260, 160 320"/>
        <path d="M200 20 C 120 80, 180 140, 100 200 S 160 260, 80 320"/>
      </g>
      <g stroke="rgba(63,77,95,.5)">
        <line x1="60" y1="60" x2="180" y2="70"/>
        <line x1="70" y1="110" x2="170" y2="120"/>
        <line x1="80" y1="160" x2="160" y2="170"/>
      </g>
      <g fill="rgba(63,77,95,.75)" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="18">
        <text x="230" y="60">∂x/∂t = f(x,t)</text>
        <text x="230" y="100">pₜ₊₁ = T(pₜ)</text>
        <text x="230" y="140">ℛ₀ &gt; 1 ⇒ spread</text>
      </g>
    </svg>
  </div>
</div>

<div class="section grid two">
  <div class="card">
    <h2>Research Focus</h2>
    <ul>
      <li>Confinement and spread of gene drives in structured populations</li>
      <li>Resistance evolution and mitigation strategies</li>
      <li>Stochastic and spatial modelling for release policies</li>
      <li>Optimal control and Value‑of‑Information for conservation/public health</li>
    </ul>
  </div>
  <div class="card">
    <h2>Leadership & Vision</h2>
    <p>I drive collaborative programmes that link mathematical theory to field‑relevant decisions. I aim to build a group that delivers <strong>transparent, policy‑aware</strong> modelling for responsible biotechnology.</p>
    <ul>
      <li>Build reproducible modelling pipelines</li>
      <li>Mentor students across modelling and life sciences</li>
      <li>Engage with regulators and stakeholders</li>
    </ul>
  </div>
</div>

<div class="section card">
  <h2>Recent News</h2>
  <ul>
    {% for post in site.posts limit:5 %}
      <li><span class="meta">{{ post.date | date: "%b %d, %Y" }}</span> — <a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
  </ul>
</div>
