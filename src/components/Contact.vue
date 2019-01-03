<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    This is Contact
    <nav>
        <ul class="navigation">
          <li><router-link to='/'>About</router-link></li>
          <li><router-link to='/projects'>Projects</router-link></li>
          <li class="dark"><router-link to='/passions'>Passions</router-link></li>
          <li class="dark"><router-link to='/contact'>Contact</router-link></li>
        </ul>
      </nav>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  props: {
    msg: name
  }
}
import './Contact.scss'
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
    color: red;
}

</style>