import '../styles/components/about.scss';
import { SiTypescript, SiPostgresql, SiFlutter, SiFirebase, SiGooglecloud } from "react-icons/si";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function About() {

  useLayoutEffect(() => {

    gsap.registerPlugin(ScrollTrigger)
    gsap.to('#title-section', {
      x: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: '#title-section',
        //markers: true,
        start: 'top 800px',
        end: 'bottom 700px',
        scrub: true,
      }
    })

    return () => {
      gsap.killTweensOf('#title-section')
    }
  }, [])

  useLayoutEffect(() => {

    gsap.registerPlugin(ScrollTrigger)
    gsap.to('.profile', {
      x: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: '.flx-about',
        //markers: true,
        start: 'top 700px',
        end: 'bottom 900px',
        scrub: true,

      }
    })

    return () => {
      gsap.killTweensOf('.profile')
    }
  }, [])

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.to('.about-details', {
      x: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: '.flx-about',
        start: 'top 700px',
        end: 'bottom 500px',
        scrub: true,
      }
    })

    return () => {
      gsap.killTweensOf('.about-details')
    }
  }, [])



  return (
    <section className="flx-second_part">
      <div className="about" id='section-about'>
        <h2 id='title-section'>Sobre mim</h2>
        <div className="flx-about">
          <img src="https://avatars.githubusercontent.com/u/93005998?v=4" alt="Esdras De Oliveira" className='profile'/>
          <div className="about-details">
            <div className='about-text'>
              <p>Apaixonado por tecnologia, ingressei na área de desenvolvimento em 2022. Sou Formado em Análise e 
                Desenvolvimento de Sistemas (ADS) e atualmente atuo como desenvolvimento Fullstack. Meu foco esta no 
                desenvolvimento de aplicações moveis com flutter, mas também posuo experiencia com sistemas ERP.</p>
              <div>
                <div className='icons-container'>
                <div className='icons-container_item' id='item-1'>
                    <SiFlutter />
                    <div>
                      <p>Flutter</p>
                    </div>
                  </div>
                  <div className='icons-container_item' id='item-2'>
                    <SiFirebase />
                    <div>
                      <p>Firebase</p>
                    </div>
                  </div>
                  <div className='icons-container_item' id='item-3'>
                    <SiTypescript />
                    <div>
                      <p>Typescript</p>
                    </div>
                  </div>
                  <div className='icons-container_item' id='item-4'>
                    <FaNodeJs />
                    <div>
                      <p>Nodejs</p>
                    </div>
                  </div>
                  <div className='icons-container_item' id='item-5'>
                    <FaReact />
                    <div>
                      <p>React</p>
                    </div>
                  </div>
                  <div className='icons-container_item' id='item-6'>
                    <SiPostgresql />
                    <div>
                      <p>PostgreSQL</p>
                    </div>
                  </div>
                  <div className='icons-container_item' id='item-7'>
                    <SiGooglecloud />
                    <div>
                      <p>GCP</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About