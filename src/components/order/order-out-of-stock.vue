<template>
  <Layout>
    <Content>
      <Breadcrumb>
        <BreadcrumbItem>订单</BreadcrumbItem>
        <BreadcrumbItem>全部缺货登记信息</BreadcrumbItem>
      </Breadcrumb>
      <Card>
        <Tabs type="card">
          <TabPane label="全部缺货登记信息">
            <div class="input-header">
              <Input class="input" search="true" icon="ios-search" v-model="value" placeholder="缺货商品名" />
            </div>

            <Table class="table" :columns="columns1" :data="data1"></Table>
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
        model1: '',
        columns1: [
          {
            title: '编号',
            key: 'age32'
          },{
            title: '联系人',
            key: 'age22'
          },{
            title: '缺货商品名',
            key: 'age22'
          },{
            title: '数量',
            key: 'age'
          },{
            title: '登记时间',
            key: 'address'
          },{
            title: '处理',
            key: 'address2'
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
  @import "order-out-of-stock.less";
</style>
