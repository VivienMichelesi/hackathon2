import React from "react";
import styles from "../../styles/VideoCards.module.css";
import { NextSeo } from "next-seo";

const videoLinks = [
  {
    title: "1. Devenir développeur apprendre ou avoir la foi ? ",
    urlKey: "https://www.youtube.com/embed/WrWkiojtxWQ",
    description: "Pour être il faut croire",
    accès: "novice",
  },

  {
    title: "2. Comment se connecter à l'énergie du code ? ",
    urlKey: "https://www.youtube.com/embed/LkUoxS9ZVsc",
    description: "Pour être il faut croire",
    accès: "novice",
  },

  {
    title: "3. Faire don de ses biens matériels pour mieux coder ",
    urlKey: "https://www.youtube.com/embed/DEqQtoxxlRg",
    description: "Pour être il faut croire",
    accès: "initié",
  },

  {
    title: "4. Benoit L. Hubert vous donne la solution ",
    urlKey: "https://www.youtube.com/embed/vrgZ4YA3cro",
    description: "Pour être il faut croire",
    accès: "initié",
  },

  {
    title: "5. Le secret de l'origine des développeurs ",
    urlKey: "https://www.youtube.com/embed/HBdrAZFn1oU",
    description: "Pour être il faut croire",
    accès: "éveillé",
  },

  {
    title: "6. Matrix réalité ou fiction ? ",
    urlKey: "https://www.youtube.com/embed/NXV3j4LO16Y",
    description: "Pour être il faut croire",
    accès: "éveillé",
  },
];

export default function VideoCards() {
  return (
    <div>
      <NextSeo title="Accomplissement" description="Les tutos de Benoît." />
      <h1 className={styles.h1}>Vers la vérité</h1>
      <div className={`container ${styles.lesson}`}>
        {videoLinks.map((videoLink) => (
          <article className={styles.videoCard} key={videoLink.title}>
            <h2 className={styles.title}>{videoLink.title}</h2>
            <iframe
              src={videoLink.urlKey}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className={styles.video}
            >
              {videoLink.description}
            </iframe>
          </article>
        ))}
      </div>
    </div>
  );
}
