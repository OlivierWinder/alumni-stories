import { Link } from 'react-router-dom'

export default function StorySummary({
  alumni,
  answers,
  onRestart,
  onExit,
}) {
  return (
    <div className="summary-page">
      <header className="summary-page__header">
        <Link to="/" className="story-stage__nav-link">
          All stories
        </Link>
        <span className="story-stage__name">{alumni.name}</span>
      </header>

      <main className="summary-page__main">
        <h1>Your reflections</h1>
        <p className="summary-page__intro">
          A brief record of the choices you made during this story.
        </p>

        {answers.length > 0 ? (
          <ol className="summary-list">
            {answers.map((a, i) => (
              <li key={a.questionId} className="summary-item">
                <span className="summary-item__num">{i + 1}</span>
                <div>
                  <p className="summary-item__question">{a.questionPrompt}</p>
                  {a.selectedType && (
                    <p className="summary-item__type">{a.selectedType}</p>
                  )}
                  <p className="summary-item__answer">{a.selectedText}</p>
                </div>
              </li>
            ))}
          </ol>
        ) : (
          <p className="summary-empty">
            No reflection choices were recorded on this pass.
          </p>
        )}

        {alumni.closingReflection && (
          <aside className="summary-closing">
            <h2>{alumni.closingReflection.prompt}</h2>
            <p>{alumni.closingReflection.body}</p>
          </aside>
        )}

        {alumni.contact && (
          <aside className="summary-contact">
            <p>{alumni.contact.prompt}</p>
            <p className="summary-contact__email">
              <a href={`mailto:${alumni.contact.email}`}>
                {alumni.contact.email}
              </a>
            </p>
            <p>{alumni.contact.programText}</p>
            <p>
              <a
                href={alumni.contact.programUrl}
                target="_blank"
                rel="noreferrer"
              >
                {alumni.contact.programUrl}
              </a>
            </p>
          </aside>
        )}

        <div className="summary-actions">
          <button type="button" className="btn btn--ghost" onClick={onExit}>
            All stories
          </button>
          <button type="button" className="btn btn--primary" onClick={onRestart}>
            Replay story
          </button>
        </div>
      </main>
    </div>
  )
}
