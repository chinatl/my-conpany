<template>
    <div class='layout'>
      <mt-header title="基金账号查询"></mt-header>
      <div class="searchPath">
          <span>基金账号查询</span>
      </div>
      <div class="table">
          <p><label for="">保险合同号：</label><input type="number" placeholder='请正确填写'></p>
          <p><label for="">账户类型：</label><input type="text"  placeholder='请正确填写'></p>
          <p style="position: relative">
              <label for="">起止开户日期：</label>
              <input type="text"  placeholder='请正确填写' v-model='startTime'>
              <i class="fa fa-table" aria-hidden="true"  @click='openPicker'></i> 
          </p>
          <p style="position: relative">
            <label for="">终止开户日期：</label>
            <input type="text"  placeholder='请正确填写' v-model='endTime'>
            <i class="fa fa-table" aria-hidden="true"  @click='openPicker1'></i>     
          </p>
        <p><label for="">证件类型：</label><input type="text"  placeholder='请正确填写'></p>
        <p><label for="">证件号码：</label><input type="number"  placeholder='请正确填写'></p>
        <p><label for="">员工姓名：</label><input type="text"  placeholder='请正确填写'></p>
      </div>
        <input type="button" value="查询" class='seachBtn'>     
        <input type="button" value="重置" class='seachBtn resetBtn'>
        <div class="infoContent"> 
           <h3 class='infoTitle'>基金险账户列表</h3>
           <ul class="container">
               <li>
                   <span>账户</span>
                   <span>201410233y</span>
               </li>
               <li>
                   <span>开户日期</span>
                   <span>2014-05-01</span>
               </li>
               <li>
                   <span>账户余额</span>
                   <span>789677.19</span>
               </li>
               <li>
                   <span>本金余额</span>
                   <span>789677.19</span>
               </li>
               <li>
                   <span>利息金额</span>
                   <span>0.00</span>
               </li>
               <li>
                   <span>账户状态</span>
                   <span>正常</span>
               </li>
               <li>
                   <span>销户日期</span>
                   <span>9999-12-31</span>
               </li>
               <li>
                   <span>保单币种</span>
                   <span>人民币元</span>
               </li>
               <li><input type="button" value="查询" class='seachBtn' @click='openBox'></li>
           </ul>
        </div>
        <div class='detailfoud' v-show='boxstatus'>
            <div class='detailfoud_box'>
               <div class='title'>基金险详情<span class="closeBox fa fa-times" @click='hideBox'></span></div>
                <ul>
                   <li style='color:#199660;font-size:1.1rem;'>基金险账户详细列表</li>
                    <li>
                        <span style='visibility:hidden'>''</span>
                        <span>发生日期</span>
                        <span>项目名称</span>
                        <span>收付类型</span>
                        <span>发生额</span>
                    </li>
                    <li>
                        <span>1</span>
                        <span>2014-05-01</span>
                        <span>缴费</span>
                        <span>收费</span>
                        <span>235891.35</span>
                    </li>
                    <li>
                        <span>2</span>
                        <span>2014-05-01</span>
                        <span>管理费</span>
                        <span>收费</span>
                        <span>4814.11</span>
                    </li>
                    <li>
                       <span>3</span>
                        <span>2014-07-28</span>
                        <span>个人选择</span>
                        <span>收费</span>
                        <span>2000.00</span>
                    </li>
                    <li>
                       <span>4</span>
                        <span>2014-07-28</span>
                        <span>结算利息</span>
                        <span>收费</span>
                        <span>1.21</span>
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
                boxstatus: false
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
            },
            openBox(){
                this.boxstatus = true;
            },
            hideBox(){
                this.boxstatus = false;
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
        right: 4px;
        font-size: 20px;
        transform: translate(0, -50%);
        color: #aaa
    }
    
   

</style>
