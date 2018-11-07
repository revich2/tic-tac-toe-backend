const paths = require('../paths')

const nodemon = (done) => {
  const monitor = require('gulp-nodemon')({
    script: paths.appIndex,
    watch: paths.appSrc,
  })

  monitor.once('start', done)
  monitor.on('restart', (files) => {
    console.log('restarted', files)
  })

  return monitor
}

module.exports = nodemon
