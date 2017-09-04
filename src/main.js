import Vue from 'vue';
import App from './App.vue';
import vueRouter from 'vue-router';
Vue.use(vueRouter);
import tableInfo from './components/tableInfo.vue';
import userInfo from './components/userInfo.vue';
import userDesc from './components/userDesc.vue';
import paySearch from './components/paySearch.vue';
import saveInfo from './components/saveInfo.vue';
import foud from './components/foud.vue';

// 3.0.2 定义路由规则
var router1 = new vueRouter({
	routes:[
		{path:'/',redirect:'/tableinfo'}, 
		{path:'/tableinfo',component:tableInfo}, 
		{path:'/tableinfo/userinfo',component:userInfo}, 
		{path:'/tableinfo/userdesc',component:userDesc}, 
		{path:'/paysearch',component:paySearch}, 
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