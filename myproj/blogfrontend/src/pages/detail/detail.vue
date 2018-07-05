<template>
  <div>
    <div>
      <h2 class="text-truncate" style="text-align: center;">
            {{ blogsPost.title }}
      </h2>
      <div v-html="blogsPost.body"></div>
      <textarea name="reply" :id="blogsPost.id" v-model="commentText" rows="10" style="width:100%;border-radius: 10px;"></textarea>
      <button @click="submitReply">提交</button>
    </div>
    <div v-if="comments">
      <div v-for="(comment, index) in comments" :key="comment.id">
        评论{{index + 1}}:{{comment.text}}
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import constants from '@/libs/constants.js'
export default {
  name: 'blogContent',
  data () {
    return {
      blogsPost: '',
      comments: [],
      commentText: ''
    }
  },
  asyncData ({ params, error }) {
    let id = params.id
    return axios({
      method: 'get',
      url: constants.ajaxUrl + '/blogsPost/blogsPost/' + id + '/'
    }).then(resp => {
      console.log(resp)
      return {blogsPost: resp.data.blogsPost, comments: resp.data.comments}
    }).catch(err => {
      console.error(err)
    })
  },
  methods: {
    getData () {
      // "#/detail/1"
      let id = this.$route.params.id
      axios({
        method: 'get',
        url: constants.ajaxUrl + '/blogsPost/blogsPost/' + id + '/'
      }).then(resp => {
        // console.log(resp)
        this.blogsPost = resp.data.blogsPost
        this.comments = resp.data.comments
      }).catch(err => {
        console.error(err)
      })
    },
    submitReply () {
      let data = {
        content: this.blogsPost.id,
        text: this.commentText
      }
      axios({
        method: 'post',
        url: constants.ajaxUrl + '/comment/',
        data: data
      }).then(resp => {
        this.getData()
      }).catch(resp => {
        console.log(resp)
      })
    }
  },
  created () {
    // this.getData()
  }
}
</script>
