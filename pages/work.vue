<template>
<section class="section">

    <article class="message"> 
       <div class="message-header">팀 / 개인 작업물 공간</div> 
       <div class="message-body">캐릭 아트 디자인 / 대학 팀 프로젝트 / 웹프로그래밍 디자인</div> 
     </article> 

    <div class="tile is-ancestor">
  <div class="tile is-vertical is-8">
    <div class="tile">
      <div class="tile is-parent is-vertical">


        <article class="tile is-child notification is-dark">
          <p class="title">Web Design</p>
          <p class="subtitle">Concept.Dog / Tool: Eclipse Neon</p>
          <figure class="image is-4by3">
            <img src="~assets/1.png">
          </figure>
        </article>
        <article class="tile is-child notification is-dark">
          <p class="title">Progress work</p>
          <p class="subtitle">Figure in 2018 / Tool: SAI</p>
          <figure class="image is-4by3">
            <img src="~assets/pic.png">
          </figure>
        </article>

        <article class="tile is-child notification is-dark">
          <p class="title">Picture Demand</p>
                <div id="chartArea"></div>
        </article>

      </div>

      <div class="tile is-parent">
        <article class="tile is-child notification is-dark">
          <p class="title">Art Design Concept</p>
          <p class="subtitle">Vagabond in Desert in 2017.05 / Tool: Adobe Illustrator‎ CC</p>
          <figure class="image is-4by3">
            <img src="~assets/profile_01.jpg">
          </figure>
          <br>
          <p class="subtitle">After it rains in 2017.12 / Tool: Adobe Illustrator‎ CC</p>
          <figure class="image is-4by3">
            <img src="~assets/profile_06.jpg">
          </figure>
          <br>
          <p class="subtitle">Artwork in 2016.10 / Hand Work</p>
          <figure class="image is-4by3">
            <img src="~assets/artwork.jpg">
          </figure>
        </article>
      </div>
    </div>
  </div>

  <div class="tile is-parent">
    <article class="tile is-child notification">
      <div class="content">
        <p class="title">TEAM : PASSENGER</p>
        <p class="subtitle">Start Our Project in 2017~2018</p>
        <p class="title">Intro Video <a class="button is-danger"  @click="video('goPage')"> Let's Play!</a></p>
        <figure class="image is-4by3">
            <img src="~assets/photo.jpg">
          </figure>
        <p class="title">EYE-TOUCH Web Design</p>
        <p class="subtitle">Tool: HTML5/CSS3 From ATOM Edit</p>  
        <div class="content">
            <figure class="image is-4by3">
            <img src="~assets/webD.png">
          </figure>
          <figure class="image is-4by3">
            <img src="~assets/loginpage.png">
          </figure>
        </div>
      </div>
    </article>
  </div>

</div>
             
</section>
</template>

<script>
import Chart from '~/plugins/Chart';
export default {
  methods: {
    video: function(id) {
      switch (id) {
        case "goPage":
          window.open(
            "https://www.youtube.com/embed/5bTD0JfJz9w","max-width=100%, max-height=100%, toolbar=no, menubar=no, scrollbars=no, resizable=yes"
          );
          break;
      }
    }
  },
  mounted() {
            if (process.client) { Chart('chartArea'); }
        }
};
</script>