<template>
  <div>
    <div class="course_page_header">
      <div class="section py-100 mob_mt">
        <el-row :gutter="50" type="flex">
          <el-col :span="12">
            <h3 class="bus_head">Innovate, Empower, Grow</h3>
            <p class="business_p">
              We empower teams to adopt new technology and techniques that put
              your company in a competitive advantage. Keep your growing
              organization aligned on current business strategies.
            </p>
            <el-button
              type="primary"
              class="mt-20"
              @click="applyCourse('dev_ops')"
              >Collaborate with us</el-button
            >
          </el-col>

          <el-col :span="12" class="mob_mt">
            <div class="d-flex-align-center justify-right">
              <img
                src="https://skillembassy-website-images.s3.us-east-2.amazonaws.com/untitled+folder/business-page-heading.png"
                alt="buss"
                width="100%"
              />
            </div>
          </el-col>
        </el-row>
        <br />
      </div>
    </div>

    <div class="mt-40">
      <div class="section py-100">
        <el-row :gutter="50" type="flex" justify="space-between">
          <el-col :span="12" class="mob_mt">
            <img
              src="https://skillembassy-website-images.s3.us-east-2.amazonaws.com/untitled+folder/business-page-heading-1.png"
              alt="bus"
              width="100%"
            />
          </el-col>

          <el-col :span="12" class="mob_mt">
            <div>
              <p class="business_p">
                At Skill Embassy our mission is to enable individuals to be at
                the forefront of the technology revolution by empowering them
                with the skills required to apply technical expertise to various
                businesses. Skill Embassy is looking for Sponsors that want to
                be a part of the burgeoning technological transformation that is
                now take place.
              </p>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>

    <div class="bg_business py-100">
      <h3 class="center h_title white">How to Collaborate</h3>
      <br />
      <p class="text_highlight curr_p white center">
        You can help the excellent cause we're working on in a variety of ways.
        Join us as we develop excellent talent to drive innovation forward.
      </p>

      <div class="section mt-40">
        <el-row :gutter="20">
          <el-col :xs="24" :sm="24" :md="8">
            <div class="program_div bordered_div">
              <div class="program spon">Become a Sponsor</div>
              <p class="px-0 mt-20 white">
                Directly assist a student in gaining the chance to learn or
                sponsor one of our programs targeted at empowering individuals
                to obtain a job that will allow them to care for themselves and
                their family.
              </p>

              <el-button class="mt-20" icon="el-icon-money">
                <b>Collaborate With Us</b></el-button
              >
            </div>
          </el-col>
          <el-col :xs="24" :sm="24" :md="8">
            <div class="program_div bordered_div">
              <div class="program part">Become our Partner</div>
              <p class="px-0 mt-20 white">
                We encourage you to join us in creating the finest environment
                possible for learners to get real-world work experience and be
                prepared for the job market.
              </p>
              <el-button class="mt-20" icon="el-icon-money">
                <b>Collaborate With Us</b></el-button
              >
            </div>
          </el-col>
          <el-col :xs="24" :sm="24" :md="8">
            <div class="program_div bordered_div">
              <div class="program pool">Hire from our Talent Pool</div>
              <p class="px-0 mt-20 white">
                Hire from Our Talent Pool: Hire from our talent pool of
                candidates who will help your firm in growing and achieving its
                long-term goals.
              </p>
              <el-button class="mt-20" icon="el-icon-money" plain>
                <b>Collaborate With Us</b></el-button
              >
            </div>
          </el-col>
        </el-row>
      </div>
    </div>

    <div class="py-70">
      <div class="section">
        <h3 class="center h_title">Collaborate with Us</h3>
        <p class="text_highlight center mt-20">
          Complete the form below to get started with Collaborating with us
        </p>

        <div class="collaborate_form">
          <el-form
            ref="collaborate"
            :rules="rules"
            :model="collaborate"
            class="form_width"
          >
            <el-row :gutter="20">
              <el-col :xs="24" :sm="24" :md="12">
                <el-form-item prop="first_name">
                  <el-input
                    v-model="collaborate.first_name"
                    placeholder="First Name"
                    class="app_input"
                  ></el-input>
                </el-form-item>
              </el-col>

              <el-col :xs="24" :sm="24" :md="12">
                <el-form-item prop="last_name">
                  <el-input
                    v-model="collaborate.last_name"
                    placeholder="Last Name"
                    class="app_input"
                  ></el-input>
                </el-form-item>
              </el-col>

              <el-col :xs="24" :sm="24" :md="12">
                <el-form-item prop="email">
                  <el-input
                    v-model="collaborate.email"
                    placeholder="your@email.com"
                    class="app_input"
                  ></el-input>
                </el-form-item>
              </el-col>

              <el-col :xs="24" :sm="24" :md="12">
                <el-form-item prop="number">
                  <el-input
                    type="number"
                    v-model.number="collaborate.number"
                    placeholder="Phone Number"
                    class="app_input"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :xs="24" :sm="24" :md="12">
                <el-form-item prop="company">
                  <el-input
                    v-model="collaborate.company"
                    placeholder="Company Name"
                    class="app_input"
                  ></el-input>
                </el-form-item>
              </el-col>

              <el-col :xs="24" :sm="24" :md="12">
                <el-form-item prop="type">
                  <el-select
                    v-model="collaborate.type"
                    placeholder="How to Collaborate"
                    class="app_input"
                  >
                    <el-option
                      label="Sponsorship"
                      value="Sponsorship"
                    ></el-option>

                    <el-option
                      label="Partnership"
                      value="Partnership"
                    ></el-option>
                    <el-option
                      label="Hire Talent"
                      value="Hire Talent"
                    ></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>

            <div class="center mt-20">
              <el-button class="sub_btn">SUBMIT</el-button>
            </div>
          </el-form>
        </div>
      </div>
    </div>

    <div class="full_width bg_callUs py-70">
      <div class="center">
        <h3 class="h_title white mob_mt">I just want to Donate</h3>
        <p class="donate_p mt-20">
          When you donate to Skill Embassy you help people learn new skillsand
          provide for thier families. You also help us create new resources for
          you to use to expand your own technology skills. Your $5 donation will
          provide 250 hours of learning to people around the world each month.
        </p>
      </div>

      <div class="mt-40 d-flex justify_center">
        <el-button
          plain
          type="primary"
          icon="el-icon-edit-outline"
          @click="applyCourse"
        >
          <b>DONATE NOW</b></el-button
        >
      </div>
    </div>

    <div class="full-width bg_footer">
      <Footer />
    </div>
  </div>
