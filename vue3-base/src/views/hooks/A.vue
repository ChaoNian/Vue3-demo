<template>
    <div class="A">
      A
      <slot></slot>
    </div>
  </template>
  
  <script setup lang='ts'>
  import { useAttrs, useSlots } from 'vue';
  const attr = useAttrs()
  const slot = useSlots()
//   console.log(attr, 'attr', slot);
  
  </script>
  
  <style scoped lang="scss">
  .A {
      width: 100px;
      height: 100px;
      border: 1xp solid #d2d2d2;
  }
  </style>