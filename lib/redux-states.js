var NxStore = require('next-store');

module.exports = {
  getMemory: function(inStore) {
    return inStore.getState().__memory__;
  },
  getLocal: function(inKeys) {
    return NxStore._localStorage.gets(inKeys);
  },
  getSession: function(inKeys) {
    return NxStore._sessionStorage.gets(inKeys);
  }
};
