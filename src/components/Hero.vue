<template>
  <div class="bg_secondary">
    <div class="section">
      <el-row :gutter="10">
        <el-col :xs="12" :sm="12" :md="12">
          <div class="hero_wrapper">
            <h1>
              Kickstart Your Lucrative <br />
              Tech Career.
            </h1>
            <p class="mt-20 text_highlight">
              Learn, build and launch an impactful product with your own product
              designer, product manager,software engineer and cloud engineer.
            </p>

            <el-button
              class="mt-20"
              size="small"
              type="primary"
              @click="applyCourse('software_dev')"
              >Apply Now</el-button
            >
            <el-button class="mt-20" size="small" type="danger" plain
              ><a href="http://localhost:8080/#courses">View Courses</a>
            </el-button>
          </div>
        </el-col>

        <el-col :xs="12" :sm="12" :md="12">
          <div class="hero_image d-flex-align-center">
            <img
              src="../assets/images/skill-embassy-head.png"
              alt="coding school"
              width="100%"
            />
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hero',
};
</script>

<style lang="scss" scoped>
.hero_wrapper {
  padding: 100px 10px 50px 5px;
}
.hero_image {
  width: 100%;
  height: 500px;

  img {
    border-radius: 5px;
  }
}
a {
  color: inherit;
}
</style>
