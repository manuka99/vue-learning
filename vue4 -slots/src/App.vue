<template>
  <h1>1. Slots</h1>
  <Card>
   Card content 1
  </Card>
  <Card></Card>

  <h1>2. Named Slots</h1>
  <Container>
    <template v-slot:header>
      <h3>Header</h3>
    </template>    
    <template v-slot:default>
      <h3>body</h3>
    </template>    
    <template v-slot:footer>
      <h3>footer</h3>
    </template>    
 </Container>

  <h1>3. Slot Props</h1>
  <NameList>
    <template v-slot:default="slotProps">
      {{slotProps.firstName}} 
      <!-- {{slotProps.lastName}} -->
    </template>
  </NameList>
</template>

<script>
import Card from "./components/Card.vue";
import Container from "./components/Container.vue";
import NameList from "./components/NameList.vue";

export default {
  name: 'App',
  components: {
    Card,
    Container,
    NameList
  },
  data(){
    return {

    }
  },
  methods: {

  }
}
</script>

<style>

</style>
