import React from 'react';
import PropTypes from 'prop-types';
import BlockContent from '@sanity/block-content-to-react';

import Link from 'next/link';
import client from '../client';


class internalLink extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            slug: null
        };
    }

    async componentDidMount() {
        const { mark } = this.props;

        if (mark != null && mark._ref != null) {
            const ref = mark._ref;
            const refQuery = `*[_id == "${ref}"][0]`;

            await client.fetch(refQuery).then((res) => {
                if (res != null && res.slug != null) {
                    this.setState({
                        slug: res.slug
                    });
                }
            });
        }
    }

    render() {
        const { children } = this.props;
        const { slug } = this.state;

        if (slug != null) {
            return (
                <Link
                    href={{
                        pathname: '/LandingPage',
                        query: { slug: slug.current }
                    }}
                    as={`/${slug.current !== '/' ? slug.current : ''}`}
                    prefetch
                >
                    <a>{children}</a>
                </Link>
            );
        }

        return (
            <a href={''}>
                {children}
            </a>
        );
    }
}

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
