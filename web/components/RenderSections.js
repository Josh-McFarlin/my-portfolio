import React from 'react';
import PropTypes from 'prop-types';

import * as SectionComponents from './sections';


function resolveSections(section) {
    let upper = section._type;
    if (typeof upper === 'string' && upper.length > 0) {
        upper = upper[0].toUpperCase() + upper.slice(1);
    }

    const Section = SectionComponents[upper];

    if (Section) {
        return Section;
    }

    console.error('Cant find section', section); // eslint-disable-line no-console
    return null;
}

function RenderSections(props) {
    const { sections } = props;

    if (!sections) {
        console.error('Missing section');
        return <div>Missing sections</div>;
    }

    return (
        <>
            {sections.map((section) => {
                const SectionComponent = resolveSections(section);

                if (!SectionComponent) {
                    return <div>Missing section {section._type}</div>;
                }

                return (
                    <SectionComponent
                        {...section}
                        key={section._key}
                    />
                );
            })}
        </>
    );
}

RenderSections.propTypes = {
    sections: PropTypes.arrayOf(
        PropTypes.shape({
            _type: PropTypes.string,
            _key: PropTypes.string,
            section: PropTypes.instanceOf(PropTypes.object)
        })
    ).isRequired
};

export default RenderSections;
