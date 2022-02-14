import './style/Header.css';

export default function Header({ black }) {
  return (
    <header className={black ? 'black' : ''}>
      <div className='logo'>
        <a href='#home'>
          Food.
        </a>
      </div>
      <nav className='navigation'>
        <ul>
          <li>
            <a href='#home'>
              Home
            </a>
          </li>
          <li>
            <a href='#fotosSection'>
              Galery
            </a>
          </li>
          <li>
            <a href='https://www.pexels.com/pt-br/'
              target='_blank nooperner'>
              Api Pexels
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
};