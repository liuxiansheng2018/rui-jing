const Mock = require("mockjs");
const data = Mock.mock({
  "list|80": [
    {
      // 主键
      "id|+1": 0,
      //商品种类
      "type|1": ["蓄肉类", "禽肉类", "蔬菜类", "生鲜类", "酒水类"],
      //商品
      "shop|1": ["羊肉卷", "肉牛卷"],
      //订单号
      "num|+1": 120933654234,
      //入库时间
      time: "@time",
      //采购方式
      "pay|1": ["现场采购", "厂家直销"],
      //订单金额/已付款
      "money|1000-4000.1-2": 1,
      //现有数量
      "count|100-300": 100,
      //储存方式
      "way|1": ["冷冻"],
    },
  ],
});

const getTable = function (pageSize, current) {
  return data.list.filter((value, index) => {
    return index >= (current - 1) * pageSize && index < current * pageSize;
  });
};
export default getTable;
