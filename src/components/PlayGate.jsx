export default function PlayGate({ onPlay }) {
  return (
    <div className="story-stage story-stage--gate">
      <button
        type="button"
        className="play-gate__button"
        onClick={onPlay}
        aria-label="Play experience"
      >
        <span className="play-gate__icon" aria-hidden="true" />
        <span className="play-gate__label">Play</span>
      </button>
    </div>
  )
}
