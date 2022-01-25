<template>
  <div>
    <div class="course_page_header">
      <div class="section py-100">
        <el-row :gutter="50">
          <el-col :xs="12" :sm="12" :md="12">
            <h3 class="white course_hd">Become A Digital Product Manager</h3>
            <p class="mt-40 text_highlight">
              Learn the step by step method of creating managingand growing
              successful products, directly from the leaders who have been there
              and done that.
            </p>
            <el-button
              type="primary"
              class="mt-20"
              @click="applyCourse('product_management')"
              >Apply Now</el-button
            >
          </el-col>

          <el-col :xs="12" :sm="12" :md="12">
            <div class="d-flex-align-center justify-right">
              <img
                src="../../assets/images/gifs/produt-management.gif"
                alt="gif"
                width="100%"
              />
            </div>
          </el-col>
        </el-row>
      </div>
    </div>

    <div class="section py-100">
      <div class="course_detail">
        <h2>The program is best suited for</h2>
        <el-row :gutter="20">
          <el-col :xs="12" :sm="12" :md="8">
            <div class="program_div">
              <div class="program">Professionals</div>
              <p class="px-0 mt-10">
                Professionals Seeking to move into product management jobs from
                backgrounds in engineering, marketing, sales, design,
                operations, and finance
              </p>
            </div>
          </el-col>
          <el-col :xs="12" :sm="12" :md="8">
            <div class="program_div">
              <div class="program">Entrepreneurs</div>
              <p class="px-0 mt-10">
                Seeking to establish a product mentality for their own endeavors
                in order to generate great products faster while avoiding
                potentially fatal mistakes
              </p>
            </div>
          </el-col>
          <el-col :xs="12" :sm="12" :md="8">
            <div class="program_div">
              <div class="program">"Serious" Freshers</div>
              <p class="px-0 mt-10">
                Freshers: who are prepared to put in more effort to study the
                actual art of product management and growth and advance into
                product jobs in tech firms
              </p>
            </div>
          </el-col>
        </el-row>
        <br />
      </div>
    </div>

    <div class="bg_white py-100">
      <LiveClasses />
    </div>

    <div class="py-70 curr_bg">
      <h3 class="center h_title">Curriculum</h3>
      <br />
      <p class="text_highlight curr_p">
        With an extensive curriculum, we provide exclusive learning contents
        that focus on the significant growth of your remarkable engineering,
        design, and management career.
      </p>
      <div class="section mt-20 d-flex-center">
        <el-collapse
          v-model="activeCurr"
          accordion
          class="curriculum mt-20 mb-40"
        >
          <el-collapse-item
            v-for="(curr, index) in curriculum"
            :key="index"
            :name="`${index.toString()}`"
          >
            <template slot="title">
              <span class="step_num mr-1">Week {{ index + 1 }}</span
              >{{ curr.name }}
            </template>
            <div>
              <p v-html="curr.description"></p>
            </div>
          </el-collapse-item>
        </el-collapse>
      </div>

      <div class="center mt-20">
        <el-button
          type="primary"
          icon="el-icon-edit-outline"
          @click="applyCourse('product_management')"
        >
          <b>APPLY NOW</b></el-button
        >
      </div>
    </div>
    <!-- <div class="py-70">
      <h3 class="center h_title">Prequisites</h3>
      <div class="section preq">
        <div class="preq_div">
          <h3>Week 1</h3>
          <p>Overview and Intro to DevOps</p>
        </div>
        <div class="preq_div">
          <h3>Week 1</h3>
          <p>Overview and Intro to DevOps</p>
        </div>
        <div class="preq_div">
          <h3>Week 1</h3>
          <p>Overview and Intro to DevOps</p>
        </div>
        <div class="preq_div">
          <h3>Week 1</h3>
          <p>Overview and Intro to DevOps</p>
        </div>
      </div>
    </div> -->

    <div class="full_width bg_business">
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
    <div class="full_width bg_white">
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
        <el-button
          type="danger"
          icon="el-icon-edit-outline"
          @click="applyCourse('product_management')"
        >
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
  name: 'Product_management',
  components: {
    Faqs,
    HowItWorks,
    Footer,
    LiveClasses,
  },
  data() {
    return {
      activeQuestion: ['1'],
      activeCurr: ['1'],
      // activeCurr: ['1'],
      curriculum: [
        {
          name: 'Understanding the product management & marketing tools',
          description:
            ' - Devops BootCamp Overview <br /> - What is DEvOps <br /> - Roles and Responsibilities of DevOps Engineer <br /> - How DevOps fit in the whole Software Development lifecycle.',
        },
        {
          name: 'User Reasearch, Market Research & Product Types',
          description:
            ' - Devops BootCamp Overview <br /> - What is DEvOps <br /> - Roles and Responsibilities of DevOps Engineer <br /> - How DevOps fit in the whole Software Development lifecycle.',
        },
      ],
    };
  },
};
</script>

<style lang="scss"></style>
