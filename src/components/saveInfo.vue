<template>
    <div class='layout'>
      <mt-header title="保全信息查询"></mt-header>
      <div class="searchPath">
          <span>保全信息查询</span>
      </div>
      <div class="table">
          <p><label for="">保险合同号：</label><input type="number" placeholder='请正确填写'></p>
          <p><label for="">员工姓名：</label><input type="text"  placeholder='请正确填写'></p>
          <p style="position: relative">
              <label for="">保全申请起始日期：</label>
              <input type="text"  placeholder='请正确填写' v-model='startTime'>
              <i class="fa fa-table" aria-hidden="true"  @click='openPicker'></i> 
          </p>
          <p style="position: relative">
            <label for="">保全申请终止日期：</label>
            <input type="text"  placeholder='请正确填写' v-model='endTime'>
            <i class="fa fa-table" aria-hidden="true"  @click='openPicker1'></i>     
          </p>
      </div>
        <input type="button" value="查询" class='seachBtn'>     
        <input type="button" value="重置" class='seachBtn resetBtn'>
        <div class="infoContent"> 
           <h3 class='infoTitle'>保全信息列表</h3>
            <div v-for='(v,item) in data' key='item' style='overflow:hidden' class="containerItem">
                <div class='switch' @click='openList(item)'>
                    <span class="switch_num">{{item+1}}</span>
                    <span>保全批改流水号: 2017110000010036000159</span>
                   <i class="fa" :class="v.value?'fa-angle-up':'fa-angle-down'"></i>
                </div>
               <ul class="container" v-show='v.value'>
                   <li>
                       <span>批改项目名称</span>
                       <span>增加被保险人</span>
                   </li>
                   <li>
                       <span>处理状态</span>
                       <span>代收费</span>
                   </li>
                   <li>
                       <span>客户应付合计</span>
                       <span>302.03</span>
                   </li>
                   <li>
                       <span>客户应取合计</span>
                       <span>0.00</span>
                   </li>
               </ul>
            </div>
        </div>
      <mt-datetime-picker
        ref="picker"
        type="date"
         @confirm="handleConfirm"
        v-model="pickerValue">
      </mt-datetime-picker>
      <mt-datetime-picker
        ref="picker1"
        type="date"
         @confirm="handleConfirm1"
        v-model="pickerValue1">
      </mt-datetime-picker>
    </div>
</template>


<script>
    import CM from './../common.js';
    export default {
        data() {
            return {
                pickerValue: new Date(),
                pickerValue1: new Date(),
                beginDate: new Date(),
                startTime: '',
                endTime: '',
                data: [{
                        value: false,
                        company_name: '2017110000010036000159',
                        start_time: '增加被保险人',
                        end_time: '代收费',
                        manager_num: '302.03',
                        remark: '0.00',
                    }, {
                        value: false,
                        company_name: '2017110000010036000159',
                        start_time: '个人客户资料变更',
                        end_time: '生效',
                        manager_num: '302.03',
                        remark: '0.00',
                    }, {
                        value: false,
                        company_name: '2017110000010036000159',
                        start_time: '个人客户资料变更',
                        end_time: '生效',
                        manager_num: '302.03',
                        remark: '0.00',
                    }, {
                        value: false,
                        company_name: '2017110000010036000159',
                        start_time: '同期增减人',
                        end_time: '生效',
                        manager_num: '302.03',
                        remark: '0.00',
                    },

                ]
            }
        },
        created() {

        },
        methods: {
            openList(i) {
                this.data[i].value = !this.data[i].value;
            },
            openPicker(i) {
                this.$refs.picker.open(i);
            },
            openPicker1(i) {
                this.$refs.picker1.open(i);
            },
            handleConfirm(err) {
                this.startTime = CM.format(err);
                this.pickerValue1 = err;
            },
            handleConfirm1(err) {
                this.endTime = CM.format(err)
            }
        }
    }

</script>


<style scoped>
    .searchPath span:nth-of-type(1) {
        margin-left: 20px;
        background-color: #1D9F49;
        color: #fff;
    }
    
    .searchPath span:nth-of-type(1):before {
        border-color: transparent transparent transparent #1D9F49
    }
    
    .fa-angle-down:before,
    .fa-angle-up:before {
        font-size: 1.5rem;
    }
    
    .fa-angle-down,
    .fa-angle-up {
        float: right;
        margin: 11px 5px;
    }
    
    .containerItem {
        overflow: hidden
    }
    .fa-table {
        position: absolute;
        top: 50%;
        right:4px;
        font-size: 20px;
        transform: translate(0,-50%);
        color:#aaa
    }
    @media screen and (max-width: 360px) {
        .table>p>input {
            width: 140px;
        }
    }

</style>
