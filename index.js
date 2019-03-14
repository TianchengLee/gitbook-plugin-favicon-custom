var fs = require('fs');
var path = require('path');


module.exports = {
  // Map of hooks
  hooks: {

    "finish": function () {
      var pathFile = this.options.pluginsConfig && this.options.pluginsConfig.favicon;
      var favicon = path.join(process.cwd(), pathFile);
      var gitbookFaviconPath = path.join(process.cwd(), '_book', 'gitbook', 'images', 'favicon.ico');
      if (pathFile && fs.existsSync(pathFile) && fs.existsSync(gitbookFaviconPath)) {
        fs.unlinkSync(gitbookFaviconPath);
        fs.createReadStream(favicon).pipe(fs.createWriteStream(gitbookFaviconPath));
      }

      var pathFile = this.options.pluginsConfig && this.options.pluginsConfig.appleTouchIconPrecomposed152;
      var appleTouchIconPrecomposed152 = path.join(process.cwd(), pathFile);
      var gitbookAppleTouchPath = path.join(process.cwd(), '_book', 'gitbook', 'images', 'apple-touch-icon-precomposed-152.png');
      if (pathFile && fs.existsSync(pathFile) && fs.existsSync(gitbookAppleTouchPath)) {
        fs.unlinkSync(gitbookAppleTouchPath);
        fs.createReadStream(appleTouchIconPrecomposed152).pipe(fs.createWriteStream(gitbookAppleTouchPath));
      }
    }
  },

  // Map of new blocks
  blocks: {},

  // Map of new filters
  filters: {}
};