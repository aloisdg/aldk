import React from "react";

import { Meta } from "../layout/Meta";
import { Main } from "../templates/Main";

const Video = () => {
  return (
    <Main
      meta={
        <Meta
          title="à propos"
          description="En apprendre davantage sur mon engagement"
        />
      }
    >
      <div className="sm:max-w-screen-md sm:mx-auto">
        <h3>Reportages</h3>
        <p>Trop d’écrans, nos vies en suspens : âge 0-6 ans</p>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/LG8Dh8_dLHI"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <p>Trop d’écrans, nos vies en suspens : âge 6-18 ans</p>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/pzoVA9GWURA"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <p>Envoyé spécial du 18 janvier 2018 : "L'héroïne numérique"</p>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/uoqXIUmBPuk"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <h3>Conférences</h3>
        <p>TEDx Enfance : les liens en danger</p>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/5wOkyPvEKhc"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <p>Conférence à Périgueux 2025 : âge  0-6 ans</p>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/HEREOMWbUcE"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <p>Conférence à Créteil 2025 âge 0-18 ans</p>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/q1LcJyXwlWE"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <h3>Interviews</h3>
        <p>Marie Portolano reçoit dans l'interview d'actualité Anne-Lise Ducanda, médecin en PMI, spécialiste de la surexposition aux écrans.</p>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/FrmFcKokj-s"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <p>Surexposition des tout-petits aux écrans : signes évocateurs et prise en charge</p>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/XfPxTGdu33Q"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <h3>Divers</h3>
        <p>Les écrans : un danger pour les enfants de 0 à 4 ans</p>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/9-eIdSE57Jw"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        Plus de vidéos sur ma chaîne{" "}
        <a
          className="text-gray-700 border-none hover:text-gray-900"
          href="https://www.youtube.com/channel/UC_2uXgo3IXovQYRWh-2-8XQ/featured"
        >
          YouTube
        </a>
      </div>
    </Main>
  );
};

export default Video;
