<template>
  <div>
    <div class="bg_business py-70">
      <div class="section">
        <div class="center">
          <h2 class="white">Application Process</h2>
          <p class="text_highlight applcn_intro_p">
            Thank you for your interest in applying to Skill Embmassy Africa. We
            believe we can achieve the dream together. To proceeed with your
            application process, please take note of the fee charged (GHC 80 /
            $12) and the selective process below.
          </p>
        </div>
      </div>
    </div>
    <div class="bg_application_form">
      <div class="section">
        <div class="py-70">
          <el-steps :active="activeStep" align-center>
            <el-step
              title="Basic Info"
              icon="el-icon-user"
              description="Brief self introduction, education and work experience"
            ></el-step>
            <el-step
              title="Payments"
              icon="el-icon-picture"
              description="Registration fee for application"
            ></el-step>
          </el-steps>
          <br /><br />

          <div class="select_course_div" v-if="activeStep == null">
            <h3>Select a Course you want to Apply for</h3>
            <div>
              <el-radio-group v-model="activeCourse" @change="changeCourse">
                <el-radio label="software_dev" border class="mt-20"
                  >Software Development</el-radio
                >
                <br />
                <el-radio label="product_management" border class="mt-20"
                  >Product Management</el-radio
                >
                <br />
                <el-radio label="product_design" border class="mt-20"
                  >Product Design</el-radio
                >
                <br />
                <el-radio label="data_science" border class="block mt-20"
                  >Data Science</el-radio
                >
                <br />
                <el-radio label="dev_ops" border class="block mt-20"
                  >Dev Ops</el-radio
                >
              </el-radio-group>
            </div>
          </div>

          <div class="applcn_form">
            <el-form
              ref="application"
              :rules="rules"
              :model="application"
              class="form_width"
            >
              <el-row v-if="activeStep === 1" :gutter="20">
                <el-col :xs="24" :sm="24" :md="12">
                  <el-form-item prop="first_name">
                    <el-input
                      v-model="application.first_name"
                      placeholder="First Name"
                      class="app_input"
                    ></el-input>
                  </el-form-item>
                </el-col>

                <el-col :xs="24" :sm="24" :md="12">
                  <el-form-item prop="last_name">
                    <el-input
                      v-model="application.last_name"
                      placeholder="Last Name"
                      class="app_input"
                    ></el-input>
                  </el-form-item>
                </el-col>

                <el-col :xs="24" :sm="24" :md="12">
                  <el-form-item prop="email">
                    <el-input
                      v-model="application.email"
                      placeholder="your@email.com"
                      class="app_input"
                    ></el-input>
                  </el-form-item>
                </el-col>

                <el-col :xs="24" :sm="24" :md="12">
                  <el-form-item prop="country">
                    <el-select
                      v-model="application.country"
                      placeholder="Country of Residence"
                      filterable
                      class="app_input"
                    >
                      <el-option
                        v-for="country in countries"
                        :key="country.code"
                        :label="country.name"
                        :value="country.name"
                      ></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>

                <el-col :xs="24" :sm="24" :md="12">
                  <el-form-item prop="gender">
                    <el-select
                      v-model="application.gender"
                      placeholder="Gender"
                      class="app_input"
                    >
                      <el-option label="Female" value="female"></el-option>
                      <el-option label="Male" value="male"></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>

                <el-col :xs="24" :sm="24" :md="12">
                  <el-form-item prop="employment">
                    <el-select
                      v-model="application.employment"
                      placeholder="Employment Status"
                      class="app_input"
                    >
                      <el-option
                        label="Unemployed"
                        value="Unemployed"
                      ></el-option>
                      <el-option label="Employed" value="Employed"></el-option>
                      <el-option
                        label="Self Employed"
                        value="Self Employed"
                      ></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>

                <el-col :xs="24" :sm="24" :md="12">
                  <el-form-item prop="education">
                    <el-select
                      v-model="application.education"
                      placeholder="Level of Education"
                      class="app_input"
                    >
                      <el-option
                        v-for="(edu, index) in education"
                        :key="index"
                        :label="edu"
                        :value="edu"
                      ></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>

                <el-col :xs="24" :sm="24" :md="12">
                  <el-form-item prop="linkedIn">
                    <el-input
                      v-model="application.linkedIn"
                      placeholder="LinkedIn Profile"
                      class="app_input"
                    ></el-input>
                  </el-form-item>
                </el-col>

                <el-col :xs="24" :sm="24" :md="12">
                  <el-form-item prop="about_us">
                    <el-select
                      v-model="application.about_us"
                      placeholder="How did you hear about us?"
                      class="app_input"
                    >
                      <el-option
                        v-for="(x, i) in about_us"
                        :key="i"
                        :label="x"
                        :value="x"
                      ></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>

                <el-col :xs="24" :sm="24" :md="12">
                  <el-form-item prop="stack">
                    <el-select
                      v-model="application.stack"
                      placeholder="What is your preferred stack? (Software Devs Only)"
                      class="app_input"
                    >
                      <el-option label="Frontend" value="Frontend"></el-option>

                      <el-option label="Backend" value="Backend"></el-option>

                      <el-option
                        label="Fullstack"
                        value="Fullstack"
                      ></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>

                <el-col :xs="24" :sm="24" :md="24">
                  <el-form-item prop="experience">
                    <el-select
                      v-model="application.experience"
                      placeholder="What is your current experience level? "
                      class="app_input"
                    >
                      <el-option
                        label="No experience"
                        value="No experience"
                      ></el-option>
                      <el-option
                        value="Beginner"
                        label="Beginner: Total beginner/novice"
                      ></el-option>

                      <el-option
                        value="Intermediate"
                        label="Intermediate: I have completed some courses"
                      ></el-option>

                      <el-option
                        value="Advanced"
                        label="Advanced: Relevant bootcamp experience"
                      ></el-option>

                      <el-option
                        value="Professional"
                        label="Professional:Actively working and looking to upskill"
                      ></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
              </el-row>

              <div v-if="activeStep === 2">
                <el-alert
                  class="pay_notice"
                  title="Payment Notice"
                  type="error"
                  description="Pay with multiple payment methods of your choice.
                  International Students should pay through Bank Cards while
                  local (Ghana) students can pay through mobile money"
                >
                </el-alert>
                <el-row :gutter="20">
                  <el-col :xs="24" :sm="24" :md="12">
                    <div>
                      <img src="" alt="" />
                    </div>
                  </el-col>
                </el-row>
              </div>
            </el-form>
          </div>

          <div class="center mt-70">
            <el-button
              v-if="activeStep > 1 || activeStep == 1"
              :type="activeStep > 0 ? 'danger' : 'primary'"
              icon="el-icon-back"
              @click="previousStep"
              >Previous</el-button
            >
            <el-button
              v-if="activeStep < 2"
              :type="activeStep == null ? 'danger' : 'primary'"
              icon="el-icon-right"
              @click="nextStep"
              >{{
                activeStep == null
                  ? 'Begin Application'
                  : 'Proceed to Next Step'
              }}</el-button
            >

            <paystack
              v-if="activeStep == 2"
              class="payment_btn"
              :amount="application.amount * 100"
              currency="GHS"
              :channels="['card', 'mobile_money']"
              :email="application.email"
              paystackkey="pk_live_119e96978b7568febdfcaf3297808cac902dbf92"
              :reference="reference"
              :callback="processPayment"
              :close="closedPaymentModal"
            >
              Proceed to Payments
            </paystack>
          </div>
        </div>
      </div>
    </div>
    <div class="full-width bg_footer">
      <Footer />
    </div>
  </div>
