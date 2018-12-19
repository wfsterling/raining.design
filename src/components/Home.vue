<template>
  <div class="main-wrapper">

    <div class="intro-wrapper">
      
      <div class="intro">
        <div id="intro-a">
          <h3>Raining Design</h3>
          <h2>Connecting dots...<br/>everywhere</h2>
        </div>
        <div id="intro-b">
          <ul>
            <li>Product Design</li>
            <li>UX Design Leadership</li>
            <li>User-Centered Design</li>
            <li>Design Thinking</li>
            <li>Agile</li>
          </ul>

        </div>
        <div class="mobile-only mobile-intro-copy">
          <h2 class="intro-a-h2 mobile-only">Connecting<br/>dots...<br/>everywhere</h2>
          <div class="dots">
            <div class="r1 dot"></div>
            <div class="r1 dot"></div>
            <div class="m1 dot"></div>
            <div class="m1 dot"></div>
            <div class="m1 dot"></div>
            <div class="m1 dot"></div>
            <div class="m1 dot"></div>
            <div class="l1 dot"></div>
            <div class="l1 dot"></div>
          </div>
          <ul>
            <li>Product Design</li>
            <li>UX Design Leadership</li>
            <li>User-Centered Design</li>
            <li>Design Thinking</li>
            <li>Agile</li>
          </ul>
        </div>
      </div>

      <nav>
        <ul class="navigation">
          <li>About</li>
          <li>Projects</li>
          <li class="dark">Passions</li>
          <li class="dark">Contact</li>
        </ul>
      </nav>

      <div class="hero">
        <img src="../assets/b1.png" />
      </div>
      <div class="hero-mobile">
        <img src="../assets/b-profile-mobile.png" />
      </div>
      

    </div>
    <div class="intro2-wrapper">
      <div class="intro2-content">
        <p>This version of myself enjoys working with on killer teams 
          striving to make a difference. Highly motivated to change 
          the world... one design at a time. I’m passionate about life, 
          my kids, and solving the hardest problems with the best of teams.</p>

        <p>17 years designing on the web. I’ve designed everything.</p>

        <ul>
          <li class="lh">Problems I want to solve:</li>
          <li>Green Energy</li>
          <li>Healthcare</li>
          <li>Mental Health</li>
          <li>Starvation</li>
        </ul>
        <ul>
          <li class="lh">How I want to do it:</li>
          <li>Blockchain</li>
          <li>User Centered Design</li>
          <li>Rapid Prototyping</li>
          <li>Design Thinking</li>
      </ul>
      </div>

      <footer>
        <p>&copy;Copyright 2018 RainingDesign. <span>All Rights Reserved.</span></p>
      </footer>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    props: {
      msg: String
    }
  }
  import './Home.scss'
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
