const Mock = require("mockjs");
const data = Mock.mock({
    "list|80": [{
        // 主键
        "id|+1": 0,
        //订单号
        "num|+1": 20211293321,
        //交易时间
        "time": "@time",
        //支付方式
        "payment|1": ["支付宝", "现金", "微信"],
        //消费金额
        "money|100-500.1-2": 1,
        //官方优惠
        "discount|1-40.1-2": 1,
        //实收金额
        "paid|200-500.1-2": 1,
        //打印
        "put|1": ["打印"],
        //退款
        "return|1": ['已退款']

    }]
})
const getTable = function(pageSize, current) {
    return data.list.filter((value, index) => { return index >= (current - 1) * pageSize && index < current * pageSize });
};
export default getTable