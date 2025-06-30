const runnerPath = '../'

module.exports = { runner: process.env.USE_RESOLVE === 'true' ? require.resolve(runnerPath) : runnerPath  }
