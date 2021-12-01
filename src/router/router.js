import {createRouter, createWebHashHistory}  from 'vue-router'
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
  history:createWebHashHistory(),
  routes,
})


export default router