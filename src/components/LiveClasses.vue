<template>
  <div class="section">
    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :md="2"> .</el-col>
      <el-col :xs="24" :sm="24" :md="10">
        <div>
          <img src="../assets/images/live-classes.png" alt="gif" width="100%" />
        </div>
      </el-col>

      <el-col :xs="24" :sm="24" :md="10">
        <div>
          <el-collapse v-model="activeQuestion" accordion class="course_faq">
            <el-collapse-item name="1">
              <template slot="title">
                <i class="header-icon el-icon-info mr-1"></i> Live Classes
              </template>
              <div>
                <p>
                  This is an active learning classroom program in which you will
                  have two live lessons of two hours each on Saturdays and
                  Sundays for ten weeks (20 live classes in total). This will be
                  followed by mentor support sessions in which you will be able
                  to ask your burning questions and gain insights from
                  professionals with real-world experience.
                </p>
              </div>
            </el-collapse-item>
            <el-collapse-item name="2">
              <template slot="title">
                <i class="header-icon el-icon-info mr-1"></i> Hands-on Training
              </template>
              <div>
                <p>
                  All of the courses will be hands-on, and they will be
                  complemented with projects. During the workshop, instructors
                  will use less PowerPoint and more real-world and practical
                  materials.
                </p>
              </div>
              <div></div>
            </el-collapse-item>
            <el-collapse-item name="3">
              <template slot="title">
                <i class="header-icon el-icon-info mr-1"></i> Solve Real World
                Problems
              </template>
              <div>
                <p>
                  You will collaborate with your team to solve real-world
                  problems that will be used as part of your project portfolio.
                  You will be supervised by our instructors, who have worked
                  with some of the leading product firms and will present many
                  valuable examples from their own experiences.
                </p>
              </div>
            </el-collapse-item>
            <el-collapse-item name="4">
              <template slot="title">
                <i class="header-icon el-icon-info mr-1"></i> Mock Interviews
              </template>
              <div>
                <p>
                  You will get access to two peer-to-peer mock interviews as
                  well as instructor-led mock interviews to help you feel
                  confident about your next interview. All simulated interviews
                  will provide actionable feedback.
                </p>
              </div>
            </el-collapse-item>
            <el-collapse-item name="5">
              <template slot="title">
                <i class="header-icon el-icon-info mr-1"></i> Extensive
                Curriculum
              </template>
              <div>
                <p>
                  With an extensive curriculum, we provide exclusive learning
                  contents that focus on the significant growth of your
                  remarkable engineering, design, and management career.
                </p>
              </div>
            </el-collapse-item>
          </el-collapse>
        </div>
      </el-col>

      <el-col :xs="24" :sm="24" :md="2"> </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'LiveClasses',
  data() {
    return {
      activeQuestion: ['1'],
    };
  },
};
</script>
