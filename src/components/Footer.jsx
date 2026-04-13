export default function Footer({ children }) {
  return (
    <div id="footer-wrapper">
      {children}
      <div id="copyright" className="container">
        <ul className="menu">
          <li>&copy; Justin Long. All rights reserved.</li>
        </ul>
      </div>
    </div>
  )
}
