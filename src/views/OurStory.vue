<template>
  <div>
    <div class="course_page_header py-70">
      <div class="section">
        <div>
          <el-row :gutter="50" type="flex">
            <el-col :span="12">
              <br />
              <h2 class="story_p mt-20">
                We empower and prepare product managers, product designers, and
                software developers for success within the tech industry.
              </h2>
            </el-col>

            <el-col :span="12" class="mob_mt">
              <div class="d-flex-align-center">
                <img
                  src="https://skillembassy-website-images.s3.us-east-2.amazonaws.com/untitled+folder/our-story.png"
                  alt="img"
                  width="100%"
                />
              </div>
            </el-col>
          </el-row>
          <br /><br />
          <p class="story_p_bold center">
            Now that you're here at Skill Embassy, you are part of us. This
            booklet will introduce you to the important inside story so that you
            can keep them in mind while you work.
          </p>
        </div>
      </div>
    </div>

    <div class="bg_business py-100">
      <h3 class="center h_title white">Who We Are</h3>
      <br />
      <p class="text_highlight curr_p white center">
        We are an inclusive community and the only Product Accelerators in the
        job market democratizing innovation for Aspiring Product Managers,
        Builders, and Side Hustlers.
      </p>

      <div class="section mt-40">
        <el-row :gutter="20">
          <el-col :xs="24" :sm="24" :md="8">
            <div class="program_div mob_90">
              <div class="program spon">An Inclusive Community</div>
              <p class="px-0 mt-20 white">
                We go to great lengths to ensure that all students and
                collaborators are respected. We advocate for fairness and
                opportunity. Skill Embassy strives to include all stakeholders
                in decision-making processes that impact their lives.
              </p>
            </div>
          </el-col>
          <el-col :xs="24" :sm="24" :md="8">
            <div class="program_div mob_90">
              <div class="program part">We Empower Product teams</div>
              <p class="px-0 mt-20 white">
                We empower you learn , upskill and launch successful products.
              </p>
            </div>
          </el-col>
          <el-col :xs="24" :sm="24" :md="8">
            <div class="program_div mob_90">
              <div class="program pool">Our ultimate goal</div>
              <p class="px-0 mt-20 white">
                Our ultimate goal is to empower technologists from all
                backgrounds to succeed within the tech industry.
              </p>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>

    <!-- <div class="section py-70">
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
    </div> -->

    <div class="bg_story full_width">
      <div class="section_story">
        <h3 class="center h_title">Who We Are</h3>

        <el-row :gutter="50" type="flex" class="mt-30">
          <el-col :span="12" class="mob_mt">
            <div>
              <h3>We Grow</h3>
              <p class="mt-10 text_highlight_p">
                The never-ending pursuit of better solutions is central to all
                we do. We believe in the power of collaboration, hands-on
                learning, and creating a community where everyone can develop
                together. Our aim to foster a learning-by-doing atmosphere
                drives us to make the next big decision.
              </p>
            </div>
          </el-col>

          <el-col :span="12">
            <div class="d-flex-align-center mt-20">
              <img src="../assets/images/grow.png" alt="img" width="100%" />
            </div>
          </el-col>
        </el-row>

        <el-row :gutter="50" type="flex" class="mt-70">
          <el-col :span="12">
            <div class="d-flex-align-center mt-20">
              <img src="../assets/images/innovate.png" alt="img" width="100%" />
            </div>
          </el-col>

          <el-col :span="12" class="mob_mt">
            <div>
              <h3>We Innovate</h3>
              <p class="mt-10 text_highlight_p">
                We are not doing anything new; rather, we are doing what
                everyone else does, just better. Students are able to grasp and
                solve modern-day difficulties, break down futile societal
                constructs, and evolve toward a sustainable future by combining
                technology and creative problem solving.
              </p>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="50" class="mt-70">
          <el-col :xs="24" :sm="24" :md="12" class="mob_mt">
            <div>
              <h3>We Empower</h3>
              <p class="mt-10 text_highlight_p">
                It is difficult to break into and excel in technology. It's even
                more challenging if you're changing careers or don't have a
                traditional graduate degree. Our mission is to inspire motivated
                individuals to solve real-world problems by utilizing technology
                to develop new solutions that address social issues.
              </p>
            </div>
          </el-col>

          <el-col :xs="24" :sm="24" :md="12" class="mob_mt">
            <div class="d-flex-align-center mt-20">
              <img src="../assets/images/empower.png" alt="img" width="100%" />
            </div>
          </el-col>
        </el-row>
      </div>
    </div>

    <div class="full_width bg_business py-70">
      <HowItWorks />
      <div class="d-flex justify_center">
        <div class="advisor_div">
          <p>
            Would you like to know more? Our admission consultants can help you
            schedule a conversation with a learning advisor.
          </p>
          <el-button class="mt-20" type="primary"
            >Talk to a Learning Advisor
          </el-button>
        </div>
      </div>
    </div>

    <div class="full_width bg_testimony py-70">
      <Collaborate />
    </div>

    <Apply />
    <div class="full-width bg_footer">
      <Footer />
    </div>
  </div>
</template>

<script>
import HowItWorks from '@/components/HowItWorks';
import Collaborate from '@/components/Collaborate';
import Footer from '@/components/Footer';
import Apply from '@/components/Apply';

export default {
  name: 'OurStory',
  components: {
    HowItWorks,
    Footer,
    Apply,
    Collaborate,
  },
  created() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },
};
</script>

<style lang="scss" scoped>
.story_p {
  font-size: 1.7rem;
  line-height: 45px;
  max-width: 800px;
  width: 90%;
  margin: 50px auto;
}

.story_p_bold {
  font-size: 1.6rem;
  font-family: PoppinsMedium;
  line-height: 40px;
  max-width: 800px;
  width: 90%;
  margin: 50px auto;
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

.section_story {
  max-width: 850px;
  width: 100%;
  margin: 0 auto;
  padding: 100px 10px;

  h3 {
    font-size: 1.3rem;
  }
}
</style>
