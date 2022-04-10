<template>
  <q-page>
    <q-img src="../assets/top.png" class="img1"/>
    <q-img src="../assets/toptop.png" class="img2"/>
    <div class="q-pa-md header">
      <p class="row name">Kunsthal Rotterdam - demo</p>
      <div class="row q-gutter-sm sub-header" v-if="records.collection_picture">
        <div>
          <img class="profile-image" :src="getPhoto(records.collection_picture.content_url)">
        </div>
        <div>
          {{ records.name }}
        </div>
      </div>

    </div>
    <div class="row cards" v-if="records">
      <q-list v-for="(memo,index) in records.memos_per_collection" :key="index">
        <div class="q-pa-md cards-div">
          <q-card class="card bg-grey-1">
            <q-item-section class="q-pt-md q-pl-md">
              <q-item-label caption>
                <q-icon name="event" class="event-icon"/> {{ computeTime(memo.memo.date_event)}}
              </q-item-label>
            </q-item-section>
            <q-item-section class="q-pt-sm q-pl-md">
              <q-item-label>
                <strong>{{ memo.memo.title }} </strong>
              </q-item-label>
            </q-item-section>
            <q-item-section class="q-pl-md">
              <q-item-label>
                {{ memo.memo.description.length > 160 ? trimDescription(memo.memo.description) : memo.memo.description }}
              </q-item-label>
            </q-item-section>
            <q-item-section class="q-pl-md q-pt-sm">
              <q-item-label>
                <p style="color: #76cfbf;">Read More</p>
              </q-item-label>
            </q-item-section>
            <q-item class="q-pl-none q-pb-xs">
              <div v-if="memo.memo.memo_photos.length > 0">
                <img class="photos-image" :src="getPhoto(memo.memo.memo_photos[0].content_url)">
              </div>
              <div v-else>
                No Photo
              </div>
            </q-item>
            <q-item-section class="q-pa-xs q-pb-md">
              <q-item-label caption align="right">
                <q-badge class="badge">{{ records.name }}</q-badge>
              </q-item-label>
            </q-item-section>
          </q-card>
        </div>
      </q-list>
    </div>
  </q-page>
</template>

<script>
import axios from 'axios';
import moment from 'moment'
import { mapState } from 'pinia/dist/pinia';
import { main } from '../stores/main';
export default {
  name: 'HomePage',
  computed: {
    ...mapState(main, ['records']),
  },
  methods:{
    getPhoto(url) {
      return  `https://api.staging.quodari.com/${url}`;
    },
    computeTime(rawDate){
      return moment(rawDate).format("dddd -  MMMM Do YYYY")
    },
    trimDescription(description){
      return `${description.substring(0,160)}...`
    },
    gallery(urls){
      return urls.map(url => `https://api.staging.quodari.com${url.content_url}`);
    },
  }
};
</script>
