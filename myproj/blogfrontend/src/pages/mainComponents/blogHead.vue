<template>
  <div>
    <div class="logo" style="width: 80%; height:0;padding-bottom: 15%; overflow: hidden; margin: auto;">
      <a>
        <img src="http://p9zorofe3.bkt.clouddn.com/image/timg2.jpg" alt="logo" width="100%" height="300px" z-index="100">
      </a>
    </div>
    <!-- <Menu type="context">
      <MenuItem name="name" key="/content/1">
        <span class="layout-text" key="/content/1">content</span>
      </MenuItem>
      <MenuItem name="name2" key="/content/2">
        <span class="layout-text" key="/content/2">content2</span>
      </MenuItem>
    </Menu> -->
    <ul class="clearfix" style="display: block; text-align: center; ">
      <li style="display: inline;">
        <a href="/" style="text-decoration:none">
                      首页
                  </a>
      </li>
      <!-- <li id="navEnd" style="display: inline;">
        <a href="/#/content/1" style="text-decoration:none">
                      留言版
                  </a>
      </li> -->
    </ul>
  </div>
</template>
<script>
export default {
  changeMenu (active) {
    if (active !== 'accesstest_index') {
      // util.openNewPage(this, active);
      this.$router.push({
        name: active
      })
    }
  }
}
</script>
<style>
  /* .logo {
    background-image: "http://p9zorofe3.bkt.clouddn.com/image/timg.jpg"
  } */
</style>
