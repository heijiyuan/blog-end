'use strict';
const Service = require('egg').Service;

class HomeService extends Service {
  async showlist() {
    //  var a = '1230';
    const content = await this.app.mysql.select('user');
    console.log(content);
    //  ctx.body = 'hi, egg';
    return content;
  }
}

module.exports = HomeService;
