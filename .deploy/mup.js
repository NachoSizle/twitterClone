module.exports = {
  servers: {
    one: {
      host: '159.203.135.54',
      username: 'root',
      // pem:
      password: 'maitane20'
      // or leave blank for authenticate from ssh-agent
    }
  },

  meteor: {
    name: 'twitterClone',
    path: '../',
    servers: {
      one: {}
    },
    buildOptions: {
      serverOnly: true,
    },
    env: {
      ROOT_URL: 'http://meteorns.com',
    },

    docker: {
      //image: 'kadirahq/meteord', // (optional)
      image: 'abernix/meteord:base', // use this image if using Meteor 1.4+
    },
    deployCheckWaitTime: 60
  },

  mongo: {
    oplog: true,
    port: 27017,
    servers: {
      one: {},
    },
  },
};
