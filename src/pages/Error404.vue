<template>
  <div
    class="fullscreen bg-blue text-white text-center q-pa-md flex flex-center"
  >
    <div>
      <div style="font-size: 30vh">404</div>

      <div class="text-h2" style="opacity: 0.4">Oops. Nothing here...</div>

      <q-btn
        class="q-mt-xl"
        color="white"
        text-color="blue"
        unelevated
        to="/"
        label="Go Home"
        no-caps
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Error404",
});
</script>
    invoices() {
      this.$q.notify({
        color: 'warning',
        message: 'Yet to connect to zoho for invoices',
        position: 'top',
      });
    },

    toggle() {
      // eslint-disable-next-line no-console
      console.log('sawa');
    },

    toggleLeftDrawer() {
      this.leftDrawerOpen = !this.leftDrawerOpen;
    },

    logout() {
      this.$axios.get('/api/auth/logout').then(() => {
        this.$router.push('/login');
      })
        .catch(() => {});
    },

    activate(tab) {
      this.link = tab;
    },

    active(tab) {
      return this.link === tab;
    },
