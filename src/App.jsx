import Navbar from './components/Navbar'
import About from './components/About'
import Works from './components/Works'
import BubbleAnimation from './components/BubbleAnimation'
import { HashLink } from 'react-router-hash-link';

import './styles/components/app.scss'
import { FaGithub, FaLinkedin, FaAngleDoubleDown} from 'react-icons/fa'
import Learning from './components/Learning'

function App() {

  const actualYear = new Date().getFullYear();

  return (
    <div id="portfolio">
      <Navbar />
      <section className="flx-home">
      <BubbleAnimation />
        <div id="wrapper-home">
          <img src="https://avatars.githubusercontent.com/u/93005998?v=4" alt="Esdras De Oliveira"/>
          <h2>Esdras De Oliveira</h2>
          <p>Desenvolvedor Fullstack</p>
          <ul className="rs-links">
            <li><a href="https://www.linkedin.com/in/esdrasdeoliveira/" target='_blank' rel='noreferrer'>
              <FaLinkedin />
            </a></li>
            <li><a href="https://github.com/ApenasEsdras" target='_blank' rel='noreferrer'>
              <FaGithub />
            </a></li>
          </ul>
        </div>
        <HashLink smooth to='/#section-about' id="scroll-down">
            <p>Clique aqui</p>
              <FaAngleDoubleDown className='scroll-icon'/>
        </HashLink>
      </section>
      <About/>
      <Learning />
      <Works />
      <footer>
      {actualYear} © Desenvolvido por <a href="https://github.com/ApenasEsdras" target='_blank' rel='noreferrer'>Esdras De Oliveira</a>
      </footer>
    </div>
  )
}

export default App
