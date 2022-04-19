
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/home/tomdo/Documents/yoseftask/wp/wp-content/plugins/tomdo-plugin/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/home/tomdo/Documents/yoseftask/wp/wp-content/plugins/tomdo-plugin/src/pages/404.js")),
  "component---src-templates-wp-page-template-js": preferDefault(require("/home/tomdo/Documents/yoseftask/wp/wp-content/plugins/tomdo-plugin/src/templates/wp-page-template.js")),
  "component---src-templates-wp-product-template-js": preferDefault(require("/home/tomdo/Documents/yoseftask/wp/wp-content/plugins/tomdo-plugin/src/templates/wp-product-template.js"))
}

