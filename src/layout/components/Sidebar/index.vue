<template>
  <div :class="{ 'has-logo': showLogo }">
    <logo v-if="showLogo" :collapse="isCollapse" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <div class="sidebar__navList">
        <div
          class="sidebar__navItem"
          v-for="(route, index) in permission_routes"
          :key="route.path"
        >
          <div
            class="sidebar__item"
            v-if="!route.hidden"
            :style="{ height: route.children.length * 40 + 'px' }"
            :class="!hideMenuList[index] ? '' : 'sidebar__switchMenu--hide'"
          >
            <div
              class="sidebar__navlink"
              v-for="(child, ind) in route.children"
              :key="child.meta.title"
            >
              <router-link
                class="sidebar__nav"
                tag="div"
                :to="resolvePath(child.path, route.path)"
                v-if="route.children.length == 1"
              >
                {{ route.meta.title }}
              </router-link>
              <template v-else>
                <div
                  class="sidebar__nav"
                  @click="switchExpand(index)"
                  v-if="ind == 0"
                >
                  {{ route.meta.title }}
                  <img
                    class="sidebar__switchMenu"
                    :src="
                      !hideMenuList[index]
                        ? require('@/assets/images/arrow_down@2x.png')
                        : require('@/assets/images/arrow_up@2x.png')
                    "
                  />
                </div>
                <router-link
                  class="sidebar__nav"
                  tag="div"
                  :to="resolvePath(child.path, route.path)"
                >
                  {{ child.meta.title }}
                </router-link>
              </template>
            </div>
          </div>
        </div>
      </div>
    </el-scrollbar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Logo from './Logo';
import SidebarItem from './SidebarItem';
import variables from '@/styles/variables.scss';

export default {
  components: { SidebarItem, Logo },
  computed: {
    ...mapGetters(['permission_routes', 'sidebar']),
    activeMenu() {
      const route = this.$route;
      const { meta, path } = route;
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu;
      }
      return path;
    },
    showLogo() {
      return this.$store.state.settings.sidebarLogo;
    },
    variables() {
      return variables;
    },
    isCollapse() {
      return !true;
    }
  },
  data() {
    return {
      hideMenuList: []
    };
  },
  methods: {
    resolvePath(targetPath, basePath) {
      // debugger;
      return basePath + '/' + targetPath;
    },
    switchExpand(index) {
      this.$set(this.hideMenuList, index, !this.hideMenuList[index]);
    }
  }
};
</script>
<style lang="scss" scoped>
.sidebar__navList {
  .sidebar__item {
    width: 232px;
    margin: 0 auto;
    overflow: hidden;
    transition: height 0.3s;
  }
  .sidebar__navlink {
  }
  .sidebar__nav {
    height: 40px;
    line-height: 40px;
    position: relative;
  }
  .sidebar__switchMenu {
    position: absolute;
    width: 18px;
    height: 18px;
    top: 50%;
    right: 0;
    transform: translate(0, -50%);
  }
  .sidebar__switchMenu {
    transition: all 0.3s;
    transform-origin: center center;
  }
  .sidebar__switchMenu--hide {
    height: 40px !important;
    .sidebar__switchMenu {
      // transform: rotate(180deg);
    }
  }
}
</style>
