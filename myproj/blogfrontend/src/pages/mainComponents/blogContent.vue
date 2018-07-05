<template>
  <div>
    <div v-if="blogsPosts">
      <div v-for="blogsPost in blogsPosts" :key="blogsPost.id">
        <div v-html="blogsPost.fields.body"></div>
        <textarea name="reply" :id="blogsPost.pk" cols="30" rows="10"></textarea>
      </div>
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
        url: 'http://127.0.0.1:8081/blogsPost/blogsPosts'
      }).then(resp => {
        console.log(resp)
        this.blogsPosts = resp.data
      }).catch(err => {
        console.log(err)
      })
    }
  },
  created () {
    this.getData()
  }
}
</script>
