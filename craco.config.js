module.exports = {
    webpack: {
        configure: (webpackConfig) => {
            webpackConfig.output = {
                ...webpackConfig.output,
                filename: 'static/js/myBuild.js',
            };

            webpackConfig.optimization = {
                ...webpackConfig.optimization,
                splitChunks: {
                    cacheGroups: {
                        default: false,
                    },
                },
                runtimeChunk: false,
            };

            webpackConfig.module.rules = webpackConfig.module.rules.map((rule) => {
                if (rule.oneOf) {
                    rule.oneOf = rule.oneOf.map((subRule) => {
                        if (subRule.test && subRule.test.toString().includes('css')) {
                            return {
                                ...subRule,
                                use: [
                                    require.resolve('style-loader'),
                                    {
                                        loader: require.resolve('css-loader'),
                                        options: {
                                            importLoaders: 1,
                                            sourceMap: true,
                                        },
                                    },
                                    'postcss-loader',
                                ],
                            };
                        }
                        
                        return subRule;
                    });
                }

                return rule;
            });

            return webpackConfig;
        },
    },
};