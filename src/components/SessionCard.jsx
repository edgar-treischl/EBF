import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

function SessionCard({ session, animationDelay }) {
  const cardRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.1 })

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current)
    }
  }, [])

  const base = import.meta.env.BASE_URL

  return (
    <article
      ref={cardRef}
      className="session-card"
      role="listitem"
      style={{ '--delay': `${animationDelay}s` }}
    >
      <Link
        to={`/sessions/${session.id}`}
        className="card-preview-link"
        aria-label={`Session ${session.id}: ${session.title} – Details öffnen`}
      >
        <img
          src={`${base}pics/slide${session.id}.png`}
          alt={`Vorschau Sitzung ${session.id}`}
          className="card-preview"
          loading="lazy"
          width="1600"
          height="900"
        />
        <span className="session-badge">{session.id}</span>
        <span className="preview-overlay" aria-hidden="true">
          ▶ Details anzeigen
        </span>
      </Link>

      <div className="card-body">
        <h2 className="card-title">{session.title}</h2>
        <p className="card-info">{session.info}</p>

        {session.objectives.length > 0 && (
          <details className="objectives">
            <summary>
              Lernzielfragen
              <span className="count">{session.objectives.length}</span>
            </summary>
            <ol>
              {session.objectives.map((q, idx) => (
                <li key={idx}>{q}</li>
              ))}
            </ol>
          </details>
        )}

        <div className="card-actions">
          <a
            href={session.slidesUrl}
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Lernmodul
          </a>
          <a
            href={session.pdfUrl}
            className="btn btn-secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            PDF
          </a>
          {session.app && (
            <a
              href={session.app.url}
              className="btn btn-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              {session.app.label}
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

export default SessionCard
