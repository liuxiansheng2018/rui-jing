const Mock = require("mockjs");
const data = Mock.mock({
    "list|80": [{
        // 主键
        "id|+1": 0,
        //商品种类
        "type|1": ["酒水类", "肉类", "生鲜类", "蔬菜类"],
        //图片
        "img": "@Image('200x120','@color')",
        //件数
        "count|8-20": 8,
        //名称
        "name|1": ["雪花啤酒", "青岛啤酒", "鲜榨橙汁", "鲜榨石榴汁", "红豆奶茶"]

    }]
})
const getTable = function(pageSize, current) {
    return data.list.filter((value, index) => { return index >= (current - 1) * pageSize && index < current * pageSize });
};
export default getTable