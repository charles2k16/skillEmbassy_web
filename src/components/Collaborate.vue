<template>
  <div class="section py-150">
    <el-row :gutter="50">
      <el-col :xs="24" :sm="24" :md="12">
        <div>
          <h2 class="mt-20">Collaborate with us</h2>

          <p class="text_highlight mt-20">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus
            hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque,
            aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula
            sollicitudin laoreet viverra.
          </p>

          <el-button type="danger" class="mt-40" icon="el-icon-phone"
            ><b>Learn More</b></el-button
          >
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12">
        <div>
          <img
            src="../assets/images/collaborate-with-us.png"
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
