<template>
  <div>
    <div class="ripple-background">
      <div class="circle xxlarge shade1"></div>
      <div class="circle xlarge shade2"></div>
      <div class="circle large shade3"></div>
      <div class="circle mediun shade4"></div>
      <div class="circle small shade5"></div>

      <Hero />
    </div>

    <div class="full_width bg_primary">
      <WhyUs />
    </div>

    <div class="full_width bg_courses" id="courses">
      <Courses />
    </div>

    <div class="full_width bg_business">
      <HowItWorks />
    </div>

    <div class="full_width bg_testimony">
      <Collaborate />
    </div>

    <div class="full_width bg_callUs py-100">
      <div class="center">
        <p class="callUs_p">
          We offer a wide variety of programs and courses built on adaptive
          curriculum
        </p>
        <h3 class="callUs_h3 mt-20">SPEAK TO A LEARNING ADVISOR</h3>
      </div>

      <div class="mt-40 d-flex justify_center">
        <el-button type="danger" plain
          ><a
            href="https://calendly.com/skillembassy/consultation"
            target="_blank"
            >SCHEDULE A 1:1 CALL</a
          >
        </el-button>
        <el-button type="danger" plain>JOIN A Q&A SESSION</el-button>
      </div>
    </div>

    <div class="full_width bg_mentors">
      <OurMentors />
    </div>

    <div class="full_width bg_testimony">
      <Testimonies />
    </div>

    <div class="full_width bg_business">
      <ForBusiness />
    </div>

    <div class="full_width bg_white">
      <Faqs />
    </div>

    <!-- <div class="full_width bg_faqs">
      <BlogLists />
    </div> -->

    <div class="full_width bg_callUs py-100">
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
          @click="applyCourse"
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
import Collaborate from '../components/Collaborate.vue';
import Faqs from '../components/Faqs.vue';
import Footer from '../components/Footer.vue';
import ForBusiness from '../components/ForBusiness.vue';
import Hero from '../components/Hero.vue';
import Courses from '../components/Courses.vue';
import HowItWorks from '../components/HowItWorks.vue';
import OurMentors from '../components/OurMentors.vue';
import Testimonies from '../components/Testimonies.vue';
import WhyUs from '../components/WhyUs.vue';

export default {
  name: 'Home',
  components: {
    Hero,
    WhyUs,
    Collaborate,
    OurMentors,
    Testimonies,
    ForBusiness,
    Faqs,
    HowItWorks,
    Footer,
    Courses,
  },
};
</script>