</template>

<script>
import Footer from '../components/Footer.vue';

export default {
  name: 'ForBusiness',
  components: {
    Footer,
  },
  data() {
    return {
      collaborate: {
        first_name: '',
        last_name: '',
        email: '',
        number: '',
        company: '',
        type: '',
      },
    };
  },
  created() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },
};
</script>

<style lang="scss" scoped>
.business_p {
  font-size: 1.5rem;
  line-height: 35px;
}
.bus_head {
  font-size: 1.8rem;
  line-height: 50px;
  font-family: PoppinsBold;
  color: #1c1e27;
}

.bordered_div {
  border: 1px solid grey;
  background: #02172c;
  border-radius: 10px;
  padding: 20px;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .program {
    border-radius: 5px;
    font-size: 1.3rem;
    height: 60px;

    &.pool {
      background: #e1e2f7;

      border: 1px solid #281870;
    }

    &.spon {
      background: #d3e1fe;
    }

    &.part {
      background: #d3f8fe;
    }
  }

  p {
    line-height: 24px;
  }
}

.collaborate_form {
  margin: 40px auto;
  width: 85%;

  .sub_btn {
    width: 50%;
  }
}

.donate_h {
  font-size: 1.8rem;
  color: rgb(224, 223, 223);
}
.donate_p {
  margin: 0 auto;
  max-width: 800px;
  width: 100%;
  font-size: 1.3rem;
  color: rgb(224, 223, 223);
  line-height: 32px;
}
</style>
