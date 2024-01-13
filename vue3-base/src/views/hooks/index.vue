
 <!-- hook : 对逻辑进行封装复用 -->
 <template>
   <A a="1212" title="hdvhjgv">
    <!-- <div>xcxv</div> -->
   </A>
   <div>
    <img id="img" width="300" height="300" src="./yamada1.jpeg" />
   </div>

 </template>
 
 <script setup lang='ts'>
 import  A from './A.vue'
 import useBase64 from './index.ts'

 useBase64({ el: '#img'}).then(res => {
    console.log(res.baseUrl, '=======.');
    
 })

 </script>
 
 <style scoped>
 
 </style>