<template>
    <div>
      <h2>Login</h2>
      <input type="email" v-model="email" placeholder="Email" />
      <input type="password" v-model="password" placeholder="Password" />
      <button @click="login">Login</button>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    data() {
      return {
        email: "",
        password: "",
      };
    },
    methods: {
      async login() {
        try {
          const response = await axios.post("http://127.0.0.1:8000/api/login", {
            email: this.email,
            password: this.password,
          });
  
          localStorage.setItem("token", response.data.token);
          alert("Đăng nhập thành công!");
          this.$router.push("/");
        } catch (error) {
          alert("Đăng nhập thất bại! Kiểm tra lại thông tin.");
        }
      },
    },
  };
  </script>
  