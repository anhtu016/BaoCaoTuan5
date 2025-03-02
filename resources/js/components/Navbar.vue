<template>
    <nav class="navbar">
      <div class="container">
        <h1 class="logo">My App</h1>
        <ul class="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: "Navbar",
  };
  </script>
  
  <style scoped>
  .navbar {
    background: #333;
    color: white;
    padding: 1rem;
  }
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
  }
  .nav-links {
    list-style: none;
    display: flex;
    gap: 1rem;
  }
  .nav-links a {
    color: white;
    text-decoration: none;
    font-weight: bold;
  }
  .nav-links a:hover {
    text-decoration: underline;
  }
  </style>
  