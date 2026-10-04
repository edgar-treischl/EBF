import SessionCard from './SessionCard.jsx'

function SessionGrid({ sessions }) {
  return (
    <div className="sessions-grid" role="list">
      {sessions.map((session, index) => (
        <SessionCard
          key={session.id}
          session={session}
          animationDelay={index * 0.055}
        />
      ))}
    </div>
  )
}

export default SessionGrid
