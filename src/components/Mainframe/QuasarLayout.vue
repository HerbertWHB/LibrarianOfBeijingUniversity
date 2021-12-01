<template>
  <q-layout view="hHh lpR fFf">
    <q-header class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
        <q-toolbar-title> </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <!--
      show-if-above:当屏幕宽度大于断点数值的时候，自动展示sidebar
      breakpoint:断点宽度，小于这个宽度不显示
    -->
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      :width="200"
      :breakpoint="500"
      side="left"
    >
      <q-scroll-area class="fit">
        <q-list>
          <template v-for="(menuItem, index) in menuList" :key="index">
            <q-item
              clickable
              @click="presentRoute(menuItem)"
              :active="menuItem.label === activeroute"
              v-ripple
            >
              <q-item-section avatar>
                <q-icon :name="menuItem.icon" />
              </q-item-section>
              <q-item-section>
                {{ menuItem.label }}
              </q-item-section>
            </q-item>
            <q-separator :key="'sep' + index" v-if="menuItem.separator" />
          </template>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <h5>{{ time }}</h5>
      <p>Author: Herbert Wang</p>
      <p>Vue3 with vite, quasar</p>
      <router-view />
    </q-page-container>

    <q-footer class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { ref } from "vue";
import moment from "moment";

const menuList = [
  {
    icon: "inbox",
    label: "Crawler",
    separator: true,
  },
  {
    icon: "send",
    label: "Outbox",
    separator: true,
  },
];

export default {
  setup() {
    //应该是用来判断侧栏展示和消失的
    const leftDrawerOpen = ref(false);
    const time = ref("");
    const activeroute = ref("");
    return {
      time,
      leftDrawerOpen,
      menuList,
      activeroute,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
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
    presentRoute(item) {
      this.activeroute = item.label;
      console.log(this.$router)
      this.$router.push('/Crawler');
    },
  },
};
</script>

<style scoped>
.qdrawerMf {
  padding-top: 0px !important;
  margin-top: 0px !important ;
}
</style>