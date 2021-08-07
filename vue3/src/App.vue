<template>
  <h1>1. Props and Validations</h1>
  <h3>Use - in template and camelcase in js,  hero-name == heroName</h3>
  <h3>Use v-bind if using non string values</h3>
  <Greet name="Bruce" />
  <Greet :name="name" />
  <Article title="434343f" :likes="50" />

  <h1>2. Non-Props</h1>
  <h3>Default non props(props that are not accepted) are in the root node, to add it for a specific child use v-bind="$attrs", to stop adding no props to root node set inheritAttrs to false</h3>
  <Article title="34dfgcdf" :likes="50" id="ccczcxcx" />


  <h1>3. Provide and Inject (like context in react)</h1>
  <h3>If providing static then provide is object, but if parsing dynamic data then provide is a function.</h3>
  <ChildCom />

  <h1>3. Component Event</h1>
  <Popup v-if="showPopup" @close="closePopup" />
  <button v-if="!showPopup" @click="showPopup = true">show popup</button>

  <h1>4. Components and v-model </h1>
  <Input v-model="name" />

</template>

<script>
import Greet from './components/Greet.vue'
import Article from './components/Article.vue'
import ChildCom from './components/ChildCom.vue'
import Popup from './components/Popup.vue'
import Input from './components/Input.vue'

export default {
  name: 'App',
  components: {
    Greet,
    Article,
    ChildCom,
    Popup,
    Input
  },
  data(){
    return {
      name: "dfdgf4",
      showPopup: false,
    }
  },
  // provide: {
  //   username: 'sdsds sdsde554 zzz',
  // }
  methods: {
    closePopup(data){
      this.showPopup = false;
      alert(`Child Data: ${data}`)
    }
  },
  provide(){
    return {
      familyName: this.name
    }
  }
}
</script>

<style>
</style>
