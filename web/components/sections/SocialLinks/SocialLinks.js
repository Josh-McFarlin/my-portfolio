import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faAngellist, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

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
                    >
                        <FontAwesomeIcon
                            icon={faLinkedin}
                            size='lg'
                        />
                    </a>
                )}
                {(gitHub) && (
                    <a
                        className={styles.link}
                        href={gitHub}
                    >
                        <FontAwesomeIcon
                            icon={faGithub}
                            size='lg'
                        />
                    </a>
                )}
                {(angelList) && (
                    <a
                        className={styles.link}
                        href={angelList}
                    >
                        <FontAwesomeIcon
                            icon={faAngellist}
                            size='lg'
                        />
                    </a>
                )}
                {(twitter) && (
                    <a
                        className={styles.link}
                        href={twitter}
                    >
                        <FontAwesomeIcon
                            icon={faTwitter}
                            size='lg'
                        />
                    </a>
                )}
                {(instagram) && (
                    <a
                        className={styles.link}
                        href={instagram}
                    >
                        <FontAwesomeIcon
                            icon={faInstagram}
                            size='lg'
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
