<template>
  <div>
    <div class="outer_box">
      <!--顶部状态栏-->
      <div class="container1">
        <div class="nav1">BLOG</div>
        <img class="icon" src="@/assets/home/icon.gif" alt=""/>
        <div class="nav2">About Me</div>
      </div>

      <!--区块1-->
      <div class="container2">
        <div class="title">Become yourself,</div>
        <div class="title">Do your BEST!</div>
      </div>

      <!--区块2-->
      <div class="container3">
        <div class="num">1</div>
        <div class="title">Personal Info</div>
      </div>

      <!--区块3-->
      <div class="container4">
        <!--左边的文字-->
        <div class="left">
          <div class="title">I've graduated from</div>
          <div class="title">Hangzhou City</div>
          <div class="title">University,</div>
          <div class="title">preparing for</div>
          <div class="title">better development.</div>
        </div>

        <!--右边的css动画实现-->
        <div class="right">
          <div class="card">
            <div class="icon">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="38px"
                width="38px" version="1.1" id="heart" viewBox="0 0 471.701 471.701" xml:space="preserve">
                <linearGradient id="gradientColor">
                  <stop offset="5%" stop-color="#7eaaff"></stop>
                  <stop offset="95%" stop-color="#ff48fb"></stop>
                </linearGradient>
                <g>
                  <path d="M433.601,67.001c-24.7-24.7-57.4-38.2-92.3-38.2s-67.7,13.6-92.4,38.3l-12.9,
                    12.9l-13.1-13.1   c-24.7-24.7-57.6-38.4-92.5-38.4c-34.8,0-67.6,13.6-92.2,38.2c-24.7,24.7-38.3,57.5-38.2,92.4c0,34.9,
                    13.7,67.6,38.4,92.3   l187.8,187.8c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-3.9l188.2-187.5c24.7-24.7,
                    38.3-57.5,38.3-92.4   C471.801,124.501,458.301,91.701,433.601,67.001z M414.401,232.701l-178.7,
                    178l-178.3-178.3c-19.6-19.6-30.4-45.6-30.4-73.3   s10.7-53.7,30.3-73.2c19.5-19.5,45.5-30.3,
                    73.1-30.3c27.7,0,53.8,10.8,73.4,30.4l22.6,22.6c5.3,5.3,13.8,5.3,19.1,0l22.4-22.4   c19.6-19.6,
                    45.7-30.4,73.3-30.4c27.6,0,53.6,10.8,73.2,30.3c19.6,19.6,30.3,45.6,30.3,73.3   C444.801,187.101,
                    434.001,213.101,414.401,232.701z"></path>
                </g>
              </svg>
            </div>
            <p class="title">Computer Science</p>
            <p class="text">Focusing on front-end development.</p>
          </div>
        </div>
      </div>

      <!--区块4-->
      <div class="container5">
        <div class="num">2</div>
        <div class="title">Website Content</div>
      </div>

      <!--区块5-->
      <div class="container6">
        <!--左边的详情框-->
        <div class="left">
          <div class="parent">
            <div class="card">
              <!--内容-->
              <div class="content-box">
                <!--标题-->
                <span class="card-title">Knowledge</span>
                <!--副标题-->
                <p class="card-content">
                  Learning something new,
                  getting better development.
                </p>
                <!--详情按钮-->
                <span class="see-more">See More</span>
              </div>

              <!--日期-->
              <div class="date-box">
                <span class="month">DEC</span>
                <span class="date">27</span>
              </div>
            </div>
          </div>
        </div>

        <!--右边的文字-->
        <div class="right">
          <div class="title">Computer Science</div>
          <div class="title">Front-end Development</div>
          <div class="title">Vue</div>
          <div class="title">Android Studio</div>
        </div>
      </div>

      <!--区块6-->
      <div class="container7">
        <!--ICP备案号，跳转新页面查看-->
        <a class="icp" style="color:#fff;"
          href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode="
          target="_blank">浙ICP备2021036030号</a>
      </div>
    </div>
  </div>

  <!-- <router-view/> -->
</template>

<script>
import { reactive, toRefs, onMounted } from 'vue'
// import { useRoute, useRouter } from 'vue-router'
// import MainMenu from '@/components/MainMenu.vue'
// import theAxios from 'axios'
// import { ElNotification } from 'element-plus'
// import { useStore } from 'vuex'

export default {
  components: {},
  props: {},
  emits: [],
  setup () {
    // const route = useRoute() // 使用路由
    // const router = useRouter() // 使用路由
    // const store = useStore()

    const state = reactive({
    })

    onMounted(() => {
    })

    return {
      ...toRefs(state)
    }
  }
}
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

