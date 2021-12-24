<template>
  <el-table :data="tableData" stripe style="width: 100%">
    <el-table-column prop="date" label="日期" :md="6" />
    <el-table-column prop="num" label="订单号" :md="6" />
    <el-table-column prop="time" label="支付时间" :md="6" />
    <el-table-column prop="money" label="消费金额" :md="6" />
  </el-table>

  <el-pagination
    :background="true"
    v-model:currentPage="currentPage1"
    :page-size="10"
    layout="total, prev, pager, next"
    :total="100"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    prev-text="上一页"
    next-text="下一页"
    style="margin-top: 20px"
  >
  </el-pagination>
</template>

<script>
import { getTable2 } from "../../mock/maa/maa.js";
import { ref, onMounted } from "vue";
export default {
  setup() {
    const current = ref(1);
    const pageSize = ref(6);
    let tableData = ref([]);

    const handleSizeChange = (val) => {
      console.log(`${val} items per page`);
    };
    const handleCurrentChange = (val) => {
      // console.log(`current page: ${val}`);
      current.value = val;
      tableData.value = getTable2(pageSize.value, current.value);
    };

    onMounted(() => {
      tableData.value = getTable2(pageSize.value, current.value);
    });
    return {
      current,
      pageSize,
      tableData,
      handleSizeChange,
      handleCurrentChange,
    };
  },
};
</script>
