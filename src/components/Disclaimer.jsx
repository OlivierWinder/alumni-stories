import { Link } from 'react-router-dom'

export default function Disclaimer({
  alumniName,
  text,
  extraNotes = [],
  onContinue,
}) {
  return (
    <div className="story-stage story-stage--disclaimer">
      <header className="story-stage__top">
        <Link to="/" className="story-stage__nav-link">
          All stories
        </Link>
        <span className="story-stage__name">{alumniName}</span>
      </header>

      <div className="disclaimer__content">
        <p>{text}</p>
        {extraNotes.length > 0 && (
          <div className="disclaimer__notes">
            {extraNotes.map((note) => (
              <p key={note}>{note}</p>
            ))}
          </div>
        )}
        <button
          type="button"
          className="story-stage__dock-btn story-stage__dock-btn--primary disclaimer__continue"
          onClick={onContinue}
        >
          Continue
        </button>
      </div>
    </div>
  )
}
