<template>
  <q-page>
    <div class="q-pa-md" style="background-color:white;">
      <p align="center"><strong>View Memo</strong></p>
    </div>
    <!-- v-if="records"-->
    <div  style="padding-left:70px;padding-right:70px;padding-top:5px;">
      <q-card class="bg-grey-1 q-pa-md">

        <q-item>
          <q-item-section avatar>
            <q-avatar style="background-color:#76cfbf;">
              {{ modifiedBy.charAt(0).toUpperCase()}}
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label>{{ modifiedBy }}</q-item-label>
            <q-item-label caption>
              <q-icon name="event" class="event-icon"/> {{ dateEvent }}
            </q-item-label>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section>
            <strong>{{ title }}</strong>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section>
            {{ description }}
          </q-item-section>
        </q-item>



        <q-item  class="q-pa-none">
          <q-item-section v-if="memo.memo.memo_photos.length > 0">
            <img class="details-image" :src="memoPhoto">
          </q-item-section>
        </q-item>

        <q-item  class="q-pt-sm q-pb-sm">
          <q-item-label caption>
            <q-badge align="right"  style="margin-left:450px;" class="badge-details">{{ modifiedBy }}</q-badge>
          </q-item-label>
        </q-item>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import moment from 'moment'
import { mapState } from 'pinia/dist/pinia';
import { main } from '../stores/main';
export default {
  name: 'MemoPage',
  data(){
    return {
      memo: {}
    }
  },

  computed: {
    ...mapState(main, ['records']),
    dateEvent(){
      return moment(this.memo.memo.date_event).format("dddd -  MMMM Do YYYY")
    },
    modifiedBy(){
      return this.memo.memo.modified_by.user_profile.name
    },
    getPhoto() {
      return  `https://api.staging.quodari.com${this.memo.memo.modified_by.user_picture.content_url}`;
    },
    title(){
      return this.memo.memo.title
    },
    description(){
      return this.memo.memo.description
    },
    memoPhoto(){
      return `https://api.staging.quodari.com${this.memo.memo.memo_photos[0].content_url}`
    }
  },

  created(){
    this.memo =  this.records.memos_per_collection.find(memo => memo.id = this.$router.currentRoute.value.params.memo)
    console.log(this.memo.memo.memo_photos.content_url)
  },

  methods:{

  }
};
</script>
