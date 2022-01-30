// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

/**
 * This babel config is primarily used for unit tests and styleguide.
 * We use babel-loader for production environment with additional babel plugins that are needed
 */
module.exports = (api) => {
    // We only cache for unit tests because for other builds we have our own cache-loader
    if (api.env('test')) {
        api.cache(true);
    }

    return {
        presets: [['babel-preset-react-app']],
    };
};
