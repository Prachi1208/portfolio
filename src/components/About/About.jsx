import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <h3 className={styles.title2}>Get to know me!</h3>
    
      <h4 className={styles.title3}>

I'm a Frontend Focused Web Developer building and managing the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.



I'm open to Job opportunities where I can contribute, learn and grow. 
</h4>
      <div className={styles.content}>

        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            {/* <img src={getImageUrl("about/newcur.png")} alt="Cursor icon" /> */}
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience in building responsive
                and optimized sites
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            {/* <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" /> */}
            <div className={styles.aboutItemText}>
              <h3>UI Designer </h3>
              <p>
              I have designed multiple landing pages and have created design
              systems as well

              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            {/* <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" /> */}
            <div className={styles.aboutItemText}>
              <h3>Ethical Hacking Enthusiast</h3>
              <p>
              Network Hacking Skills: Proficient in pre-connection attacks, packet sniffing, and cracking WEP, WPA, and WPA2 encryption using Kali Linux. Experienced in employing these techniques ethically to identify and secure network vulnerabilities.

              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
