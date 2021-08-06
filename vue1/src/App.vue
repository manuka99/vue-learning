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

</template>



<script>

export default {
  name: 'App',
  data() {
    return {
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
      }
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
