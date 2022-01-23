<template>
  <div class="section py-70">
    <div class="center">
      <h2 class="course_hd">Our Career Change Courses</h2>
      <p class="mt-10 text_highlight">
        Practical courses 100% online with live classes, for you to learn the
        skills that the digital market is looking for.
      </p>
    </div>
    <div class="mt-40">
      <div class="courses_carousel">
        <div
          v-for="(course, index) in courses"
          :key="index"
          :class="index % 2 == 0 ? 'course_div' : 'course_div course_div_bg'"
        >
          <div>
            <h3 class="course_title">{{ course.title }}</h3>
            <p>
              {{ course.desc }}
            </p>
          </div>

          <div class="ticker mt-10">
            <div
              v-for="(topic, i) in course.topics"
              :key="i"
              class="d-flex-align-center mt-10 mr-0"
            >
              <span class="material-icons-outlined"> task_alt </span>
              <span>{{ topic }}</span>
            </div>
          </div>

          <el-button
            class="mt-20 full_width"
            size="large"
            type="primary"
            plain
            @click="viewCourse(course.slug)"
            >Learn More</el-button
          >
        </div>
      </div>
    </div>

    <div class="mt-40 mb-40">
      <el-alert
        class="refund_policy"
        title="Refund Policy Info"
        type="info"
        show-icon
        description="Our students' confidence is extremely important to us at Skill Embassy. However, if you are dissatisfied with the learning program, we provide a 3-day money-back guarantee. Simply send us an email with a refund request within 3 days of your purchase, and we will reimburse you 100%, no questions asked!"
      >
      </el-alert>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Courses',
  data() {
    return {
      courses: [
        {
          title: 'DevOps Engineer',
          slug: 'dev_ops',
          desc: 'Reduce software development times to get ahead of the competition with DevOps.',
          topics: [
            'Terraform',
            'Kubernetes',
            'Annsible',
            'Docker',
            'Jekins',
            'Linux Scripting',
            'Linux Administration',
            'Shell Scripting',
          ],
        },
        {
          title: 'Software Engineering',
          slug: 'software_dev',
          desc: 'Reduce software development times to get ahead of the competition with DevOps.',
          topics: [
            'FrontEnd',
            'Backend Dev',
            'FullStack Dev',
            'Node.js',
            'React',
            'Python',
            'Html & CSS',
            'Javascript',
            'Mongo DB',
          ],
        },
        {
          title: 'Product Design',
          slug: 'product_design',
          desc: 'The mission of UX Designers is to create, prototype, test and always improve the digital experience of users',
          topics: [
            'Design Principles',
            'Research',
            'Communication',
            ' Brainstorming and Ideation',
            'Prototyping',
            'Collaboration',
            'Design Technologies',
          ],
        },
        {
          title: 'Product Management',
          slug: 'product_management',
          desc: ' Product Managers mission is to look at the market and understand what users wish',
          topics: [
            'Product Launch',
            'Product Innovation',
            'Customer Development',
            'Product Roadmap',
            'Product Strategy,',
            'Product Tools',
          ],
        },
        {
          title: 'Data Science',
          slug: 'data_science',
          desc: ' Product Managers mission is to look at the market and understand what users wish',
          topics: [
            'Foundations of Data Scienc',
            'Data Analysis',
            'Data Visualization',
            'Machine learning',
            'Deep learning',
          ],
        },
      ],
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.course_hd {
  color: #63448b;
  font-weight: bold;
}
.courses_carousel {
  // display: grid;
  // grid-row-gap: 25px;
  // grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  // grid-auto-flow: column;
  // grid-auto-columns: minmax(300px, 1fr);
  // grid-gap: 2rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 25px;
  overflow-x: auto;
  width: 100%;
  // background: white;
  // -webkit-overflow-scrolling: touch;

  // .course_bg {
  //   background: #63448b;
  // }

  .course_div {
    max-width: 300px;
    width: 100%;
    // height: 350px;
    padding: 20px 15px 20px 15px;
    margin: 20px 20px;
    border-radius: 5px;
    border: 1px solid #d4d4f7;
    display: flex;
    background: rgb(212, 224, 255);
    flex-direction: column;
    justify-content: space-between;
    transition: transform 0.2s;

    &:hover {
      // transform: scale(1.1);
      transform: translateY(-7px);
    }
    .course_title {
      color: #63448b;
      // top: -2px;
      font-size: 16px;
      line-height: 1;
      height: 30px;
      // margin-top: -15px;
      // padding: 0px 8px;
      // margin-left: 10px;
      font-family: PoppinsMedium;
    }

    p {
      line-height: 23px;
      margin-top: 10px;
    }

    .ticker {
      display: flex;
      flex-wrap: wrap;
    }
    .material-icons-outlined {
      font-size: 15.5px;
      color: #63448b;
      font-weight: bold;
      margin-right: 5px;
    }
  }
  .course_div_bg {
    background: #e1e1f7;
  }
}
.refund_policy {
  max-width: 850px;
  width: 100%;
  margin: 0 auto;
}
</style>
