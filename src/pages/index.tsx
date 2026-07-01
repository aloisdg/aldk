import React from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const Index = () => {
  const router = useRouter();

  return (
    <Main
      meta={
        <Meta title="Accueil" description="page d'accueil du Dr. Ducanda" />
      }
    >
      <div className="md:grid md:gap-4 grid-cols-1 grid-rows-3 md:grid-rows-1 md:grid-cols-5">
        <div>
          <figure>
            <img
              src={`${router.basePath}/assets/images/couverture.jpg`}
              alt="Les tout-petits face aux écrans"
            />
            <figcaption className="text-center">
              <div className="">Paru le 25 août 2021</div>
              <div className="text-sm">
                En libraire ou à commander{' '}
                <a href="https://www.editionsdurocher.fr/livre/fiche/les-tout-petits-face-aux-ecrans-9782268105208">
                  en ligne
                </a>
              </div>
            </figcaption>
          </figure>
        </div>
        <div className="w-full col-span-1 md:col-span-3">
            <p>
                Depuis plus de 20 ans, j'accompagne les enfants et leurs familles. Médecin de Protection Maternelle et Infantile
                (PMI), diplômée en Santé et Développement de l'enfant, j'ai progressivement pris conscience de l'impact grandissant
                de la surexposition aux écrans sur le développement de l'enfant. Aujourd'hui, je consacre entièrement mon activité à
                cette problématique.
            </p>
            <p>
                J’accompagne les parents d’enfants de 0 à 18 ans ainsi que les professionnels de l’enfance et de la santé confrontés
                aux difficultés liées aux écrans. Mon objectif est de mieux faire comprendre ces troubles, d’aider à les prévenir et
                de proposer des solutions concrètes, adaptées à chaque situation.
            </p>
            <p>
                En 2017, j’ai lancé l’alerte avec une vidéo YouTube consacrée aux dangers des écrans pour les jeunes enfants.
                Depuis, j’ai créé une consultation dédiée aux enfants surexposés aux écrans et je forme des professionnels en France
                comme à l’étranger.
            </p>
            <p>
                Les écrans occupent aujourd’hui une place centrale dans notre quotidien. Leur omniprésence et les mécanismes qui
                captent notre attention rendent leur usage particulièrement difficile à maîtriser, pour les enfants comme pour les
                adultes. C’est pourquoi j’aborde toujours cette question avec bienveillance, sans jugement ni culpabilisation.
                J’apporte aux familles et aux professionnels des repères fondés sur les connaissances scientifiques, ainsi que des
                conseils pratiques pour retrouver un équilibre.
            </p>
            <p>
                J’anime également des conférences et des formations en France et à l’international afin de sensibiliser un large
                public aux enjeux des écrans et au développement de l’enfant.
            </p>
            <p>
                Vous souhaitez organiser une conférence, une formation ou prendre rendez-vous pour une consultation ? Je vous invite
                à me laisser vos coordonnées et je vous recontacterai dans les plus brefs délais.
            </p>

          <Link href="/contact/" passHref>
            <button className="w-full sm:w-auto flex-none bg-blue-500 hover:bg-blue-700 text-white text-lg leading-6 font-semibold py-3 px-6 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-900 focus:outline-none transition-colors duration-200">
              Prendre contact
            </button>
          </Link>
        </div>
        <img
          className="rounded hidden md:block"
          src={`${router.basePath}/assets/images/anne-lise_ducanda.jpg`}
          alt="Photo de Anne-Lise Ducanda"
        />
      </div>
    </Main>
  );
};

export default Index;
