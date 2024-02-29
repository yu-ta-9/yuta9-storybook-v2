// ref: https://react-svgr.com/docs/options/
module.exports = {
  outDir: 'src/components/ui/Icon/generated',
  typescript: true,
  jsxRuntime: 'automatic',
  icon: true,
  // ignoreExisting: true,
  replaceAttrValues: { '#000': '' },
};
