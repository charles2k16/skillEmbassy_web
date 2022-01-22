<template>
  <div>
    <div class="course_page_header">
      <div class="section py-100">
        <el-row :gutter="50">
          <el-col :xs="24" :sm="24" :md="12">
            <h3 class="white course_hd">Digital Product Designer</h3>
            <p class="mt-40 text_highlight white">
              Learn the step by step method of creating managing and growing
              successful products, directly from the leaders who have been there
              and done that.
            </p>
            <el-button type="primary" class="mt-20"
              >Talk to a Learning Advisor</el-button
            >
          </el-col>

          <el-col :xs="24" :sm="24" :md="12">
            <div class="d-flex-align-center justify-right"></div>
          </el-col>
        </el-row>
      </div>
    </div>

    <div class="section py-100">
      <div class="course_detail">
        <h2>The program is best suited for</h2>
        <el-row :gutter="20">
          <el-col :xs="24" :sm="24" :md="8">
            <div class="program_div">
              <div class="program">Professionals</div>
              <p class="px-0 mt-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                natus soluta tempore.
              </p>
            </div>
          </el-col>
          <el-col :xs="24" :sm="24" :md="8">
            <div class="program_div">
              <div class="program">Entrepreneurs</div>
              <p class="px-0 mt-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                natus soluta tempore.
              </p>
            </div>
          </el-col>
          <el-col :xs="24" :sm="24" :md="8">
            <div class="program_div">
              <div class="program">"Senior" Freshers</div>
              <p class="px-0 mt-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                natus soluta tempore.
              </p>
            </div>
          </el-col>
        </el-row>
        <br />
      </div>
    </div>

    <div class="bg_white py-100">
      <div class="section">
        <el-row :gutter="20">
          <el-col :xs="24" :sm="24" :md="2"> .</el-col>
          <el-col :xs="24" :sm="24" :md="10">
            <div>
              <img
                src="../../assets/images/gifs/product-design.gif"
                alt="gif"
                width="100%"
              />
            </div>
          </el-col>

          <el-col :xs="24" :sm="24" :md="10">
            <div>
              <el-collapse
                v-model="activeQuestion"
                accordion
                class="course_faq"
              >
                <el-collapse-item name="1">
                  <template slot="title">
                    <i class="header-icon el-icon-info mr-1"></i> Live Classes
                  </template>
                  <div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Repudiandae blanditiis unde enim assumenda, consectetur
                      dolorem voluptates ab nam mollitia libero modi a quasi
                      molestias exercitationem et iure placeat aspernatur
                      doloribus.
                    </p>
                  </div>
                </el-collapse-item>
                <el-collapse-item name="2">
                  <template slot="title">
                    <i class="header-icon el-icon-info mr-1"></i> Hands-on
                    Training
                  </template>
                  <div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Iure culpa odit aliquid id facere quae fuga, quia
                      laboriosam eaque deserunt debitis vero voluptatem earum.
                      Consequuntur voluptatum nam consequatur nisi sunt.
                    </p>
                  </div>
                  <div></div>
                </el-collapse-item>
                <el-collapse-item name="3">
                  <template slot="title">
                    <i class="header-icon el-icon-info mr-1"></i> Solve Real
                    World Problems
                  </template>
                  <div>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Repudiandae, unde! Veritatis, saepe maxime laboriosam
                      numquam voluptatem sapiente soluta placeat magnam quo,
                      ipsam harum accusantium. Similique aspernatur pariatur
                      dolorem culpa quae!
                    </p>
                  </div>
                </el-collapse-item>
                <el-collapse-item name="4">
                  <template slot="title">
                    <i class="header-icon el-icon-info mr-1"></i> Mock
                    Interviews
                  </template>
                  <div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Facilis deserunt eos, ipsa velit quae cupiditate
                      repudiandae neque doloribus, aperiam dolor excepturi?
                      Magnam quod voluptatum culpa doloribus eos consequatur
                      soluta officia!
                    </p>
                  </div>
                </el-collapse-item>
                <el-collapse-item name="5">
                  <template slot="title">
                    <i class="header-icon el-icon-info mr-1"></i> Exhaustive
                    Curriculum
                  </template>
                  <div>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Nostrum laborum quo placeat molestias optio numquam,
                      maiores molestiae autem adipisci repudiandae quaerat saepe
                      incidunt earum quis omnis sequi ratione harum quam!
                    </p>
                  </div>
                </el-collapse-item>
              </el-collapse>
            </div>
          </el-col>

          <el-col :xs="24" :sm="24" :md="2"> </el-col>
        </el-row>
      </div>
    </div>

    <div class="py-70 curr_bg">
      <h3 class="center h_title">Curriculum</h3>
      <br />
      <p class="text_highlight curr_p">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam
        adipisci cupiditate aspernatur soluta quasi veniam, explicabo minus
        autem facere. In laudantium ab, error dignissimos doloremque repellat
        consequuntur consequatur nulla sequi!
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
          @click="applyCourse('product_design')"
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

export default {
  name: 'Product_design',
  components: {
    Faqs,
    HowItWorks,
    Footer,
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
