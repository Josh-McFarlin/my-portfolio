import * as React from "react";
import PropTypes from "prop-types";
import { NextSeo, SocialProfileJsonLd } from "next-seo";
import RenderSections from "../../components/cms/RenderSections";
import RenderResume from "../../components/RenderResume";
import Layout from "../../components/Layout";
import { getSiteConfig } from "../../utils/sanity/actions/siteConfig";
import { getPage } from "../../utils/sanity/actions/page";
import { getAllRoutes } from "../../utils/sanity/actions/route";

const SanityScreen = ({ preview, siteConfig, page }) => {
  const {
    title = "Missing title",
    description,
    disallowRobots = false,
    content = [],
    resume,
    config = {},
    socialLinks = [],
    slug,
    openGraphImages = [],
  } = page;

  return (
    <>
      <NextSeo
        title={title}
        titleTemplate={`${siteConfig.config.name} | %s`}
        description={description}
        canonical={config.url && `${config.url}/${slug}`}
        openGraph={{
          images: openGraphImages,
        }}
        noindex={disallowRobots}
      />
      <SocialProfileJsonLd
        type="Person"
        name={config.name}
        url={config.url}
        sameAs={socialLinks}
      />
      <Layout preview={preview} siteConfig={siteConfig}>
        {content && <RenderSections sections={content} />}
        {resume && <RenderResume {...resume} />}
      </Layout>
    </>
  );
};

export const getStaticProps = async ({ params, preview = false }) => {
  const siteConfig = await getSiteConfig(preview);
  const page = await getPage(params?.slug, preview);

  return {
    props: {
      preview,
      siteConfig,
      page,
    },
    // At most every 10 minutes
    revalidate: 10 * 60,
  };
};

export const getStaticPaths = async () => {
  const allRoutes = await getAllRoutes();

  const paths =
    allRoutes
      ?.filter((routeSlug) => routeSlug !== "/")
      .map((routeSlug) => ({
        params: {
          slug: routeSlug.split("/"),
        },
      })) || [];

  return {
    paths,
    fallback: false,
  };
};

SanityScreen.propTypes = {
  preview: PropTypes.bool,
  siteConfig: PropTypes.any,
  page: PropTypes.any,
};

export default SanityScreen;
