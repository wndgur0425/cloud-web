<template>
<section class="section">

  <div class="tile is-ancestor">
  <div class="tile is-vertical is-8">
    <div class="tile">
       <div class="tile is-parent">
        <article class="tile is-child notification">
          <h1 class="title">Who is Schee?</h1>
          <p3>소속 : 목원대학교 정보통신융합공학부</p3>
          <br>
          <p3>분야 : 웹프로그래밍과 디자인</p3><br>
          <p3>언어 : Java, JSP, HTML5/CSS3</p3> 
          <h3>Email: rodemtree1009@naver.com</h3>
          <br>         
          <figure class="image is-4by3">
            <img src="~assets/myface.jpeg">
          </figure>
          <h3>photography by schee</h3>
        </article>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child notification pic-02">
        </article>
      </div>
    </div>
  </div>
  <div class="tile is-parent">
    <article class="tile is-child notification pic-01">
      <div class="content">
        <h1 class="title">No pain, No gain!!</h1>
        <h4 class="title">배움은 늘 끝이 없으니 매사에 최선을 다하자!</h4>
        
        <div class="content">
          
        </div>
        <p class="title">Introduce my blog : grafolio <a class="button is-danger"  @click="blog('goPage')"> Link start</a></p>

      </div>
    </article>
  </div>
</div>

</section>

</template>

<script>
export default {
  methods: {
    blog: function(id) {
      switch (id) {
        case "goPage":
          window.open(
            "https://www.grafolio.com/searchList.grfl?query=%EC%8A%88%EB%8B%88%EB%B0%94%EB%A0%8C#middleTab","max-width=100%, max-height=100%, toolbar=no, menubar=no, scrollbars=no, resizable=yes"
          );
          break;
      }
    }
  }
};
</script>