module.exports = {
    apps: [
        {
            name: 'API',
            script: 'index.js',
            args: 'one two',
            instances: 1,
            autorestart: true,
            watch: false,
            max_memory_restart: '1G',
            env: {
                NODE_ENV: 'development'
            },
            env_production: {
                NODE_ENV: 'production'
            }
        }
    ],

    deploy: {
        production: {
            user: 'root',
            host: '120.92.102.112',
            port: "22",
            ref: 'origin/master',
            repo: 'https://github.com/jf3096/merge-image.git',
            path: '/www',
            'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production'
        }
    }
};
