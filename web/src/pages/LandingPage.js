import React from "react";
import PropTypes from "prop-types";
import { NextSeo, SocialProfileJsonLd } from "next-seo";
import groq from "groq";
import imageUrlBuilder from "@sanity/image-url";

import Layout from "../components/Layout";
import client from "../../client";
import RenderSections from "../components/RenderSections";
import RenderResume from "../components/RenderResume";

const builder = imageUrlBuilder(client);
const frontPageQuery = groq`
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
`;
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

const LandingPage = ({
  title = "Missing title",
  description,
  disallowRobots,
  content = [],
  config = {},
  socialLinks,
  slug,
  resume,
  openGraphImages,
  favicons,
}) => (
  <Layout config={config} favicons={favicons}>
    <NextSeo
      title={title}
      titleTemplate={`${config.name} | %s`}
      description={description}
      canonical={config.url && `${config.url}/${slug}`}
      openGraph={{
        images: openGraphImages,
      }}
      noIndex={disallowRobots}
    />
    <SocialProfileJsonLd
      type="Person"
      name={config.name}
      url={config.url}
      sameAs={socialLinks}
    />
    {content && <RenderSections sections={content} />}
    {resume && <RenderResume {...resume} />}
  </Layout>
);

LandingPage.getInitialProps = async ({ query, websiteConfig }) => {
  const { slug } = query;

  if (!query) {
    console.error("no query");
    return null;
  }

  const pageData =
    slug === "/"
      ? await client.fetch(frontPageQuery).then((res) => res.frontpage)
      : await client.fetch(pageQuery, { slug }).then((res) => res.page);

  const openGraphImages = pageData.openGraphImage
    ? [
        {
          url: builder
            .image(pageData.openGraphImage)
            .width(800)
            .height(600)
            .url(),
          width: 800,
          height: 600,
          alt: pageData.title ?? "Missing Title",
        },
        {
          // Facebook recommended size
          url: builder
            .image(pageData.openGraphImage)
            .width(1200)
            .height(630)
            .url(),
          width: 1200,
          height: 630,
          alt: pageData.title ?? "Missing Title",
        },
        {
          // Square 1:1
          url: builder
            .image(pageData.openGraphImage)
            .width(600)
            .height(600)
            .url(),
          width: 600,
          height: 600,
          alt: pageData.title ?? "Missing Title",
        },
      ]
    : [];

  const favicons = {
    appleIconUrl: builder
      .image(websiteConfig?.favicon)
      .width(180)
      .height(180)
      .format("png")
      .url(),
    thirtyIconUrl: builder
      .image(websiteConfig?.favicon)
      .width(32)
      .height(32)
      .fit("clip")
      .format("png")
      .url(),
    sixIconUrl: builder
      .image(websiteConfig?.favicon)
      .width(16)
      .height(16)
      .fit("clip")
      .format("png")
      .url(),
  };

  return {
    slug,
    ...pageData,
    openGraphImages,
    favicons,
  };
};

LandingPage.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  disallowRobots: PropTypes.any,
  openGraphImage: PropTypes.any,
  content: PropTypes.any,
  config: PropTypes.any.isRequired,
  slug: PropTypes.any.isRequired,
  socialLinks: PropTypes.array,
  resume: PropTypes.object,
  openGraphImages: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired,
      alt: PropTypes.string,
    })
  ).isRequired,
  favicons: PropTypes.object.isRequired,
};

LandingPage.defaultProps = {
  description: null,
  disallowRobots: false,
  openGraphImage: null,
  socialLinks: [],
  content: null,
  resume: null,
};

export default LandingPage;
