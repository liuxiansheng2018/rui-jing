<template>
  <el-date-picker
    v-model="value1"
    type="datetimerange"
    range-separator="To"
    start-placeholder="Start date"
    end-placeholder="End date"
  >
  </el-date-picker>
</template>

<script>
import { reactive, toRefs } from "vue";
export default {
  data() {
    return {};
  },
  setup() {
    const state = reactive({
      shortcuts: [
        {
          text: "Last week",
          value: () => {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
            return [start, end];
          },
        },
        {
          text: "Last month",
          value: () => {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
            return [start, end];
          },
        },
        {
          text: "Last 3 months",
          value: () => {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
            return [start, end];
          },
        },
      ],
      value1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
      value2: "",
    });
    return toRefs(state);
  },
};
</script>

<style lang="less" scoped></style>
