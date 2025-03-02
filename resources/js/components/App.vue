<template>
    <div id="app">
      <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>|
        <router-link to="/login">login</router-link>|
        <router-link to="/Register">Register</router-link>
        

      </nav>
      <router-view />
    </div>
    <!-- <div>
    <button @click="logout">Logout</button>
  </div> -->
  </template>
  
  <script>
  export default {
    name: "App",
  };
  
  </script>
  
  <style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    text-align: center;
    margin-top: 20px;
  }
  nav a {
    margin: 0 15px;
    text-decoration: none;
    color: #42b983;
  }
  nav a.router-link-exact-active {
    font-weight: bold;
    color: #2c3e50;
  }
  </style>
  