//最外层盒子
.outer_box{
  width: 100%;
  height: 100%;

  //对齐
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  //设置背景
  --s: 37px; //控制大小
  --c: #0000, #282828 0.5deg 119.5deg, #0000 120deg;
  --g1: conic-gradient(from 60deg at 56.25% calc(425% / 6), var(--c));
  --g2: conic-gradient(from 180deg at 43.75% calc(425% / 6), var(--c));
  --g3: conic-gradient(from -60deg at 50% calc(175% / 12), var(--c));
  background: var(--g1), var(--g1) var(--s) calc(1.73 * var(--s)), var(--g2),
    var(--g2) var(--s) calc(1.73 * var(--s)), var(--g3) var(--s) 0,
    var(--g3) 0 calc(1.73 * var(--s)) #1e1e1e;
  background-size: calc(2 * var(--s)) calc(3.46 * var(--s));

  //容器1
  .container1{
    width: 25%;
    height: 50px;

    //对齐
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    margin-top: 40px;
    border-radius: 15px;

    //阴影
    box-shadow: 3px 3px 2px #504f4f;//阴影

    //背景图片
    background-image: url('@/assets/home/bg8.png');
    background-size: cover; //让背景图基于容器大小伸缩

    //导航1
    .nav1{
      width: 90%;
      height: auto;

      //对齐
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      //字体样式
      font-weight: 500;
      font-size: 22px;
      color: #ffffff;
      font-family: zcool-gdh_Regular;

      //指针
      cursor: pointer;
    }

    //动态图标
    .icon{
      width: 35px;
      height: 35px;
    }

    //导航2
    .nav2{
      width: 90%;
      height: auto;

      //对齐
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      //字体样式
      font-weight: 500;
      font-size: 20px;
      color: #ffffff;
      font-family: zcool-gdh_Regular;

      //指针
      cursor: pointer;
    }
  }

  //容器2
  .container2{
    width: 80%; //宽度设为整个屏幕宽度的80%，留出左右两边的间隙
    height: 400px;

    margin-top: 60px;
    border-radius: 20px;

    //背景图片
    background-image: url('@/assets/home/bg1.png');
    background-size: cover; //让背景图基于容器大小伸缩

    //对齐
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    //阴影
    box-shadow: 3px 3px 2px #504f4f;//阴影

    //标题
    .title{
      //字体样式
      font-weight: 500;
      font-size: 68px;
      font-family: Daoliti;

      padding-left: 30px;
      padding-right: 30px;

      border-radius: 15px;

      //阴影
      box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.24); //盒子阴影
      text-shadow: 3px 3px 6px rgba(70, 69, 69, 0.24);//文字阴影

      background-image: linear-gradient(to right, rgb(63, 107, 241), rgb(177, 17, 177));
      color: transparent; //文字颜色设置成透明色
      -webkit-background-clip: text; //将背景裁剪成文字前景色
    }

    //第二个标题
    .title:last-child{
      margin-top: 50px;
    }
  }

  //容器2、容器4
  .container3, .container5{
    width: 80%; //宽度设为整个屏幕宽度的80%，留出左右两边的间隙
    height: 150px;

    margin-top: 80px;
    border-radius: 20px;

    //对齐
    display: flex;
    flex-direction: row;
    align-items: center;

    //阴影
    box-shadow: 3px 3px 2px #504f4f;//阴影

    //数字
    .num{
      //字体样式
      color: #FFCC71;
      font-weight: 800;
      font-size: 80px;
      font-style: italic; //斜体
      font-family: Daoliti;

      //文字阴影
      text-shadow: 5px 5px 10px rgba(70, 69, 69, 0.24);

      margin-left: 60px;
    }

    //标题
    .title{
      //字体样式
      color: #FFCC71;
      font-weight: 800;
      font-size: 60px;
      font-style: italic; //斜体
      font-family: Daoliti;

      //文字阴影
      text-shadow: 5px 5px 10px rgba(70, 69, 69, 0.24);

      margin-left: 40px;
    }
  }

  //容器2
  .container3{
    //背景图片
    background-image: url('@/assets/home/bg2.svg');
    background-color: #fff; //背景色
    background-position-x: right; //右对齐
  }

  //容器4
  .container5{
    //背景图片
    background-image: url('@/assets/home/bg4.svg');
    background-color: #fff; //背景色
    background-position-x: right; //右对齐
  }

  //容器3
  .container4{
    width: 80%; //宽度设为整个屏幕宽度的80%，留出左右两边的间隙
    height: 400px;

    margin-top: 80px;
    border-radius: 20px;

    //对齐
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    //背景图片
    background-image: url('@/assets/home/bg3.png');
    background-size: cover; //让背景图基于容器大小伸缩

    //阴影
    box-shadow: 3px 3px 2px #504f4f;//阴影

    //左边
    .left{
      width: 40%;
      height: 80%;

      //对齐
      display: flex;
      flex-direction: column;
      align-items: left; //左对齐

      margin-right: 20px;

      //标题
      .title{
        //字体样式
        font-weight: 800;
        font-size: 40px;
        font-style: italic; //斜体
        font-family: Daoliti;

        //渐变色
        background-image: linear-gradient(to right, rgb(105, 245, 105), rgb(70, 73, 240));
        color: transparent; //文字颜色设置成透明色
        -webkit-background-clip: text; //将背景裁剪成文字前景色

        //文字阴影
        text-shadow: 5px 5px 10px rgba(70, 69, 69, 0.24);
      }
      //除了第一个标题
      .title:not(:first-child){
        margin-top: 10px;
      }
    }

    //右边
    .right{
      width: 40%;
      height: 80%;

      //对齐
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      //卡片样式
      .card {
        width: 100%;
        height: 250px;
        max-width: 300px;
        min-width: 200px;

        background-color: #292929;
        margin: 10px;
        border-radius: 10px;
        border: 2px solid rgba(7, 7, 7, 0.12);

        //阴影
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.24);

        //字体样式
        font-size: 16px;
        font-family: 'Poppins', sans-serif;

        //动画
        transition: all 0.3s ease;

        //相对定位
        position: relative;

        //对齐
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        cursor: pointer; //指针
      }

      //卡片的图标
      .icon {
        width: 100%;
        height: 80px;
        max-width: 80px;

        margin: 0 auto;
        border-radius: 100%;

        //背景色
        background: linear-gradient(90deg, #7eaaff 0%, #ff48fb 40%, rgba(0, 0, 0, 0.28) 60%);
        background-position: 0px;
        background-size: 200px;

        //对齐
        display: flex;
        justify-content: center;
        align-items: center;

        //动画
        transition: all 0.8s ease;
      }

      .icon svg {
        fill: white;
      }

      //卡片的标题
      .card .title {
        width: 100%;

        margin: 0;
        margin-top: 30px;

        //对齐
        text-align: center; //文本水平居中

        //字体样式
        color: white;
        font-weight: 600;
        text-transform: uppercase; //大写
        letter-spacing: 4px;
      }

      //卡片 悬停后显示的正文
      .card .text {
        width: 80%;
        margin: 0 auto;
        font-size: 13px;
        text-align: center;
        margin-top: 20px;
        color: white;
        font-weight: 200;
        letter-spacing: 2px;
        opacity: 0;
        max-height: 0;
        transition: all 0.3s ease;
      }

      //卡片 悬停，改变高度
      .card:hover {
        height: 270px;
      }

      //卡片 悬停，显示正文
      .card:hover .text {
        transition: all 0.3s ease;
        opacity: 1;
        max-height: 40px;
      }

      //卡片 悬停，改变图标样式
      .card:hover .icon {
        background-position: -120px;
        transition: all 0.3s ease;
      }

      .card:hover .icon svg path {
        fill: url('#gradientColor');
        transition: all 0.3s ease;
      }
    }
  }

  //容器5
  .container6{
    width: 80%; //宽度设为整个屏幕宽度的80%，留出左右两边的间隙
    height: 400px;

    margin-top: 80px;
    border-radius: 20px;

    //对齐
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    //背景图片
    background-image: url('@/assets/home/bg7.png');
    background-size: cover; //让背景图基于容器大小伸缩

    //阴影
    box-shadow: 3px 3px 2px #504f4f;//阴影

    //左边
    .left{
      width: 40%;
      height: 80%;

      //对齐
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      /*详情框部分*/
      //最外层盒子
      .parent {
        width: 300px;
        padding: 20px;
        perspective: 1000px; //3D元素距视图的距离，数字越大，立体感越强
      }

      //卡片
      .card {
        width: 100%;

        padding-top: 50px;
        border-radius: 10px;
        border: 3px solid rgb(255, 255, 255);

        //背景色
        background: linear-gradient(135deg,#0000 18.75%,#f3f3f3 0 31.25%,#0000 0),
            repeating-linear-gradient(45deg,#f3f3f3 -6.25% 6.25%,#ffffff 0 18.75%);
        background-size: 60px 60px;
        background-position: 0 0, 0 0;
        background-color: #f0f0f0;

        //阴影
        box-shadow: rgba(142, 142, 142, 0.3) 0px 30px 30px -10px;

        transition: all 0.5s ease-in-out; //动画
        transform-style: preserve-3d; //父容器设置preserve-3d后，子元素可以相对于父元素所在平面进行3D变形操作
      }

      //卡片悬停时
      .card:hover {
        background-position: -100px 100px, -100px 100px; //背景图片在元素中的位置

        transform: rotate3d(0.5, 1, 0, 30deg); //3D旋转，绕(x,y,z)旋转30°
      }

      //蓝色的内容区域
      .content-box {
        background: rgba(4, 193, 250, 0.732);

        padding: 60px 25px 25px 25px;
        border-radius: 0px 0px 10px 10px;

        transition: all 0.5s ease-in-out; //动画
        transform-style: preserve-3d; //子元素会保留它的3D位置
      }

      //内容区域的标题
      .content-box .card-title {
        display: inline-block; //元素显示为块级元素

        color: white;

        //字体样式
        font-size: 25px;
        font-weight: 900;

        transition: all 0.5s ease-in-out; //动画
        transform: translate3d(0px, 0px, 50px); //3D旋转
      }

      //内容区域的标题悬停时
      .content-box .card-title:hover {
        transform: translate3d(0px, 0px, 60px); //3D旋转
      }

      //内容区域的副标题
      .content-box .card-content {
        margin-top: 10px;

        //字体样式
        font-size: 16px;
        font-weight: 600;
        color: #f2f2f2;

        transition: all 0.5s ease-in-out; //动画
        transform: translate3d(0px, 0px, 30px); //3D旋转
      }

      //内容区域的副标题悬停时
      .content-box .card-content:hover {
        transform: translate3d(0px, 0px, 60px); //3D旋转
      }

      //详情按钮
      .content-box .see-more {
        display: inline-block; //元素显示为块级元素

        //字体样式
        font-weight: 900;
        font-size: 9px;
        text-transform: uppercase;
        color: rgb(7, 185, 255);
        background: white;

        padding: 0.5rem 0.7rem;
        margin-top: 1rem;
        border-radius: 5px;

        //阴影
        box-shadow: rgba(100, 100, 111, 0.2) 0px 17px 10px -10px;

        cursor: pointer;

        transition: all 0.5s ease-in-out; //动画
        transform: translate3d(0px, 0px, 20px); //3D旋转
      }

      //详情按钮悬停时
      .content-box .see-more:hover {
        transform: translate3d(0px, 0px, 60px);

        //阴影
        box-shadow: rgba(100, 100, 111, 0.2) -2px 4px 2px 3px; //阴影更改样式
      }

      //日期盒子
      .date-box {
        width: 60px;
        height: 60px;

        position: absolute; //绝对定位
        top: 30px;
        right: 30px;

        //背景色
        background: white;

        border: 2px solid rgb(7, 185, 255);
        padding: 10px;

        transform: translate3d(0px, 0px, 80px); //3D旋转

        //阴影
        box-shadow: rgba(100, 100, 111, 0.2) 0px 17px 10px -10px;

        //月份
        span{
          display: block;
          text-align: center;
        }

        //月份
        .month {
          color: rgb(4, 193, 250);
          font-size: 18px;
          font-weight: 700;
        }

        //日期
        .date {
          color: rgb(4, 193, 250);
          font-size: 24px;
          font-weight: 900;
        }
      }
    }

    //右边
    .right{
      width: 40%;
      height: 80%;

      //对齐
      display: flex;
      flex-direction: column;
      align-items: left; //左对齐

      margin-right: 20px;

      //标题
      .title{
        //字体样式
        font-weight: 800;
        font-size: 40px;
        font-style: italic; //斜体
        font-family: Daoliti;

        //渐变色
        background-image: linear-gradient(to right, rgb(237, 76, 76), rgb(245, 199, 138));
        color: transparent; //文字颜色设置成透明色
        -webkit-background-clip: text; //将背景裁剪成文字前景色

        //文字阴影
        text-shadow: 5px 5px 10px rgba(70, 69, 69, 0.24);
      }
      //除了第一个标题
      .title:not(:first-child){
        margin-top: 32px;
      }
    }
  }

  //容器6
  .container7{
    width: 25%;
    height: 50px;

    //对齐
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    margin-top: 60px;
    margin-bottom: 40px;
    border-radius: 15px;

    //阴影
    box-shadow: 3px 3px 2px #504f4f;//阴影

    //背景图片
    background-image: url('@/assets/home/bg6.png');
    background-size: cover; //让背景图基于容器大小伸缩

    //ICP备案号
    .icp{
      width: auto;
      height: auto;

      //对齐
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      //字体样式
      font-weight: 500;
      font-size: 18px;
      color: #ffffff;
      font-family: TsangerYuYangT_W05_W05;

      //指针
      cursor: pointer;
    }
  }
}
</style>
