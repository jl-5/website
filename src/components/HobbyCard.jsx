export default function HobbyCard({ image, alt, imagePosition = 'center center', title, description, linkHref, linkText, first = false }) {
  return (
    <section className="col-4 col-12-narrower col-12-mobile feature">
      <div className={`image-wrapper feature-img${first ? ' first' : ''}`}>
        <a className="image featured" style={{ display: 'block', height: '100%' }}>
          <img src={image} alt={alt} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: imagePosition }} />
        </a>
      </div>
      <header><h3>{title}</h3></header>
      <p>{description}</p>
      <ul className="actions">
        <li>
          <a href={linkHref} className="button" target="_blank" rel="noopener noreferrer">
            {linkText}
          </a>
        </li>
      </ul>
    </section>
  )
}
