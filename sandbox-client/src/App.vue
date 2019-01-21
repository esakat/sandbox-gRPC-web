<template>
  <div id='app'>
    <section>
      <span class='title-text'>gRPC Client</span>
      <div class='row justify-content-center mt-4'>
        <input v-model='inputField' v-on:keyup.enter='addNum' class='mr-1' placeholder='Please input Number'>
        <button @click='addNum' class='btn btn-primary'>Add Num</button>
      </div>
    </section>
    <section>
      <h2>now total: {{num.total}}</h2>
    </section>
  </div>
</template>

<script>
import { addNumParams, getTotalNumParams } from './sandbox_pb'
import { addNumServiceClient } from './sandbox_grpc_web_pb'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
export default {
  name: 'app',
  components: {},
  data: function () {
    return {
      inputField: '',
      num: 0
    }
  },
  created: function () {
    // eslint-disable-next-line
    this.client = new addNumServiceClient('http://localhost:8001', null, null)
    this.getTotalNum()
  },
  methods: {
    getTotalNum: function () {
      // eslint-disable-next-line
      let getRequest = new getTotalNumParams()
      // eslint-disable-next-line
      this.client.getTotalNum(getRequest, {}, (err, response) => {
        this.num = response.toObject()
        console.log(this.num)
      })
    },
    addNum: function () {
      // eslint-disable-next-line
      let request = new addNumParams()
      request.setNumber(Number(this.inputField))
      // eslint-disable-next-line
      this.client.addNum(request, {}, (err, response) => {
        this.inputField = ''
        this.num = response.toObject()
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.title-text {
  font-size: 22px;
}
</style>
