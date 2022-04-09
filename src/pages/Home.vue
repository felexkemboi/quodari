<template>
  <q-page class="flex flex-start">
    <q-img src="../assets/top.png" style="height:220px;z-index: 1;"/>
    <q-img src="../assets/toptop.png" style="width: 30%;height:200px;position:absolute;top: 130px;left: 35px;z-index: 2;"/>
    <div class="q-pa-md" style="margin-top:120px;padding-left:40px;">
      <div class="row" style="color:#76cfbf">
        <strong>Kunsthal Rotterdam - demo</strong>
      </div>

      <div class="row q-gutter-sm"  style="margin-top:10px;" v-if="records.collection_picture">
        <div>
          <img :src="getPhoto(records.collection_picture.content_url)" style="height: 50px; max-width: 50px;border-radius: 12px;">
        </div>
        <div>
          {{ records.name }}
        </div>
      </div>

    </div>
    <div class="row" v-if="records" style="padding-left:5px;">
      <q-list v-for="(memo,index) in records.memos_per_collection" :key="index">
        <div class="q-pa-md col-xs-12 col-sm-6 col-md-4" style="min-width:320px;">
          <q-card class="bg-grey-1" style="overflow-wrap: break-word;inline-size: 430px;">
            <q-item-section class="q-pt-md q-pl-md">
              <q-item-label caption>
                <q-icon name="event" style="color: #ccc; font-size: 1.4em;"/> {{ computeTime(memo.memo.date_event)}}
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
            <q-item class="q-pl-sm">
              <div v-if="memo.memo.memo_photos.length > 0">
                <img :src="getPhoto(memo.memo.memo_photos[0].content_url)" style="height: 170px; max-width: 300px">
              </div>
              <div v-else>
                No Photo
              </div>
            </q-item>
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
    }
  }
};
</script>

<style lang="sass" scoped>
</style>
