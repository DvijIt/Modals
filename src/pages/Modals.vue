<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section>
      <div class="container">
        <h1 class="title">Modals page</h1>
        <div class="modal-container">
          <!-- First Modal -->
          <button class="btn btnPrimary" @click="modalFirst = true">First Modal</button>
          <modals v-show="modalFirst" title="First Modal" @close="modalFirst = false">
            <div slot="body">
              <p>Text Text</p>
              <button class="btn btnPrimary" @click="modalFirst = false">Well Done!</button>
            </div>
          </modals>

          <!-- Second Modal -->
          <button class="btn btnPrimary" @click="modalSecond.show = true">Modal With Form</button>
          <modals
            v-show="modalSecond.show"
            title="Modal With Form"
            @close="modalSecond.show = false"
          >
            <form slot="body" @submit.prevent="submitSecondForm">
              <label>Name:</label>
              <input type="text" v-model="modalSecond.name" />
              <label>Email:</label>
              <input type="email" v-model="modalSecond.email" />
              <button class="btn btnPrimary">Submit</button>
            </form>
          </modals>

          <!-- Vuelidate Modal -->
          <button class="btn btnPrimary" @click="modalValidate = true">Modal With Form + Validate</button>
          <modalVuelidate
            v-show="modalValidate"
            title="Modal With Form + Validate"
            @close="closeLogin"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import modals from "@/components/UI/Modal.vue";
import modalVuelidate from "@/components/ModalVuelidate.vue";

export default {
  components: {
    modals,
    modalVuelidate
  },
  data() {
    return {
      modalFirst: false,
      modalSecond: {
        show: false,
        name: "",
        email: ""
      },
      modalValidate: false
    };
  },
  methods: {
    submitSecondForm() {
      const user = {
        name: this.modalSecond.name,
        email: this.modalSecond.email
      };
      // console.log(user);
      this.modalSecond.name = "";
      this.modalSecond.email = "";
      this.modalSecond.show = false;
    },
    closeLogin($v) {
      this.modalValidate = false;
      if ($v.$invalid) {
        setTimeout(() => {
          $v.name.$model = "";
          $v.email.$model = "";
          $v.password.$model = "";
          $v.repeatPassword.$model = "";
          $v.$reset();
        }, 500);
      }
    }
  },
  computed: {}
};
</script>

<style lang="scss">
.modal-container {
  display: flex;
  justify-content: space-around;
  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
    button {
      margin-top: 10px;
      width: 100%;
    }
  }
}
.form-item .errorText {
  display: none;
  margin-bottom: 8px;
  font-size: 13.4px;
  color: #de4040;
}
.form-item {
  &.errorInput .errorText {
    display: block;
  }
}
input.error {
  border-color: #de4040;
}
</style>