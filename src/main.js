import './style.css'
import { sessions } from './data/sessions.js'

const base = import.meta.env.BASE_URL

function createCard(session) {
  const objectivesHtml =
    session.objectives.length > 0
      ? `<details class="objectives">
          <summary>
            Lernzielfragen
            <span class="count">${session.objectives.length}</span>
          </summary>
          <ol>${session.objectives.map(q => `<li>${q}</li>`).join('')}</ol>
        </details>`
      : ''

  const appBtnHtml = session.app
    ? `<a href="${session.app.url}" class="btn btn-app" target="_blank" rel="noopener noreferrer">${session.app.label}</a>`
    : ''

  return `
    <article class="session-card" role="listitem">
      <a
        href="${session.slidesUrl}"
        target="_blank"
        rel="noopener noreferrer"
        class="card-preview-link"
        aria-label="Session ${session.id}: ${session.title} – Lernmodul öffnen"
      >
        <img
          src="${base}pics/slide${session.id}.png"
          alt="Vorschau Sitzung ${session.id}"
          class="card-preview"
          loading="lazy"
          width="1600"
          height="900"
        />
        <span class="session-badge">${session.id}</span>
        <span class="preview-overlay" aria-hidden="true">▶ Lernmodul öffnen</span>
      </a>
      <div class="card-body">
        <h2 class="card-title">${session.title}</h2>
        <p class="card-info">${session.info}</p>
        ${objectivesHtml}
        <div class="card-actions">
          <a href="${session.slidesUrl}" class="btn btn-primary" target="_blank" rel="noopener noreferrer">Lernmodul</a>
          <a href="${session.pdfUrl}" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">PDF</a>
          ${appBtnHtml}
        </div>
      </div>
    </article>
  `
}

// Render all session cards
const grid = document.getElementById('sessions-grid')
grid.innerHTML = sessions.map(createCard).join('')

// Fade-in cards as they scroll into view, with a staggered entrance delay
const cards = grid.querySelectorAll('.session-card')

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return
      const card = entry.target
      card.classList.add('visible')
      // Remove the stagger delay once the entrance is done so hover feels instant
      const delay = parseFloat(card.style.transitionDelay) * 1000 || 0
      setTimeout(() => (card.style.transitionDelay = '0s'), delay + 500)
      observer.unobserve(card)
    })
  },
  { threshold: 0.06 }
)

cards.forEach((card, i) => {
  card.style.transitionDelay = `${i * 0.055}s`
  observer.observe(card)
})
