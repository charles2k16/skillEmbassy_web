<template>
  <div class="full_width bg_callUs py-100">
    <div class="center">
      <p class="callUs_p">Ready to change your your life?</p>
      <h3 class="callUs_h3 mt-20">
        Take the next step & apply to Skill Embassy.
      </h3>
    </div>

    <div class="mt-40 d-flex justify_center">
      <el-button
        plain
        type="primary"
        icon="el-icon-edit-outline"
        @click="applyCourse('software_dev')"
      >
        <b>APPLY NOW</b></el-button
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'Apply',
};
</script>
