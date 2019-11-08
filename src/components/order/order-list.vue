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
              <Select class="select" v-model="model1" style="width:200px">
                <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
              </Select>
              <Input class="input" v-model="value" placeholder="收货人" />
              <Input class="input" v-model="value" placeholder="订单号" />
              <Input class="input" search="true" icon="ios-search" v-model="value" placeholder="商品编号/商品关键字" />
              <Button type="primary" icon="md-download">导出订单</Button>
              <Button type="primary" icon="md-copy">合并订单</Button>
            </div>

            <Tabs type="card">
              <TabPane label="全部">
                <Table class="table" :columns="columns1" :data="data1"></Table>
                <Page class="paging" :total="100" show-sizer show-elevator show-total />
              </TabPane>
              <TabPane label="待确认">

              </TabPane>
              <TabPane label="待付款">

              </TabPane>
              <TabPane label="待发货">

              </TabPane>
              <TabPane label="已完成">

              </TabPane>
              <TabPane label="付款中">

              </TabPane>
              <TabPane label="取消">

              </TabPane>
              <TabPane label="无效">

              </TabPane>
              <TabPane label="退货">

              </TabPane>
              <TabPane label="待收货">

              </TabPane>
            </Tabs>

          </TabPane>
          <TabPane label="订单查询">
            订单查询订单查询订单查询订单查询订单查询订单查询订单查询订单查询订单查询订单查询订单查询订单查询
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
            width:60
          },{
            title: '订单号',
            key: 'age32'
          },{
            title: '下单时间',
            key: 'age22'
          },{
            title: '商品图片',
            key: 'age22'
          },{
            title: '商品信息',
            key: 'age'
          },{
            title: '收货人',
            key: 'address'
          },{
            title: '总金额',
            key: 'address2'
          },{
            title: '订单总金额',
            key: 'address3'
          },{
            title: '订单状态',
            key: 'address4'
          },{
            title: '在线支付',
            key: 'age22'
          },{
            title: '配送方式',
            key: 'age22'
          },{
            title: '操作',
            width:'250px',
            render: (h, params) => {
              return h('div', [
                h('Button', {
                  props: {
                    type: 'primary',
                    size: 'small'
                  },
                  style: {
                    marginRight: '5px'
                  },
                  on: {
                    click: () => {
                      alert("订单详情")
                    }
                  }
                }, '订单详情'),
                h('Button', {
                  props: {
                    type: 'info',
                    size: 'small',
                    icon:"md-print",
                  },
                  on: {
                    click: () => {
                      alert("打印发货单")
                    }
                  }
                }, '打印发货单')
              ]);
            }
          }
        ],
        data1: [
          {
            name: '1111',
            age: 18,
            address: '222',
            date: '2016-10-03',
            address5:''
          },
        ]
      }
    }
  }
</script>
<style scoped>
  @import "order-list.less";
</style>
