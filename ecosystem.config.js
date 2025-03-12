module.exports = {
    apps: [
        {
            name: 'geoneeds-app',
            script: 'npx',
            args: 'next start',
            env: {
                NODE_ENV: 'production',
                PORT: 3001,
            },
        },
    ],
};