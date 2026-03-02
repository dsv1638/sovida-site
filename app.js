// ── SERVICES ──────────────────────────────────────────────────────────────
// To edit services, just update this array
const services = [
  {
    title: "Business Development",
    description: "Analyzing, identifying, negotiating & closing initiatives and deals that grow your business"
  },
  {
    title: "Licensing",
    description: "Setting up and running your licensing program"
  },
  {
    title: "Market Development",
    description: "Bringing properties and brands to new markets and platforms"
  },
  {
    title: "Strategic Partnerships",
    description: "Finding the right partner(s) to help your business growth and expansion. Structuring the deal. Closing the partnership."
  },
  {
    title: "IP Development",
    description: "Taking a creative idea and making it a reality"
  }
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

// ── PROPERTIES ────────────────────────────────────────────────────────────
// Properties are loaded from properties.json — edit that file to add/remove properties
async function renderProperties() {
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
    grid.innerHTML = '<p style="text-align:center; color:#999;">Could not load properties.</p>';
  }
}

// ── CONTACT FORM ──────────────────────────────────────────────────────────
// Note: This shows a success message but doesn't actually send email.
// To enable real email, sign up for a free account at https://formspree.io
// and replace the form action in index.html with your Formspree endpoint.
function handleSubmit(e) {
  e.preventDefault();
  document.getElementById('form-success').style.display = 'block';
  e.target.reset();
}

// ── INIT ──────────────────────────────────────────────────────────────────
renderServices();
renderProperties();