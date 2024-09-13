import React from 'react';
import Project from './Project';

const projects = [
  {
    title: "Jeux Combinatoire en Java : Dhou-Shou-qi",
    description: "Ce jeu a été réalisé en groupe et a été mis en ligne sur GitHub. Il se joue en réseau local.",
    link: "https://github.com/Laeky/Dou-shou-qi",
    dates: "2020-2021"
  },
  {
    title: "Solver Booléen en Ocaml",
    description: "Le principe était de créer un système de résolution d'équation avec des types de variables booléens. Il devait afficher tous les résultats possibles pour un système donné.",
    dates: "2021-2022"
  },
  {
    title: "Robot trieur en C",
    description: "Ce projet consistait à trouver des chemins optimaux pour un pion sur un plateau.",
    dates: "2021-2022"
  },
  {
    title: "Implémentation d'une base de donnée en PostgreSql : Mini CityMapper",
    description: `Conception d'une base de données à l'aide d'une carte faite en Python.
                  Le but était de trouver des chemins d'un point de départ à un point d'arrivée.
                  Ces chemins correspondaient à des réseaux de transport que l'on pouvait emprunter.`,
    dates: "2022-2023"
  },
  {
    title: "Conception de jeu en JavaScript : Jeu de Monstres",
    description: `Ce projet est une application web interactive qui permet de gérer un monstre virtuel.
                  Il s'agit d'un mini-jeux permettant de jouer.`,
    link: "https://github.com/Nivvj/monster_game/tree/master/squelette_monster",
    dates: "2022-2023"
  },
  {
    title: "Structures de données avancées",
    description: `Implémentation d'un espace bidimensionnel utilisant l'algorithme de Barnes-Hut. 
                  Ce projet en Python se base sur l'utilisation d'une structure de quadtree.
                  Les principales fonctions incluent la création et la gestion des particules (génération, 
                  insertion, mise à jour des coordonnées), la division de l'espace en quadrants pour 
                  optimiser la simulation, et la détection de la présence de particules dans ces quadrants.`,
    dates: "2023-2024"
  },
  {
    title: "Gestion de projet : Application de comparaison de séquences d'ADN",
    description: `Dans le cadre d'un travail utilisant les méthodologies de gestion de projet, 
                  une équipe de 4 personnes devait choisir un sujet de projet. 
                  Ce projet consiste à implémenter une application de comparaison de séquences d'ADN, 
                  tout en travaillant sur les phases de planification, cadrage, conception, réalisation et clôture.`,
    link: "https://github.com/Nivvj/adn_comparison",
    dates: "2023-2024"
  },
  {
    title: "Java avancée : Conception d'un réseau social",
    description: `Ce projet a été réalisé dans le cadre du Master 1 en Programmation Java Distribuée à 
                  l'Université Paris Sorbonne Nord. Il simule des interactions sociales avec des modèles 
                  d'opinion dynamiques, en permettant d'analyser la polarisation des opinions au sein 
                  d'un réseau social distribué.`,
    link: "https://github.com/Nivvj/reseau_social_java",
    dates: "2023-2024"
  }
];

const ProjectsSection = () => {
  return (
    <section className="projects_section" id="mes_projets">
      <h1>Projets réalisés</h1>
      <div className="projects">
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            description={project.description}
            link={project.link}
            dates={project.dates}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
