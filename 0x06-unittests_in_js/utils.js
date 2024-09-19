const Utils = {};
Utils.calculateNumber =  (type, a, b)=>{
  switch(type){
    case 'SUM':
      return Math.round(a) + Math.round(b);
    case 'SUBTRACT':
      return Math.round(a) - Math.round(b);
    case 'DIVIDE':
      const c = Math.round(b);
      if (c == 0){
        return 'Error';
      }
      return Math.round(a) / Math.round(c);
    default:
      return 'Invalid type';
  }
}
module.exports = Utils;
