// ── SERVICES ──────────────────────────────────────────────────────────────
const services = [
  { title: "Business Development", description: "Analyzing, identifying, negotiating & closing initiatives and deals that grow your business" },
  { title: "Licensing", description: "Setting up and running your licensing program" },
  { title: "Market Development", description: "Bringing properties and brands to new markets and platforms" },
  { title: "Strategic Partnerships", description: "Finding the right partner(s) to help your business growth and expansion. Structuring the deal. Closing the partnership." },
  { title: "IP Development", description: "Taking a creative idea and making it a reality" }
];

function renderServices() {
  const grid = document.getElementById('services-grid');
  grid.innerHTML = services.map(s => `
    <div class="service-card">
      <h3>${s.title}</h3>
      <p>${s.description}</p>
    </div>
  `).join('');
}

// ── PROPERTIES IN DEVELOPMENT ─────────────────────────────────────────────
async function renderDevelopment() {
  const grid = document.getElementById('properties-grid');
  try {
    const res = await fetch('properties.json');
    const properties = await res.json();
    grid.innerHTML = properties.map(p => `
      <div class="property-card">
        <img src="${p.image}" alt="${p.title}" onerror="this.style.display='none'" />
        <h3>${p.title}</h3>
        <p>${p.description}</p>
      </div>
    `).join('');
  } catch (e) {
    grid.innerHTML = '<p style="text-align:center;color:#999;">Could not load properties.</p>';
  }
}

// ── AVAILABLE PROPERTIES ──────────────────────────────────────────────────
const availableProperties = [
  {
    title: "YTN Programs",
    description: "A curated slate of Korean programming including travel, cooking, documentary, and educational series. Multiple titles available with English subtitles. Contact us for the full catalog.",
    image: "images/ytn-cover.jpg",
    pdf: "files/YTN Programs.pdf"
  },
  {
    title: "Cats Are Masters of the World",
    description: "An animated series following a cast of quirky cats navigating life in a bustling neighborhood. A humorous, character-driven property with strong licensing and merchandising potential.",
    image: "images/CMW.png",
    pdf: ""
  }
];

function renderAvailable() {
  const grid = document.getElementById('available-grid');
  grid.innerHTML = availableProperties.map(p => `
    <div class="property-card">
      <img src="${p.image}" alt="${p.title}" onerror="this.style.display='none'" />
      <h3>${p.title}</h3>
      <p>${p.description}</p>
${p.pdf ? `<a class="pdf-link" href="${p.pdf}" download>📄 Download Full Catalog (PDF)</a>` : ''}
    </div>
  `).join('');
}

// ── TABS ──────────────────────────────────────────────────────────────────
function initTabs() {
  const tabs = document.querySelectorAll('.tab-btn');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const target = tab.dataset.tab;
      document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
      document.getElementById(target).classList.add('active');
    });
  });
}

// ── CONTACT FORM ──────────────────────────────────────────────────────────
function handleSubmit(e) {
  e.preventDefault();
  document.getElementById('form-success').style.display = 'block';
  e.target.reset();
}

// ── INIT ──────────────────────────────────────────────────────────────────
renderServices();
renderDevelopment();
renderAvailable();
initTabs();
