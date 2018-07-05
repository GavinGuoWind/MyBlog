<template>
  <div>
    aaaaaa
    <!-- <div v-if="blogsPosts"> -->
      <div v-for="blogsPost in blogsPosts" :key="blogsPost.id">
        <h2 class="text-truncate">
            <a target="_blank" :href="'#/detail/' + blogsPost.id">{{ blogsPost.title }} </a>
        </h2>
        <div v-html="blogsPost.body"></div>
        <div v-if="blogsPost.imglist">
          <template v-for="img in blogsPost.imglist">
            <img :src="img" :key="img" width="150px" height="100px">&nbsp;
          </template>
        </div>
      <!-- </div> -->
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'blogContent',
  data () {
    return {
      blogsPosts: ''
    }
  },
  methods: {
    getData () {
      axios({
        method: 'get',
        url: 'http://localhost:8081/blogsPost/blogsPosts'
      }).then(resp => {
        console.log(resp)
        this.blogsPosts = resp.data
      }).catch(error => {
        console.error(error)
      })
    }
  },
  created () {
    // this.getData()
  }
}
</script>
