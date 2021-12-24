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
        //订单金额
        "money|100-500.1-2": 1,
        //已优惠
        "discount|1-40.1-2": 1,
        //订单金额
        "paid|200-500.1-2": 1,
        //发票
        "put|1": ["普通发票", "电子发票", "增值发票"],
        //打印
        "return|1": ['已打印']

    }]
})

const getTable = function(pageSize, current) {
    return data.list.filter((value, index) => { return index >= (current - 1) * pageSize && index < current * pageSize });
};
export default getTable