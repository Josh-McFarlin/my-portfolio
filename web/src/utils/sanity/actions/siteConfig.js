import { getClient, imageBuilder } from "../client";

export const getSiteConfig = async (preview = false) => {
  const config = await getClient(preview).fetch(`
    *[_id == "global-config"] {
      ...,
      mainNavigation[] {
        ...,
        ...*[_type == "route" && _id == ^._ref] {
          ...,
          "title": page->title
        }[0]
      },
      footerNavigation[] {
        ...,
        ...*[_type == "route" && _id == ^._ref] {
          ...,
          "title": page->title
        }[0]
      }
    }[0]
  `);

  const favicons = {
    appleIconUrl: imageBuilder
      .image(config?.favicon)
      .width(180)
      .height(180)
      .format("png")
      .url(),
    thirtyIconUrl: imageBuilder
      .image(config?.favicon)
      .width(32)
      .height(32)
      .fit("clip")
      .format("png")
      .url(),
    sixIconUrl: imageBuilder
      .image(config?.favicon)
      .width(16)
      .height(16)
      .fit("clip")
      .format("png")
      .url(),
  };

  return {
    config,
    favicons,
  };
};
