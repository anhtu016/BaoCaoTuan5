<template>
    <div>
      <h2>Register</h2>
      <input type="text" v-model="name" placeholder="Full Name" />
      <input type="email" v-model="email" placeholder="Email" />
      <input type="password" v-model="password" placeholder="Password" />
      <button @click="register">Register</button>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    data() {
      return {
        name: "",
        email: "",
        password: "",
      };
    },
    methods: {
      async register() {
        try {
          const response = await axios.post("http://127.0.0.1:8000/api/register", {
            name: this.name,
            email: this.email,
            password: this.password,
          });
  
          localStorage.setItem("token", response.data.token);
          alert("Đăng ký thành công!");
          this.$router.push("/");
        } catch (error) {
          alert("Đăng ký thất bại! Kiểm tra lại thông tin.");
        }
      },
    },
  };
  </script>
  