import React from 'react';

import Link from 'next/link';

import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const About = () => {
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
          Anne&#8209;Lise&nbsp;Ducanda est médecin, lanceuse d’alerte concernant
          les dangers des écrans sur le développement de l’enfant. Lorsqu’elle
          exerce comme médecin de PMI en région parisienne, elle constate qu’il
          y a de plus en plus d’enfants en difficulté et que la majorité d’entre
          eux sont surexposés aux écrans. A l’arrêt des écrans, elle observe une
          nette diminution des troubles. Elle alerte dans une vidéo sur YouTube
          en 2017 (1) en direction des familles, des professionnels et des
          pouvoirs publics. Dans la même année, elle co-fonde le{" "}
          <abbr title="Collectif Surexposition Écrans">CoSE</abbr> (
          <a
            href="http://www.surexpositionecrans.org"
            title="site du Collectif Surexposition Écrans"
          >
            www.surexpositionecrans.org
          </a>
          ) (2) avec des professionnels qui partagent les mêmes constats, puis
          rejoint Screenpeace (3), une association qui lutte contre les effets
          négatifs des écrans chez les enfants. Sa vidéo d’alerte est vue par de
          nombreux parents du monde entier qui la sollicite pour la prise en
          charge de leur enfant surexposé. Elle commence ainsi dès 2017 à mener
          des consultations spécialisées sur cette problématique, notamment au
          domicile des parents. En 2020, elle ouvre près de Bordeaux une
          consultation libérale dédiée aux enfants surexposés aux écrans de 0 à
          18 ans mais continue à voir des enfants dans le monde entier lors de
          ses conférences à l’étranger. En 2021, ce sera l’écriture et la
          publication de son livre « Les tout-petits face aux écrans, comment
          les protéger » (4) qui traite des dangers de la surexposition aux
          écrans à tous les âges et propose des solutions concrètes pour
          soutenir la parentalité et le développement de l’enfant.
        </p>

        <p>
          Aujourd’hui, elle fait référence dans le domaine et forme de nombreux
          professionnels en France et à l’étranger, elle alerte régulièrement
          dans les médias et est sollicitée par les pouvoirs publics pour faire
          évoluer les pratiques. Le 3ème baromètre enfance et numérique (5)
          publié le 29 janvier 2025 montre que désormais de nombreux enseignants
          font les mêmes constats qu’elle : « Le lien entre l’usage des écrans
          et les difficultés de développement chez l’enfant apparaît comme une
          évidence chez les professeurs. Ainsi, 96% ont déjà envisagé ce lien,
          dans le cas d’un contenu inadapté (93%, dont 57% souvent) et encore
          plus fréquemment dans le cas d’un temps d’exposition excessif (96%,
          dont 74%). Par ailleurs, quasiment l’intégralité des professeurs
          s’accordent à dire que ces difficultés de développement - telles que
          des troubles du comportement et des difficultés d’apprentissage - sont
          de plus en plus visibles chez les enfants en classe (respectivement
          94% et 89% observent une augmentation) ». Anne-Lise Ducanda réalise
          une dizaine de conférences par mois et reçoit de nombreux témoignages
          de professionnels et de parents. Ces derniers témoignent des
          changements qu’ils ont pu opérer dans leur quotidien grâce aux
          conseils diffusés dans la vidéo d’alerte et dans son livre. A l’arrêt
          des écrans, ils décrivent des progrès significatifs dans le
          développement de leur enfant y compris pour ceux qui avaient reçu un
          diagnostic de troubles du neurodéveloppement.
        </p>
        <h1 className="font-bold text-2xl">
          Parcours professionnel et médiatisation
        </h1>
        <p>
          Anne-Lise Ducanda est diplômée en médecine générale en 1997, à la
          faculté Broussais - Hôtel-Dieu (Paris VI). Elle valide un Diplôme
          Universitaire à Paris Descartes intitulé « Santé et développement de
          l’enfant » en 1999 puis exerce ensuite en Protection Maternelle et
          Infantile. Dans le cadre de ces missions, elle réalise des
          consultations pour les enfants de 0 à 6 ans et des bilans médicaux
          dans les écoles maternelles. Elle exerce 17 ans en Essonne puis 3 ans
          en Gironde. Depuis 2017 et la publication de sa vidéo, elle réalise
          des consultations spécialisées pour les enfants surexposés aux écrans,
          des conférences et des interventions auprès des parents et des
          professionnels. Ces interventions sont majoritairement en France mais
          elle est aussi sollicitée à l’international (Belgique, Luxembourg,
          Roumanie, UK, Dubaï, Seychelles, Maroc, Côte d’Ivoire, Canada, USA).
        </p>
        <p>
          En 2023, Anne-Lise Ducanda est reçue par le ministre chargé du
          numérique Jean-Noël Barrot, qui se montre engagé sur cette
          problématique. S’ensuit des annonces du Président de la République qui
          met en place une commission d’experts en janvier 2024. Elle est
          auditionnée par cette commission avec le collectif CoSE pour partager
          les constats cliniques du terrain et les recommandations élaborées par
          le collectif. Le 30 avril 2024, la commission rend au gouvernement son
          rapport (6) qui souligne la nécessité de protéger les enfants d’un
          usage problématique des écrans. Ils écrivent notamment : « …La
          Commission a acquis la conviction qu’elle devait assumer un discours
          de vérité pour décrire la réalité de l’hyper connexion subie des
          enfants et des conséquences pour leur santé, leur développement, leur
          avenir, pour notre avenir aussi... celui de notre société, celui de
          notre civilisation, et peut-être même celui de notre humanité. » Ce
          rapport émet des recommandations similaires à celles d’Anne-Lise
          Ducanda et de son collectif CoSE.
        </p>
        <h1 className="font-bold text-2xl">
          Chronologie des actions sur les écrans menées par le Dr DUCANDA (Liste
          non exhaustive)
        </h1>
        <p>
          <ul>
            <li>
              2012-2017 : constats sur le terrain d’une augmentation des
              difficultés développementales des jeunes enfants en lien avec
              l’usage des écrans au domicile.
            </li>
            <li>2017 : publication de la vidéo sur Youtube (1)</li>
            <li>
              2017 : fondation du collectif CoSE avec des professionnels de la
              santé (2)
            </li>
            <li>
              2017 : tribune dans le journal Le Monde intitulée « La
              surexposition des jeunes enfants aux écrans est un enjeu majeur de
              santé publique » (7)
            </li>
            <li>2017 : Audition à l’Elysée</li>
            <li>
              2017 : Audition par la Direction Générale de la Cohésion Sociale
            </li>
            <li>2017 : Audition au Conseil Supérieur des programmes (CSA)</li>
            <li>2018 : Audition par le Défenseur des enfants</li>
            <li>
              2018 : Audition par la Direction Générale de l’Enseignement
              Scolaire (DGESCO)
            </li>
            <li>
              2018 : Audition par la Délégation interministérielle à la
              prévention et à la lutte contre la pauvreté
            </li>
            <li>
              2018 : publication d’un article dans la revue Enfance & Psy pour
              faire reconnaître le syndrome EPEE (Marcelli, Bossière & Ducanda)
              (8)
            </li>
            <li>2018 : Intervention à l’UNESCO</li>
            <li>2018 : Intervention à l’OCDE</li>
            <li>
              2018 : Participation à l’émission Envoyé spécial diffusée sur la
              chaîne France 2 (9)
            </li>
            <li>
              2019 : Audition par le Haut Conseil de la famille, de l'enfance et
              de l'âge (HCFEA)
            </li>
            <li>2019 : Intervention à l’Assemblée Nationale </li>
            <li>
              2019 : Audition à l’Assemblée Nationale dans le cadre de la PPL de
              la député Caroline Janvier
            </li>
            <li>2020 : Audition par la Commission des 1000 premiers jours</li>
            <li>
              2020 : Participation aux conférences TED “Enfance : les liens en
              danger” (10)
            </li>
            <li>
              2020 : Publication de l'article "L’exposition précoce et excessive
              aux écrans (EPEE) : un nouveau syndrome" dans la revue Devenir
              (11)
            </li>
            <li>
              2021 : Publication du livre “Les touts-petits face aux écrans :
              L’épidémie silencieuse” aux éditions du ROCHER (4)
            </li>
            <li>
              2022 : Formation des médecins à l’UMFCS (Unité Mixte de Formation
              Continue en Santé), université de Bordeaux
            </li>
            <li>
              2022 : Audition à la délégation interministérielle à la stratégie
              nationale pour les troubles du neurodéveloppement dont l’autisme
            </li>
            <li>
              2023 : Participation au reportage Zone Interdite “Ecrans,
              malbouffe et sédentarité” (12)
            </li>
            <li>
              2023 : Publication du livre d’Anne-Lise Ducanda en format poche
              aux éditions Litos (13)
            </li>
            <li>
              2023 : Audition par le Ministre du numérique, Jean-Noël Barrot.
            </li>
            <li>
              2024 : Participation aux deux films de prévention réalisés par le
              Département du 77 : “Trop d’écrans, nos vies en suspens” (14) (15)
            </li>
            <li>
              2024 et 2025 : Intervenante au DU “1000 premiers jours” à
              l’université de Lille (16){" "}
            </li>
            <li>
              2024 et 2025 : Intervenante au DU “Accompagnement à la
              parentalité” à l’université Paris-Sorbonne (17)
            </li>
            <li>
              2025 : Participation au sommet mondial rassemblant chercheurs et
              cliniciens de plusieurs pays : “Screen Time & Early Child
              Development World Summit 2025” (18)
            </li>
          </ul>
        </p>
        <h1 className="font-bold text-2xl">
          Polémiques lancées contre le Dr DUCANDA
        </h1>

        <h2> Surexposition aux écrans et Autisme.</h2>
        <p>
          Dans sa vidéo publiée en 2017, le Dr Ducanda décrit les symptômes
          qu’elle repère chez les jeunes enfants surexposés précocement aux
          écrans. Elle nomme notamment des « troubles qui sont exactement
          identiques aux troubles autistiques » (extrait de la vidéo de 2017).
          Fin mai 2017, elle co-signe une tribune dans le journal Le Monde
          intitulée « La surexposition des jeunes enfants aux écrans est un
          enjeu majeur de santé publique » (7), où il est relaté les troubles
          que peuvent développer les enfants lors d’une surexposition aux
          écrans. Il y est notamment mentionné des « symptômes très semblables
          aux troubles du spectre autistique ».
        </p>

        <p>
          Malgré un consensus de terrain de plus en plus observé sur les dangers
          des écrans, certains « experts » lancent une controverse contre le Dr
          Ducanda allant jusqu’à souligner sa responsabilité dans la diffusion
          de l’idée que les écrans provoqueraient l’autisme (par exemple, la
          tribune dans le monde « Enfants face aux écrans, ne cédons pas à la
          démagogie » (19)). Certains journalistes comme Jean-Yves Nau (dans la
          Revue médicale suisse) et Olivier Monod (dans checknews du journal
          Libération) décrédibilisent le Dr Ducanda.
        </p>
        <p>
          Pourtant, Anne-Lise Ducanda n’a jamais confondu Autisme et Troubles
          des interactions dus à une surexposition aux écrans. Ceci est confirmé
          par la Chambre Disciplinaire de l’Ordre des Médecins qui a traité, en
          2018, 4 plaintes de parents d’enfant autiste déposées contre elle à
          l'Ordre des médecins du Département de l’Essonne. Après avoir examiné
          les faits et les propos du Dr Ducanda, la Chambre Disciplinaire de
          l’Ordre des Médecins rejette les accusations proférées contre le Dr
          Ducanda sur cette question : « … Il ne ressort d’aucun document… que
          le Dr Ducanda ait jamais dit ou écrit que l’autisme pourrait être
          provoquée par la surexposition aux écrans, ni promis la guérison de
          l’autisme par l’éloignement des écrans. Le Dr Ducanda, fait valoir
          qu’elle a constaté au cours de ces consultations de médecin de PMI de
          l’Essonne, que de plus en plus d’enfants âgés de 0 à 4 ans
          présentaient des troubles identiques aux Troubles du Spectre
          Autistique, qu’elle a fait le lien entre ces troubles et la
          surexposition aux écrans à laquelle ces enfants étaient confrontés et
          a décidé, soutenue par de nombreuses institutions dédiées à la
          formation et à l’information du public, ainsi que par le ministère de
          la santé et par le CSA, de mener une action d’information sur ce
          point… qu’elle produit de nombreuses études…faisant état des mêmes
          constatations; que le devoir du médecin étant de prévenir de la
          survenue d’un risque lié à un comportement, même si ce risque n’a pas
          encore été du point de vue scientifique clairement établi. Il ne
          saurait être reproché au Dr Ducanda d’avoir tenté d’alerter la
          communauté médicale afin que des études et recherches scientifiques
          soient entreprises concernant ces constatations, et d’enrichir le
          débat…qu’elle s’est bornée à faire état de ses constatations et à
          prescrire l’éloignement des enfants âgés de moins de 6 ans des écrans
          et qu’elle n’a jamais parlé de l’autisme, mais de symptômes
          ressemblant aux troubles autistiques; qu’elle a ainsi fait un usage
          prudent de sa liberté d’expression…Les fautes déontologiques
          reprochées au Dr Ducanda ne sont nullement établies. Il s’ensuit… que
          les plaintes présentées par Mme X, Mme Y et M. Z à l’encontre du Dr
          Anne-lise Ducanda doivent être rejetées ».
        </p>
        <p>
          Le Dr Ducanda a clarifié sa position sur le sujet à plusieurs
          reprises, précisant que les symptômes ressemblent au spectre de
          l’autisme mais que c’est un nouveau trouble qui n’est pas de
          l’autisme. Elle explique que les écrans font écran à la relation,
          impactant fortement les interactions indispensables à la relation
          d’attachement parents-bébé et l’exploration du monde réel par
          l’enfant. Les étapes du développement sont manquées et l’enfant
          présente alors un retard de développement, parfois massif, pouvant
          prendre toutes les allures d’un Trouble du Spectre de l’Autisme. De
          récents articles mettent en évidence le lien entre une surexposition
          précoce aux écrans et le développement de symptômes d'allure
          autistique dit « autism-like » (voir ci-dessous bibliographie
          autism-like et temps d'écrans).
        </p>
        <p>
          Pour les enfants surexposés aux écrans, l'arrêt des écrans permet une
          amélioration significative voire une disparition de l’ensemble des
          symptômes, ce qui n’est pas le cas pour les enfants atteints de
          Troubles du Spectre de l’Autisme bien que l’on puisse observer une
          amélioration des comportements à l’arrêt des écrans. Pour éviter toute
          confusion, elle propose avec le Professeur Daniel Marcelli en 2018
          (8), d’introduire le syndrome EPEE « Exposition Précoce et Excessive
          aux Ecrans » pour distinguer les troubles liés à la surexposition aux
          écrans et les troubles du spectre de l’autisme. Le syndrome EPEE «
          associe principalement trois ordres de troubles concernant les
          domaines de l’attention/concentration, du langage, de la relation aux
          autres ».
        </p>

        <p>
          Malgré l’annulation de 4 conférences en lien avec cette polémique, le
          Dr Ducanda est constamment sollicitée pour partager ses connaissances
          (20), que ce soit par des établissements publics ou des associations
          qui observent les mêmes difficultés des enfants surexposées aux
          écrans.
        </p>

        <h2> Reconnaissance des dangers des écrans</h2>
        <p>
          Certains scientifiques ne reconnaissent pas, ou seulement
          partiellement, le rôle des écrans dans les difficultés
          développementales de certains enfants. La plupart d’entre eux ne sont
          cependant pas spécialistes de l’enfance ou simplement ne sont pas des
          professionnels du terrain. Le Collectif Surexposition Écrans et
          d’autres associations (Collectif Attention (21)) questionne le rôle
          des lobbys du numérique dans la négation des difficultés liées à la
          surexposition aux écrans. L’action des lobbyistes du numérique est de
          plus en plus questionnée et a été étudiée notamment par l’UNESCO (22).
        </p>
        <h1 className="font-bold text-2xl">
          Bibliographie autism-like et temps d'écrans
        </h1>
        <p>
          Aishworiya R. et al., « Are There Bidirectional Influences Between
          Screen Time Exposure and Social Behavioral Traits in Young Children?
          », J Dev Behav Pediatr, vol. 43, no 6, p. 362-369, août 2022.
        </p>
        <p>
          Alrahili N. et al., « The Association Between Screen Time Exposure and
          Autism Spectrum DisorderLike Symptoms in Children », Cureus, octobre
          2021.
        </p>
        <p>
          Chonchaiya W. et al., « Comparison of television viewing between
          children with autism spectrum disorder and controls », Acta
          Paediatrica, 100, juillet 2011.
        </p>
        <p>
          Dieu-Osika S., Bossière M.-C., Osika E., « Early Media Overexposure
          Syndrome Must Be Suspected in Toddlers Who Display Speech Delay With
          Autism-Like Symptoms », Global Pediatric Health, 7, juin 2020.
        </p>
        <p>
          Gaddour N., Brahim T., « What role is played by early and intensive TV
          viewing in Autism Spectrum Disorder? », Communication in Abu Dhabi,
          2018.
        </p>
        <p>
          Han-Yu Dong et al., « Correlation Between Screen Time and Autistic
          Symptoms as Well as Development Quotients in Children With Autism
          Spectrum Disorder », Front Psychiatry, janvier 2021.
        </p>
        <p>
          Harlé B., « Intensive early screen exposure as a casual factor for
          symptoms of autistic spectrum disorder: the case of “virtual autism”
          », Trends in Neuroscience and Éducation, 2019.
        </p>
        <p>
          Heffler K. et al., « Causation model of autism: audio-visuel brain
          specialization in infancy competes with social brain networks »,
          medical hypotheses, juin 2016, 91, p. 114-122.
        </p>
        <p>
          Heffler K. F. et al., « Association of Early-Life Social and Digital
          Media Experiences With Development of Autism Spectrum Disorder – Like
          Symptoms », JAMA Pediatrics, juillet 2020.
        </p>
        <p>
          Heffler K. F. et al., « Early-Life Digital Media Experiences and
          Development of Atypical Sensory Processing »,Jama Pediatrics, janvier
          2024.
        </p>
        <p>
          Hermawati D. et al., « Early electronic screen exposure and
          autistic-like symptoms », Intractable Rare Dis Res, février 2018.
        </p>
        <p>
          Jahan A., Rezina-Parvin SZR., Bugum D., « Familial, social and
          environmental risk factors in autism: a case-control study »,
          Bangladesh Medical Research Council Bulletin; 40: 113-117, 2014.
        </p>
        <p>
          Kheir NM., Ghoneim OM, Sandridge AL et al., « Préoccupations et
          considérations des soignants d’un enfant autiste au Qatar », BMC
          research notes; 5: 290. 2012.
        </p>
        <p>
          Kushima M. et al., « Association Between Screen Time Exposure in
          Children at 1 Year of Age and Autism Spectrum Disorder at 3 Years of
          Age: The Japan Environment and Children’s Study », JAMA Pediatrics,
          janvier 2022.
        </p>
        <p>
          Lin Ping-l., « Screen Time Before 2 Years of Age and Risk of Autism at
          12 Years of Age », Jama Pediatrics, november 2024
        </p>
        <p>
          Waldman M. et al., « Autism prevalence and precipitation rates in
          California, Oregon and Washington counties », Archives of Pediatrics &
          Adolescent Medicine,162-11, nov. 2008.
        </p>
        <p>
          Wu X. et al., « The relationship between screen time, night time sleep
          duration and behavioral problems in preschool children in China »,
          European Child & Adolescent Psychiatry, 26, mai 2017, p. 541-548.
        </p>
        <p>
          Yurika N. U. et al., « Attachment disorder and early media exposure:
          neurobehavioral symptoms mimicking autism spectrum disorder », The
          Journal of Medical Investigation, 65, 2018.
        </p>
        <p>
          Zamfir M. T., « The consumption of virtual environment more than 4
          hours/ day, in the children between 0-3 years old, can cause a
          syndrome similar with the autism spectrum disorder », Journal of
          Romanian literary studies, 13, 2018.
        </p>

        <h1 className="font-bold text-2xl">
          Publications du Dr Anne-Lise DUCANDA
        </h1>
        <p>
          En 2018, elle publie l'article publication Plaidoyer pour un nouveau
          syndrome « Exposition précoce et excessive aux écrans » (epee) dans la
          revue Enfance & Psy avec le Dr Marcelli et le Dr Bossière (8) . En
          2020, elle publie de nouveau un article intitulé L'exposition précoce
          et excessive aux écrans EPEE : un nouveau syndrome dans la revue
          Devenir avec le Dr Marcelli et le Dr Bossière (11). En 2021, elle
          publie le livre Les tout-petits face aux écrans, aux éditions du
          Rocher (4).
        </p>

        <h1 className="font-bold text-2xl">Références</h1>
        <p>(1) <a href="https://www.youtube.com/watch?v=9-eIdSE57Jw" title="les écrans : un danger pour les enfants de 0 à 4 ans / Screens: danger for the 0 to 4 year olds">https://www.youtube.com/watch?v=9-eIdSE57Jw</a></p>
        <p>(2) <a>https://www.surexpositionecrans.fr</a></p>
        <p>(3) <a>https://screenpeace.org/</a></p>
        <p>
          (4) A.L DUCANDA. « Les tout-petits face aux écrans - Éditions du
          Rocher », sur editionsdurocher.fr
          <a>https://www.editionsdurocher.fr/product/123461/les-tout-petits-face-aux-ecrans/</a>
        </p>
        <p>
          (5) Fondation pour l'Enfance, « L’impact des usages numériques sur le
          développement des jeunes enfants : notre 3e baromètre est sorti ! »
          <a>https://www.fondation-enfance.org/2025/01/29/enfance-et-numerique-3e-barometre-croise-parents-enseignants/</a>
        </p>
        <p>
          (6) Rapport de la commission écrans, « Remise du rapport de la
          commission d'experts sur l'impact de l'exposition des jeunes aux
          écrans. », sur elysee.fr
          <a>https://www.elysee.fr/emmanuel-macron/2024/04/30/remise-du-rapport-de-la-commission-dexperts-sur-limpact-de-lexposition-des-jeunes-aux-ecrans</a>
        </p>
        <p>
          (7) « La surexposition des jeunes enfants aux écrans est un enjeu
          majeur de santé publique » », Le Monde, 31 mai 2017 (lire en ligne)
          <a>https://www.lemonde.fr/sciences/article/2017/05/31/la-surexposition-des-jeunes-enfants-aux-ecrans-est-un-enjeu-majeur-de-sante-publique_5136297_1650684.html</a>
        </p>
        <p>
          (8) Daniel Marcelli, Marie-Claude Bossière et Anne-Lise Ducanda, «
          Plaidoyer pour un nouveau syndrome « Exposition précoce et excessive
          aux écrans » (epee) », Enfances & Psy, vol. 79, no 3, 6 décembre
          2018, p. 142–160 (ISSN 1286-5559, DOI 10.3917/ep.079.0142, lire en
          ligne)
          <a>https://shs.cairn.info/revue-enfances-et-psy-2018-3-page-142?lang=fr</a>
        </p>
        <p>
          (9) Envoyé spécial. L'addiction aux écrans : "héroïne numérique" - 18
          janvier 2018 (France 2), Envoyé Spécial (22 janvier 2018, 45:23
          minutes) <a>https://www.youtube.com/watch?v=DyK4vxbAmwQ</a>
        </p>
        <p>
          (10) Enfance : les liens en danger, Anne-Lise Ducanda (27 janvier
          2020, 617 minutes)
          <a>https://www.ted.com/talks/anne_lise_ducanda_enfance_les_liens_en_danger</a>
        </p>
        <p>
          (11) Daniel Marcelli, Marie-Claude Bossière et Anne-Lise Ducanda, «
          L’exposition précoce et excessive aux écrans (EPEE) : un nouveau
          syndrome », Devenir, vol. 32, no 2, 24 juillet 2020, p. 119–137 (ISSN
          1015-8154, DOI 10.3917/dev.202.0119, lire en ligne)
          <a>https://shs.cairn.info/revue-devenir-2020-2-page-119?lang=fr</a>
        </p>
        <p>
          (12) ZI_SanteDesEnfants_Master_VF_H264_HD_Rec709G24_25fps_20_V1, Flair
          Production (25 septembre 2023, PT01H27M51S minutes)
          <a>https://vimeo.com/867838431/d3a88f4e7a?share=copy</a>
        </p>
        <p>
          (13) A.L DUCANDA, « Les tout-petits face aux écrans - Éditions Litos
          », sur editionslitos.fr
          <a>https://editionslitos.fr/product/128864/les-tout-petits-face-aux-ecrans/</a>
        </p>
        <p>
          (14) <a>https://www.youtube.com/watch?v=LG8Dh8_dLHI</a>, 77envideo (7 juin
          2024, 32:54 minutes)
        </p>
        <p>
          (15) <a>https://www.youtube.com/watch?v=pzoVA9GWURA</a>, 77envideo (7 juin
          2024, 36:34 minutes)
        </p>
        <p>
          (16) « DU Parcours des 1000 premiers jours : accompagner la famille -
          UFR3S », sur ufr3s.univ-lille.fr
          <a>https://ufr3s.univ-lille.fr/formation-continue/medecine/du-parcours-1000-premiers-jours</a>
        </p>
        <p>
          (17) « DU - accompagnement de la parentalité. La qualité de la
          relation au cœur du développement de l’enfant », sur Formation
          Continue Sorbonne Université
          <a>https://fc.sorbonne-universite.fr/nos-offres/du-accompagnement-de-la-parentalite-la-qualite-de-la-relation-au-coeur-du-developpement-de-lenfant/</a>
        </p>
        <p>
          (18)
          <a>https://understandingvirtualautism.substack.com/p/screen-time-and-early-child-development</a>
          Understanding Virtual Autism, « Screen Time & Early Child Development
          World Summit 2025 », sur Understanding Virtual Autism, 31 janvier 2025
        </p>
        <p>
          (19) « Enfants face aux écrans, ne cédons pas à la démagogie », Le
          Monde, 14 février 2018 (lire en ligne)
          <a>https://www.lemonde.fr/idees/article/2018/02/14/enfants-face-aux-ecrans-ne-cedons-pas-a-la-demagogie_5256479_3232.html</a>
        </p>
        <p>
          (20) CoSE, « Les conférences des membres de CoSE »
          <a>https://surexpositionecrans.fr/les-dernieres-actions-de-cose/</a>
        </p>
        <p>
          (21) « Collectif Attention – surexposition aux écrans : la société
          civile s'organise », 21 décembre 2023
          <a>https://www.collectifattention.com/</a>
        </p>
        <p>(22) <a>https://unesdoc.unesco.org/ark:/48223/pf0000385723</a></p>

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
