import './bootstrap';
import App from './components/App.vue';
import { createApp } from 'vue';
import Navbar from './components/Navbar.vue';

export default {
  components: {
    Navbar,
  },
  // methods: {
  //   async logout() {
  //     try {
  //       const token = localStorage.getItem("token"); // Lấy token đã lưu
  //       await axios.post(
  //         "http://127.0.0.1:8000/api/logout",
  //         {},
  //         {
  //           headers: { Authorization: `Bearer ${token}` },
  //         }
  //       );

  //       localStorage.removeItem("token"); // Xóa token khỏi trình duyệt
  //       alert("Đăng xuất thành công!");
  //       this.$router.push("/login"); // Chuyển hướng về trang login
  //     } catch (error) {
  //       console.error("Lỗi đăng xuất:", error);
  //       alert("Đăng xuất thất bại!");
  //     }
  //   },
  // }
};


import router from './router';
import { createPinia } from 'pinia';

const app = createApp(App);
app.use(router);
app.use(createPinia());
app.mount('#app');

