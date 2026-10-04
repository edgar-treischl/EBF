import { Link, useParams } from 'react-router-dom'
import { sessions } from '../data/sessions.js'

function SessionPage() {
  const { id } = useParams()

  const session = sessions.find(
    (session) => String(session.id) === id
  )

  if (!session) {
    return (
      <main className="site-main">
        <div className="container">
          <div className="session-page session-not-found">
            <Link to="/" className="back-link">
              ← Alle Sitzungen
            </Link>

            <h1>Sitzung nicht gefunden</h1>

            <p>
              Die angeforderte Sitzung konnte nicht gefunden werden.
            </p>
          </div>
        </div>
      </main>
    )
  }

  const base = import.meta.env.BASE_URL

  return (
    <>
      <header className="site-header">
        <div className="container">
          <Link to="/" className="back-link">
            ← Zurück
          </Link>

          <h1 className="header-title">
            {session.title}
          </h1>
        </div>
      </header>

      <main className="site-main">
        <div className="container">
          <div className="session-page">

            {/* ==================================================
                Session introduction
                ================================================== */}

            <section className="session-hero">
              <div className="session-preview-wrapper">
                <img
                  src={`${base}pics/slide${session.id}.png`}
                  alt={`Vorschau Sitzung ${session.id}`}
                  className="session-preview"
                />
              </div>

              <div className="session-overview">
                <p className="section-eyebrow">
                  Materialien
                </p>

                <h2>
                  Sitzung {session.id}: {session.title}
                </h2>

                <p className="session-description">
                  {session.info}
                </p>

                <div
                  className="session-actions"
                  aria-label="Materialien"
                >
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
            </section>

            {/* ==================================================
                Learning objectives
                ================================================== */}

            {session.objectives.length > 0 && (
              <section className="learning-objectives">
                <div className="section-heading">
                  <p className="section-eyebrow">
                    Question yourself!
                  </p>

                  <h2>
                    Lernzielfragen
                  </h2>
                </div>

                <ol>
                  {session.objectives.map((question, index) => (
                    <li key={index}>
                      <span className="question-number">
                        {String(index + 1).padStart(2, '0')}
                      </span>

                      <span className="question-text">
                        {question}
                      </span>
                    </li>
                  ))}
                </ol>
              </section>
            )}

          </div>
        </div>
      </main>
    </>
  )
}

export default SessionPage