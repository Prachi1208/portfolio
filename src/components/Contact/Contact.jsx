import React, { useState } from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  });
  const [messageSent, setMessageSent] = useState(false); // Flag to track message sent

  const onSubmit = async (event) => {
    event.preventDefault();

    const { name, email, address } = formData;

    const object = {
      name,
      email,
      address,
      access_key: "6bad0193-99d2-483c-800c-e349405322f5", // Assuming access_key is static
    };

    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setFormData({ name: "", email: "", address: "" }); // Clear form data
      setMessageSent(true); // Set message sent flag
    }
  };

  const clearMessageSent = () => {
    setMessageSent(false); // Reset message sent flag for another message
  };

  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>

      <div className={styles.messageForm}>
        <h3>{messageSent ? "Another one!" : "Send me a message!"}</h3>
        <form onSubmit={onSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Your Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email Address:</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="address">Your Message:</label>
            <input
              type="text"
              id="address"
              name="address"
              required
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            />
          </div>
          <button type="submit">Send</button>
        </form>

      </div>

      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:prachinanjannavar@gmail.com">prachinanjannavar@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/prachi-nanjannavar-479a37216/">linkedin.com/PrachiN</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/Prachi1208">github.com/Prachi1208</a>
        </li>
      </ul>
    </footer>
  );
};
