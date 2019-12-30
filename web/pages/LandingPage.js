import PropTypes from 'prop-types';
import React from 'react';
import { NextSeo, SocialProfileJsonLd } from 'next-seo';
import groq from 'groq';
import imageUrlBuilder from '@sanity/image-url';

import Layout from '../components/Layout';
import client from '../client';
import RenderSections from '../components/RenderSections';
import RenderResume from '../components/RenderResume';


const builder = imageUrlBuilder(client);
const pageQuery = groq`
  *[_type == "route" && slug.current == $slug][0]{
    page-> {
      ...,
      content[] {
        ...,
        cta {
          ...,
          route->
        },
        ctas[] {
          ...,
          route->
        }
      }
    }
  }
`;

class LandingPage extends React.PureComponent {
    static async getInitialProps({ query }) {
        const { slug } = query;

        if (!query) {
            console.error('no query');
            return;
        }

        if (slug && slug !== '/') {
            return client.fetch(pageQuery, { slug }).then((res) => ({
                ...res.page,
                slug
            }));
        }

        // Frontpage
        if (slug && slug === '/') {
            return client
                .fetch(groq`
                  *[_id == "global-config"][0]{
                    frontpage -> {
                      ...,
                      content[] {
                        ...,
                        cta {
                          ...,
                          route->
                        },
                        ctas[] {
                          ...,
                          route->
                        }
                      }
                    }
                  }
                `)
                .then((res) => ({
                    ...res.frontpage,
                    slug
                }));
        }

        return null;
    }

    render() {
        const {
            title = 'Missing title',
            description,
            disallowRobots,
            openGraphImage,
            content = [],
            config = {},
            socialLinks,
            slug,
            resume
        } = this.props;

        const openGraphImages = openGraphImage ?
            [
                {
                    url: builder
                        .image(openGraphImage)
                        .width(800)
                        .height(600)
                        .url(),
                    width: 800,
                    height: 600,
                    alt: title
                },
                {
                    // Facebook recommended size
                    url: builder
                        .image(openGraphImage)
                        .width(1200)
                        .height(630)
                        .url(),
                    width: 1200,
                    height: 630,
                    alt: title
                },
                {
                    // Square 1:1
                    url: builder
                        .image(openGraphImage)
                        .width(600)
                        .height(600)
                        .url(),
                    width: 600,
                    height: 600,
                    alt: title
                }
            ] :
            [];

        return (
            <Layout config={config}>
                <NextSeo
                    title={title}
                    titleTemplate={`${config.name} | %s`}
                    description={description}
                    canonical={config.url && `${config.url}/${slug}`}
                    openGraph={{
                        images: openGraphImages
                    }}
                    noIndex={disallowRobots}
                />
                <SocialProfileJsonLd
                    type='Person'
                    name={config.name}
                    url={config.url}
                    sameAs={socialLinks}
                />
                {(content) && (
                    <RenderSections sections={content} />
                )}
                {(resume) && (
                    <RenderResume {...resume} />
                )}
            </Layout>
        );
    }
}

LandingPage.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    disallowRobots: PropTypes.any,
    openGraphImage: PropTypes.any,
    content: PropTypes.any,
    config: PropTypes.any.isRequired,
    slug: PropTypes.any.isRequired,
    socialLinks: PropTypes.array,
    resume: PropTypes.object
};

LandingPage.defaultProps = {
    description: null,
    disallowRobots: false,
    openGraphImage: null,
    socialLinks: [],
    content: null,
    resume: null
};

export default LandingPage;
