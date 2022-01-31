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
            <div class="program_div mob_90">
              <div class="program spon">An Inclusive Community</div>
              <p class="px-0 mt-20 white">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit
                iure, ea fuga consectetur amet magni voluptatum asperiores
                facilis eos quibusdam consequatur ipsam minus neque cupiditate
                nemo architecto? Expedita, nemo enim!
              </p>
            </div>
          </el-col>
          <el-col :xs="24" :sm="24" :md="8">
            <div class="program_div mob_90">
              <div class="program part">We Empower Product teams</div>
              <p class="px-0 mt-20 white">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit
                iure, ea fuga consectetur amet magni voluptatum asperiores
                facilis eos quibusdam consequatur ipsam minus neque cupiditate
                nemo architecto? Expedita, nemo enim!
              </p>
            </div>
          </el-col>
          <el-col :xs="24" :sm="24" :md="8">
            <div class="program_div mob_90">
              <div class="program pool">Our ultimate goal</div>
              <p class="px-0 mt-20 white">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit
                iure, ea fuga consectetur amet magni voluptatum asperiores
                facilis eos quibusdam consequatur ipsam minus neque cupiditate
                nemo architecto? Expedita, nemo enim!
              </p>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>

    <div class="py-100">
      <Faqs title="Why Choose Skill Embassy" />
    </div>

    <div class="section">
      <div class="profiles_wrapper">
        <div class="profile course_div">
          <el-avatar
            class="mt-20"
            :size="100"
            src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
          ></el-avatar>

          <div class="info">
            <span class="d-block name">Myles Johnson</span>
            <span class="d-block mt-0">Founder & CEO</span>
            <span class="d-block mt-10">Sennior DevOps Engineer</span>
          </div>

          <div class="socials">
            <a><img src="../assets/images/instagram.png" alt="instagram" /></a>
            <a><img src="../assets/images/facebook.png" alt="facebook" /></a>
            <a><img src="../assets/images/linkedin.png" alt="linkedin" /></a>
          </div>
        </div>

        <div class="profile course_div">
          <el-avatar
            class="mt-20"
            :size="100"
            src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
          ></el-avatar>

          <div class="info">
            <span class="d-block name">Myles Johnson</span>
            <span class="d-block mt-0">Founder & CEO</span>
            <span class="d-block mt-10">Sennior DevOps Engineer</span>
          </div>

          <div class="socials">
            <a><img src="../assets/images/instagram.png" alt="instagram" /></a>
            <a><img src="../assets/images/facebook.png" alt="facebook" /></a>
            <a><img src="../assets/images/linkedin.png" alt="linkedin" /></a>
          </div>
        </div>

        <div class="profile course_div">
          <el-avatar
            class="mt-20"
            :size="100"
            src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
          ></el-avatar>

          <div class="info">
            <span class="d-block name">Myles Johnson</span>
            <span class="d-block mt-0">Founder & CEO</span>
            <span class="d-block mt-10">Sennior DevOps Engineer</span>
          </div>

          <div class="socials">
            <a><img src="../assets/images/instagram.png" alt="instagram" /></a>
            <a><img src="../assets/images/facebook.png" alt="facebook" /></a>
            <a><img src="../assets/images/linkedin.png" alt="linkedin" /></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Faqs from '@/components/Faqs';

export default {
  name: 'OurStory',
  components: {
    Faqs,
  },
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

.profiles_wrapper {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 25px;
  overflow-x: auto;
  width: 100%;

  .profile {
    max-width: 280px;
    width: 90%;
    border-radius: 5px;
    margin: 20px 20px;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background: #dbe4f5;

    .info {
      margin-top: -60px;
      text-align: center;

      span.name {
        font-size: 1.1rem;
        color: rgb(8, 5, 61);
        font-weight: bold;
      }
    }

    .socials {
      width: 100%;
      background: #aeb7f0;
      height: 35px;
      display: flex;
      justify-content: center;
      align-items: center;

      a {
        margin-right: 20px;

        img {
          margin-top: 5px;
          width: 20px;
        }
      }
    }
  }
}
</style>
