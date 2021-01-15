module.exports = ctx => {
  return {
    plugins: {
      'tailwindcss': {

      },
      'postcss-import': {
        // filter: () => true,
        // root: process.cwd(),
        // path: [],
        plugins: [
          require('stylelint')()
        ],
        // resolve: null,
        // load: null,
        // skipDuplicates: true,
        // addModulesDirectories: [],
      },
      'postcss-preset-env': {
        'stage': 0,
        'autoprefixer': {
          // env: undefined,
          cascade: false,
          // add: true,
          // remove: true,
          // supports: true,
          // flexbox: true,
          grid: "autoplace",
          // stats: undefined,
          // browsers: undefined,
        },
      },
      'postcss-flexbugs-fixes': {

      }
    }
  }
}
