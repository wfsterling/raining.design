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

          <caption>
            <b>[ I'm learning VueJS to build out this website. Please be patient. Meanwhile, here's an <a href="/archive/wfsterling.yellow" target="_blank">archive</a> of the last site.]</b>
            <br/>
            Latest Update:<br/>
            Completed first 'section of design'. Complicated CSS Grid and layering.<br/>
            Next:<br/>
            Complete 'home' page.</caption>

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

      

    </div>
    <div class="intro2-wrapper">
      <p>This version of myself enjoys working with on killer teams striving to make a difference. Highly motivated to change the world... one design at a time. I’m passionate about life, my kids, and solving the hardest problems with the best of teams.</p>

      <p>17 years designing on the web. I’ve designed everything.</p>

      <ul>
        <lh>Problems I want to solve:</lh>
        <li>Green Energy</li>
        <li>Healthcare</li>
        <li>Mental Health</li>
        <li>Starvation</li>
      </ul>

      <ul>
        <lh>How I want to do it:</lh>
        <li>Blockchain</li>
        <li>User Centered Design</li>
        <li>Rapid Prototyping</li>
        <li>Design Iteration</li>
      </ul>

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
