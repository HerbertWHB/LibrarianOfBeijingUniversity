<template>
  <q-layout view="hHh lpR fFf">
    <q-header class="bg-white text-dark">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
        <q-toolbar-title></q-toolbar-title>
      </q-toolbar>
    </q-header>
    <!--
      show-if-above:当屏幕宽度大于断点数值的时候，自动展示sidebar
      breakpoint:断点宽度，小于这个宽度不显示
      v-ripple:用来做动画特效的，按钮点击的时候会有波浪一样的东西
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
      <router-view />
    </q-page-container>

    <q-footer class="bg-grey-2 text-dark">
      <q-toolbar>
        <q-toolbar-title> </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { ref } from "vue";
import { MenuList } from "../../utils/MenuList"


export default {
  setup() {
    //应该是用来判断侧栏展示和消失的
    const leftDrawerOpen = ref(false);
    const activeroute = ref("");
    const menuList=ref(MenuList)
    return {
      leftDrawerOpen,
      menuList,
      activeroute,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
  methods: {
    //路由添加：如果push里不加'/'，新的路由会添加在旧的路由后面
    presentRoute(item) {
      console.log(item);
      this.activeroute = item.label;
      if (item.children!==undefined) {
        this.$router.push(`/${item.label}/${item.children[0]}`);
      } else {
        this.$router.push(`/${item.label}`);
      }
    },
  },
};
</script>

<style scoped>
</style>