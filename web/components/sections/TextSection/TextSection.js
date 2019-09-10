import React from 'react';
import PropTypes from 'prop-types';

import SimpleBlockContent from '../../SimpleBlockContent';
import styles from './TextSection.module.css';


function TextSection(props) {
    const { heading, label, text } = props;

    return (
        <div className={styles.root}>
            <section className={styles.section}>
                {(label) && (
                    <div className={styles.label}>{label}</div>
                )}
                {(heading) && (
                    <h1 className={styles.heading}>{heading}</h1>
                )}
                {text && (
                    <SimpleBlockContent
                        className={styles.textContainer}
                        blocks={text}
                    />
                )}
            </section>
        </div>
    );
}

TextSection.propTypes = {
    heading: PropTypes.string,
    label: PropTypes.string,
    text: PropTypes.arrayOf(PropTypes.object).isRequired
};

TextSection.defaultProps = {
    heading: null,
    label: null
};

export default TextSection;
