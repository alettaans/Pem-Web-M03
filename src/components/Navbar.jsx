export default function Navbar() {
  return (
    <nav className="Nav">
      <a href="/" className="site-name">
        NavBar
      </a>
      <ul>
        <li>
          <a href="/home">Home</a>
        </li>
        <li>
          <a href="/about">About Us</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
