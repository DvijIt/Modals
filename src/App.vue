<template>
  <div class="wrapper">
    <header>
      <div class="navbar">
        <div class="container">
          <div class="navbar-content">
            <div class="logo">
              <router-link to="/">VUE-CLI</router-link>
            </div>
            <ul class="navbar-list">
              <li class="navbar-item" v-for="link in links" :key="link.title">
                <router-link class="navbar-link" :to="link.url">{{link.title}}</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>

    <router-view></router-view>

    <!-- <footer></footer> -->
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      links: [
        { title: "Home", url: "/" },
        { title: "Modals", url: "/modals" },
        { title: "Login", url: "/login" }
      ]
    };
  },
  methods: {},
  computed: {}
};
</script>

<style lang="scss">
.navbar-link {
  &.router-link-exact-active {
    color: #4343aa;
  }
}
</style>
