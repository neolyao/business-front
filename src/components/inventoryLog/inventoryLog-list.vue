<template>
  <Layout>
    <Content>
      <Breadcrumb>
        <BreadcrumbItem>订单</BreadcrumbItem>
        <BreadcrumbItem>商品库存日志</BreadcrumbItem>
      </Breadcrumb>
      <Card>
        <Tabs type="card">
          <TabPane label="商品库存日志">
            <div class="input-header">
              <Input class="input" v-model="commodityName" placeholder="商品名称" />
              <Input class="input" v-model="orderNumber" placeholder="订单号" />
              <DatePicker type="date" v-model="startDateTime" placeholder="开始时间"></DatePicker>
              <DatePicker type="date" v-model="endDateTime" placeholder="结束时间"></DatePicker>
              <br/>
              <br/>
              <Select class="select" v-model="model1">
                <Option v-for="item in dataList" :value="item.value" :key="item.key">{{ item.value }}</Option>
              </Select>
              <Select class="select" v-model="model2">
                <Option v-for="item in dataList" :value="item.value" :key="item.key">{{ item.value }}</Option>
              </Select>
              <Select class="select" v-model="model3">
                <Option v-for="item in dataList" :value="item.value" :key="item.key">{{ item.value }}</Option>
              </Select>
              <Button type="primary" @click="getData">搜索</Button>
            </div>
            <Table height="600" :columns="columns" :data="tableData"></Table>
            <Page class="paging" @on-change="currentPageNo" @on-page-size-change="switchPageSize" :current="pageNo" :page-size="pageSize"  :total="total" show-sizer show-elevator show-total />
          </TabPane>
        </Tabs>
      </Card>
    </Content>
  </Layout>
</template>

<script>
  import {page,findType} from "@/api/inventoryLog";
  export default {
    data () {
      return {
        tableData:[],
        total:0,
        pageNo:1,
        pageSize:10,
        commodityName:"",
        orderNumber:"",
        endDateTime:"",
        startDateTime:"",
        dataList: [],
        model1: '',
        model2: '',
        model3: '',
        columns: [
          {
            type:"selection",
            width:50
          },{
            title: '编号',
            key: 'inventoryLogNumber',
            width:100,
          },{
            title: '商品名称',
            key: 'commodityName',
            width:350
          },{
            title: '订单号',
            key: 'orderNumber'
          },{
            title: '操作类型',
            key: 'operationType'
          },{
            title: '操作人员',
            key: 'operator'
          },{
            title: '库存',
            key: 'inventory',
            width:100,
          },{
            title: '库存类型',
            key: 'inventoryType'
          },{
            title: '操作时间',
            key: 'operationTime',
            render: (h,params)=>{
              return h('div',
                this.formatDate(new Date(params.row.operationTime),'yyyy-MM-dd hh:mm:ss')
              )
            }
          }
        ]
      }
    },
    methods:{
      //获取数据
      getData : function(){
        if(this.endDateTime != ""){
          this.endDateTime = this.formatDate(new Date(this.endDateTime),"yyyy-MM-dd")
        }
        if(this.startDateTime != ""){
          this.startDateTime = this.formatDate(new Date(this.startDateTime),"yyyy-MM-dd")
        }
        page({
          orderNumber:this.orderNumber,
          commodityName:this.commodityName,
          endDateTime:this.endDateTime,
          startDateTime:this.startDateTime,
          pageNo:this.pageNo,
          pageSize:this.pageSize
        }).then(req =>{
          this.tableData = req.data.list;
          this.total = req.data.total;
        })
      },
      initData : function(){
        findType({}).then(req =>{
          this.dataList = req.data;
        })
      },
      currentPageNo : function(pageNo){
        this.pageNo= pageNo;
        this.getData();
      },
      switchPageSize : function(pageSize){
        this.pageSize = pageSize;
        this.getData();
      },
      // 时间格式化
      formatDate: function (date, fmt) {
        let o = {
          'M+': date.getMonth() + 1, // 月份
          'd+': date.getDate(), // 日
          'h+': date.getHours(), // 小时
          'm+': date.getMinutes(), // 分
          's+': date.getSeconds(), // 秒
          'S': date.getMilliseconds() // 毫秒
        }
        if (/(y+)/.test(fmt)) {
          fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
        }
        for (var k in o) {
          if (new RegExp('(' + k + ')').test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
          }
        }
        return fmt
      }
    },
    mounted:function () {
      this.getData();
      this.initData();
    }
  }
</script>
<style scoped>
  @import "inventoryLog-list.less";
</style>
