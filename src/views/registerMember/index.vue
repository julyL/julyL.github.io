<template>
  <div class="member__container">
    <!-- 输入筛选 -->
    <div class="section__box part-input">
      <div class="section__line">
        <div class="input__item">
          <span class="input__text">姓名：</span>
          <el-input
            v-model="inputName"
            placeholder=""
            class="input__inp"
          ></el-input>
        </div>
        <div class="input__item">
          <span class="input__text">生日：</span>
          <el-date-picker
            type="date"
            placeholder="选择日期"
            v-model="inputDate"
            style="width: 100%"
            class="input__inp"
          ></el-date-picker>
        </div>
        <div class="input__item">
          <span class="input__text">电话：</span>
          <el-input
            v-model="inputPhone"
            placeholder=""
            class="input__inp"
          ></el-input>
        </div>
      </div>
    </div>
    <!-- 操作 -->
    <div class="section__box part-action"></div>
    <!-- 搜索结果 -->
    <div class="section__box part-result">
      <my-table></my-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputName: '',
      inputDate: '',
      inputPhone: ''
    };
  }
};
</script>

<style lang="scss">
.section__line {
  overflow: hidden;
}
.input__item {
  float: left;
  .input__inp {
    width: 220px !important;
  }
}
.part-input {
  height: 180px;
  padding: 20px 20px 0 29px;
}
.part-action {
  height: 68px;
}
</style>
