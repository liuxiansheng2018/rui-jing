const Mock = require("mockjs");
const data = Mock.mock({
  "jiushui|80": [
    {
      // 主键
      "id|+1": 0,
      //商品种类
      // "type|1": ["酒水类", "肉类", "生鲜类", "蔬菜类"],
      //图片
      img: "@Image('200x120','@color')",
      //件数
      "price|8-20": 8,
      //名称
      "name|1": [
        "雪花啤酒",
        "青岛啤酒",
        "鲜榨橙汁",
        "鲜榨石榴汁",
        "红豆奶茶",
        "西瓜汁",
        "可口可乐",
      ],
    },
  ],
  "rou|80": [
    {
      // 主键
      "id|+1": 0,
      //商品种类
      // "type|1": ["酒水类", "肉类", "生鲜类", "蔬菜类"],
      //图片
      img: "@Image('200x120','@color')",
      //价格
      "price|20-100": 1,
      //名称
      "name|1": [
        "猪肉",
        "牛肉",
        "羊肉",
        "鸡肉",
        "鸭肉",
        "鹅肉",
        "香肠",
        "甲鱼",
      ],
    },
  ],
  "shengxian|80": [
    {
      // 主键
      "id|+1": 0,
      //商品种类
      // "type|1": ["酒水类", "肉类", "生鲜类", "蔬菜类"],
      //图片
      img: "@Image('200x120','@color')",
      //件数
      "price|80-200": 8,
      //名称
      "name|1": ["螃蟹", "花甲", "带鱼", "生蚝", "贝壳", "牡蛎", "龙虾"],
    },
  ],
  "shucai|80": [
    {
      // 主键
      "id|+1": 0,
      //商品种类
      // "type|1": ["酒水类", "肉类", "生鲜类", "蔬菜类"],
      //图片
      img: "@Image('200x120','@color')",
      //件数
      "price|8-20": 8,
      //名称
      "name|1": [
        "花菜",
        "生菜",
        "土豆",
        "莲藕",
        "白菜",
        "空心菜",
        "上海青",
        "娃娃菜",
      ],
    },
  ],
});
export const getjiushui = function (pageSize, current) {
  return data.jiushui.filter((value, index) => {
    return index >= (current - 1) * pageSize && index < current * pageSize;
  });
};
export const getrou = function (pageSize, current) {
  return data.rou.filter((value, index) => {
    return index >= (current - 1) * pageSize && index < current * pageSize;
  });
};
export const getshengxian = function (pageSize, current) {
  return data.shengxian.filter((value, index) => {
    return index >= (current - 1) * pageSize && index < current * pageSize;
  });
};
export const getshucai = function (pageSize, current) {
  return data.shucai.filter((value, index) => {
    return index >= (current - 1) * pageSize && index < current * pageSize;
  });
};
