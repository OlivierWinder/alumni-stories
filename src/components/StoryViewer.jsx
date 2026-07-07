import { useCallback, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

function formatTime(seconds) {
  if (!Number.isFinite(seconds) || seconds < 0) return '0:00'
  const m = Math.floor(seconds / 60)
  const s = Math.floor(seconds % 60)
  return `${m}:${s.toString().padStart(2, '0')}`
}

export default function StoryViewer({
  panel,
  alumniName,
  onBack,
  onNext,
  onVideoEnded,
  canGoBack,
  isLastPanel,
  controlsDisabled = false,
  audioEnabled = false,
  showContext = true,
}) {
  const videoRef = useRef(null)
  const stageRef = useRef(null)
  const [duration, setDuration] = useState(0)
  const [timeLeft, setTimeLeft] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const isVideo = panel.type === 'video'

  useEffect(() => {
    const video = videoRef.current
    if (!video || !isVideo) return

    setDuration(0)
    setTimeLeft(0)
    setIsPaused(false)
    video.load()
    video.muted = !audioEnabled
    video.play().catch(() => {})
  }, [panel.id, panel.type, panel.src, audioEnabled, isVideo])

  const togglePause = useCallback(() => {
    const video = videoRef.current
    if (!video || !isVideo || controlsDisabled) return

    if (video.paused) {
      video.play().catch(() => {})
      setIsPaused(false)
    } else {
      video.pause()
      setIsPaused(true)
    }
  }, [isVideo, controlsDisabled])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code !== 'Space' && e.key !== ' ') return
      const tag = e.target?.tagName
      if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'BUTTON') return
      e.preventDefault()
      togglePause()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [togglePause])

  const handleTimeUpdate = useCallback(() => {
    const video = videoRef.current
    if (!video) return
    const d = video.duration
    if (Number.isFinite(d)) {
      setDuration(d)
      setTimeLeft(Math.max(0, d - video.currentTime))
    }
    setIsPaused(video.paused)
  }, [])

  const handleLoadedMetadata = useCallback(() => {
    const video = videoRef.current
    if (!video || !Number.isFinite(video.duration)) return
    setDuration(video.duration)
    setTimeLeft(video.duration)
  }, [])

  const handleEnded = useCallback(() => {
    if (!controlsDisabled && onVideoEnded) {
      onVideoEnded()
    }
  }, [controlsDisabled, onVideoEnded])

  const progress =
    duration > 0 ? ((duration - timeLeft) / duration) * 100 : 0

  const contextText = panel.caption

  return (
    <div className="story-stage" ref={stageRef}>
      <div
        className="story-stage__media"
        onClick={isVideo ? togglePause : undefined}
        onKeyDown={
          isVideo
            ? (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  togglePause()
                }
              }
            : undefined
        }
        role={isVideo ? 'button' : undefined}
        tabIndex={isVideo ? 0 : undefined}
        aria-label={isVideo ? (isPaused ? 'Play video' : 'Pause video') : undefined}
      >
        {panel.type === 'image' ? (
          <img src={panel.src} alt="" />
        ) : (
          <>
            <video
              ref={videoRef}
              src={panel.src}
              poster={panel.poster}
              muted={!audioEnabled}
              playsInline
              loop={false}
              autoPlay
              onLoadedMetadata={handleLoadedMetadata}
              onTimeUpdate={handleTimeUpdate}
              onEnded={handleEnded}
              onPlay={() => setIsPaused(false)}
              onPause={() => setIsPaused(true)}
            />
            {isPaused && (
              <div className="story-stage__pause-indicator" aria-hidden="true">
                <span />
              </div>
            )}
          </>
        )}
      </div>

      <header className="story-stage__top">
        <Link to="/" className="story-stage__nav-link">
          All stories
        </Link>
        <span className="story-stage__name">{alumniName}</span>
      </header>

      <footer className="story-stage__dock">
        {isVideo && (
          <div
            className="story-stage__dock-progress"
            aria-hidden={duration === 0}
          >
            <div className="story-stage__progress-track">
              <div
                className="story-stage__progress-fill"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}

        <div
          className={`story-stage__dock-inner${
            isVideo ? ' story-stage__dock-inner--has-time' : ''
          }`}
        >
          {isVideo && (
            <span className="story-stage__progress-time">
              {formatTime(timeLeft)} left
            </span>
          )}

          <button
            type="button"
            className="story-stage__dock-btn"
            onClick={onBack}
            disabled={!canGoBack || controlsDisabled}
          >
            Back
          </button>
          {showContext ? (
            <p className="story-stage__context">{contextText}</p>
          ) : (
            <span className="story-stage__context" />
          )}
          <div className="story-stage__dock-actions">
            {isVideo && (
              <button
                type="button"
                className="story-stage__dock-btn"
                onClick={togglePause}
                disabled={controlsDisabled}
              >
                {isPaused ? 'Play' : 'Pause'}
              </button>
            )}
            <button
              type="button"
              className="story-stage__dock-btn story-stage__dock-btn--primary"
              onClick={onNext}
              disabled={controlsDisabled}
            >
              {isLastPanel ? 'Finish' : 'Next'}
            </button>
          </div>
        </div>
      </footer>
    </div>
  )
}
