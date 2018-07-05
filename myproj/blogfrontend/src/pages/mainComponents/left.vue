<style type="text/css">
aside {
  width: 300px;
  float: left;
  padding-left: 10%;
}

aside div.aside-box {
  margin-bottom: 8px;
  background-color: #fff;
  -webkit-box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05);
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05);
}

aside div.aside-box h3.aside-title {
  font-size: 12px;
  color: #3d3d3d;
  background: #f5f5f5;
  padding: 0 16px;
  height: 38px;
  line-height: 38px;
}

aside #asideProfile .profile-intro {
  padding: 16px 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid #e3e3e3;
}

aside #asideProfile .data-info {
  padding: 16px 10px;
  border-bottom: 1px solid #e3e3e3;
}

aside #asideProfile .grade-box {
  margin-top: -8px;
  padding: 16px;
}

aside #asideProfile .badge-box {
  position: relative;
  margin-top: -8px;
  padding: 0 16px 16px;
}

aside #asideProfile .profile-intro .avatar-box img.avatar_pic {
  display: block;
  width: 48px;
  height: 48px;
  border-radius: 50%;
}

aside #asideProfile .profile-intro .user-info p.name a {
  display: inline-block;
  color: #3d3d3d;
  font-weight: 700;
  max-width: 100px;
}

.text-center {
  text-align: center;
}

.item-tiling > * {
  width: 100%;
}

.d-flex {
  display: -webkit-box !important;
  display: -ms-flexbox !important;
  display: flex !important;
}
</style>
<template>
<aside>
    <div id="asideProfile" class="aside-box">
        <h3 class="aside-title">个人资料</h3>
        <div class="profile-intro d-flex">
            <div class="avatar-box d-flex justify-content-center flex-column">
                <a >
                    <img src="http://p9zorofe3.bkt.clouddn.com/image/HCNATZQe.png" class="avatar_pic">
                </a>
            </div>
            <div class="user-info d-flex justify-content-center flex-column">
                <p class="name csdn-tracking-statistics tracking-click" data-mod="popu_379">
                    <a target="_blank" class="text-truncate" id="uid">Gavin</a>
                </p>
            </div>
        </div>
        <div class="data-info d-flex item-tiling">
            <dl class="text-center" title="635">
                <dt><a >原创</a></dt>
                <dd><a ><span class="count">635</span></a></dd>
            </dl>
            <dl class="text-center" title="3073">
                <dt>粉丝</dt>
                <dd><span class="count" id="fan">3073</span></dd>
            </dl>
            <dl class="text-center" title="397">
                <dt>喜欢</dt>
                <dd><span class="count">397</span></dd>
            </dl>
            <dl class="text-center" title="413">
                <dt>评论</dt>
                <dd><span class="count">413</span></dd>
            </dl>
        </div>
    </div>
    <div id="asideCustom60374330" class="aside-box custom-box">
        <h3 class="aside-title">关于我</h3>
        <div class="aside-content clearfix">
            邮箱: 3169887281@qq.com
        </div>
    </div>
    <div id="asideArchive" class="aside-box flexible-box">
        <h3 class="aside-title">归档</h3>
        <div class="aside-content">
            <ul class="archive-list">
                <!--归档统计-->
                <li>
                    <a >
                        2018年6月 <span class="count float-right">4篇</span>
                    </a>
                </li>
                <!--归档统计-->
                <li>
                    <a >
                        2018年5月 <span class="count float-right">21篇</span>
                    </a>
                </li>
                <!--归档统计-->
                <li>
                    <a >
                        2018年4月 <span class="count float-right">32篇</span>
                    </a>
                </li>
                <!--归档统计-->
                <li>
                    <a >
                        2018年3月 <span class="count float-right">11篇</span>
                    </a>
                </li>
                <!--归档统计-->
                <li>
                    <a >
                        2018年2月 <span class="count float-right">5篇</span>
                    </a>
                </li>
                <!--归档统计-->
                <li>
                    <a >
                        2018年1月 <span class="count float-right">43篇</span>
                    </a>
                </li>
                <!--归档统计-->
                <li>
                    <a >
                        2017年12月 <span class="count float-right">23篇</span>
                    </a>
                </li>
                <!--归档统计-->
                <li>
                    <a >
                        2017年11月 <span class="count float-right">14篇</span>
                    </a>
                </li>
                <!--归档统计-->
                <li>
                    <a >
                        2017年10月 <span class="count float-right">16篇</span>
                    </a>
                </li>
                <!--归档统计-->
                <li>
                    <a >
                        2017年9月 <span class="count float-right">20篇</span>
                    </a>
                </li>
                <!--归档统计-->
                <li>
                    <a >
                        2017年8月 <span class="count float-right">17篇</span>
                    </a>
                </li>
                <!--归档统计-->
                <li>
                    <a >
                        2017年7月 <span class="count float-right">2篇</span>
                    </a>
                </li>
            </ul>
        </div>
        <p class="text-center">
            <a class="btn btn-link-blue flexible-btn" data-fbox="aside-archive">展开</a>
        </p>
    </div>
    <div id="asideCategory" class="aside-box flexible-box">
        <h3 class="aside-title">个人分类</h3>
        <div class="aside-content">
            <ul>
                <li>
                    <a>
                        Android <span class="count float-right">543篇</span>
                    </a>
                </li>
                <li>
                    <a >
                        Java <span class="count float-right">88篇</span>
                    </a>
                </li>
            </ul>
        </div>
        <p class="text-center">
            <a class="btn btn-link-blue flexible-btn" data-fbox="aside-archive">展开</a>
        </p>
    </div>
    <div id="asideHotArticle" class="aside-box">
        <h3 class="aside-title">热门文章</h3>
        <div class="aside-content">
            <ul class="hotArticle-list csdn-tracking-statistics tracking-click" data-mod="popu_521">
                <li>
                    <a target="_blank">Github错误：fatal:
                        Authentication failed for 'https://github.com/ ...</a>
                    <p class="read">阅读量：<span>65527</span></p>
                </li>
                <li>
                    <a  target="_blank">Android加载Gif和ImageView的通用解决方案：android-gif-drawable（1）</a>
                    <p class="read">阅读量：<span>41622</span></p>
                </li>
                <li>
                    <a  target="_blank">Android
                        Glide加载图片时转换为圆形、圆角、毛玻璃等图片效果</a>
                    <p class="read">阅读量：<span>31364</span></p>
                </li>
                <li>
                    <a  target="_blank">基于开源框架Glide加载Gif资源图到Android
                        ImageView中</a>
                    <p class="read">阅读量：<span>30718</span></p>
                </li>
                <li>
                    <a target="_blank">Android Material
                        Design：CoordinatorLayout与NestedScrollView</a>
                    <p class="read">阅读量：<span>29856</span></p>
                </li>
            </ul>
        </div>
    </div>
</aside>
</template>
