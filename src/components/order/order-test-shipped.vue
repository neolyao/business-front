<template>
  <Layout>
    <Content>
      <Breadcrumb>
        <BreadcrumbItem>订单管理</BreadcrumbItem>
        <BreadcrumbItem>检测已发货订单</BreadcrumbItem>
      </Breadcrumb>
      <Card>
        <Tabs type="card">
          <TabPane label="检测已发货订单">
            <div class="input-header">
              <Input class="input" search="true" icon="ios-search" v-model="value" placeholder="订单号" />
              <Button class="bottom-button" type="primary">一键确认发货</Button>
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
            title: '订单号',
            key: 'age32'
          },{
            title: '商家名称',
            key: 'age22'
          },{
            title: '下单时间',
            key: 'age'
          },{
            title: '收货人',
            key: 'age22'
          },{
            title: '总金额',
            key: 'address'
          },{
            title: '订单状态',
            key: 'address'
          },{
            title: '自动确认收货时间',
            key: 'address'
          },{
            title: '订单应收货时间',
            key: 'address'
          }
        ],
        data1: [

        ]
      }
    }
  }
</script>
<style scoped>
  @import "order-test-shipped.less";
</style>
