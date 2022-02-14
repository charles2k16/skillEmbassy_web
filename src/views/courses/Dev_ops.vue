<template>
  <div>
    <div class="course_page_header">
      <div class="section py-100">
        <el-row :gutter="50">
          <el-col :xs="24" :sm="24" :md="10" class="mob_mt">
            <h3 class="course_hd">Start Your Career As A DevOps Engineer</h3>
            <p class="mt-20 text_highlight">
              Learn the step by step method of creating, deploying and
              automating infrastructures directly from the leaders who have been
              there and done that.
            </p>

            <el-button
              type="primary"
              class="mt-20"
              @click="applyCourse('dev_ops')"
              >Apply Now</el-button
            >
          </el-col>

          <el-col :xs="24" :sm="24" :md="14" class="mob_mt">
            <div class="d-flex-align-center">
              <img
                src="../../assets/images/gifs/devops.gif"
                alt="gif"
                class="course_head_img"
              />
            </div>
          </el-col>
        </el-row>
        <br />
      </div>
    </div>

    <div class="section py-100">
      <div class="course_detail">
        <h2>The program is best suited for</h2>
        <el-row :gutter="20">
          <el-col :xs="24" :sm="24" :md="6">
            <div class="program_div">
              <div class="program">Software Developers</div>
              <p class="px-0 mt-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                natus soluta tempore.
              </p>
            </div>
          </el-col>
          <el-col :xs="24" :sm="24" :md="6">
            <div class="program_div">
              <div class="program">System Administrators</div>
              <p class="px-0 mt-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                natus soluta tempore.
              </p>
            </div>
          </el-col>
          <el-col :xs="24" :sm="24" :md="6">
            <div class="program_div">
              <div class="program">Network Engineesr</div>
              <p class="px-0 mt-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                natus soluta tempore.
              </p>
            </div>
          </el-col>
          <el-col :xs="24" :sm="24" :md="6">
            <div class="program_div">
              <div class="program">Cloud Engineesr</div>
              <p class="px-0 mt-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                natus soluta tempore.
              </p>
            </div>
          </el-col>
          <el-col :xs="24" :sm="24" :md="6">
            <div class="program_div">
              <div class="program">Testing Engineesr/QA</div>
              <p class="px-0 mt-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                natus soluta tempore.
              </p>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>

    <div class="bg_white py-100">
      <LiveClasses />
    </div>

    <div class="curr_bg py-70">
      <h3 class="center h_title">Curriculum</h3>
      <br />
      <p class="text_highlight curr_p">
        With an extensive curriculum, we provide exclusive learning contents
        that focus on the significant growth of your remarkable engineering,
        design, and management career.
      </p>
      <div class="section d-flex-center">
        <el-collapse accordion class="curriculum mt-20 mb-40">
          <el-collapse-item
            v-for="(curr, index) in curriculum"
            :key="index"
            :name="`${index++}`"
          >
            <template slot="title">
              <span class="step_num mr-1">Week {{ index++ }}</span
              >{{ curr.name }}
            </template>
            <div>
              <p v-html="curr.description"></p>
            </div>
          </el-collapse-item>
        </el-collapse>
      </div>
    </div>

    <div class="full_width bg_business py-100">
      <div>
        <h3 class="center h_title white">Recomended Schedule</h3>
        <div class="d-flex-center">
          <p class="mt-40 text_highlight white px-20">
            * Schedule based on follwing assumptions:
            <br />
            * 10 - 15 hours / week either software development or operations
            background.
            <br />
            * Work along the demos and do excercises.
          </p>
        </div>

        <h3 class="center mt-40 white">What are your frustrations ?</h3>
        <br />
        <div class="d-flex-center">
          <div class="curriculum mb-40 d-flex">
            <div class="schedule_box">
              <p>
                Learnt many technologies but dont know how to use them together
              </p>
            </div>
            <div class="schedule_box">
              <p>
                Don't know how real ,ife examples look like so don't feel
                confident you can really use these tools in practice.
              </p>
            </div>
          </div>
        </div>
        <div class="center">
          <el-button type="primary" icon="el-icon-edit-outline">
            <b>APPLY</b></el-button
          >
        </div>
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
            >Talk to a Learning Advisor</el-button
          >
        </div>
      </div>
    </div>
    <div class="full_width bg_white py-70">
      <Faqs />
    </div>

    <div class="full_width bg_callUs py-70">
      <div class="center">
        <p class="callUs_p">Ready to change your your life?</p>
        <h3 class="callUs_h3 mt-20">
          Take the next step & apply to Skill Embassy.
        </h3>
      </div>

      <div class="mt-40 d-flex justify_center">
        <el-button icon="el-icon-edit-outline" @click="applyCourse('dev_ops')">
          <b>APPLY NOW</b></el-button
        >
      </div>
    </div>
    <div class="full-width bg_footer">
      <Footer />
    </div>
  </div>
