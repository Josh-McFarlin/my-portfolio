import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { faAngellist } from '@fortawesome/free-brands-svg-icons/faAngellist';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';


import styles from './SocialLinks.module.css';


function TextSection(props) {
    const { linkedIn, gitHub, angelList, twitter, instagram } = props;

    return (
        <div className={styles.root}>
            <section className={styles.section}>
                {(linkedIn) && (
                    <a
                        className={styles.link}
                        href={linkedIn}
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <FontAwesomeIcon
                            icon={faLinkedin}
                            width='30'
                            size='2x'
                        />
                    </a>
                )}
                {(gitHub) && (
                    <a
                        className={styles.link}
                        href={gitHub}
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <FontAwesomeIcon
                            icon={faGithub}
                            width='30'
                            size='2x'
                        />
                    </a>
                )}
                {(angelList) && (
                    <a
                        className={styles.link}
                        href={angelList}
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <FontAwesomeIcon
                            icon={faAngellist}
                            width='30'
                            size='2x'
                        />
                    </a>
                )}
                {(twitter) && (
                    <a
                        className={styles.link}
                        href={twitter}
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <FontAwesomeIcon
                            icon={faTwitter}
                            width='30'
                            size='2x'
                        />
                    </a>
                )}
                {(instagram) && (
                    <a
                        className={styles.link}
                        href={instagram}
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <FontAwesomeIcon
                            icon={faInstagram}
                            width='30'
                            size='2x'
                        />
                    </a>
                )}
            </section>
        </div>
    );
}

TextSection.propTypes = {
    linkedIn: PropTypes.string,
    gitHub: PropTypes.string,
    angelList: PropTypes.string,
    twitter: PropTypes.string,
    instagram: PropTypes.string
};

TextSection.defaultProps = {
    linkedIn: null,
    gitHub: null,
    angelList: null,
    twitter: null,
    instagram: null
};

export default TextSection;
