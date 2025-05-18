import { useState, useLayoutEffect } from "react";
import "../styles/components/works.scss";
import "animate.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  SiFlutter,
  SiFirebase,
  SiGooglecloud,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiJavascript,
} from "react-icons/si";
import forcaDeVendasImg from "../img/project-img/prototipo_App_Forca_de_vendas.svg";
import monibankImg from "../img/project-img/monibank.png";

const projects = [
  {
    id: 1,
    title: "Sistema Força de vendas",
    category: "Websites",
    image: forcaDeVendasImg,
    year: "2023",
    status: "Concluído",
    description:
      "Sistema web e Mobile, criado em Flutter desenvolvido em equipe para a empresa Innovaro. A aplicação permite a realização de pedidos em tempo real diretamente nos sistema ERP online ou offline.",
    stacks: [
      { name: "Flutter", icon: <SiFlutter id="flutter-icon" /> },
      { name: "Firebase", icon: <SiFirebase id="firebase-icon" /> },
      { name: "Google Cloud Platform", icon: <SiGooglecloud id="gcp-icon" /> },
      { name: "Cloud Functions (TypeScript)", icon: <SiTypescript id="ts-icon" /> },
    ],
    links: [
      {
        url: "https://www.figma.com/proto/xZ9qIVOkxwqHymOQrNnoQj/prototipo-App-For%C3%A7a-de-vendas?node-id=308-13880&p=f&t=PST5KuFD89lupieH-0&scaling=scale-down&content-scaling=fixed&page-id=278%3A690&starting-point-node-id=308%3A13930",
        label: "Protótipo Figma",
      },
    ],
  },
  {
    id: 2,
    title: "landing page - monibank",
    category: "Websites",
    image: monibankImg,
    year: "2023",
    status: "Concluído",
    description: "Landing page ilustrativa do banco fictício monibank",
    stacks: [
      { name: "HTML", icon: <SiHtml5 id="html5-icon" /> },
      { name: "Css", icon: <SiCss3 id="Css3-icon" /> },
      { name: "Javascript", icon: <SiJavascript id="Javascript-icon" /> },
    ],
    links: [
      {
        url: "https://monibank-kappa.vercel.app/",
        label: "Site",
      },
      {
        url: "https://github.com/ApenasEsdras/monibank",
        label: "Código",
      },
    ],
  },
];

const categories = ["Websites"];

function Works() {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to("#title-work", {
      x: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: "#title-work",
        start: "top 800px",
        end: "bottom 700px",
        scrub: true,
      },
    });

    return () => {
      gsap.killTweensOf("#title-work");
    };
  }, []);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".project-item", {
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: ".project-item",
        start: "top 900px",
        end: "bottom 800px",
        scrub: true,
      },
    });

    return () => {
      gsap.killTweensOf(".project-item");
    };
  }, []);

  const [activeCategory, setActiveCategory] = useState("Websites");

  const filterByCategory = (category) => {
    setActiveCategory(category);
  };

  const filteredProjects = projects.filter((project) => {
    if (activeCategory === "All" || project.category === activeCategory) {
      return true;
    }
    return false;
  });

  return (
    <section className="four-part">
      <div className="works" id="section-works">
        <h2 id="title-work">Portfolio</h2>
        <div className="work-container">
          <div className="category">
            {categories.map((category) => (
              <h3
                key={category}
                onClick={() => filterByCategory(category)}
                className={category === activeCategory ? "active" : ""}
              >
                {category}
              </h3>
            ))}
          </div>
          <div className="projects-container">
            {filteredProjects.map((project) => (
              <div key={project.id} className="project-item">
                <div className="project-info">
                  <figure className="animate-image">
                    <img
                      src={project.image}
                      alt={project.title}
                      width={"500px"}
                    />
                  </figure>
                  <div className="project-detail">
                    <div className="first-line">
                      <h3 className="project-detail_title">{project.title}</h3>
                    </div>
                    <p className="project-detail_description">
                      {project.description}
                    </p>
                    <div className="project-detail_technologies">
                      {project.stacks.map((stack) => (
                        <span key={stack.name}>{stack.icon}</span>
                      ))}
                    </div>
                    <div className="project-detail_links">
                      {project.links?.map((link, idx) => (
                        <p key={idx}>
                          <a href={link.url} target="_blank" rel="noreferrer">
                            {link.label}
                          </a>
                        </p>
                      ))}
                    </div>
                  </div>
                  <hr />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Works;
