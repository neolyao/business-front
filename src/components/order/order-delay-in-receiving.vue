<template>
  <Layout>
    <Content>
      <Breadcrumb>
        <BreadcrumbItem>订单</BreadcrumbItem>
        <BreadcrumbItem>延迟收货申请</BreadcrumbItem>
      </Breadcrumb>
      <Card>
        <Tabs type="card">
          <TabPane label="延迟收货申请">
            <div class="input-header">
              <Select class="select" v-model="model1" style="width:200px">
                <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
              </Select>
              <Input class="input" search="true" icon="ios-search" v-model="value" placeholder="会员名称" />
            </div>


            <Table class="table" :columns="columns1" :data="data1"></Table>

            <Select class="select" v-model="model1" style="width:200px">
              <Option v-for="item in cityList1" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
            <Button class="bottom-button" type="primary">确定</Button>
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
            value: '全部.',
            label: '全部'
          }
        ],
        cityList1: [
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
            title: '会员名称',
            key: 'age32'
          },{
            title: '订单号',
            key: 'age22'
          },{
            title: '延期时间',
            key: 'age'
          },{
            title: '审核人',
            key: 'age22'
          },{
            title: '审核状态',
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
  @import "order-delay-in-receiving.less";
</style>
