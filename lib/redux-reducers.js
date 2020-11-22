var nx = require('@jswork/next');
var nxSets = require('@jswork/next-sets');
var NxStore = require('@jswork/next-store');
var INITIAL_ACTION = '@@redux/INIT';
var DEFAULT_OPTIONS = { prefix: '' };
var store = new NxStore();

module.exports = function(inState, inAction, inOptions) {
  var type = inAction.type;
  var data = inAction.data;
  var options = nx.mix(null, DEFAULT_OPTIONS, inOptions);
  var isInitial = type.indexOf(INITIAL_ACTION) > -1;
  var state = isInitial ? { __memory__: inState.memory || {} } : inState;

  //set preifx:
  store.config(options);

  switch (type) {
    case 'memory':
      nxSets(state.__memory__, data);
      return nx.mix(state, { __memory__: state.__memory__ });
    case 'session':
    case 'local':
      store[type] = data;
      return state;
    case INITIAL_ACTION:
      inState.local && (store.local = inState.local);
      inState.session && (store.session = inState.session);
      break;
  }

  return state;
};
