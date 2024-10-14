const Order = require('../model/order');

async function createOrder(data) {
  try {
    const order = await Order.create(data)
    return order
  } catch(err) {
    console.log(err)
  }
  return null;
}

async function findOrder(id) {
  try {
    const order = await Order.find(id);
    return order
  } catch(err) {
    console.log(err)
  }
  return null;
}

async function updateOrder(data) {
  try {
    const order = await Order.updateOne(data?.id, data);
    return order;
  } catch(err) {
    console.log(err)
  }
  return 0;
}

module.exports = { createOrder, findOrder, updateOrder }