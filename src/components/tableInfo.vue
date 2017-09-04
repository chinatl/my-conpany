<template>
    <div class='layout'>
      <mt-header title="保单信息查询"></mt-header>
      <div class="searchPath">
          <span>保单信息查询</span>
      </div>
      <div class="table">
          <p><label for="">保单号：</label><input type="number" placeholder='请正确填写'></p>
          <p><label for="">企业名称：</label><input type="text"  placeholder='请正确填写'></p>
          <p><label for="">保单管理机构：</label><input type="text"  placeholder='请正确填写'></p>
      </div>
        <input type="button" value="查询" class='seachBtn'>
        <div class="infoContent"> 
           <h3 class='infoTitle'>保单基本信息</h3>
           <ul class="container">
               <li>
                  <router-link to='/tableinfo/userinfo'>
                      <span>主包单号</span>
                       <span>2017110000818405002581</span>
                  </router-link>
               </li>
               <li>
                   <span>主险产品名称</span>
                   <span>国寿绿洲团体意外</span>
               </li>
               <li>
                   <span>企业名称</span>
                   <span>小熊猫有限公司</span>
               </li>
               <li>
                   <span>生效日期</span>
                   <span>2017-03-18</span>
               </li>
               <li>
                   <span>终止日期</span>
                   <span>2018-03-17</span>
               </li>
               <li>
                   <span>管理机构号</span>
                   <span>110000</span>
               </li>
               <li>
                   <span>备注</span>
                   <span>无</span>
               </li>
               <li><span>理赔查询</span><span>保障查询</span></li>
           </ul>
           
        </div>
        <input type="button" value="理赔查询" class='seachBtn' @click='goRoute'> 
        <input type="button" value="保全查询" class='seachBtn'>     

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
                    },
                    {
                        number: '2017110000818405002581',
                        product_name: '国寿绿洲团体意外',
                        company_name: '小熊猫有限公司',
                        start_time: '2017-03-18',
                        end_time: '2018-03-17',
                        manager_num: '110000',
                        remark: '1234',
                    },
                    {
                        number: '2017110000818405002581',
                        product_name: '国寿绿洲团体意外',
                        company_name: '小熊猫有限公司',
                        start_time: '2017-03-18',
                        end_time: '2018-03-17',
                        manager_num: '110000',
                        remark: '1234',
                    },
                    {
                        number: '2017110000818405002581',
                        product_name: '国寿绿洲团体意外',
                        company_name: '小熊猫有限公司',
                        start_time: '2017-03-18',
                        end_time: '2018-03-17',
                        manager_num: '110000',
                        remark: '1234',
                    },
                ]
            }
        },
        created() {

        },
        methods: {
            goRoute(){
                localStorage.setItem('paysearch','1')
                this.$router.push({path:'/paysearch'});
            }
        }

    }

</script>


<style scoped>
   
</style>
