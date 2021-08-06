<template>

<h1>1. Text binding</h1>
<div>{{name}}</div>
<div v-text="name"></div>
<div v-html="name"></div>

<h1>2. Attributes binding</h1>
<div v-bind:id="name">v bind String</div>
<button v-bind:disabled="true">v bind boolean (if value is false attribute is not displayed in html)</button>

<h1>3. Class binding</h1>
<p v-bind:class="class_status" class="bold"> v bind with static classes</p>
<p v-bind:class="['bold', 'underline']"> v bind with multiple classes</p>
<p v-bind:class="isPromoted ? 'underline' : 'bold'">Conditional 1</p>
<p v-bind:class="[isPromoted ? 'underline' : 'bold',]">Conditional multi array 2</p>
<p v-bind:class="{
   'underline': isPromoted,
   bold: isPromoted,
  }">Conditional multi object 3</p>

<h1>4. Style binding</h1>
<p v-bind:style="{
    color: fontColor,
    'font-size': fontSize + 'px',
    fontWeight: 'bold',
}">sample text</p>

<p v-bind:style="styleObject">style object</p>
<p v-bind:style="[successStyleObject, primaryStyleObject]">style array</p>

<h1>5. V binding Short hand</h1>
<p :class="'underline'">use :class instead of v-bind:class</p>

<h1>6. Conditional rendering</h1>
<p v-if="num == 0">The number is zero</p>
<p v-else-if="num > 0">The number is positive</p>
<p v-else-if="num < 0">The number is negative</p>
<p v-else>The number is not a number</p>
<p>template tag is a invisible wrapper</p>
<p v-show="false">v -show</p>

<h1>7. List rendering</h1>
<p v-for="(name, i) in names" :key="name">{{i}}{{name}}</p>
<div v-for="(name, i) in fullnames" :key="i">
  {{i}}{{name}}
  <p v-for="(value, i) in name.data" :key="i">{{value}}</p>
</div>

<h1>8. Conditional List rendering</h1>
  <template v-for="(name, i) in names" :key="name">
  <p v-if="name === 'sasas'">{{i}}{{name}}</p>
  </template>

<h1>9. Methods (this)</h1>
<p>add {{add(2, 3, 5)}}</p>

<h1>10. Event Handling</h1>
<button v-on:click="name = 'batman'">{{name}}</button>
<button v-on:click="changeName1">{{name}}</button>
<button v-on:click="changeName2('asasas')">{{name}}</button>
<button @click="changeName3($event, 'short hand @ for v-on')">{{name}}</button>
<button @click="changeName1($event), changeName3($event, '2 handlers')">{{name}}</button>

<h1>11. Form Handling</h1>
{{JSON.stringify(formValues, null, 2)}}
<br/>
<br/>
<form @submit.prevent="submitForm" >
<div>
  <label for="name">Name: </label>
  <input type="text" id="name" v-model.trim.lazy="formValues.name">
</div>
<br/>
<div>
  <label for="description">Description: </label>
  <textarea id="description" v-model="formValues.description"></textarea>
</div>
<br/>
<div>
  <label for="gender">Gender: </label>
  <select id="gender" v-model="formValues.gender">
    <option value="male">Male</option>
    <option value="female">Female</option>
  </select>
</div>
<br/>
<div>
  <label for="contact">Contact: </label>
  <select id="contact" v-model="formValues.contact" multiple>
    <option value="home">Home</option>
    <option value="mobile">Mobile</option>
    <option value="whatsapp">Whatsapp</option>
  </select>
</div>
<br/>
<div>
  <input type="checkbox" id="remote" v-model="formValues.remote" true-value="yes" false-value="no">
  <label for="remote">Remote work: </label>
</div>
<br/>
<div>
  <label>Skills: </label>
  <input type="checkbox" id="html" value="html" v-model="formValues.skills" />
  <label for="html">HTML: </label>
  <input type="checkbox" id="css" value="css" v-model="formValues.skills" />
  <label for="css">CSS: </label>
  <input type="checkbox" id="js" value="js" v-model="formValues.skills" />
  <label for="js">JS: </label>
</div>
<br/>
<div>
  <label>Experience: </label>
  <input type="radio" id="starter" value="0-2" v-model="formValues.experience" />
  <label for="starter">0 - 2 </label>
  <input type="radio" id="medium" value="2-4" v-model="formValues.experience" />
  <label for="medium">0 - 4 </label>
  <input type="radio" id="advance" value="4-6" v-model="formValues.experience" />
  <label for="advance">4 - 6 </label>
</div>
<br/>
<div>
  <label for="age">Age: </label>
  <input type="number" id="age" v-model.number="formValues.age" @keyup.enter="submitForm">
</div>
<br/>
<div>
  <button type="submit">Submit</button>
</div>
</form>

<h1 v-once>12. v-once (on renders once)</h1>
<h1 v-pre>13. v-pre (do not render vue dirrectives) {{name}}</h1>

</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      // binding
      name:"<b>John</b>",
      class_status: 'underline',
      isPromoted: false,
      fontColor: 'blue',
      fontSize: 46,
      styleObject:{
        color: 'orange',
        fontSize: '32px'
      },
      successStyleObject:{
        color: 'green',
        fontSize: '32px'
      },
      primaryStyleObject:{
        color: 'purple',
        fontSize: '22px',
        fontWeight: 'bold'
      },
    // conditional
      num: 0,
      names: ['sasas', 'ddgf', 'lllkr', 'xxxxx'],
      fullnames: [
        {first: 'bruce', last:"232323", data: ['sasas', 'sasa2', '434f']},
        {first: '2323', last:"454", data: ['sdsvbvvvv', 'rerc', '345rgcc']},
        {first: '6676', last:"47788888", data: ['uyugss', 'ede', '34fgfg']},
      ],
      add_value: 45,
      // form
      formValues:{
        name: '',
        description: '',
        gender: '',
        contact: [],
        remote: 'no',
        skills: [],
        experience: '',
        age: ''
      }
    }
  },
  methods: {
    add(x, y, z){
      return x + y + z + this.add_value
    },
    changeName1(event){
      console.log(1, event);
    },
    changeName2(value){
      this.name = value
    },
    changeName3(event, value){
      this.name = value,
      console.log(event);
    },
    // form
    submitForm(){
      alert(JSON.stringify(this.formValues));
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.underline{
  text-decoration: underline;
}

.bold{
  font-weight: bold;
}

.txt-lg{
  font-size: 60px;
}

.txt-danger{
  color: red;
}
</style>
