// @route   GET api/exit-preview
// @desc    Exit Sanity preview mode
// @access  Public
export default async (req, res) => {
  res.clearPreviewData();

  res.writeHead(307, {
    Location: "/",
  });
  res.end();
};
