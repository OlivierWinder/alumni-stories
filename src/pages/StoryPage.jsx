import { useCallback, useEffect, useMemo, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import ComingSoon from '../components/ComingSoon'
import Disclaimer from '../components/Disclaimer'
import PlayGate from '../components/PlayGate'
import ReflectionIntro from '../components/ReflectionIntro'
import ReflectionScreen from '../components/ReflectionScreen'
import StorySummary from '../components/StorySummary'
import StoryViewer from '../components/StoryViewer'
import { getAlumniById } from '../data/alumni'

function isSceneStory(alumni) {
  return alumni.storyFormat === 'scenes' && alumni.scenes?.length
}

function getReflectionAfterIndex(reflection, alumni) {
  if (isSceneStory(alumni)) {
    return reflection.afterSceneIndex
  }
  return reflection.afterPanelIndex
}

export default function StoryPage() {
  const { alumniId } = useParams()
  const navigate = useNavigate()
  const alumni = getAlumniById(alumniId ?? '')
  const sceneStory = alumni && isSceneStory(alumni)

  const [sceneIndex, setSceneIndex] = useState(0)
  const [phase, setPhase] = useState('story')
  const [audioEnabled, setAudioEnabled] = useState(false)
  const [answers, setAnswers] = useState([])
  const [activeReflection, setActiveReflection] = useState(null)
  const [answeredReflectionIds, setAnsweredReflectionIds] = useState(
    () => new Set(),
  )

  useEffect(() => {
    const isScenes = alumni && isSceneStory(alumni)
    setSceneIndex(0)
    setPhase(isScenes ? 'play' : 'story')
    setAudioEnabled(false)
    setAnswers([])
    setAnsweredReflectionIds(new Set())
    setActiveReflection(null)
  }, [alumniId, alumni])

  const steps = useMemo(() => {
    if (!alumni) return []
    return isSceneStory(alumni) ? alumni.scenes : alumni.panels
  }, [alumni])

  const pendingReflection = useMemo(() => {
    if (!alumni) return null
    return (
      alumni.reflections.find((r) => {
        const afterIndex = getReflectionAfterIndex(r, alumni)
        return (
          afterIndex === sceneIndex && !answeredReflectionIds.has(r.id)
        )
      }) ?? null
    )
  }, [alumni, sceneIndex, answeredReflectionIds])

  const goToNext = useCallback(() => {
    if (!alumni) return
    const isLast = sceneIndex >= steps.length - 1
    if (isLast) {
      setPhase('summary')
    } else {
      setSceneIndex((i) => i + 1)
    }
  }, [alumni, sceneIndex, steps.length])

  const advanceFromScene = useCallback(() => {
    if (!alumni) return
    if (pendingReflection) {
      setActiveReflection(pendingReflection)
      setPhase('reflection-intro')
      return
    }
    goToNext()
  }, [alumni, pendingReflection, goToNext])

  const handleNext = useCallback(() => {
    advanceFromScene()
  }, [advanceFromScene])

  const handleBack = useCallback(() => {
    if (sceneIndex > 0) {
      setSceneIndex((i) => i - 1)
    }
  }, [sceneIndex])

  const handleReflectionSubmit = useCallback(
    (questionId, selectedType, selectedText, prompt) => {
      setAnswers((prev) => [
        ...prev,
        {
          questionId,
          questionPrompt: prompt,
          selectedType: selectedType || null,
          selectedText,
        },
      ])
      setAnsweredReflectionIds((prev) => new Set(prev).add(questionId))
      setActiveReflection(null)
      setPhase('story')
      goToNext()
    },
    [goToNext],
  )

  const handleReflectionSkip = useCallback(() => {
    if (!activeReflection) return
    setAnsweredReflectionIds((prev) =>
      new Set(prev).add(activeReflection.id),
    )
    setActiveReflection(null)
    setPhase('story')
    goToNext()
  }, [activeReflection, goToNext])

  const handleRestart = useCallback(() => {
    setSceneIndex(0)
    setPhase(sceneStory ? 'play' : 'story')
    setAudioEnabled(false)
    setAnswers([])
    setAnsweredReflectionIds(new Set())
    setActiveReflection(null)
  }, [sceneStory])

  if (!alumni) {
    return (
      <div className="story-stage story-stage--missing">
        <p>Story not found.</p>
        <Link to="/" className="story-stage__nav-link">
          All stories
        </Link>
      </div>
    )
  }

  if (!alumni.available) {
    return <ComingSoon alumniName={alumni.name} />
  }

  if (phase === 'summary') {
    return (
      <StorySummary
        alumni={alumni}
        answers={answers}
        onRestart={handleRestart}
        onExit={() => navigate('/')}
      />
    )
  }

  if (phase === 'play') {
    return (
      <PlayGate
        onPlay={() => {
          setAudioEnabled(true)
          setPhase('disclaimer')
        }}
      />
    )
  }

  if (phase === 'disclaimer') {
    return (
      <Disclaimer
        alumniName={alumni.name}
        text={alumni.disclaimer}
        extraNotes={alumni.disclaimerNotes ?? []}
        onContinue={() => setPhase('story')}
      />
    )
  }

  if (phase === 'reflection-intro' && activeReflection) {
    return (
      <ReflectionIntro
        alumniName={alumni.name}
        onContinue={() => setPhase('reflection')}
      />
    )
  }

  if (phase === 'reflection' && activeReflection) {
    return (
      <ReflectionScreen
        alumniName={alumni.name}
        question={activeReflection}
        onSubmit={(optionId, selectedType, selectedText) =>
          handleReflectionSubmit(
            activeReflection.id,
            selectedType,
            selectedText,
            activeReflection.prompt,
          )
        }
        onSkip={handleReflectionSkip}
      />
    )
  }

  const currentStep = steps[sceneIndex]
  const panel = isSceneStory(alumni)
    ? {
        id: currentStep.id,
        type: 'video',
        src: currentStep.src,
        caption: currentStep.label || '',
      }
    : currentStep

  return (
    <StoryViewer
      panel={panel}
      alumniName={alumni.name}
      onBack={handleBack}
      onNext={handleNext}
      onVideoEnded={advanceFromScene}
      canGoBack={sceneIndex > 0}
      isLastPanel={sceneIndex >= steps.length - 1}
      audioEnabled={audioEnabled && isSceneStory(alumni)}
      showContext={!isSceneStory(alumni) || Boolean(currentStep.label)}
    />
  )
}
