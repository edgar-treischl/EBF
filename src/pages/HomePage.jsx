import { sessions } from '../data/sessions.js'
import SessionGrid from '../components/SessionGrid.jsx'
import Header from '../components/Header.jsx'

function HomePage() {
  return (
    <>
      <Header />

      <main className="site-main">
        <div className="container">
          <p className="page-intro">
            Für jede Sitzung findest du hier das Lernmodul, PDF-Slides und
            Lernzielfragen, mit denen du die zentralen Inhalte überprüfen
            kannst.
          </p>

          <SessionGrid sessions={sessions} />
        </div>
      </main>
    </>
  )
}

export default HomePage
