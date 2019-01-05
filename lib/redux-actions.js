module.exports = {
  memory: function(inData) {
    return {
      type: 'memory',
      data: inData
    };
  },
  session: function(inData) {
    return {
      type: 'session',
      data: inData
    };
  },
  local: function(inData) {
    return {
      type: 'local',
      data: inData
    };
  }
};
