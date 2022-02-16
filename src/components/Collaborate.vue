<template>
  <div class="section">
    <el-row :gutter="50" type="flex">
      <el-col :span="12">
        <div>
          <h2 class="mt-20">Collaborate with us</h2>

          <p class="text_highlight mt-20">
            We have the ability to shape the next generation of innovators and
            thinkers. Let us collaborate to create, impact, and develop the next
            generation of engineers, managers and designers.
          </p>

          <el-button
            @click="$router.push('/business')"
            size="large"
            plain
            type="primary"
            class="mt-40"
            icon="el-icon-money"
            ><b>Learn More</b></el-button
          >
        </div>
      </el-col>
      <el-col :span="12" class="mob_mt">
        <div>
          <img
            src="https://skillembassy-website-images.s3.us-east-2.amazonaws.com/untitled+folder/collaborate-with-us.png"
            alt="coll"
            width="100%"
          />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Collaborate',
};
</script>
