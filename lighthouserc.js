module.exports = {
  ci: {
    collect: {
      /* Add configuration here */
      numberOfRuns: 1,
      startServerCommand: 'yarn run serve',
      url: ['http://localhost:3000'],
    },
    upload: {
      /* Add configuration here */
      target: 'temporary-public-storage',
    },
  },
};
