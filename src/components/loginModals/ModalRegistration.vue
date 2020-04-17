<template>
  <modal title="Registration" @close="$emit('close', $v)">
    <form slot="body" @submit.prevent="onSubmit">
      <!-- name -->
      <div class="form-item" :class="{ errorInput: $v.name.$error }">
        <label>Name:</label>
        <p class="errorText" v-if="!$v.name.required">Field is required!</p>
        <p
          class="errorText"
          v-if="!$v.name.minLength"
        >Name must have {{$v.name.$params.minLength.min}}!</p>
        <input v-model="name" :class="{ error: $v.name.$error }" @change="$v.name.$touch()" />
      </div>
      <!-- email -->
      <div class="form-item" :class="{ errorInput: $v.email.$error }">
        <label>Email:</label>
        <p class="errorText" v-if="!$v.email.required">Field is required!</p>
        <p class="errorText" v-if="!$v.email.email">Email is not correct!</p>
        <input v-model="email" :class="{ error: $v.email.$error }" @change="$v.email.$touch()" />
      </div>

      <!-- password -->
      <div class="form-item" :class="{ errorInput: $v.password.$error }">
        <p class="errorText" v-if="!$v.password.required">Password is required.</p>
        <p
          class="errorText"
          v-if="!$v.password.minLength"
        >Password must have at least {{ $v.password.$params.minLength.min }} letters.</p>
        <label>Password</label>
        <input
          v-model="password"
          :class="{ error: $v.password.$error }"
          @change="$v.password.$touch()"
        />
      </div>

      <!-- repeatPassword -->
      <div class="form-item" :class="{ errorInput: $v.repeatPassword.$error }">
        <p class="errorText" v-if="!$v.repeatPassword.sameAsPassword">Passwords must be identical.</p>
        <label>Repeat password</label>
        <input
          v-model="repeatPassword"
          :class="{ error: $v.repeatPassword.$error }"
          @change="$v.repeatPassword.$touch()"
        />
      </div>
      <button class="btn btnPrimary">Зарегестрироваться</button>
      <button type="button" class="btnCustom" @click="$emit('changeModal', $v)">У меня уже есть акаунт</button>
    </form>
  </modal>
</template>

<script>
import { required, minLength, email, sameAs } from "vuelidate/lib/validators";
import modal from "@/components/UI/Modal.vue";
export default {
  components: {
    modal
  },
  data() {
    return {
      name: "",
      email: "",
      password: "",
      repeatPassword: ""
    };
  },
  validations: {
    name: {
      required,
      minLength: minLength(4)
    },
    email: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(6)
    },
    repeatPassword: {
      sameAsPassword: sameAs("password")
    }
  },
  methods: {
    onSubmit() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        const user = {
          name: this.name,
          email: this.email,
          password: this.password
        };
        console.log(user);
        this.name = "";
        this.email = "";
        this.password = "";
        this.repeatPassword = "";
        this.$v.$reset();
        this.$emit("close", this.$v);
      }
    }
  }
};
</script>

<style lang="scss">
</style>