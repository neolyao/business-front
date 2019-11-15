<template>
  <Layout>
    <Content>
      <Breadcrumb>
        <BreadcrumbItem>订单管理</BreadcrumbItem>
        <BreadcrumbItem>订单列表</BreadcrumbItem>
      </Breadcrumb>
      <Card>
        <Tabs type="card">
          <TabPane label="订单列表">
            <div class="input-header">
              <Input class="input" v-model="value" placeholder="流水号" />
              <Input class="input" v-model="value" placeholder="订单号" />
              <Select class="select" v-model="model1" style="width:200px">
                <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
              </Select>
              <Input class="input" search="true" icon="ios-search" v-model="value" placeholder="收货人" />
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
        cityList: [
          {
            value: '请选择...',
            label: '请选择...'
          }
        ],
        model1: '',
        columns1: [
          {
            title: '流水号',
            key: 'age32'
          },{
            title: '订单号',
            key: 'age22'
          },{
            title: '类型',
            key: 'age22'
          },{
            title: '申请时间',
            key: 'age'
          },{
            title: '应退金额',
            key: 'address'
          },{
            title: '实退金额',
            key: 'address2'
          },{
            title: '数量',
            key: 'address3'
          },{
            title: '收货人',
            key: 'address4'
          },{
            title: '订单状态',
            key: 'age22'
          },{
            title: '申请人',
            key: 'age22'
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
  @import "order-one-return-goods.less";
</style>
