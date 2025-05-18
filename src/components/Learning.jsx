import "../styles/components/Learning.scss";
import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Learning() {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to("#title-learning", {
      x: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: "#title-learning",
        //markers: true,
        start: "top 800px",
        end: "bottom 700px",
        scrub: true,
      },
    });

    return () => {
      gsap.killTweensOf("#title-section");
    };
  }, []);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".timeline-component", {
      x: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: ".timeline-component",
        start: "top 800px",
        end: "bottom 700px",
        scrub: true,
      },
    });

    return () => {
      gsap.killTweensOf(".timeline-component");
    };
  }, []);

  return (
    <section className="third-part">
      <section className="learning" id="section-learning">
        <h2 id="title-learning">Estudos e experiências</h2>
        <div className="timeline">
          <div className="timeline-empty"></div>
          <div className="timeline-middle_1">
            <div className="timeline-circle_1"></div>
          </div>
          <div className="timeline-component timeline-content">
            <h3>2022 - 2024</h3>
            <p>Cursando Faculdade de ADS</p>
          </div>
          <div className="timeline-component timeline-content">
            <h3>OUT-2023 - Estagio</h3>
            <p>
              Inicio do Estagio{" "}
            </p>
          </div>
          <div className="timeline-middle_2">
            <div className="timeline-circle_2"></div>
          </div>
          <div className="timeline-empty"></div>

          <div className="timeline-empty"></div>

          <div className="timeline-middle_3">
            <div className="timeline-circle_3"></div>
          </div>
          <div className=" timeline-component timeline-content">
            <h3>Fev-2024 - Contratado</h3>
            <p>Fui contratado pela empresa do meu estagio para ser Analista de desenvolvimento - Fullstack</p>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Learning;
