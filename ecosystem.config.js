module.exports = {
    apps: [
        {
            name: "geoneeds-app",
            cwd: "/var/www/geoneeds.info",
            script: "npx",
            args: "next start -p 3010",
            env: {
                NODE_ENV: "production",
                PORT: 3010
            }
        }
    ]
};