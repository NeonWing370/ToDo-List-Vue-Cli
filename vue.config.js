module.exports = {
  lintOnSave: false,
  publicPath: process.env.NODE_ENV === 'production' 
    ? '/ToDo-List-Vue-Cli/'  
    : '/'                     
}
