var nx = require('next-js-core2');
var nxSets = require('next-sets');
var NxStore = require('next-store');
var INITIAL_ACTION = '@@redux/INIT';
var DEFAULT_OPTIONS = { prefix: '' };

module.exports = function(inState, inAction, inOptions) {
  var type = inAction.type;
  var data = inAction.data;
  var options = nx.mix(DEFAULT_OPTIONS, inOptions);
  var isInitial = type === INITIAL_ACTION;
  var state = isInitial ? { __memory__: inState.memory || {} } : inState;

  //set preifx:
  NxStore.config(options.prefix);

  switch (type) {
    case 'memory':
      nxSets(state.__memory__, data);
      return nx.mix(state, { __memory__: state.__memory__ });
    case 'session':
    case 'local':
      NxStore[type] = data;
      return state;
    case INITIAL_ACTION:
      if (inState.local) {
        NxStore.local = inState.local;
      }
      if (inState.session) {
        NxStore.session = inState.session;
      }
      break;
  }

  return state;
};
