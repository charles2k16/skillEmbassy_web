<template>
  <el-container>
    <el-header>
      <div class="section">
        <el-row :gutter="10">
          <el-col :xs="10" :sm="10" :md="6">
            <div
              class="logo_div d-flex-align-center"
              @click="$router.push('/')"
            >
              Skill Embassy
            </div>
          </el-col>

          <el-col :xs="14" :sm="14" :md="13">
            <el-dropdown
              class="hidden-md-and-up mobile_dropdown"
              :hide-on-click="false"
              trigger="click"
            >
              <span class="el-dropdown-link">
                <i class="el-icon-menu"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>
                  <div class="dropdown_mob">
                    <!-- The trigger element -->
                    <span @click="showDropdown = !showDropdown"
                      >View Courses
                      <i class="el-icon-arrow-down el-icon--right"></i
                    ></span>

                    <!-- The content -->
                    <div class="mt-10" v-show="showDropdown">
                      <span
                        @click="viewCourse('product_management')"
                        class="d-block dd_menu"
                        >Product Management</span
                      >

                      <span
                        @click="viewCourse('product_design')"
                        class="d-block dd_menu"
                        >Product Design</span
                      >

                      <span
                        @click="viewCourse('software_dev')"
                        class="d-block dd_menu"
                        >Software Development</span
                      >
                      <span
                        @click="viewCourse('dev_ops')"
                        class="d-block dd_menu"
                        >DevOps Engineer</span
                      >
                      <span
                        @click="viewCourse('data_science')"
                        class="d-block dd_menu mb-10"
                        >Data Science</span
                      >
                    </div>
                  </div>
                </el-dropdown-item>

                <el-dropdown-item>
                  <span @click="$router.push('/blog')"> Blog </span>
                </el-dropdown-item>
                <el-dropdown-item>
                  <span @click="$router.push('/story')">Our Story </span>
                </el-dropdown-item>
                <el-dropdown-item>
                  <span @click="$router.push('/business')">For Business</span>
                </el-dropdown-item>
                <el-dropdown-item>
                  <span>Podcast </span>
                </el-dropdown-item>

                <el-dropdown-item divided>
                  <el-button size="small" type="primary" @click="applyCourse"
                    >Apply Now</el-button
                  >
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <el-menu
              :default-active="activeIndex"
              class="el-menu-demo hidden-sm-and-down"
              mode="horizontal"
              router
            >
              <el-submenu index="1">
                <template slot="title">Courses</template>
                <el-menu-item
                  index="1-1"
                  @click="viewCourse('product_management')"
                  >Product Management</el-menu-item
                >
                <el-menu-item index="1-2" @click="viewCourse('product_design')"
                  >Product Design</el-menu-item
                >
                <el-menu-item index="1-3" @click="viewCourse('software_dev')"
                  >Software Development</el-menu-item
                >
                <el-menu-item index="1-4" @click="viewCourse('dev_ops')"
                  >DevOps Engineer</el-menu-item
                >
                <el-menu-item index="1-5" @click="viewCourse('data_science')"
                  >Data Science</el-menu-item
                >
              </el-submenu>
              <el-menu-item index="2" @click="$router.push('/business')"
                >For Business</el-menu-item
              >
              <el-menu-item index="3" @click="$router.push('/story')"
                >Our Story</el-menu-item
              >
              <el-menu-item index="4" @click="$router.push('/blog')"
                >Blog</el-menu-item
              >
              <el-menu-item index="5">Podcast</el-menu-item>
            </el-menu>
          </el-col>

          <el-col :md="5" class="hidden-sm-and-down">
            <div
              class="d-flex justify-right d-flex-align-center"
              style="height: 60px"
            >
              <el-button size="small" type="primary" @click="applyCourse"
                >Apply Now</el-button
              >
            </div>
          </el-col>
        </el-row>
      </div>
    </el-header>
    <el-main class="page-component__scroll el-scrollbar__wrap">
      <router-view />
    </el-main>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: '1',
      showDropdown: false,
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.el-header {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100%;
  background: #ffffff;
}
.logo_div {
  height: 60px;
  cursor: pointer;
}
.el-menu.el-menu--horizontal {
  border-bottom: none !important;
}
.el-icon-menu {
  font-size: 25px;
}

.dd_menu {
  font-size: 15px;
  margin-top: 15px;
}
</style>
