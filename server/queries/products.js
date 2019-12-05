'use strict';
function addToCart(ctx) {
    const id = ctx.request.body.id;
    const name = ctx.request.body.name;
    return ctx.myPool().query(`INSERT INTO cart (productId, name, qty) VALUES (${id}, '${name}', 1)`);
} 

function getCart(ctx) {
    return ctx.myPool().query(`SELECT * FROM cart`);
} 

function removeCart(ctx) {
    const id = ctx.params.id;
    return ctx.myPool().query(`DELETE FROM cart WHERE id = ${id}`);
} 

function updateCart(ctx) {
    const id = ctx.request.body.id;
    const qty = ctx.request.body.qty;
    return ctx.myPool().query(`UPDATE cart SET qty = ${qty} WHERE id = ${id}`);
} 


module.exports = {
    addToCart,
    getCart,
    removeCart,
    updateCart
}