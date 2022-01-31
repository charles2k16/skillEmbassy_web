<template>
  <div class="bg_secondary">
    <div class="section py-100">
      <el-row :gutter="10">
        <el-col :xs="24" :sm="24" :md="12">
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
              class="mt-30 mr-20"
              type="primary"
              @click="applyCourse('software_dev')"
              >Apply Now</el-button
            >
            <el-button class="mt-30" size="large" type="danger" plain
              ><a href="http://localhost:8080/#courses">View Courses</a>
            </el-button>
          </div>
        </el-col>

        <el-col :xs="24" :sm="24" :md="12" class="mob_mt">
          <div class="d-flex-align-center justify-right">
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
  padding: 20px 10px 20px 5px;

  h1 {
    font-size: 3rem;
    line-height: 60px;
  }

  p {
    max-width: 450px;
    width: 100%;
  }
}
a {
  color: inherit;
}
</style>
