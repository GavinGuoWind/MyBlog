<template>
  <div>
    <div>
      <h2 class="text-truncate" style="text-align: center;">
        {{title}}
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
export default {
  name: 'blogContent',
  data () {
    return {
      blogsPost: {
        title: 'fuck',
        body: 'body'
      },
      comments: [],
      commentText: '',
      title: 'fuck'
    }
  },
  asyncData ({ params, error }) {
    console.log('bug');
    // return axios({
    //     method: 'get',
    //     url: 'http://localhost:8081/blogsPost/blogsPost/1/'
    //   }).then(resp => {
    //     console.log(resp)
    //     // this.blogsPost = resp.data.blogsPost
    //     // this.blogsPost.body = resp.data.blogsPost.body;
    //     // this.comments = resp.data.comments;
    //     return {blogsPost: resp.data.blogsPost, title: 'test'}
    //   }).catch(err => {
    //     console.error(err)
    //   });
    return {title: 'test'}
  },
  methods: {
    getData () {
      // "#/detail/1"
      axios({
        method: 'get',
        url: 'http://localhost:8081/blogsPost/blogsPost/1/'
      }).then(resp => {
        // console.log(resp)
        // this.blogsPost = resp.data.blogsPost
        // this.blogsPost.body = resp.data.blogsPost.body;
        // this.comments = resp.data.comments;
        return {blogsPost: resp.data.blogsPost, title: 'test'}
      }).catch(err => {
        console.error(err)
      })
    },
    submitReply () {
      debugger
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
    // this.getData();
    // this.blogsPost.title = 'test';
    // this.blogsPost.body = 'fuck';
  }
}
</script>
