const Mock = require("mockjs");
const data = Mock.mock({
    "list|80": [{
        // 主键
        "id|+1": 0,
        // 日期
        "date": "@date",
        //订单号
        "num|+1": 20211293321,
        //支付时间
        "time": "@time",
        //消费金额
        "money|100-500.1-2": 1
    }]
})
const data2 = Mock.mock({
    "list|80": [{
        // 主键
        "id|+1": 0,
        // 日期
        "date": "@date",
        //订单号
        "num|+1": 20211293321,
        //支付时间
        "time": "@time",
        //消费金额
        "money|100-500.1-2": 1
    }]
})

const getTable = function(pageSize, current) {
    return data.list.filter((value, index) => { return index >= (current - 1) * pageSize && index < current * pageSize });
};
const getTable2 = function(pageSize, current) {
    return data2.list.filter((value, index) => { return index >= (current - 1) * pageSize && index < current * pageSize });
};
export {
    getTable,
    getTable2
};