import './style/Footer.css';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
export default function Footer() {
  return (
    <footer>
      <ul>
        <li>
          <a href='https://www.instagram.com/calidoweb/?hl=pt-br'
            target='_blank noopener'>
            <FaInstagram />
          </a>
        </li>
        <li>
          <a href='https://br.linkedin.com/in/drigosantos'
            target='_blank noopener'>
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a href='https://github.com/odiegosantos'
            target='_blank nooperner'>
            <FaGithub />
          </a>
        </li>
      </ul>
      <p className='name'>Diego Santos</p>
    </footer>
  )
};