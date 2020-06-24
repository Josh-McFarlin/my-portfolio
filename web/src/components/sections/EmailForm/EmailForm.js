import PropTypes from "prop-types";
import React from "react";

import styles from "./EmailForm.module.css";

const encode = (data) =>
  Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&");

const EmailForm = ({ heading, subtitle }) => {
  const [botField, setBotField] = React.useState("");
  const [name, setName] = React.useState("");
  const [replyTo, setReplyTo] = React.useState("");
  const [message, setMessage] = React.useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const optionals = {};
    if (botField.length > 0) {
      optionals["bot-field"] = botField;
    }

    if (name.length > 0 && replyTo.length > 0 && message.length > 0) {
      await fetch("/", {
        method: "post",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: encode({
          "form-name": "contact",
          name,
          replyTo,
          message,
          ...optionals,
        }),
      })
        .then((response) => {
          if (!response.ok) {
            throw Error(response.statusText);
          }

          alert("Successfully submitted contact form!");
        })
        .catch(() => {
          alert(
            "An error occurred while submitting the contact form, please try again later!"
          );
        });
    }
  };

  return (
    <section className={styles.root}>
      <div className={styles.container}>
        {heading && <h2 className={styles.heading}>{heading}</h2>}
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        <form
          className={styles.form}
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          action="/contact/"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>
              {"Don’t fill this out if you're human:"}
              <input
                value={botField}
                onChange={(event) => setBotField(event.target.value)}
              />
            </label>
          </p>

          <label htmlFor="fname">Name</label>
          <input
            className={styles.formInput}
            id="fname"
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
          />

          <label htmlFor="femail">ReplyTo</label>
          <input
            className={styles.formInput}
            id="femail"
            type="email"
            name="replyTo"
            placeholder="Your Email"
            required
            value={replyTo}
            onChange={(event) => setReplyTo(event.target.value)}
          />

          <label htmlFor="fmessage">Message</label>
          <textarea
            className={styles.formInput}
            id="fmessage"
            name="message"
            placeholder="Message"
            required
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          />

          <input className={styles.formButton} type="submit" value="Send" />
        </form>
      </div>
    </section>
  );
};

EmailForm.propTypes = {
  heading: PropTypes.string,
  subtitle: PropTypes.string,
};

EmailForm.defaultProps = {
  heading: null,
  subtitle: null,
};

export default EmailForm;
