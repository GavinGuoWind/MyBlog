<template>
  <div>
    <div>
      <blogHead></blogHead>
    </div>
    <div>
      <left></left>
    </div>
    <div class="content">
      <keep-alive>
          <router-view></router-view>
      </keep-alive>
    </div>

  </div>
</template>
<script>
import blogHead from './mainComponents/blogHead.vue'
import left from './mainComponents/left.vue'

export default {
  components: {
    blogHead,
    left
  }
}
</script>
<style>
 .content {
  width: 60%;
  margin-left: 30%;
  text-align: left;
 }
</style>
