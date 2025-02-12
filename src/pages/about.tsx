import React from 'react';

import Link from 'next/link';

import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const About = () => {
  const startingYear = 2005;
  const experience = new Date().getFullYear() - startingYear;
  return (
    <Main
      meta={
        <Meta
          title="à propos"
          description="En apprendre davantage sur mon engagement"
        />
      }
    >
      <div className="sm:max-w-screen-md sm:mx-auto sm:text-justify">
        <p>
          Anne&#8209;Lise&nbsp;Ducanda, médecin généraliste,
          diplômée en Santé et Développement de l’enfant, je possède une
          expertise sur la problématique des écrans et des enfants.
        </p>
        <p>
          Je suis membre fondatrice du{' '}
          <abbr title="Collectif Surexposition Écrans">CoSE</abbr> (
          <a
            href="http://www.surexpositionecrans.org"
            title="site du Collectif Surexposition Écrans"
          >
            www.surexpositionecrans.org
          </a>
          ), membre de Screenpeace (
          <a href="https://www.screenpeace.org" title="site de Screenpeace">
            www.screenpeace.org
          </a>
          ), membre de{' '}
          <abbr title="Ensemble pour l‘Education de la Petite Enfance">
            EPEPE
          </abbr>{' '}
          (
          <a
            href="htttp://www.eduensemble.org"
            title="site de l'Ensemble pour l‘Education de la Petite Enfance"
          >
            www.eduensemble.org
          </a>
          ) et conférencière{' '}
          <a
            href="https://unesco.delegfrance.org/Entretiens-avec-7-intervenants-du-colloque-international-Education-et"
            title="Education et protection de la petite enfance, berceau de la cohésion sociale - Ecoutez nos intervenants"
          >
            UNESCO
          </a>
          .
        </p>
        <p>
          Ma démarche est d’accompagner les parents et les professionnels de
          l’enfance et de la santé face à la marée montante des troubles liés à
          la surexposition aux écrans et surtout de proposer des solutions. Avec
          leur caractère addictif et leur omniprésence autour de nous, les
          écrans sont très difficile à gérer.
        </p>
        <p>
          C’est en travaillant <span>{experience}</span>&nbsp;ans comme médecin
          de PMI auprès des très jeunes enfants que j’ai découvert les impacts
          de la surexposition aux écrans. Souvent qualifiée de lanceuse d’alerte
          sur ce sujet, je sensibilise de façon bienveillante aux effets des
          écrans sur le développement de l’enfant et apporte des pistes
          concrètes aux parents, sans jamais les culpabiliser.
        </p>
        <p>
          J’assure de nombreuses conférences auprès des familles et des
          professionnels en France et à l’étranger. Si vous souhaitez organiser
          une conférence, une session de formation, ou si vous avez besoin d’une
          consultation, vous pouvez laisser vos coordonnées afin que je vous
          recontacte.
        </p>

        <Link href="/contact/" passHref>
          <button className="w-full sm:w-auto flex-none bg-blue-500 hover:bg-blue-700 text-white text-lg leading-6 font-semibold py-3 px-6 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-900 focus:outline-none transition-colors duration-200">
            Prendre contact
          </button>
        </Link>
      </div>
    </Main>
  );
};

export default About;
