<template>
  <el-container>
    <el-header>
      <div class="section">
        <el-row :gutter="10">
          <el-col :xs="7" :sm="7" :md="6">
            <div
              class="logo_div d-flex-align-center"
              @click="$router.push('/')"
            >
              Skill Embassy
            </div>
          </el-col>

          <el-col :xs="17" :sm="17" :md="13">
            <el-dropdown class="hidden-md-and-up mobile_dropdown">
              <span class="el-dropdown-link">
                <i class="el-icon-menu"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>Action 1</el-dropdown-item>
                <el-dropdown-item>Action 2</el-dropdown-item>
                <el-dropdown-item>Action 3</el-dropdown-item>
                <el-dropdown-item disabled>Action 4</el-dropdown-item>
                <el-dropdown-item divided>Action 5</el-dropdown-item>
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
              <el-menu-item index="2">For Business</el-menu-item>
              <el-menu-item index="3">Our Story</el-menu-item>
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
              <el-button size="mini" type="primary" @click="applyCourse"
                >Apply Now</el-button
              >
            </div>
          </el-col>
        </el-row>
      </div>
    </el-header>
    <el-main>
      <router-view />
    </el-main>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: '1',
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
</style>
