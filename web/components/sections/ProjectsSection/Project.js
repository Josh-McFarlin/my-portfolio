import React from 'react';
import PropTypes from 'prop-types';
import imageUrlBuilder from '@sanity/image-url';

import styles from './Project.module.css';
import client from '../../../client';
import SimpleBlockContent from '../../SimpleBlockContent';


const query = `*[_type == 'page' && slug.current == $slug][0]{ 
    ...,
    "figure": figure.asset->{
      url,
      metadata {
        lqip
      }
    }
  }`;

function urlFor(source) {
    return imageUrlBuilder(client).image(source);
}

class Project extends React.Component {
    componentDidMount() {
        /*
        client
            .fetch(query)
            .then((result) => {
                console.log('result', result);
            });
            */
    }

    render() {
        const { name, tags, description, image, links } = this.props;

        const style = image ? {
            backgroundImage: `url("${urlFor(image)
                .width(1200)
                .auto('format')
                .url()}")`
        } : {};

        return (
            <div className={styles.root} style={style}>
                <div className={styles.content}>
                    <h1 className={styles.title}>{name}</h1>
                    <div className={styles.tagline}>
                        {description && (
                            <SimpleBlockContent blocks={description} />
                        )}
                    </div>
                    {links && (
                        <div>
                            {links.map((data) => (
                                <a
                                    key={data.title}
                                    href={data.href}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <button type='button'>
                                        {data.title}
                                    </button>
                                </a>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

Project.propTypes = {
    name: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    description: PropTypes.array.isRequired,
    image: PropTypes.object.isRequired,
    links: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Project;
