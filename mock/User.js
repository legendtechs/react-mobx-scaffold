var mockjs = require('mockjs');

module.exports = [{
  api: '/user',
  type: 'GET',
  response: function (req, res) {
    res.json(mockjs.mock({
      'status': 'ok',
      'code': 200,
      'content': {
        'user': {
          userName: 'legendscott@163.com',
          userId: 1,
          userType: '',
          identity: null
        }
      }
    }));
  }
}];
