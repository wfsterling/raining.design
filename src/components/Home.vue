<template>
  <div class="main-wrapper">
    <!-- INTRO -->
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

      <!-- NAVIGATION -->
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

    <!-- INTRO 2 -->
    <div class="intro2-wrapper">
      <div class="content">
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

      
    </div>

    <div class="full bg how">
      <!-- <div class="how-image"><img src="../assets/art-museum.jpg"></div> -->
      <div class="content">
        <h2>The hardest problems with the best of teams.</h2>
        <p>I’ve worked on a lot of good teams and fun projects. Gained a ton of knowledge in development, lean and agile methodologies. I have spent years mastering front-end styling, UI frameworks, and styleguides. This experience has bread comfort in designing for any platform.</p>
        <p>My favorite projects are the ones that challenge the norms. I enjoy disruptive ideas, forward thinking and helping people. The bigger the problem, the more rewarding the solution.</p>
        <p>But what motivates me more than anything is the power of user centered design. Using empathy to create products people WANT to share, machine-learning to automate our world, and testing to ensure success. My success, dedication and passion have contributed to the leadership qualities I bring to every project.</p>
      
        <ul>
          <li class="lh">Tools of my trade</li>
          <li>UX:</li>
          <li>Sketch</li>
          <li>Axure</li>
          <li>InVision</li>
          <li>Adobe Photoshop/Illustrator</li>
        </ul>

        <ul>
          <li>UI:</li>
          <li>HTML/SCSS</li>
          <li>Git</li>
          <li>Material Design/Foundation</li>
          <li>Angular/React</li>
        </ul>
        
        <ul>
          <li>Research:</li>
          <li>Usability Testing</li>
          <li>Rapid Prototyping</li>
          <li>Feedback Campaigns</li>
          <li>Typeform</li>
          <li>Machine Learning/AI</li>
        </ul>
      </div>





      <footer>
        <ul>
          <li><a href="mailto:wfsterling@gmail.com"><font-awesome-icon :icon="['far', 'envelope']"/></a></li>
          <li><a href="https://linkedin.com/in/wfsterling"><font-awesome-icon :icon="['fab', 'linkedin']"/></a></li>
          <li><a href="https://github.com/wfsterling"><font-awesome-icon :icon="['fab', 'github']"/></a></li>
          <li><a href="https://instagram.com/wfsterling"><font-awesome-icon :icon="['fab', 'instagram']"/></a></li>
        </ul>
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
