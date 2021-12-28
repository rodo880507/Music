<template>
 <!-- Login Form -->
  <div class="text-white text-center font-bold p-4 mb-4"
    v-if="log_show_alert" :class="log_alert_variant">
    {{ log_alert_msg }}
  </div>
  <vee-form :validation-schema="loginSchema" @submit="login">
    <!-- Email -->
    <div class="mb-3">
      <label class="inline-block mb-2">Email</label>
      <vee-field
        type="email"
        name="email"
        class="
          block
          w-full
          py-1.5
          px-3
          text-gray-800
          border border-gray-300
          transition
          duration-500
          focus:outline-none
          focus:border-black
          rounded
        "
        placeholder="Enter Email"
      />
      <error-message class="text-red-600" name="email"/>
    </div>
    <!-- Password -->
    <div class="mb-3">
      <label class="inline-block mb-2">Password</label>
      <vee-field
        type="password"
        name="password"
        class="
          block
          w-full
          py-1.5
          px-3
          text-gray-800
          border border-gray-300
          transition
          duration-500
          focus:outline-none
          focus:border-black
          rounded
        "
        placeholder="Password"
      />
      <error-message class="text-red-600" name="password"/>
    </div>
    <button
      type="submit" :disabled="log_in_submission"
      class="
        block
        w-full
        bg-purple-600
        text-white
        py-1.5
        px-3
        rounded
        transition
        hover:bg-purple-700
      "
    >
      Submit
    </button>
  </vee-form>
</template>

<script>

export default {
  name: 'LoginForm',
  data() {
    return {
      loginSchema: {
        email: 'required|min:3|max:100|email',
        password: 'required|min:3|max:32',
      },
      log_in_submission: false,
      log_show_alert: false,
      log_alert_variant: 'bg-blue-500',
      log_alert_msg: 'Please wait! We are logging you in.',
    };
  },
  methods: {
    async login(values) {
      this.log_show_alert = true;
      this.log_in_submission = true;
      this.log_alert_variant = 'bg-blue-500';
      this.log_alert_msg = 'Please wait! We are logging you in.';

      try {
        await this.$store.dispatch('login', values);
      } catch (error) {
        this.log_in_submission = false;
        this.log_alert_variant = 'bg-red-500';
        this.log_alert_msg = 'Invalid login details.';
        return;
      }

      this.log_alert_variant = '';
      this.log_alert_msg = '';
      this.log_show_alert = false;
      this.log_in_submission = false;
      // window.location.reload();
      this.$store.commit('toggleAuthModal');
    },
  },
};
</script>
