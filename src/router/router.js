import {createRouter, createWebHashHistory,createWebHistory }  from 'vue-router'
import Crawlers from '../layouts/Crawler.vue'
import CrawlersChild from '../pages/CrawlerChild.vue'
const routes = [
  {
    path: '/Crawler',
    component: Crawlers,
    children: [
      { 
        path: 'CrawlerChild',
        component:CrawlersChild
      },
    ]
  }
]

const router = createRouter({
  //不同的历史模式：Hash模式（带着#）
  //history:createWebHashHistory(),
  history:createWebHistory(),
  routes,
})


export default router