import { getPage } from "../../utils/sanity/actions/page";
import urls from "../../utils/urls";

// @route   GET api/preview
// @desc    Get preview of a Sanity page
// @access  Public
export default async (req, res) => {
  if (
    req.query.secret !== process.env.SANITY_STUDIO_PREVIEW_SECRET ||
    !req.query.slug
  ) {
    return res.status(401).json({
      message: "Invalid token",
    });
  }

  const data = await getPage(req.query.slug, true);

  if (!data) {
    return res.status(401).json({
      message: "Invalid slug",
    });
  }

  res.setPreviewData({});
  res.writeHead(307, {
    Location:
      req.query.type === "post"
        ? urls.pages.blog.post(data.post.slug)
        : urls.pages.sanityPage(data.slug),
  });
  res.end();
};
