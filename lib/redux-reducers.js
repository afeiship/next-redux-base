var nx = require('@jswork/next');
var nxSets = require('@jswork/next-sets');
var INITIAL_ACTION = '@@redux/INIT';

module.exports = function (inState, inAction, inStore) {
  var type = inAction.type;
  var data = inAction.data;
  var isInitial = type.indexOf(INITIAL_ACTION) > -1;
  var state = isInitial ? { __memory__: inState.memory || {} } : inState;

  switch (type) {
    case 'memory':
      nxSets(state.__memory__, data);
      return nx.mix(state, { __memory__: state.__memory__ });
    case 'session':
    case 'local':
      inStore[type] = data;
      return state;
    case INITIAL_ACTION:
      inState.local && (inStore.local = inState.local);
      inState.session && (inStore.session = inState.session);
      break;
  }

  return state;
};
