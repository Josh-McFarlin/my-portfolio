import PropTypes from 'prop-types';
import React from 'react';

import styles from './EmailForm.module.css';


export default function EmailForm(props) {
    const { heading, subtitle, email } = props;

    return (
        <section className={styles.root}>
            <div className={styles.container}>
                {(heading) && (
                    <h2 className={styles.heading}>{heading}</h2>
                )}
                {(subtitle) && (
                    <p className={styles.subtitle}>{subtitle}</p>
                )}
                <form
                    name='contact'
                    method='POST'
                    data-netlify='true'
                >
                    <label htmlFor='fname'>Name</label>
                    <input
                        className={styles.formInput}
                        id='fname'
                        type='text'
                        name='name'
                        placeholder='Your Name'
                        required
                    />

                    <label htmlFor='femail'>ReplyTo</label>
                    <input
                        className={styles.formInput}
                        id='femail'
                        type='email'
                        name='replyTo'
                        placeholder='Your Email'
                        required
                    />

                    <label htmlFor='fmessage'>Message</label>
                    <textarea
                        className={styles.formInput}
                        id='fmessage'
                        name='message'
                        placeholder='Message'
                        required
                    />

                    <input
                        className={styles.formButton}
                        type='submit'
                        value='Send'
                    />
                </form>
            </div>
        </section>
    );
}

EmailForm.propTypes = {
    heading: PropTypes.string,
    subtitle: PropTypes.string,
    email: PropTypes.string.isRequired
};

EmailForm.defaultProps = {
    heading: null,
    subtitle: null
};
