module.exports = {
  setMemory: function(inData) {
    return {
      type: 'memory',
      data: inData
    };
  },
  setSession: function(inData) {
    return {
      type: 'session',
      data: inData
    };
  },
  setLocal: function(inData) {
    return {
      type: 'local',
      data: inData
    };
  }
};
