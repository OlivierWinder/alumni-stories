import { Link } from 'react-router-dom'

export default function ReflectionScreen({
  alumniName,
  question,
  onSubmit,
  onSkip,
}) {
  return (
    <div className="story-stage story-stage--reflection">
      <header className="story-stage__top">
        <Link to="/" className="story-stage__nav-link">
          All stories
        </Link>
        <span className="story-stage__name">{alumniName}</span>
      </header>

      <div className="reflection-screen__body">
        <p className="reflection-screen__label">Reflect</p>
        <h1 id="reflection-prompt">{question.prompt}</h1>
        {question.context && (
          <p className="reflection-screen__context">{question.context}</p>
        )}

        <ul className="reflection-screen__options">
          {question.options.map((opt) => (
            <li key={opt.id}>
              <button
                type="button"
                className="reflection-screen__option"
                onClick={() =>
                  onSubmit(
                    opt.id,
                    opt.type ?? null,
                    opt.text ?? opt.label,
                  )
                }
              >
                {opt.text ?? opt.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="reflection-screen__skip"
          onClick={onSkip}
        >
          Skip this question
        </button>
      </div>
    </div>
  )
}
