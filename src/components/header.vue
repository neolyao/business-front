<template>
  <div>
       <el-row>
        <el-col class="navbar__menu-box">
            <ul class="el-menu el-menu--horizontal navbar__menu">
                <li class="el-menu-item">菜单1</li>
                <li class="el-menu-item">菜单2</li>
                <li class="el-menu-item">
                    <el-dropdown trigger="click" v-on:command="handleNavDropdownCommand">
                        <span class="el-dropdown-link">13999999999 <i class="el-icon-caret-bottom el-icon--right"></i></span>
                        <el-dropdown-menu slot="dropdown" class="navbar__dropdown-menu">
                            <el-dropdown-item><router-link to="/user/recharge">账户充值</router-link></el-dropdown-item>
                            <el-dropdown-item><router-link to="/user/account">账户信息</router-link></el-dropdown-item>
                            <el-dropdown-item command="logout" divided>退出</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </li>
                <li class="el-menu-item">帮助指南</li>
                <li class="el-menu-item">在线咨询</li>
            </ul>
        </el-col>
    </el-row>
</div> 
</template>
<script>
    export default {
        data() {
            return {
            };
        },
        methods: {
            handleNavDropdownCommand: function(command) {
                if (command == 'logout') {
                    this.$confirm('确认退出吗?', '提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        type: 'warning'
                    }).then(function() {
                        this.$message('你的退出逻辑');
                    }.bind(this));
                }
            }
        }
    };
</script>
<style>
    .navbar__logo-box {
        background-color: #0da7ff;
    }
    .navbar__menu-box {
        background-color: #fff;
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
    }
    .navbar__menu {
        float: right;
        background-color: #fff;
    }
    .navbar__dropdown-menu a {
        color: inherit;
        text-decoration: none;
    }
    .navbar__title {
        margin-top: 0;
        margin-bottom: 0;
        margin-left: 12px;
        height: 60px;
        line-height: 60px;
        font-size: 1.5em;
        font-weight: bold;
    }
    .navbar__title a {
        color: #48576a;
        text-decoration: none;
    }
</style>