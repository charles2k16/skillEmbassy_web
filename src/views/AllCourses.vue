<template>
  <div>
    <div class="section">
      <el-row :gutter="50" class="py-70">
        <el-col :xs="24" :sm="24" :md="12">
          <div>
            <h1>All Courses & Training</h1>
            <p class="mt-20 all_courses_p">
              Take a part-time, evening, weekend or online course at Skill
              Embassy and gain the momentum your career needs. Learn how to
              apply new tools, methods, and processes to your workplace and see
              real-time results and added value right away.
            </p>
          </div>
        </el-col>

        <el-col :xs="24" :sm="24" :md="12">
          <div class="d-flex-align-center justify-right">
            <img
              src="https://skillembassy-website-images.s3.us-east-2.amazonaws.com/skill-embassy-head.png"
              alt="coding school"
              width="100%"
            />
          </div>
        </el-col>
      </el-row>

      <div class="all_courses py-100">
        <h3>All our courses</h3>

        <div class="mt-40 course_list_container">
          <div
            v-for="(course, index) in courses"
            :key="index"
            :class="
              index % 2 == 0 ? 'course_list' : 'course_list course_list_bg'
            "
          >
            <div>
              <h3>{{ course.title }}</h3>
              <span class="d-block mt-10 week">{{ course.duration }}</span>
            </div>

            <span>{{ course.type }}</span>

            <span>Online</span>
          </div>
        </div>
      </div>
    </div>
    <div class="full_width bg_white py-100 px-0">
      <Faqs />
    </div>
    <div class="full-width bg_footer">
      <Footer />
    </div>
  </div>
</template>

<script>
import Footer from '../components/Footer.vue';
import Faqs from '../components/Faqs.vue';

export default {
  name: 'AllCourses',
  components: {
    Footer,
    Faqs,
  },
  data() {
    return {
      courses: [
        {
          title: 'DevOps Engineer',
          slug: 'dev_ops',
          duration: '7 Weeks / Recurring',
          type: 'Engineering',
        },
        {
          title: 'Software Engineering',
          slug: 'software_dev',
          duration: '6 Weeks',
          type: 'Development',
        },
        {
          title: 'Product Design',
          slug: 'product_design',
          duration: '8 Weeks',
          type: 'Design',
        },
        {
          title: 'Product Management',
          slug: 'product_management',
          duration: '8 Weeks',
          type: 'Management',
        },
        {
          title: 'Data Science',
          slug: 'data_science',
          duration: '7 Weeks',
          type: 'Engineering',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.all_courses_p {
  font-size: 1.2rem;
  line-height: 30px;
}
.all_courses {
  h3 {
    font-size: 1.4rem;
  }
  .course_list_container {
    .course_list {
      margin-top: 30px;
      max-width: 700px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      border: 1px solid rgb(197, 196, 196);
      padding: 10px 15px;
      border-radius: 5px;
      background: #d3e1fe;

      h3 {
        font-size: 1rem;
        color: #63448b;
        font-weight: bold;
        font-family: PoppinsMedium;
      }
      span {
        font-size: 1.1rem;
        color: rgb(107, 106, 106);
      }

      span.week {
        font-weight: bold;
      }
    }

    .course_list_bg {
      background: #e1e1f7;
    }
  }
}
</style>
