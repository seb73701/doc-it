import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)


const FeatureList = [
  {
    title: 'Applications',
    Svg: require('@site/static/img/laptop-svgrepo-com.svg').default,
    description: (
      <>
        Articles dédiés aux applications.
      </>
    ),
  },
  {
    title: 'Bases de données',
    Svg: require('@site/static/img/db/sql-azure-svgrepo-com.svg').default,
    description: (
      <>
        Articles sur les bases de données SQL et NoSQL. Les méthodologies comme Merise et UML.
      </>
    ),
  },
  {
    title: 'Intelligence Artificielle',
    Svg: require('@site/static/img/ia/rubocop-svgrepo-com.svg').default,
    description: (
      <>
        Articles sur l'intelligence artificielle, Machine Learning, NLP, DataScience, etc.
      </>
    ),
  },
    {
    title: 'Développement',
    Svg: require('@site/static/img/dev/builder-code-design-svgrepo-com.svg').default,
    description: (
      <>
        Articles sur le scripting et le développement web, sans oublier les méthodologies Agile, Scrum, UX, etc.
      </>
    ),
  },
  {
    title: 'Système d\'exploitation',
    Svg: require('@site/static/img/linux-svgrepo-com.svg').default,
    description: (
      <>
        Articles sur les systèmes d'exploitation que ce soit sur des distributions Linux, MacOS ou bien Windows.
      </>
    ),
  },
  {
    title: 'Réseau',
    Svg: require('@site/static/img/tech-ethernet-svgrepo-com.svg').default,
    description: (
      <>
        Articles sur le réseau (routeur, switch, firewall, load-balancer, etc.).
      </>
    ),
  },
  {
    title: 'BigData',
    Svg: require('@site/static/img/bigdata/analytics-svgrepo-com.svg').default,
    description: (
      <>
        Articles sur le BigData.
      </>
    ),
  },
  {
    title: 'Cloud Computing',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Articles sur le Cloud Computing (AWS, Azure, GCP, etc.).
      </>
    ),
  },
  {
    title: 'DevOps',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Articles sur le DevOps.
      </>
    ),
  },
  {
    title: 'IoT',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Articles sur IoT (ChromeCast, Alexia, etc.).
      </>
    ),
  },
  {
    title: 'Jeux Vidéos',
    Svg: require('@site/static/img/video-game-svgrepo-com.svg').default,
    description: (
      <>
        Articles sur le domaine des Jeux Vidéos.
      </>
    ),
  },
  {
    title: 'Raspberry Pi',
    Svg: require('@site/static/img/raspberry-pi-svgrepo-com.svg').default,
    description: (
      <>
        Articles sur le Raspberry Pi et ce qui est possible de faire avec...
      </>
    ),
  },
  {
    title: 'Réseaux sociaux',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Articles sur les réseaux sociaux (Facebook, X, Instagram, Youtube, LinkedIn, etc.).
      </>
    ),
  },
  {
    title: 'Sécurité',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Articles sur la sécurité (certificats SSL, hardening, scan de vulnérabilités, etc.).
      </>
    ),
  },
  {
    title: 'Streaming',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Articles sur le Streaming (Disney+, Amazon Prime, Netflix, Spotify, etc.).
      </>
    ),
  },
  {
    title: 'Supervision',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Articles sur la supervision et sur l'observabilité (Icinga2, Zabbix, Nagios, Grafana, Prometheus, etc).
      </>
    ),
  },
  {
    title: 'Virtualisation',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Articles sur la virtualisation et la conteneurisation (VMware, VirtualBox, Vagrant, Docker, Kubernetes, etc).
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}