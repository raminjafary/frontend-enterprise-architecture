import defaultConfig from './defaultConfig.js';

function applyConfig(filesConfig, sharedConfig) {
  return sharedConfig
    .filter(config => typeof config !== 'string')
    .map(config => ({
      ...config,
      ...filesConfig,
    }));
}

export default [...applyConfig({}, defaultConfig)];
