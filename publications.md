---
layout: default
permalink: /publications
title: Publications
---
<div class="card">
  <h1>Selected Publications</h1>
  <div>
    {% for p in site.data.publications %}
      <div class="pub-item">
        <strong>{{ p.authors }}</strong> ({{ p.year }}). {{ p.title }}. <span class="pub-venue">{{ p.venue }}</span>.
        {% if p.doi %}<span class="pub-links"><a href="https://doi.org/{{ p.doi }}" target="_blank" rel="noopener">DOI</a></span>{% endif %}
        {% if p.link %}<span class="pub-links"><a href="{{ p.link }}" target="_blank" rel="noopener">Link</a></span>{% endif %}
        {% if p.pdf %}<span class="pub-links"><a href="{{ p.pdf }}" target="_blank" rel="noopener">PDF</a></span>{% endif %}
      </div>
    {% endfor %}
  </div>
</div>
