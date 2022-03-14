// register vue composition api globally
import { createApp } from 'vue'
import App from './App.vue'

import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'


var _hmt = _hmt || [];
window._hmt = _hmt; // 修改为window 全局变量
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?5269ef2b63afcfb69525a1f4c8a02429";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();

const app = createApp(App)
app.mount('#app')
