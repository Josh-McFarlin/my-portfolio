import PropTypes from 'prop-types';
import React from 'react';

import styles from './EmailForm.module.css';


const encode = (data) => Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');

class EmailForm extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            replyTo: '',
            message: ''
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    submitForm = async (event) => {
        event.preventDefault();

        const { name, replyTo, message } = this.state;

        if (name.length > 0 && replyTo.length > 0 && message.length > 0) {
            await fetch('/', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: encode({
                    'form-name': 'contact',
                    name,
                    replyTo,
                    message
                })
            })
                .then((response) => {
                    if (!response.ok) {
                        throw Error(response.statusText);
                    }

                    alert('Successfully submitted contact form!');
                })
                .catch(() => {
                    alert('An error occurred while submitting the contact form, please try again later!');
                });
        }
    };

    render() {
        const { heading, subtitle } = this.props;
        const { name, replyTo, message } = this.state;

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
                        className={styles.form}
                        name='contact'
                        method='POST'
                        data-netlify='true'
                        data-netlify-honeypot='bot-field'
                        action='/contact/'
                        onSubmit={this.submitForm}
                    >
                        <input
                            type='hidden'
                            name='form-name'
                            value='contact'
                        />
                        <p hidden>
                            <label>
                                <input
                                    name='bot-field'
                                    onChange={this.handleChange}
                                />
                            </label>
                        </p>

                        <label htmlFor='fname'>Name</label>
                        <input
                            className={styles.formInput}
                            id='fname'
                            type='text'
                            name='name'
                            placeholder='Your Name'
                            required
                            value={name}
                            onChange={this.handleChange}
                        />

                        <label htmlFor='femail'>ReplyTo</label>
                        <input
                            className={styles.formInput}
                            id='femail'
                            type='email'
                            name='replyTo'
                            placeholder='Your Email'
                            required
                            value={replyTo}
                            onChange={this.handleChange}
                        />

                        <label htmlFor='fmessage'>Message</label>
                        <textarea
                            className={styles.formInput}
                            id='fmessage'
                            name='message'
                            placeholder='Message'
                            required
                            value={message}
                            onChange={this.handleChange}
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
}

EmailForm.propTypes = {
    heading: PropTypes.string,
    subtitle: PropTypes.string
};

EmailForm.defaultProps = {
    heading: null,
    subtitle: null
};

export default EmailForm;
