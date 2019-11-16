<template>
  <Layout>

      <Breadcrumb>
        <BreadcrumbItem>订单</BreadcrumbItem>
        <BreadcrumbItem>商品库存日志</BreadcrumbItem>
      </Breadcrumb>
    <Tabs type="card">
      <TabPane :label="'标签1'">
        <div class="input-header">
          <div class="Selectlistbox">
            <Select class="select" v-model="model3">
              <Option v-for="item in dataList" :value="item.value" la :key="item.key">{{ item.value }}</Option>
            </Select>
            <Input v-model="value" placeholder="会员名称/订单编号" style="width: 250px" />
            <Button type="primary" @click="getData">搜索</Button>
          </div>

            <Table height="500" :columns="columns" :data="tableData"></Table>
          
        </div>
        <Page class="paging" @on-change="currentPageNo" @on-page-size-change="switchPageSize" :current="pageNo" :page-size="pageSize"  :total="total" show-sizer show-elevator show-total />
      </TabPane>
    </Tabs>

  </Layout>

</template>

<script>
    export default {
        data () {
            return {
                tabs: 1,
                dataList: [{
                    value:"啊ing选啊",
                    key:"啊ing选啊"
                },{
                    value:"啊ing选啊",
                    key:"啊ing选啊"
                }],
                columns: [
                    {
                        type:"selection",
                        width:50
                    },{
                        title: '编号',
                        key: 'inventoryLogNumber',
                        width:100,
                    },{
                        title: '订单编号',
                        key: 'commodityName',
                        width:350
                    },{
                        title: '投诉人',
                        key: 'orderNumber'
                    },{
                        title: '投诉类型',
                        key: 'operationType'
                    },{
                        title: '投诉内容',
                        key: 'operator'
                    },{
                        title: '投诉图片',
                        key: 'inventory',
                        width:100,
                    },{
                        title: '投诉状态',
                        key: 'inventoryType'
                    },{
                        title: '操作',
                        key: 'operationTime',
                        render: (h,params)=>{
                            return h('div',
                                this.formatDate(new Date(params.row.operationTime),'yyyy-MM-dd hh:mm:ss')
                            )
                        }
                    }
                ]

                   }
            }
                   }
</script>
<style scoped>
  @import "complaint.less";

</style>
