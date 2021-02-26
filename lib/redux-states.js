module.exports = {
  getMemory: function (inStore) {
    return inStore.getState().__memory__;
  },
  getLocal: function (inStore) {
    return inStore._localStorage.gets();
  },
  getSession: function (inStore) {
    return inStore._sessionStorage.gets();
  }
};
