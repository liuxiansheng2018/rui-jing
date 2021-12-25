const Mock = require("mockjs");
const data = Mock.mock({
  "list|80": [
    {
      // 主键
      "id|+1": 0,
      //商品种类
      "type|1": ["蓄肉类", "禽肉类", "蔬菜类", "生鲜类", "酒水类"],
      //订单号
      "num|+1": 120933654234,
      //交易时间
      time: "@time",
      //采购方式
      "way|1": ["现场采购", "厂家直销"],
      //订单金额
      "paid|500-2000.1-2": 1,
      //商家电话
      "phone|1-10": 1,
      //订单回执
      "form|1": ["待回执", "已回执"],
      //已付款
      "money|500-300.1-2": 1,
    },
  ],
});
const getTable = function (pageSize, current) {
  return data.list.filter((value, index) => {
    return index >= (current - 1) * pageSize && index < current * pageSize;
  });
};
export default getTable;
