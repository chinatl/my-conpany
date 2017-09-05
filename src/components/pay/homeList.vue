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
               <span>149.97</span>
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
               <span>拒赔原因</span>
           </li>
       </ul>
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
                }, ]
            }
        },
        created() {
          
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
</style>
