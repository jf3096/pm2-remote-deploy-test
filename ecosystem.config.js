module.exports = {
  apps: [
    {
      name: 'API',
      script: 'index.js',
    }
  ],

  deploy: {
    production: {
      user: 'root',
      host: '120.92.102.112',
      port: "22",
      ref: 'origin/master',
      repo: 'git@github.com:jf3096/pm2-remote-deploy-test.git',
      path: '/www'
    }
  }
};
