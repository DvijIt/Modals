<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section>
      <div class="container">
        <h1 class="title">Login</h1>
        <div class="modals-container">
          <!-- Login -->
          <button class="btn btnPrimary" @click="modalLogin = true">Login</button>
          <login v-show="modalLogin" @close="closeLogin" @changeModal="openRegistration"></login>
          <!-- Registration -->
          <button class="btn btnPrimary" @click="modalRegistration = true">Registration</button>
          <registration
            v-show="modalRegistration"
            @close="closeRegistration"
            @changeModal="openLogin"
          ></registration>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import login from "@/components/loginModals/ModalLogin.vue";
import registration from "@/components/loginModals/ModalRegistration.vue";
export default {
  components: {
    login,
    registration
  },
  data() {
    return {
      modalLogin: false,
      modalRegistration: false
    };
  },
  methods: {
    closeLogin($v) {
      this.modalLogin = false;
      if ($v.$invalid) {
        setTimeout(() => {
          $v.email.$model = "";
          $v.password.$model = "";
          $v.$reset();
        }, 500);
      }
    },
    closeRegistration($v) {
      this.modalRegistration = false;
      if ($v.$invalid) {
        setTimeout(() => {
          $v.name.$model = "";
          $v.email.$model = "";
          $v.password.$model = "";
          $v.repeatPassword.$model = "";
          $v.$reset();
        }, 500);
      }
    },
    openLogin($v) {
      this.closeRegistration($v);
      this.modalLogin = true;
    },
    openRegistration($v) {
      this.closeLogin($v);
      this.modalRegistration = true;
    }
  }
};
</script>

<style lang="scss">
.btnCustom {
  display: block;
  margin: 10px auto 0;
  border: none;
  border-bottom: 1px dashed;
}
@media screen and (max-width: 768px) {
  .modals-container {
    display: flex;
  }
}
</style>