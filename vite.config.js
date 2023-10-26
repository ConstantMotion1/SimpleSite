// const path = require('path')

// export default {
//   root: path.resolve(__dirname, 'src'),
//   resolve: {
//     alias: {
//       '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
//     }
//   },
//   server: {
//     port: 8080,
//     hot: true
//   }
// }

const path = require('path');

export default {
  base: '/simplesite/', // Change this to match your project name
  resolve: {
    alias: {
      '~/bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'), // Adjust the alias path if necessary
    }
  },
  server: {
    port: 8080, // You can keep this for local development
  },
};
