<template>
    <el-table
      ref="multipleTable"
      :data="shopData"
      tooltip-effect="dark"
      style="width:800px;margin-top:20px"
      border
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column label="品牌名称" width="120">
        <template slot-scope="scope">{{ scope.row.brandName}}</template>
      </el-table-column>
      <el-table-column label="品牌图片" width="200">
        <template slot-scope="scope">
          <div>{{scope.row.brandUrl}}</div>
        </template>
      </el-table-column>
      <el-table-column label="LOGO" width="120">
        <template slot-scope="scope">{{ scope.row.brandLogo }}</template>
      </el-table-column>
      <el-table-column label="描述">
        <template slot-scope="scope">{{ scope.row.brandDesc }}</template>
      </el-table-column>
      <el-table-column label="操作">
          <el-button type="primary" icon="el-icon-edit" circle></el-button>
          <el-button type="danger" icon="el-icon-delete" circle></el-button>
      </el-table-column>
    </el-table>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return {
            shopData:[]
        }
    },
    mounted: function() {
    axios
      .get("/api/getAllBrand")
      .then(res => {
        console.log(res.data);
        this.shopData = res.data;
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
}
</script>