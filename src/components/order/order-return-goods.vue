<template>
  <Layout>
    <Content>
      <Breadcrumb>
        <BreadcrumbItem>订单管理</BreadcrumbItem>
        <BreadcrumbItem>退货单列表</BreadcrumbItem>
      </Breadcrumb>
      <Card>
        <Tabs type="card">
          <TabPane label="退货单列表">
            <div class="input-header">
              <Input class="input" v-model="value" placeholder="发货单流水号" />
              <Input class="input" v-model="value" placeholder="订单号" />
              <Input class="input" search="true" icon="ios-search" v-model="value" placeholder="收货人" />
            </div>


            <Table class="table" :columns="columns1" :data="data1"></Table>
            <Button class="bottom-button" type="primary">移除</Button>
            <Page class="paging" :total="100" show-sizer show-elevator show-total />
          </TabPane>
        </Tabs>
      </Card>
    </Content>
  </Layout>
</template>

<script>
  export default {
    data () {
      return {
        cityList: [
          {
            value: '请选择...',
            label: '请选择...'
          }
        ],
        model1: '',
        columns1: [
          {
            type:"selection",
            width:50
          },{
            title: '发货单流水号',
            key: 'age32'
          },{
            title: '订单号',
            key: 'age22'
          },{
            title: '下单时间',
            key: 'age'
          },{
            title: '收货人',
            key: 'age22'
          },{
            title: '发货时间',
            key: 'address'
          },{
            title: '退货时间',
            key: 'address3'
          },{
            title: '操作人',
            key: 'address4'
          },{
            title: '操作',
            width:'250px',
            render: (h, params) => {
              return h('div', [
                h('Button', {
                  props: {
                    type: 'info',
                    size: 'small',
                    icon:"md-print",
                  },
                  on: {
                    click: () => {
                      alert("删除")
                    }
                  }
                }, '删除')
              ]);
            }
          }
        ],
        data1: [

        ]
      }
    }
  }
</script>
<style scoped>
  @import "order-return-goods.less";
</style>
