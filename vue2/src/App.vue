<template>
  <h1>1. Computed Properties</h1>
  <h3>they are cached so performance is improved</h3>
  <p>Fullname: {{firstName}} {{lastName}}</p>
  <p>Computed Fullname: {{fullName}}</p>
  <p>Total - {{items.reduce((total, curr)=>(total = total + curr.price), 0)}}</p>
  <p>Computed Total - {{totalPrice}}</p>
  <p>Method Total - {{getTotalPrice()}}</p>
  <button @click="items.push({id: 4, title: 'keyboard', price: 600})">Add Item</button>
  <div>
    <br/>
    <label for="country">Country is "{{country}}"</label> <br/>
    <input type="text" id="country" v-model="country">
  </div>

  <h5>Expensive items</h5>
  <template v-for="item in items" :key="item.id">
    <p v-if="item.price > 100">{{item.title}} {{item.price}}</p>
  </template>

  <h5>Computed Expensive items</h5>
  <template v-for="item in expensiveItems" :key="item.id">
    <p>{{item.title}} {{item.price}}</p>
  </template>

  <h1>2. Computed Getter</h1>
  <button @click="changeFullName">Change bothNames</button>

  <h1>3. Watchers</h1>
  <p>Volume tracker (0 - 20)</p>
  <p>Current volume {{volume}} </p>
  <div>
    <button @click="volume += 2">Increase</button>
    <button @click="volume -= 2">Decrease</button>
  </div>

  <h1>3. Immediate and Deep Watchers</h1>
  <h3>Immediate - run on page load</h3>
  <h3>Deep- run if the file is modified instad of returing a new value / reference</h3>
  <input type="text" v-model="movie">
  <input type="text" v-model="movieInfo.title">
  <input type="text" v-model="movieInfo.actor">
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      firstName: 'Bruce',
      lastName: 'Wayne',
      items: [
        {
          id: 1,
          title: 'TV',
          price: 100
        },
        {
          id: 2,
          title: 'Phone',
          price: 200
        },
        {
          id: 3,
          title: 'Laptop',
          price: 300
        }
      ],
      country: '',
      // watchers
      volume: 0,
      movie: 'Batman',
      movieInfo: {
        title: '',
        actor: ''
      }
    }
  },
  methods:{
    getTotalPrice(){
      console.log("method");
      return this.items.reduce((total, curr)=>(total + curr.price), 0);
    },
    changeFullName(){
      this.bothNames = "sdsdsd ssdae2";
    }
  },
  computed: {
    fullName(){
      return `${this.firstName} ${this.lastName}`;
    },
    totalPrice(){
      console.log("computed");
      return this.items.reduce((total, curr)=>(total + curr.price), 0);
    },
    expensiveItems(){
      return this.items.filter((item)=>item.price > 100);
    },
// getter
    bothNames: {
      get(){
        return `${this.firstName} ${this.lastName}`;
      },
      set(value){
        const names = value.split(' ');
        this.firstName = names[0];
        this.lastName = names[1];
      }
    },
  },
  watch: {
    volume(newValue, oldValue){
      if(oldValue < newValue && newValue === 16)
        alert('Hearing at high volume is not safe!')
    },
    movie: {
      handler(newValue){
        console.log('Api call with ', newValue)
      },
      immediate: true,
    },
    movieInfo: {
      handler(newValue){
        console.log(`Api call with ${newValue.title} ${newValue.actor}`)
      },
      deep: true
    },
    items: {
      handler(newValue){
        console.log(`Api call with ${newValue.length}`)
      },
      deep: true
    }
  }
}
</script>

<style>

</style>
