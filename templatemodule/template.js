const bodyTemp = require('./bodyTemp');
const headTemp = require('./headTemp');

const template = {
  basicTemp : function(title, css, content, script){
    return `${headTemp(title,css)}` + `${bodyTemp(content,script)}`;
  },
  responseTemp : function(){

  },
  postTemp : function() {
    
  }
};

module.exports=template;