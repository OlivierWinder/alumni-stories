import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { alumniStories, PROGRAMS } from '../data/alumni'
import { assetUrl } from '../utils/assetUrl'

const SORT_OPTIONS = [
  { value: 'date-desc', label: 'Date (newest)' },
  { value: 'date-asc', label: 'Date (oldest)' },
  { value: 'name-asc', label: 'Name (A–Z)' },
  { value: 'name-desc', label: 'Name (Z–A)' },
  { value: 'program-asc', label: 'Program (A–Z)' },
]

function sortStories(stories, sortBy) {
  const sorted = [...stories]
  switch (sortBy) {
    case 'date-asc':
      return sorted.sort(
        (a, b) => Number(a.experienceYear) - Number(b.experienceYear),
      )
    case 'name-asc':
      return sorted.sort((a, b) => a.name.localeCompare(b.name))
    case 'name-desc':
      return sorted.sort((a, b) => b.name.localeCompare(a.name))
    case 'program-asc':
      return sorted.sort((a, b) => a.program.localeCompare(b.program))
    case 'date-desc':
    default:
      return sorted.sort(
        (a, b) => Number(b.experienceYear) - Number(a.experienceYear),
      )
  }
}

function AlumniCard({ alumni }) {
  const content = (
    <>
      <img src={assetUrl(alumni.portrait)} alt="" className="home-grid__image" />
      <div className="home-grid__overlay">
        <p className="home-grid__meta">
          {alumni.experienceYear} · {alumni.program}
        </p>
        <h2>{alumni.name}</h2>
        <p className="home-grid__quote">{alumni.quote}</p>
      </div>
      {!alumni.available && (
        <span className="home-grid__badge">Coming soon</span>
      )}
    </>
  )

  return (
    <Link
      to={`/story/${alumni.id}`}
      className={`home-grid__cell${
        alumni.available ? ' home-grid__cell--active' : ' home-grid__cell--soon'
      }`}
    >
      {content}
    </Link>
  )
}

export default function HomePage() {
  const [selectedProgram, setSelectedProgram] = useState('all')
  const [sortBy, setSortBy] = useState('date-desc')

  const visibleStories = useMemo(() => {
    const filtered =
      selectedProgram === 'all'
        ? alumniStories
        : alumniStories.filter((a) => a.program === selectedProgram)
    return sortStories(filtered, sortBy)
  }, [selectedProgram, sortBy])

  return (
    <div className="home-page">
      <header className="home-header">
        <img
            src={assetUrl('/images/recess-logo.png')}
          alt="Recess College"
          className="home-header__logo"
        />
        <div className="home-header__text">
          <h1>Alumni Stories</h1>
          <p>
            Every alumni has a different story to share. Explore the stories
            below and watch the interactive videos to walk in their shoes.
          </p>
        </div>
      </header>

      <div className="home-toolbar-sticky">
        <div className="home-toolbar" role="toolbar" aria-label="Filter stories">
          <div className="home-toolbar__programs">
            <span className="home-toolbar__label">Program</span>
            <div className="home-toolbar__options" role="group" aria-label="Program">
              <button
                type="button"
                className={
                  selectedProgram === 'all'
                    ? 'home-toolbar__chip is-active'
                    : 'home-toolbar__chip'
                }
                onClick={() => setSelectedProgram('all')}
              >
                All
              </button>
              {PROGRAMS.map((program) => (
                <button
                  key={program}
                  type="button"
                  className={
                    selectedProgram === program
                      ? 'home-toolbar__chip is-active'
                      : 'home-toolbar__chip'
                  }
                  onClick={() => setSelectedProgram(program)}
                >
                  {program}
                </button>
              ))}
            </div>
          </div>

          <div className="home-toolbar__sort">
            <label className="home-toolbar__label" htmlFor="story-sort">
              Sort by
            </label>
            <select
              id="story-sort"
              className="home-toolbar__select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              {SORT_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {visibleStories.length === 0 ? (
        <p className="home-grid__empty">
          No stories in this program yet.
        </p>
      ) : (
        <section className="home-grid" aria-label="Alumni stories">
          {visibleStories.map((alumni) => (
            <AlumniCard key={alumni.id} alumni={alumni} />
          ))}
        </section>
      )}
    </div>
  )
}
