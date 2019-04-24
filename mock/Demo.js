var mockjs = require('mockjs');
var len =10;
var data =[];

while(len>0) {
  data.push({
    key: len,
    label: `这是第${len}个条目`
  })
  len--;
}
module.exports = [{
  api: '/demo',
  type: 'get',
  response: function(req, res) {
    res.json(mockjs.mock({
      'status': 'ok',
      'code': 200,
      'message': 'ok',
      'content': data
    }))
  }
}, {
  api: '/detail',
  type: 'get',
  response: function(req, res) {
    res.json(mockjs.mock({
      'status': 'ok',
      'code': 200,
      'message': 'ok',
      'content': {
        title: '详情',
        content: '具体的详情内容'
      }
    }))
  }
}]