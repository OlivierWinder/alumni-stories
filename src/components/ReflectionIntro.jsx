import { Link } from 'react-router-dom'

export default function ReflectionIntro({ alumniName, onContinue }) {
  return (
    <div className="story-stage story-stage--reflection-intro">
      <header className="story-stage__top">
        <Link to="/" className="story-stage__nav-link">
          All stories
        </Link>
        <span className="story-stage__name">{alumniName}</span>
      </header>

      <div className="reflection-intro__content">
        <h1>Now it&apos;s your time to make a decision.</h1>
        <p>How would you react in this situation?</p>
        <button
          type="button"
          className="story-stage__dock-btn story-stage__dock-btn--primary reflection-intro__continue"
          onClick={onContinue}
        >
          Continue
        </button>
      </div>
    </div>
  )
}
