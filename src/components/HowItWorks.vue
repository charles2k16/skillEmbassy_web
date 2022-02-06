<template>
  <div class="section center">
    <h2 class="white">How The Admission Process Works</h2>
    <p class="text_highlight white hiw_p">
      Joining our learning community and becoming a member of a smart team is
      simple. This basic steps will teach you how it works.
    </p>

    <div class="mt-70 hidden-sm-and-down">
      <img
        src="https://skillembassy-website-images.s3.us-east-2.amazonaws.com/untitled+folder/application_process.png"
        alt="process"
        width="100%"
      />
    </div>

    <div class="mt-70 howItWorksImg hidden-md-and-up">
      <img
        src="https://skillembassy-website-images.s3.us-east-2.amazonaws.com/untitled+folder/selected-admission-process4.png"
        alt=""
      />
      <img
        src="https://skillembassy-website-images.s3.us-east-2.amazonaws.com/untitled+folder/selected-admission-process3.png"
        alt=""
      />
      <img
        src="https://skillembassy-website-images.s3.us-east-2.amazonaws.com/untitled+folder/selected-admission-process1.png"
        alt=""
      />
      <img
        src="https://skillembassy-website-images.s3.us-east-2.amazonaws.com/untitled+folder/selected-admission-process.png"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'HowItWorks',
};
</script>

<style lang="scss" scoped>
.hiw_p {
  max-width: 710px;
  width: 100%;
  margin: 20px auto;
}

.howItWorksImg {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 25px;
  overflow-x: auto;
  width: 100%;

  img {
    max-width: 280px;
    width: 100%;
  }
}
</style>
