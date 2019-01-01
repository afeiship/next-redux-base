var NxStore = require('next-store');
module.exports={
  getMemory:function(inStore){
    return inStore.getState().__memory__;
  },
  getLocal:function(inKeys){
    NxStore.engine='localStorage';
    return NxStore.gets(inKeys);
  },
  getSession:function(inKeys){
    NxStore.engine='sessionStorage';
    return NxStore.gets(inKeys);
  }
};
