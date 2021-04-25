<template>
  <el-table
    :data="tableData"
    style="width: 100%"
    :default-sort="{ prop: 'date', order: 'descending' }"
  >
    <el-table-column prop="date" width="180">
      <template slot-scope="scope" slot="header">
        <div @click="switchSort">
          新增日期
          <sort-icon :sortType="sortType == 'increase'"></sort-icon>
        </div>
      </template>
      <template slot-scope="scope">
        <el-checkbox v-model="scope.checked"></el-checkbox>{{ scope.row.date }}
      </template>
    </el-table-column>
    <el-table-column prop="name" label="学员类别" width="180">
      <template slot-scope="scope">
        <member-type :isAdult="scope.isAdult"></member-type>
      </template>
    </el-table-column>
    <el-table-column prop="phone" label="联系方式"></el-table-column>
    <el-table-column
      prop="responsiblePerson"
      label="销售负责人"
    ></el-table-column>
    <el-table-column prop="order" label="预制订单"></el-table-column>
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      sortType: 'increase',
      tableData: [
        {
          date: '2016-05-02',
          name: '李明珠',
          phone: '13388889999',
          responsiblePerson: '王小明',
          order: 'B000972',
          isAdult: true
        },
        {
          date: '2016-05-02',
          name: '李明珠',
          phone: '13388889999',
          responsiblePerson: '王小明',
          order: 'B000972',
          isAdult: false
        },
        {
          date: '2016-05-02',
          name: '李明珠',
          phone: '13388889999',
          responsiblePerson: '王小明',
          order: 'B000972',
          isAdult: true
        },
        {
          date: '2016-05-02',
          name: '李明珠',
          phone: '13388889999',
          responsiblePerson: '王小明',
          order: 'B000972',
          isAdult: true
        },
        {
          date: '2016-05-02',
          name: '李明珠',
          phone: '13388889999',
          responsiblePerson: '王小明',
          order: 'B000972',
          isAdult: true
        },
        {
          date: '2016-05-02',
          name: '李明珠',
          phone: '13388889999',
          responsiblePerson: '王小明',
          order: 'B000972',
          isAdult: true
        },
        {
          date: '2016-05-02',
          name: '李明珠',
          phone: '13388889999',
          responsiblePerson: '王小明',
          order: 'B000972',
          isAdult: true
        },
        {
          date: '2016-05-02',
          name: '李明珠',
          phone: '13388889999',
          responsiblePerson: '王小明',
          order: 'B000972',
          isAdult: true
        },
        {
          date: '2016-05-02',
          name: '李明珠',
          phone: '13388889999',
          responsiblePerson: '王小明',
          order: 'B000972',
          isAdult: true
        }
      ]
    };
  },
  methods: {
    formatter(row, column) {
      return row.address;
    },
    switchSort() {
      this.sortType = this.sortType == 'increase' ? 'decrease' : 'increase';
      //
    }
  }
};
</script>
