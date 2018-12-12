<template>
  <div class="intro-wrapper">
    
    <div class="intro">
      <div id="intro-a">
        <h3>Raining Design</h3>
        <h2>Connecting dots...<br/>everywhere</h2>
        <footer>
          <p>&copy;Copyright 2018 RainingDesign. <span>All Rights Reserved.</span></p>
        </footer>
      </div>

      <div id="intro-b">
        <ul>
          <li>Product Design</li>
          <li>UX Design Leadership</li>
          <li>User-Centered Design</li>
          <li>Design Thinking</li>
          <li>Agile</li>
        </ul>

        <caption><b>[ I'm learning VueJS to build out this website. Please be patient.]</b><br/>
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
