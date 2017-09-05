import Vue from 'vue';
import App from './App.vue';
import vueRouter from 'vue-router';
Vue.use(vueRouter);
import home from './components/home/search.vue'
import searchInfo from './components/home/searchInfo.vue'
import searchUserInfo from './components/home/searchUserInfo.vue'
import payHome from './components/pay/home.vue'
import homeInfo from './components/pay/homeInfo.vue'
import homeList from './components/pay/homeList.vue'
import saveInfo from './components/saveInfo.vue';
import foud from './components/foud.vue'
// 3.0.2 定义路由规则
var router1 = new vueRouter({
	routes:[
		{path:'/',redirect:'/tableinfo'}, 
		{path:'/tableinfo',component:home}, 
		{path:'/tableinfo/searchinfo',component:searchInfo}, 
		{path:'/tableinfo/searchinfo/userdesc',component:searchUserInfo}, 
		{path:'/payhome',component:payHome}, 
		{path:'/payhome/homelist',component:homeList}, 
		{path:'/payhome/homeinfo',component:homeInfo}, 
		{path:'/saveinfo',component:saveInfo}, 
		{path:'/foud',component:foud}, 
	]
});


// 4.0 注册mint-ui
// 导入mint-ui的css文件
import 'mint-ui/lib/style.min.css';
import '../statics/css/common.css';
import '../statics/css/index.css';
// 导入mint-ui组件对象
import mintui from 'mint-ui';
// 在Vue中全局使用mintui
Vue.use(mintui);

// 5.0 利用Vue对象进行解析渲染
new Vue({
	el:'#app',
	// 使用路由对象实例
	router:router1,
	// render:function(create){create(App)} //es5的写法
	render:c=>c(App)  // es6的函数写法 =>：goes to
});