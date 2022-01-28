<template>
  <div>
    <div class="course_page_header py-70">
      <div class="section">
        <p class="story_p center">
          Now that you're here at Skill Embassy, you are part of us. This
          booklet will introduce you to the important inside story so that you
          can keep them in mind while you work.
        </p>
        <br />
        <br />
        <div class="mt-70">
          <el-row :gutter="50">
            <el-col :xs="24" :sm="24" :md="12">
              <div class="d-flex-align-center">
                <img
                  src="https://via.placeholder.com/458x300?text=Business+Image"
                  alt=""
                />
              </div>
            </el-col>

            <el-col :xs="24" :sm="24" :md="12" class="mob_mt">
              <br />
              <p class="story_p mt-40">
                We empower and prepare product managers, product designers, and
                software developers for success within the tech industry.
              </p>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>

    <div class="bg_business py-100">
      <h3 class="center h_title white">Who We Are</h3>
      <br />
      <p class="text_highlight curr_p white center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
        itaque, voluptatem corporis eos, perferendis eligendi expedita nihil
      </p>

      <div class="section mt-40">
        <el-row :gutter="20">
          <el-col :xs="24" :sm="24" :md="8">
            <div class="program_div bordered_div">
              <div class="program spon">Become a Sponsor</div>
              <p class="px-0 mt-20 white">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit
                iure, ea fuga consectetur amet magni voluptatum asperiores
                facilis eos quibusdam consequatur ipsam minus neque cupiditate
                nemo architecto? Expedita, nemo enim!
              </p>

              <el-button class="mt-20" icon="el-icon-money">
                <b>Collaborate With Us</b></el-button
              >
            </div>
          </el-col>
          <el-col :xs="24" :sm="24" :md="8">
            <div class="program_div bordered_div">
              <div class="program part">Become our Partner</div>
              <p class="px-0 mt-20 white">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit
                iure, ea fuga consectetur amet magni voluptatum asperiores
                facilis eos quibusdam consequatur ipsam minus neque cupiditate
                nemo architecto? Expedita, nemo enim!
              </p>
              <el-button class="mt-20" icon="el-icon-money">
                <b>Collaborate With Us</b></el-button
              >
            </div>
          </el-col>
          <el-col :xs="24" :sm="24" :md="8">
            <div class="program_div bordered_div">
              <div class="program pool">Hire from our Talent Pool</div>
              <p class="px-0 mt-20 white">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit
                iure, ea fuga consectetur amet magni voluptatum asperiores
                facilis eos quibusdam consequatur ipsam minus neque cupiditate
                nemo architecto? Expedita, nemo enim!
              </p>
              <el-button class="mt-20" icon="el-icon-money" plain>
                <b>Collaborate With Us</b></el-button
              >
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OurStory',
};
</script>

<style lang="scss" scoped>
.story_p {
  font-size: 1.6rem;
  line-height: 36px;
  max-width: 800px;
  width: 90%;
  margin: 0 auto;
}
</style>
