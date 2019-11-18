<template>
  <Layout>
      <Breadcrumb>
        <BreadcrumbItem>订单</BreadcrumbItem>
        <BreadcrumbItem>投诉管理</BreadcrumbItem>
      </Breadcrumb>
    <Tabs type="card">
      <TabPane label="投诉管理">
        <div class="input-header">
          <div class="Selectlistbox">
            <Select class="select" v-model="complain.complaintStatus">
              <Option v-for="item in dataList" :value="item.key" la :key="item.key">{{ item.value }}</Option>
            </Select>
            <Input v-model="complain.orderSequence" placeholder="会员名称/订单编号" style="width: 250px" />
            <Button type="primary" @click="getData">搜索</Button>
          </div>

            <Table height="520" :columns="columns" :data="tableData"></Table>
        </div>
        <Page class="paging" @on-change="currentPageNo" @on-page-size-change="switchPageSize" :current="pageNo" :page-size="pageSize"  :total="total" show-sizer show-elevator show-total />
      </TabPane>
    </Tabs>

  </Layout>

</template>

<script>
  import {page} from "@/api/complaint";
    export default {
        data () {
            return {
                tableData:[],
                total:0,
                pageNo:1,
                pageSize:10,
                complain:{
                  orderSequence:"",
                  complaintStatus:"",

                },
                dataList: [
                  {
                    value:"请选择",
                    key:""
                  },{
                    value:"待申诉",
                    key:"待申诉"
                  },{
                    value:"对话中",
                    key:"对话中"
                  },{
                    value:"待仲裁",
                    key:"待仲裁"
                  },{
                    value:"完成",
                    key:"完成"
                  }
                ],
                columns: [
                  {
                        title: '编号',
                        key: 'complainSequence',
                        width:100,
                    },{
                        title: '订单编号',
                        key: 'orderSequence',
                        width:350
                    },{
                        title: '投诉人',
                        key: 'userId'
                    },{
                        title: '投诉类型',
                        key: 'complainType'
                    },{
                        title: '投诉内容',
                        key: 'complaintContent'
                    },{
                        title: '投诉图片',
                        key: 'complaintImage',
                        width:100,
                    },{
                        title: '投诉状态',
                        key: 'complaintStatus'
                    },{
                        title: '操作',
                        key: 'operation'
                    }
                ]
            }
        },
        methods : {
          //获取数据
          getData : function(){
            page({
              pageNo:this.pageNo,
              pageSize:this.pageSize,
              orderSequence:this.complain.orderSequence,
              complaintStatus:this.complain.complaintStatus,
            }).then(req =>{
              this.tableData = req.data.list;
              this.total = req.data.total;
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
        },
        mounted:function () {
          this.getData();
        }
  }
</script>
<style scoped>
  @import "complaint.less";

</style>
