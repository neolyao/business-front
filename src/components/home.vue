<template>
  <div class="business">
    <div class="top">
      <div class="tleft floatLeft">
        <div class="logo">DS创商</div>
      </div>
      <div class="tright floatLeft">
        <Header></Header>
      </div>
    </div>
    <div class="main">
      <div class="left">
        <el-menu
          default-active="1"
          class="el-menu-vertical"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          style="min-height:100%"
          router
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>首页</span>
            </template>
            <el-menu-item index="1">欢迎页</el-menu-item>
          </el-submenu>
           <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-goods"></i>
              <span>商品</span>
            </template>
            <el-menu-item index="/list">商品列表</el-menu-item>
            <el-menu-item index="1-2">商品类型</el-menu-item>
            <el-menu-item index="/shop">商家品牌</el-menu-item>
          </el-submenu>
           <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-sell"></i>
              <span>促销</span>
            </template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-submenu>
           <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-tickets"></i>
              <span>订单</span>
            </template>
            <el-menu-item index="/orderList">订单列表</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-document"></i>
              <span>报表</span>
            </template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-submenu>
          <el-submenu index="6">
            <template slot="title">
              <i class="el-icon-s-shop"></i>
              <span>门店</span>
            </template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-submenu>
          <el-submenu index="7">
            <template slot="title">
              <i class="el-icon-s-custom"></i>
              <span>权限</span>
            </template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-submenu>
        </el-menu>
      </div>
      <div class="right">
        <div class="dash">
        </div>
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/header.vue'
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  components: {Header}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.business{
  margin-top: 0;
}
.top {
  margin-top: 0;
  width: 1850px;
  background-color:rgb(61, 60, 60);
}

.tleft{
  width: 249px;
  height: 60px;
  background-color:#fff;
}
.tright{
  width: 1600px;
  height: 60px;
  background-color:rgb(76, 113, 236);
  float: left;
}
.main {
  width: 1850px;
  float: left;
}
.left {
  width: 250px;
  height: 1600px;
  float: left;
}
.right {
  width: 1600px;
  height: 1000px;
  float: right;
}
.logo{
  margin-left: 20px;
  font-size: 40px;
  color: rgb(33, 131, 223);
}
.floatLeft{
  float: left;
}
.dash{
  margin-top: 0;
  height: 30px;
  background-color: rgb(243, 246, 247);
}
</style>