</template>

<script>
import Faqs from '../../components/Faqs.vue';
import Footer from '../../components/Footer.vue';
import HowItWorks from '../../components/HowItWorks.vue';
import LiveClasses from '../../components/LiveClasses.vue';

export default {
  name: 'Dev_ops',
  components: {
    Faqs,
    HowItWorks,
    Footer,
    LiveClasses,
  },
  created() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },
  data() {
    return {
      activeQuestion: ['1'],
      // activeCurr: ['1'],
      curriculum: [
        {
          name: 'Introduction to DevOps',
          description:
            ' - Devops BootCamp Overview <br /> - What is DEvOps <br /> - Roles and Responsibilities of DevOps Engineer <br /> - How DevOps fit in the whole Software Development lifecycle.',
        },
        {
          name: 'Operating Systems and Linux basics',
          description:
            ' - Devops BootCamp Overview <br /> - What is DEvOps <br /> - Roles and Responsibilities of DevOps Engineer <br /> - How DevOps fit in the whole Software Development lifecycle.',
        },
        {
          name: 'Version Control with Git',
          description:
            ' - Devops BootCamp Overview <br /> - What is DEvOps <br /> - Roles and Responsibilities of DevOps Engineer <br /> - How DevOps fit in the whole Software Development lifecycle.',
        },
        {
          name: 'Build and Packagee Manager Tools',
          description:
            ' - Devops BootCamp Overview <br /> - What is DEvOps <br /> - Roles and Responsibilities of DevOps Engineer <br /> - How DevOps fit in the whole Software Development lifecycle.',
        },
        {
          name: 'Cloud and Infrastructure as a service basics',
          description:
            ' - Devops BootCamp Overview <br /> - What is DEvOps <br /> - Roles and Responsibilities of DevOps Engineer <br /> - How DevOps fit in the whole Software Development lifecycle.',
        },
        {
          name: 'Artifact Repsitory Manager with Nexus',
          description:
            ' - Devops BootCamp Overview <br /> - What is DEvOps <br /> - Roles and Responsibilities of DevOps Engineer <br /> - How DevOps fit in the whole Software Development lifecycle.',
        },
        {
          name: 'Containers with Docker',
          description:
            ' - Devops BootCamp Overview <br /> - What is DEvOps <br /> - Roles and Responsibilities of DevOps Engineer <br /> - How DevOps fit in the whole Software Development lifecycle.',
        },
        {
          name: 'Build Automation - CI/CD with Jenkins',
          description:
            ' - Devops BootCamp Overview <br /> - What is DEvOps <br /> - Roles and Responsibilities of DevOps Engineer <br /> - How DevOps fit in the whole Software Development lifecycle.',
        },
        {
          name: 'AWS Service',
          description:
            ' - Devops BootCamp Overview <br /> - What is DEvOps <br /> - Roles and Responsibilities of DevOps Engineer <br /> - How DevOps fit in the whole Software Development lifecycle.',
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.schedule_box {
  max-width: 300px;
  width: 90%;
  border: 3px dotted #5138ce;
  padding: 20px;
  margin-right: 15px;

  p {
    color: rgb(216, 225, 250);
  }
}
</style>
