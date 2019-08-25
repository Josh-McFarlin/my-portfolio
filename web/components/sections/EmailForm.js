import PropTypes from 'prop-types';
import React from 'react';

import styles from './EmailForm.module.css';


export default function EmailForm(props) {
    const { heading, subtitle, email } = props;

    return (
        <section className={styles.root}>
            <div className={styles.container}>
                <h2 className={styles.heading}>{heading}</h2>
                <p className={styles.subtitle}>{subtitle}</p>
                <form
                    action={`https://formspree.io/${email}`}
                    method='POST'
                >
                    <input type='text' name='name' />
                    <input type='email' name='_replyto' />
                    <textarea name='message' />
                    <input type='submit' value='Send' />
                </form>
            </div>
        </section>
    );
}

EmailForm.propTypes = {
    heading: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
};
