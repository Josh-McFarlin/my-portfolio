import React from 'react';
import PropTypes from 'prop-types';

import styles from './SectionHeader.module.css';


function SectionHeader(props) {
    const { header, align, size } = props;

    return (
        <div className={styles.root}>
            <section className={styles.section}>
                <h1
                    className={styles[`header-${size}`]}
                    align={align}
                >
                    {header}
                </h1>
            </section>
        </div>
    );
}

SectionHeader.propTypes = {
    header: PropTypes.string.isRequired,
    align: PropTypes.string,
    size: PropTypes.string
};

SectionHeader.defaultProps = {
    align: 'left',
    size: 'md'
};

export default SectionHeader;
