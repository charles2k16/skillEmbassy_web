<template>
  <div class="section business py-150">
    <h1>For Businesses</h1>

    <el-row :gutter="50" class="mt-70">
      <el-col :xs="24" :sm="24" :md="12">
        <div class="d-flex">
          <div class="vl mr-20"></div>
          <h2>DEVELOP DIGITAL TALENT IN YOUR COMPANY</h2>
        </div>
        <p class="text_highlight mt-40">
          Accelerate the pace of your company's digital evolution with training
          that makes your team more agile, collaborative and innovative.
        </p>

        <el-button type="danger" class="mt-40" icon="el-icon-phone"
          ><b>TALK TO US</b></el-button
        >
      </el-col>

      <el-col :xs="24" :sm="24" :md="12">
        <div>
          <img
            src="../assets/images/for-businesses.png"
            alt="bus"
            width="100%"
          />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'ForBusiness',
};
</script>

<style lang="scss" scoped>
.business {
  h1,
  h2,
  p {
    color: whitesmoke;
  }
}
.vl {
  border-left: 10px solid rgb(211, 39, 8);
  height: 110px;
}
</style>
