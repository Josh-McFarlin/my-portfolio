import React from 'react';
import PropTypes from 'prop-types';
import BlockContent from '@sanity/block-content-to-react';

import client from '../client';


const { projectId, dataset } = client.config();

function SimpleBlockContent(props) {
    const { blocks, className } = props;

    if (!blocks) {
        console.error('Missing blocks');

        return null;
    }

    return (
        <BlockContent
            blocks={blocks}
            projectId={projectId}
            dataset={dataset}
            className={className}
            renderContainerOnSingleChild
        />
    );
}

SimpleBlockContent.propTypes = {
    blocks: PropTypes.arrayOf(PropTypes.object).isRequired,
    className: PropTypes.string
};

SimpleBlockContent.defaultProps = {
    className: ''
};

export default SimpleBlockContent;
