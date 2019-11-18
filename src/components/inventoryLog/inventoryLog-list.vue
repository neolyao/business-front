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
              <Input class="input" v-model="inventoryLog.commodityName" placeholder="商品名称" />
              <Input class="input" v-model="inventoryLog.orderNumber" placeholder="订单号" />
              <DatePicker type="date" v-model="inventoryLog.startDateTime" placeholder="开始时间"></DatePicker>
              <DatePicker type="date" v-model="inventoryLog.endDateTime" placeholder="结束时间"></DatePicker>
              <br/>
              <br/>
              <Select class="select" @on-change="showOrderAddressData" :label-in-value="true">
                <Option v-for="item in dataList1" :value="item.id" :key="item.id">{{ item.name }}</Option>
              </Select>
              <Select class="select" @on-change="showOrderAddressChildData" :label-in-value="true">
                <Option v-for="item in dataList2" :value="item.id" :key="item.id">{{ item.name }}</Option>
              </Select>
              <Select class="select" v-model="orderState">
                <Option v-for="item in dataList3" :value="item.id" :key="item.id">{{ item.value }}</Option>
              </Select>
              <Button type="primary" @click="getData">搜索</Button>
            </div>
            <Table @on-select="onSelect" @on-select-cancel="onSelect" height="520" :columns="columns" :data="tableData"></Table>

            <Button class="bottom-button" @click="deleteInfo" type="primary">删除日志</Button>
            <Modal v-model="modalInfo" title="删除日志" @on-ok="deleteButton">确认要删除吗？</Modal>
            <Page class="paging" @on-change="currentPageNo" @on-page-size-change="switchPageSize" :current="pageNo" :page-size="pageSize"  :total="total" show-sizer show-elevator show-total />
          </TabPane>
        </Tabs>
      </Card>
    </Content>
  </Layout>
</template>

<script>
  import {page,deletes} from "@/api/inventoryLog";
  import {orderAddressFind} from "@/api/order";
  export default {
    data () {
      return {
        tableData:[],
        modalInfo:false,
        pareSelectAddress:'',
        selectData:[],
        selectAddress: '',
        orderAddress:{
          type:"",
          parentId:"",
          name:""
        },
        inventoryLog:{
          commodityName:"",
          orderNumber:"",
          endDateTime:"",
          startDateTime:"",
        },
        total:0,
        pageNo:1,
        pageSize:10,
        dataList1: [],
        dataList2: [],
        dataList3: [
          {
            id:"",
            value:"请选择..."
          },{
            id:"发货时",
            value:"发货时"
          },{
            id:"下单时",
            value:"下单时"
          },{
            id:"订单确认收货",
            value:"订单确认收货"
          },{
            id:"编辑商品",
            value:"编辑商品"
          },{
            id:"编辑商品货品",
            value:"编辑商品货品"
          },
        ],
        orderState: '',
        columns: [
          {
            type:"selection",
            key:'inventoryLogId',
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
        if(this.inventoryLog.endDateTime != ""){
          this.inventoryLog.endDateTime = this.formatDate(new Date(this.inventoryLog.endDateTime),"yyyy-MM-dd")
        }
        if(this.inventoryLog.startDateTime != ""){
          this.inventoryLog.startDateTime = this.formatDate(new Date(this.inventoryLog.startDateTime),"yyyy-MM-dd")
        }

        page({
          orderNumber:this.inventoryLog.orderNumber,
          commodityName:this.inventoryLog.commodityName,
          endDateTime:this.inventoryLog.endDateTime,
          startDateTime:this.inventoryLog.startDateTime,
          inventoryType:this.pareSelectAddress+this.selectAddress,
          operationType:this.orderState,
          pageNo:this.pageNo,
          pageSize:this.pageSize
        }).then(req =>{
          this.tableData = req.data.list;
          this.total = req.data.total;
        })
      },
      initSelectData : function(type){
        orderAddressFind({
          type:type,
          parentId:this.orderAddress.parentId,
        }).then(req =>{
          if(type=="1"){
            this.dataList1 = req.data;
          }else{
            this.dataList2 = req.data;
          }
        })
      },
      showOrderAddressData : function(e){
        if(e.value == "-1"){
          this.pareSelectAddress = '';
        }else{
          this.pareSelectAddress = e.label;
        }
        this.orderAddress.parentId=e.value;
        this.initSelectData("2");
      },
      showOrderAddressChildData : function(e){
        if(e.value == "-1"){
          this.selectAddress = '';
        }else{
          this.selectAddress = e.label;
        }
      },
      deleteInfo : function(){
        if(this.selectData.length==0){
          this.$Message.info('请至少选择一条数据！');
          return ;
        }
        this.modalInfo = true;
      },
      deleteButton : function(){
        var selectId = [];
        for (var i=0;i<this.selectData.length;i++){
          selectId.push(this.selectData[i].inventoryLogId);
        }
        deletes({id:selectId}).then(req =>{
          if(req.data){
            this.$Message.success('删除成功！');
            this.getData();
          }else{
            this.$Message.error('删除失败！');
          }
        })
      },
      onSelect : function(e){
        this.selectData = e;
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
      this.initSelectData("1");
    }
  }
</script>
<style scoped>
  @import "inventoryLog-list.less";
</style>
