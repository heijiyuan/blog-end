'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx, service } = this;
    // eslint-disable-next-line no-undef
    const content = await service.home.showlist();
    await ctx.render('home', {
      title: 'Egg.js demo homepage',
      user: content[0].name,
    });
  }
}

module.exports = HomeController;
