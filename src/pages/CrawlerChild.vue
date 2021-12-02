<template>
  <div class="row" style="border: 1px solid #fff">
    <div class="col-4" style="border: 1px solid #f0f">
  
      <crawler-child-left></crawler-child-left>
    </div>
    <div class="col-8" style="border: 1px solid #f0f">
      <crawler-child-right></crawler-child-right>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import moment from "moment";

import CrawlerChildLeft from "../pages/CrawlerChildLeft.vue";
import CrawlerChildRight from "../pages/CrawlerChildRight.vue";

export default {
  components: { CrawlerChildLeft,CrawlerChildRight },
  setup() {
    //应该是用来判断侧栏展示和消失的
    const time = ref("");
    return {
      time,
    };
  },
  created() {
    this.getData();
    this.timer();
  },
  destroyed() {
    clearInterval(this.timer);
  },
  methods: {
    getData() {
      let date = moment().format("MMMM Do YYYY, h:mm:ss a");
      this.time = date;
    },
    timer() {
      this.time = setInterval(() => {
        this.getData();
      }, 100);
    },
  },
};
</script>

