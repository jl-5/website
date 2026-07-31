import './ProjectCard.css'

const CATEGORY_LABELS = { websites: 'Website', games: 'Game', art: 'Art', music: 'Music' }
const CATEGORY_OVERLAY = {
  websites: 'rgba(74, 144, 217, 0.72)',
  games:    'rgba(224, 123, 84, 0.72)',
  art:      'rgba(123, 104, 200, 0.72)',
  music:    'rgba(45, 175, 155, 0.72)',
}

export default function ProjectCard({ project }) {
  const { category, title, description, icon, url, image } = project
  const overlay = CATEGORY_OVERLAY[category]
  const bgStyle = image
    ? {
        backgroundImage: `linear-gradient(${overlay}, ${overlay}), url('${image}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }
    : {}

  return (
    <a className="project-card" href={url} target="_blank" rel="noopener noreferrer">
      <div className={`project-card-icon ${category}`} style={bgStyle}>
        <i className={icon} />
      </div>
      <div className="project-card-body">
        <span className={`project-tag ${category}`}>{CATEGORY_LABELS[category] ?? category}</span>
        <header><h3>{title}</h3></header>
        <p>{description}</p>
      </div>
    </a>
  )
}
