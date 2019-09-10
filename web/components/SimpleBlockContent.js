import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import BlockContent from '@sanity/block-content-to-react';

import Link from 'next/link';
import client from '../client';


const internalLink = (props) => {
    const [slug, setSlug] = useState({});

    useEffect(() => {
        client.fetch(`*[_id == "${props.mark._ref}"][0]`)
            .then((response) => {
                setSlug(response.slug);
            });
    }, []);

    return (
        <Link
            href={{
                pathname: '/LandingPage',
                query: { slug: slug.current }
            }}
            as={`/${slug.current !== '/' ? slug.current : ''}`}
            prefetch
        >
            <a>
                {props.children}
            </a>
        </Link>
    );
};

const { projectId, dataset } = client.config();

function SimpleBlockContent(props) {
    const { blocks, className } = props;

    if (!blocks) {
        // console.error('Missing blocks');
        return null;
    }

    return (
        <BlockContent
            blocks={blocks}
            projectId={projectId}
            dataset={dataset}
            className={className}
            renderContainerOnSingleChild
            serializers={{ marks: { internalLink } }}
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
