<template>
  <div id="app">
    <div id="content">
      <router-view />
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: row;
  color: #2c3e50;
}

#nav {
  min-width: 200px;
  padding: 10px;
  margin-right: 20px;
}

#nav ul,
#nav li {
  list-style: none;
  margin: 10px 0;
  padding: 0;
  line-height: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}
</style>
