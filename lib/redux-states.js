var NxStore = require('@jswork/next-store');
var store = new NxStore();

module.exports = {
  getMemory: function(inStore) {
    return inStore.getState().__memory__;
  },
  getLocal: function(inKeys) {
    return store._localStorage.gets(inKeys);
  },
  getSession: function(inKeys) {
    return store._sessionStorage.gets(inKeys);
  }
};
