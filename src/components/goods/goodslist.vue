<template>
  <div class="tb">
    <div>
      <el-input
        placeholder="输入商品关键字"
        v-model="search"
        class="input-with-select"
        style="width:250px"
      >
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
      <el-button type="primary" plain style="float:right">添加商品</el-button>
    </div>
    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width:800px;margin-top:20px"
      border
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column label="编号" width="120">
        <template slot-scope="scope">{{ scope.row.goods_id }}</template>
      </el-table-column>
      <el-table-column label="商品名称" width="200">
        <template slot-scope="scope">
          <div>商品货号：ET00{{scope.row.goods_id}}</div>
          <div>
            <img :src="scope.row.goods_img" style="width:80px;height:50px">
            <span>{{scope.row.goods_desc}}</span>
          </div>
          <div>商品运费:按固定运费</div>
        </template>
      </el-table-column>
      <el-table-column label="价格" width="120">
        <template slot-scope="scope">{{ scope.row.goods_price }}</template>
      </el-table-column>
      <el-table-column label="库存">
        <template slot-scope="scope">{{ scope.row.goods_count }}</template>
      </el-table-column>
      <el-table-column label="操作">
          <el-button type="primary" icon="el-icon-edit" circle></el-button>
          <el-button type="danger" icon="el-icon-delete" circle></el-button>
      </el-table-column>
    </el-table>
  </div>
</template>
<style scoped>
.tb {
  margin-top: 50px;
  margin-left: 50px;
  width: 800px;
}
.e-table{
  text-align: center;
}
</style>
<script>
import axios from "axios";
export default {
  data() {
    return {
      search:'',
      tableData: [],
      multipleSelection: []
    };
  },
  mounted: function() {
    axios
      .get("/api/getGoods")
      .then(res => {
        this.tableData = res.data;
      })
      .catch(error => {});
  },
  methods: {
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    }
  }
};
</script>