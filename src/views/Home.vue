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

    <div class="full_width bg_courses" id="course">
      <Courses />
    </div>

    <div class="full_width bg_business py-70 px-0">
      <HowItWorks />
    </div>

    <div class="full_width bg_testimony py-70 px-0">
      <Collaborate />
    </div>

    <div class="full_width bg_callUs py-100 px-0">
      <div class="center">
        <p class="callUs_p">
          We offer a wide variety of programs and courses built on adaptive
          curriculum
        </p>
        <h3 class="callUs_h3 mt-20">SPEAK TO A LEARNING ADVISOR</h3>
      </div>

      <div class="mt-40 d-flex justify_center flex_wrap">
        <el-button plain type="primary" icon="el-icon-phone"
          ><a
            href="https://calendly.com/skillembassy/consultation"
            target="_blank"
            >SCHEDULE A 1:1 CALL</a
          >
        </el-button>

        <el-button plain type="primary" icon="el-icon-phone" class="mob_mt">
          JOIN A Q&A SESSION</el-button
        >
      </div>
    </div>

    <div class="full_width bg_mentors px-0">
      <OurMentors />
    </div>

    <div class="full_width mt-40 mb-40">
      <h3 style="font-size: 20px" class="center">
        Our Mentors And Instructors Work At
      </h3>
      <OurPartners />
    </div>

    <div class="full_width bg_testimony py-100 px-0">
      <Testimonies />
    </div>

    <div class="full_width bg_business py-100 px-0">
      <ForBusiness />
    </div>

    <div class="full_width bg_white py-100 px-0">
      <Faqs />
    </div>

    <!-- <div class="full_width bg_faqs">
      <BlogLists />
    </div> -->

    <Apply />

    <div class="full-width bg_footer px-0">
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
import Apply from '../components/Apply.vue';
import OurPartners from '../components/OurPartners.vue';

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
    Apply,
    OurPartners,
  },
  created() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },
};
</script>
