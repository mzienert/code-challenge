const queries = require('../queries/products.js');

module.exports = ({ router }) => {
  router.post('/add-item', async (ctx) => {
    try {
      let query = await queries.addToCart(ctx);
      ctx.body = query;
    } catch (error) {
      console.log(error)
      ctx.throw(500);
    }
  });
  router.get('/cart-items', async (ctx) => {
    try {
      let query = await queries.getCart(ctx);
      ctx.body = query;
    } catch (error) {
      console.log(error)
      ctx.throw(500);
    }
  });
  router.delete('/remove-item/:id', async (ctx) => {
    try {
      let query = await queries.removeCart(ctx);
      ctx.body = query;
    } catch (error) {
      console.log(error)
      ctx.throw(500);
    }
  });
  router.put('/update-item', async (ctx) => {
    try {
      let query = await queries.updateCart(ctx);
      ctx.body = query;
    } catch (error) {
      console.log(error)
      ctx.throw(500);
    }
  });
};