import React from 'react';
import styles from '@/styles/page.module.css';
import Link from 'next/link';

const experiences = [
  {
    topic: 'Programming Languages',
    list: [
      'JavaScript / TypeScript',
      'Go Lang',
      'Python',
      'C#',
      'Java',
      'HTML',
      'CSS / SCSS',
    ],
  },
  {
    topic: 'Databases',
    list: [
      'PostgreSQL',
      'SQL Server',
      'MongoDB',
      'Elasticsearch',
      'Azure AI Search',
      'Redis',
    ],
  },
  {
    topic: 'DevOps',
    list: ['Docker', 'Kubernetes', 'Terraform'],
  },
  {
    topic: 'Cloud Platforms',
    list: ['AWS', 'Microsoft Azure'],
  },
  {
    topic: 'Frameworks',
    list: [
      'React',
      'Next.js',
      'Gatsby',
      'jQuery',
      'Node.js',
      'Express.js',
      'ASP.NET Core',
      'Spring Boot',
      'Serverless',
    ],
  },
  {
    topic: 'API',
    list: ['REST', 'GraphQL', 'gRPC'],
  },
  {
    topic: 'CSS Frameworks',
    list: ['Ant Design', 'Material UI'],
  },
  {
    topic: 'Headless CMS',
    list: ['Strapi'],
  },
  {
    topic: 'AI models',
    list: ['Llama'],
  },
];

const Home = () => {
  return (
    <div className={styles.backgroundContainer}>
      <div className={styles.photoBackgroundContainer}>
        <div className={styles.photoBackground} />
      </div>

      <div className={styles.introContainer}>
        <div className={styles.introContent}>
          <div className={styles.intro}>
            <h1>
              Maridin <br /> San Miguel
            </h1>
            <p>
              I am a Senior Software Engineer, experienced in developing
              frontend and backend services for various website applications.
            </p>
            <Link href="/my-apps" className={styles.appsLink}>
              View My Apps
            </Link>
          </div>
        </div>
      </div>

      <section className={styles.experiencesContainer}>
        <div className={styles.experiencesContent}>
          <h2>Experiences</h2>
          <div className={styles.experiencesTopics}>
            {experiences.map((experience) => (
              <div key={experience.topic} className={styles.experiencesTopic}>
                <h3>{experience.topic}</h3>
                <ul>
                  {experience.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
