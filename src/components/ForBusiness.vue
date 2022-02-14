<template>
  <div class="section business">
    <h1>For Businesses</h1>

    <el-row :gutter="50" type="flex" class="mt-70">
      <el-col :span="12">
        <div class="d-flex">
          <div class="vl mr-20"></div>
          <h2>DEVELOP DIGITAL TALENT IN YOUR COMPANY</h2>
        </div>
        <p class="text_highlight mt-40">
          Accelerate the pace of your company's digital evolution with training
          that makes your team more agile, collaborative and innovative.
        </p>

        <el-button class="mt-40" icon="el-icon-phone"
          ><b>TALK TO US</b></el-button
        >
      </el-col>

      <el-col :span="12" class="mob_mt">
        <div>
          <img
            src="https://skillembassy-website-images.s3.us-east-2.amazonaws.com/untitled+folder/for-businesses.png"
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
  padding: 0px 10px;
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
