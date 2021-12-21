module.exports = {
  ci: {
    collect: {
      /* Add configuration here */
      url: 'https://rtm-200.dev.ready-sale.com/',
      numberOfRuns: 1
    },
    assert: {
      assertions: {
        'categories:performance': ['warn', {minScore: 1}],
        'categories:accessibility': ['error', {minScore: 1}]
      }
    },
    upload: {
      /* Add configuration here */
      // 'target': 'temporary-public-storage'
      target: 'lhci',
      serverBaseUrl: 'http://localhost:9001',
      token: 'b67af34a-0c07-421e-83d4-aa79c76cc46b', // the build token provider by the wizard. Could also use LHCI_TOKEN variable instead
    },
  },
};