export default function SocialLink({ icon, href, prefix, label, external = true }) {
  return (
    <li className={`icon ${icon}`}>
      <a href={href} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
        {prefix && <span className="extra">{prefix}</span>}
        {label}
      </a>
    </li>
  )
}
