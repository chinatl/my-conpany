<template>
    <div class='layout'>
    <mt-header title="批次理赔信息">
         <router-link to="/payhome" slot="left">
            <mt-button icon="back"></mt-button>
        </router-link>
    </mt-header>
   <div class="infoContent"> 
       <h3 class='infoTitle'>个人理赔信息列表</h3>
       <ul class="container">
           <li>
               <span>被保险人姓名</span>
               <span>王浩然</span>
           </li>
           <li>
               <span>理赔给付类型</span>
               <span>约定给付</span>
           </li>
           <li>
               <span>赔付金额</span>
               <span>0.00</span>
           </li>
           <li>
               <span>核准赔付金额</span>
               <span>100000.00</span>
           </li>
           <li>
               <span>给付项目</span>
               <span>死亡赔付</span>
           </li>
       </ul>
    </div>
    <div class="infoContent"> 
       <h3 class='infoTitle'>理赔细节</h3>
       <ul class="container">
           <li>
               <span>收据号</span>
               <span>1020_2015114_</span>
           </li>
           <li>
               <span>费用起始日期</span>
               <span>2014-07-22</span>
           </li>
           <li>
               <span>费用终止日期</span>
               <span>2014-07-22</span>
           </li>
           <li>
               <span>医院名称</span>
               <span>任意疾病</span>
           </li>
           <li>
               <span>收据总额</span>
               <span @click='openTab' style="color:blue">149.97</span>
           </li>
           <li>
               <span>理赔总额</span>
               <span>149.97</span>
           </li>
           <li>
               <span>赔付比例</span>
               <span>0.00</span>
           </li>
           <li>
               <span>数据总额</span>
               <span>0.00</span>
           </li>
           <li>
               <span>拒赔原因</span>
               <span @click='openBox' style="color:blue">拒赔原因</span>
           </li>
       </ul>
    </div>
<div class='detailfoud' v-show='boxstatus'>
    <div class='detailfoud_box'>
        <div class='title'><span v-html='boxTitle'></span><span class="closeBox fa fa-times" @click='hideBox'></span></div>
        <div class='wordBox' v-show='wordBox'>
            <p><span>费用调整原因:</span><span>-</span></p>
            <p><span>拒付原因:</span><span>-</span></p>
            <p><span>给付/拒赔/延赔原因:</span><span>-</span></p>
            <p><span>补充说明:</span><span>所选药物不在报销范围内</span></p>
        </div>
        <div class="tabBox" v-show='tabBox'>
            <p>
                <span>现金自负金额：149.97</span>
                <span>额外支付金额：0.00</span>

            </p>
            <p>
                <span>当年账户自负金额：0.00</span>
                <span>统筹支付金额：0.00</span>
            </p>
            <p>        
                <span>历年账户自负金额：0.00</span>
                <span>自费金额：0.00</span>
            </p>
        </div>
    </div>
</div>
</div>
</template>


<script>
    export default {
        data() {
            return {
                data: [{
                    number: '2017110000818405002581',
                    product_name: '国寿绿洲团体意外',
                    company_name: '小熊猫有限公司',
                    start_time: '2017-03-18',
                    end_time: '2018-03-17',
                    manager_num: '110000',
                    remark: '1234',
                }, ],
                boxstatus: false,
                boxTitle: '',
                wordBox:false,
                tabBox:false,
            }
        },
        created() {

        },
        methods: {
            hideBox() {
                this.boxstatus = false;

            },
            openBox() {
                this.boxstatus = true;
                this.boxTitle = '拒赔原因';
                this.wordBox = true;
                this.tabBox = false;
            },
            openTab() {
                this.boxstatus = true;
                this.boxTitle = '收据金额明细';
                this.tabBox = true;
                this.wordBox = false;
            }
        }

    }

</script>


<style scoped>
    .msgTitle {
        color: #1D9F49;
    }
    
    .infoContent {
        margin-top: 10px;
    }
    
    .mint-navbar a.mint-tab-item.is-selected {
        border-bottom: 3px solid #1D9F49;
        color: #1D9F49;
    }
    
    .mint-navbar-span {
        font-size: 1.2rem;
    }
    
    .table {
        margin-top: 10px;
        line-height: 30px
    }
    
    .tip {
        line-height: 40px;
        height: 40px;
        text-align: center;
        font-size: 1.2rem;
    }
    
    .infoContent {
        margin-bottom: 10px;
    }
    
    a:-webkit-any-link {
        color: #fff;
    }
    
    .wordBox p {
        display: block;
        margin: 0 auto;
        padding: 6px 2px;
    }
    
    .wordBox p span:nth-of-type(1) {
        width: 45%;
        display: inline-block;
        text-align: right;
        margin-right: 5px;
        font-size: 1.2rem;
    }
    
    .tabBox p {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 12px;
        font-size: 1.1rem
    }

</style>
