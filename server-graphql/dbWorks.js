const database = require('./database.js')

const dataFiltered = (which, args) => {
    let result = database[which].filter((item) => {
        // 조건인자가 없거나, 페이징 관련 인자거나
        // 모든 요소가 아이템과 모두 일치하면 통과
        return !args || Object.keys(args).reduce((a, b) => {
            return a && (
                ['page', 'per_page'].includes(b) ||
                item[b] == args[b]
            )
        }, true)
    })

    // 페이징
    /* if (args.page && args.per_page) {
        result = result.slice(
            (args.page - 1) * args.per_page, 
            args.page * args.per_page)
    } */

    return result
}

const dbWorks = {
    getProducts: (args) => dataFiltered('products', args),
    getColors: (args) => dataFiltered('colors', args),
    getUsers: (args) => dataFiltered('users', args),

    getOrders: (args) => dataFiltered('orders', args),
    getLastOrder:(args) => {
        const user_orders = dataFiltered('orders', args).filter(o => o.user_id === args.user_id);
        return user_orders[user_orders.length-1];
    },
    
    postOrder: (args) => {
        const newOrder = {
            id: database.orders.map((order) => {
                return Number(order.id)
            }).reduce((a, b) => {
                return Math.max(a, b)
            }, 0) + 1,
            ...args.input
        }
        database.orders.push(newOrder)
        return newOrder
    },
    editOrder: (args) => {
        return database.orders.filter((order) => {
            return order.id == args.id
        }).map((order) => {
            Object.assign(order, args.input)
            return order 
        })[0]
    },

    deleteItem: (which, args) => {
        const deleted = database[which].filter((item) => {
            return item.id == args.id
        })[0]
        database[which] = database[which].filter((item) => {
            return item.id != args.id
        })
        return deleted
    },
}

module.exports = dbWorks