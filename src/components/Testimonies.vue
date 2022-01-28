<template>
  <div class="section">
    <el-row :gutter="50">
      <el-col :xs="24" :sm="24" :md="10">
        <div class="testimony_title">
          <h2>
            What Some <br />
            Students Say <br />
            About <br />
            Skill Embassy
          </h2>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="14">
        <el-carousel height="520px">
          <el-carousel-item>
            <div class="testimony_divX">
              <i class="el-icon-chat-dot-square"></i>
              <i class="el-icon-chat-dot-square"></i>
              <p class="mt-20 text_highlight">
                I enjoyed the service and the opportunity Skill Embassy offers.
                I think as a platform that is seeking to breach the gap and
                provide a solution helping potential professionals in tech find
                a foot or experience. Apart from communication concerns, I think
                it can help young individuals willing to contribute to a team
                build their case study.
              </p>
              <div class="d-flex mt-40">
                <img
                  src="../assets/images/testimonials/hakeem.jpeg"
                  alt="hakeem"
                  class="hakeem"
                />
                <div>
                  <small>Hakeem Adjei</small> <br />
                  <small>Product Designer, Cohort 1</small>
                </div>
              </div>
            </div>
          </el-carousel-item>
          <el-carousel-item>
            <div class="testimony_divX mt-40">
              <i class="el-icon-chat-dot-square"></i>
              <i class="el-icon-chat-dot-square"></i>
              <p class="mt-20 text_highlight">
                This is the best learning platform I have ever worked with.
                Everything is professional and done at ease,
              </p>
              <div class="d-flex mt-40">
                <img
                  src="../assets/images/testimonials/christy.jpg"
                  alt="christy"
                  class="christy"
                />
                <div>
                  <small>Christiana Sunbabaara</small> <br />
                  <small>Backend Developer, Cohort 1</small>
                </div>
              </div>
            </div>
          </el-carousel-item>
          <el-carousel-item>
            <div class="testimony_divX mt-40">
              <i class="el-icon-chat-dot-square"></i>
              <i class="el-icon-chat-dot-square"></i>
              <p class="mt-20 text_highlight">
                Nice coaching, good mentors and an all round focused people at
                work. I am enjoying the journey.
              </p>
              <div class="d-flex mt-40">
                <img
                  src="../assets/images/testimonials/eunit.jpg"
                  alt="eunit"
                  class="eunit"
                />
                <div>
                  <small>Emmanuel Uchenna</small> <br />
                  <small>Frontend Developer, Cohort 1</small>
                </div>
              </div>
            </div>
          </el-carousel-item>
        </el-carousel>
      </el-col>
    </el-row>

    <el-row :gutter="50" class="mt-40">
      <el-col :xs="24" :sm="24" :md="24">
        <el-alert
          class="refund_policy"
          type="info"
          show-icon
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur, 
              sequi illum sapiente explicabo delectus fugiat laudantium. 
              In unde, repellendus repellat vel, repudiandae id quis consectetur minus, 
              iste distinctio saepe aliquid? Lorem ipsum dolor, sit amet consectetur adipisicing
              elit. Aspernatur, sequi illum sapiente explicabo delectus fugiat laudantium."
        >
        </el-alert>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Testimonies',
};
</script>

<style lang="scss" scoped>
.testimony_title {
  margin-top: 100px;
}
.testimony_divX {
  border-style: solid;
  border-width: 0px 0px 0px 0px;
  border-color: #ffffff;
  background: #e1e1f7;
  border-radius: 15px;
  padding: 25px;
  width: 470px;
  // box-shadow: 0px 10px 40px 0px rgb(51 51 51 / 20%);
}

.christy {
  width: 60px;
  height: 50px;
}
.eunit {
  width: 50px;
  height: 50px;
}

img {
  border-radius: 50%;
  margin-right: 30px;
}

i {
  font-size: 50px;
  color: #3a3cbb;
  // font-weight: bold;
}
.hakeem {
  width: 60px;
}
</style>
