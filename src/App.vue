<script setup>
import Header from './components/Header.vue'
import Main from './components/Main.vue'
import Cardinfo from './components/Cardinfo.vue';
</script>

<template>

  <router-view />
<!-- <div>
  <Header />
  <Main/>
  <Cardinfo />

</div> -->
</template>
<script>
export default {
  name: 'App',
};
</script>