</template>

<script>
import paystack from 'vue-paystack';
import Footer from '../components/Footer.vue';
import countriesJson from '../api/countries.json';

export default {
  name: 'Application',
  components: {
    Footer,
    paystack,
  },
  computed: {
    reference() {
      let date = new Date();
      return date.getTime().toString();
    },
  },
  data() {
    return {
      countries: countriesJson,
      activeCourse: '',
      activeStep: null,
      application: {
        first_name: '',
        last_name: '',
        email: '',
        gender: '',
        country: '',
        experience: '',
        employment: '',
        linkedIn: '',
        about_us: '',
        stack: '',
        amount: 3,
      },
      education: [
        'Bsc',
        'Msc',
        'Phd',
        'Diploma',
        'Under Graduate',
        'Post Graduate',
        'Junior High',
        'High School/Secondary',
      ],
      about_us: [
        'Internet search',
        'Linkedin',
        'Facebook',
        'Twitter',
        'Instagram',
        'Other',
      ],
      rules: {
        first_name: [
          {
            required: true,
            message: 'Please input first name',
            trigger: 'blur',
          },
          {
            min: 3,
            max: 20,
            message: 'Length should be 3 or gretaer',
            trigger: 'blur',
          },
        ],
        last_name: [
          {
            required: true,
            message: 'Please input last name',
            trigger: 'blur',
          },
          {
            min: 3,
            max: 20,
            message: 'Length should be 3 or gretaer',
            trigger: 'blur',
          },
        ],
        email: [
          {
            type: 'email',
            required: true,
            message: 'Enter valid email',
            trigger: 'change',
          },
        ],
        country: [
          {
            required: true,
            message: 'Please select a country',
            trigger: 'change',
          },
        ],
        education: [
          {
            required: true,
            message: 'Please select education',
            trigger: 'change',
          },
        ],
        gender: [
          {
            required: true,
            message: 'Please select gender',
            trigger: 'change',
          },
        ],
        experience: [
          {
            required: true,
            message: 'Select your experince level',
            trigger: 'change',
          },
        ],
      },
    };
  },
  created() {
    this.activeCourse = this.$route.query.name;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },
  methods: {
    nextStep() {
      if (this.activeStep == null) {
        this.activeStep = 1;
      } else if (this.activeStep === 1) {
        this.checkApplication();
      }
    },
    previousStep() {
      if (this.activeStep == 1) {
        this.activeStep = null;
      } else {
        this.activeStep--;
      }
    },
    checkApplication() {
      this.$refs['application'].validate(valid => {
        if (valid) {
          this.activeStep = 2;
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    changeCourse(e) {
      this.activeCourse = e;
    },
    processPayment: () => {
      this.$notify({
        title: 'Success',
        message: 'Your Payment has successfully been received',
        type: 'success',
      });
    },
    closedPaymentModal() {
      console.log('payment is closed');
    },
  },
};
</script>

<style lang="scss" scoped>
.applcn_intro_p {
  margin: 20px auto;
  width: 80%;
  color: rgb(236, 239, 250);
}
.applcn_form {
  margin: 20px auto;
  width: 80%;
}
.select_course_div {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 100px;

  h3 {
    max-width: 400px;
    width: 100%;
    font-size: 1.2rem;
    color: rgb(68, 67, 67);
  }
  div {
    max-width: 400px;
    width: 100%;
  }
}
</style>
