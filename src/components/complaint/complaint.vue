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
            <div class="search">
              <Input v-model="complain.orderSequence" class="input" placeholder="会员名称/订单编号">
                <Button slot="append" @click="getData" icon="ios-search"></Button>
              </Input>
            </div>
          </div>

          <Table height="520" :columns="columns" :data="tableData"></Table>
          <Modal v-model="modalInfo" title="删除投诉" @on-ok="deleteButton">确认要删除吗？</Modal>
        </div>
        <Page class="paging" @on-change="currentPageNo" @on-page-size-change="switchPageSize" :current="pageNo" :page-size="pageSize"  :total="total" show-sizer show-elevator show-total />
      </TabPane>
    </Tabs>

  </Layout>

</template>

<script>
  import {page,deletes} from "@/api/complaint";
    export default {
        data () {
            return {
                modalInfo:false,
                tableData:[],
                deleteId:"",
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
                        key: 'complaintType'
                    },{
                        title: '投诉内容',
                        key: 'complaintContent'
                    },{
                        title: '投诉图片',
                        key: 'complaintImage',
                        width:100,
                        render:(h,params) => {
                          return h('img',{
                            attrs:{
                              src:params.row.complaintImage
                            },
                            style:{
                              width:'40px',
                              height:'40px',
                              cursor:'pointer',
                            }
                          })
                        }
                    },{
                        title: '投诉状态',
                        key: 'complaintStatus'
                    },{
                        title: '操作',
                        key: 'complainId',
                        render: (h, params) => {
                          return h('div', [
                            h('Button', {
                              props: {
                                type: 'error',
                                size: 'small',
                                icon:'ios-trash-outline'
                              },
                              on: {
                                click: () => {
                                  this.modalInfo = true;
                                  this.deleteId = params.row.complainId;
                                }
                              }
                            }, '删除')
                          ]);
                        }
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
          deleteButton : function(){
            deletes({id:this.deleteId}).then(req =>{
              if(req.data){
                this.$Message.success('删除成功！');
                this.getData();
              }else{
                this.$Message.error('删除失败！');
              }
            })
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
