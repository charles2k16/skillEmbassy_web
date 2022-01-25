<template>
  <el-row :gutter="20">
    <el-col :xs="24" :sm="24" :md="24">
      <div class="py-70 whyUs_">
        <h2>
          Step into a role. Work with a group with your own
          <span>Product Manager</span>, <span>Developer</span> and
          <span>Designer</span>.
        </h2>
        <p class="mt-20 text_highlight">
          We want to empower and trust students, just as they themselves, and
          the unique experiences they have brought about, to make an absolute
          difference.
        </p>
      </div>
    </el-col>

    <el-col :xs="24" :sm="24" :md="24">
      <div class="bg_sec" style="padding-bottom: 100px">
        <div class="section">
          <div class="why_us_div">
            <div class="whyUs_item">
              <span class="material-icons-outlined"> groups </span>
              <h3>Real Team Work</h3>
              <p class="mt-10">
                Collaborate cross-discipline with your team, and work directly
                with real customers. Leverage each other's skills, just like
                your usual product team
              </p>
            </div>

            <div class="whyUs_item">
              <span class="material-icons-outlined"> emoji_people </span>
              <h3>Build Connections</h3>
              <p class="mt-10">
                Gather professional references and meet like-minded folks from
                various backgrounds. Network with industry leaders and
                professionals.
              </p>
            </div>

            <div class="whyUs_item">
              <span class="material-icons-outlined"> laptop_chromebook </span>
              <h3>Real Projects</h3>
              <p class="mt-10">
                No more bolierplate projects or case studies. Put your
                theoretical knowledge to the test and ship a product of your own
                with real impact.
              </p>
            </div>

            <div class="whyUs_item">
              <span class="material-icons-outlined"> live_help </span>
              <h3>Support & accountability</h3>
              <p class="mt-10">
                Our dedicated projects and discipline mentors will make sure
                you're on track. Along with check-ins, workshops, office hours
                and more.
              </p>
            </div>
          </div>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'WhyUs',
};
</script>

<style lang="scss" scoped>
.whyUs_ {
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    max-width: 800px;
    width: 100%;
    font-size: 1.3rem;
    padding: 10px;
  }
  h2 {
    max-width: 850px;
    width: 100%;
    font-size: 2.4rem;

    span {
      font-size: 2.7rem;
      color: #63448b;
    }
  }
}
.why_us_div {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  .whyUs_item {
    margin-top: 40px;
    max-width: 420px;
    width: 100%;
    text-align: center;
    padding: 0 5px;

    .material-icons-outlined {
      font-size: 4rem;
      color: #756985;
    }

    h3 {
      color: rgb(92, 91, 91);
      font-family: PoppinsMedium;
      font-size: 1.2rem;
    }
    p {
      color: rgba(34, 34, 34, 0.56);
      font-size: 1.2rem;
      line-height: 30px;
    }
  }
}
</style>
