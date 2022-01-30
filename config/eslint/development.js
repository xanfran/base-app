const DEVELOPMENT_FILES = ['config/**', 'scripts/**', '.eslintrc.js', 'babel.config.js'];

module.exports = {
    overrides: [
        {
            files: DEVELOPMENT_FILES,
            env: {
                browser: false,
                node: true,
                amd: false,
                commonjs: true,
                es6: true,
            },
        },
    ],
};
