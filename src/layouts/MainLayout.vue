<template>
  <q-layout view="hHh LpR fFf" style="background-color: #f5f8fa;">
    <q-drawer
      side="left"
      :width="350"
      bordered
      v-model="leftDrawerOpen"
      :show-if-above="true"
    >
      <q-scroll-area class="fit">
        <div class="q-pa-md">
          <p class="text-h6" style="padding-left:15px;padding-top:40px; font-size:50px;color:#76cfbf;">Quodari</p>
          <div class="text-h6" style="padding-left:15px;padding-top:150px; font-size:20px;color:#76cfbf;max-width:230px;">
            <q-select
              v-model="language"
              :options="['English','Nederlands','Français (Belgique)']"
              color="secondary"
              use-chips
              borderless
              label-color="orange"
              input-class="text-h8"
              :input-style="{ color: '#ff0000' }"
            >
              <template v-slot:prepend>
                <q-icon name="translate" @click.stop />
              </template>
            </q-select>
          </div>
          <p class="text-h6" style="padding-top:20px;">
            <span style="color:#76cfbf;">Log in</span> or <span style="color:#76cfbf;">Sign up</span> to your Quodari account and you will always
            be able to access shared collections, give comments,
            save and share your own memos and view other content.
          </p>
          <q-btn color="secondary">Login</q-btn>
        </div>
      </q-scroll-area>
    </q-drawer>
    <q-page-container style="font-size: 18px;">
      <router-view></router-view>
    </q-page-container>
  </q-layout>
</template>

<script>

import axios from 'axios'
import { main } from '../stores/main';
import { mapState } from 'pinia/dist/pinia';
const store = main();

export default {
  name: 'MainLayout',
  data() {
    return {
      leftDrawerOpen: true,
      language: 'English'
    };
  },
  watch: {
    language(newLanguage){
      this.$q.notify({
        color: 'positive',
        message: `Language changed to ${newLanguage}`,
        position: 'top',
      });
    }
  },
  computed: {
    ...mapState(main, ['records']),
  },
  async created() {
    await axios.get('https://api.staging.quodari.com/api/p/collection/0zPL7kQwGm').then(response => {
      store.setRecords(response.data);
    });
  },
};
</script>

<style>
.q-if-control {
  color: white !important;
}

#my-dropdown .q-if-control {
  color: white !important;
}
</style>
