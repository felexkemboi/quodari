<template>
  <q-page class="flex flex-start">
    <div class="col">
      <q-list v-for="(memo,index) in records.memos_per_collection" :key="index">
        <div class="q-pa-md col-xs-12 col-sm-6 col-md-4" style="min-width:320px;padding-left:10px;">
          <q-card class="bg-grey-1" style="overflow-wrap: break-word;inline-size: 430px;">
            <q-item class="q-pl-sm">
              <q-item-label>{{ memo.memo.description }}</q-item-label>
            </q-item>
          </q-card>
        </div>
      </q-list>
    </div>
  </q-page>
</template>

<script>
import axios from 'axios';
import { mapState } from 'pinia/dist/pinia';
import { main } from '../stores/main';
export default {
  name: 'HomePage',
  computed: {
    ...mapState(main, ['records']),
  },
};
</script>
