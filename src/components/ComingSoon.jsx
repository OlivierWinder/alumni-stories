import { Link } from 'react-router-dom'

export default function ComingSoon({ alumniName }) {
  return (
    <div className="coming-soon">
      <header className="coming-soon__header">
        <Link to="/" className="story-stage__nav-link">
          All stories
        </Link>
        {alumniName && (
          <span className="story-stage__name">{alumniName}</span>
        )}
      </header>

      <main className="coming-soon__main">
        <p>This story is coming soon.</p>
        <Link to="/" className="btn btn--primary">
          Go back
        </Link>
      </main>
    </div>
  )
}
