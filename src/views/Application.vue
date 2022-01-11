<template>
  <div>
    <div class="bg_business py-70">
      <div class="section">
        <div class="center">
          <h2 class="white">Application Process</h2>
          <p class="text_highlight applcn_intro_p">
            Thank you for your interest in applying to Skill Ebmassy Africa. We
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
              description="Brief self details and introduction"
            ></el-step>
            <el-step
              title="Education & Work"
              icon="el-icon-upload"
              description="A brief info on education and work experience"
            ></el-step>
            <el-step
              title="Payments"
              icon="el-icon-picture"
              description="Registration fee for application"
            ></el-step>
          </el-steps>

          <div class="applcn_form">
            <el-form
              ref="application"
              :model="application"
              label-width="120px"
              label-position="top"
              class="form_width"
            >
              <el-row v-if="activeStep === 1" :gutter="20">
                <el-col :xs="24" :sm="24" :md="8">
                  <el-form-item label="First Name" prop="first_name">
                    <el-input v-model="application.first_name"></el-input>
                  </el-form-item>
                </el-col>

                <el-col :xs="24" :sm="24" :md="8">
                  <el-form-item label="Last Name" prop="last_name">
                    <el-input v-model="application.last_name"></el-input>
                  </el-form-item>
                </el-col>

                <el-col :xs="24" :sm="24" :md="8">
                  <el-form-item label="Number" prop="phone">
                    <el-input
                      v-model="application.phone"
                      placeholder="+23354571511"
                    ></el-input>
                  </el-form-item>
                </el-col>

                <el-col :xs="24" :sm="24" :md="8">
                  <el-form-item label="Contact Email" prop="email">
                    <el-input
                      v-model="application.email"
                      placeholder="your@email.com"
                    ></el-input>
                  </el-form-item>
                </el-col>

                <el-col :xs="24" :sm="24" :md="8">
                  <el-form-item label="Country" prop="country">
                    <el-select
                      v-model="application.country"
                      placeholder="Country of Residence"
                    >
                      <el-option label="Nigeria" value="nigeria"></el-option>
                      <el-option label="Ghana" value="ghana"></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>

                <el-col :xs="24" :sm="24" :md="8">
                  <el-form-item label="Region/State" prop="state">
                    <el-input
                      v-model="application.state"
                      placeholder="Residence State/Region"
                    ></el-input>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="24" :md="10">
                  <el-form-item
                    label="What is your current experience level? *"
                    prop="experience"
                  >
                    <el-radio-group v-model="application.experience">
                      <el-radio label=" No experience"></el-radio> <br />
                      <el-radio
                        class="mt-10"
                        label="Beginner: Total beginner/novice"
                      ></el-radio>
                      <br />
                      <el-radio
                        class="mt-10"
                        label="Intermediate: I have completed some courses"
                      ></el-radio>
                      <br />
                      <el-radio
                        class="mt-10"
                        label="Advanced: Relevant bootcamp experience"
                      ></el-radio>
                      <br />
                      <el-radio
                        class="mt-10"
                        label="Professional:Actively working and looking to upskill"
                      ></el-radio>
                    </el-radio-group>
                  </el-form-item>
                </el-col>

                <el-col :xs="24" :sm="24" :md="6">
                  <el-form-item label="Gender" prop="gender">
                    <el-radio-group v-model="application.gender">
                      <el-radio label="Male"></el-radio>
                      <el-radio label="Female"></el-radio>
                    </el-radio-group>
                  </el-form-item>
                </el-col>

                <el-col :xs="24" :sm="24" :md="6">
                  <el-form-item label="Timezone?" prop="time_zone">
                    <el-input
                      v-model="application.time_zone"
                      placeholder="GMT+2"
                    ></el-input>
                  </el-form-item>
                </el-col>
              </el-row>

              <el-row v-if="activeStep === 2" :gutter="20">
                <el-col :xs="24" :sm="24" :md="12">
                  <el-form-item label="Employment Status" prop="employment">
                    <el-select
                      v-model="application.employment"
                      placeholder="Self Employed"
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
                  <el-form-item label="Level of Education" prop="education">
                    <el-select v-model="application.education">
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
                  <el-form-item label="LinkedIn Profile" prop="linkedIn">
                    <el-input
                      v-model="application.linkedIn"
                      placeholder="linkedin.com/skillembasyy"
                    ></el-input>
                  </el-form-item>
                </el-col>

                <el-col :xs="24" :sm="24" :md="12">
                  <el-form-item
                    label="How did you hear about us?"
                    prop="about_us"
                  >
                    <el-select v-model="application.about_us">
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
                  <el-form-item
                    label="Explain in detail your favorite project, and how you've worked through it"
                    prop="fav_project"
                  >
                    <el-input
                      v-model="application.fav_project"
                      type="textarea"
                      :rows="4"
                      placeholder="Details here"
                    ></el-input>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="24" :md="12">
                  <el-form-item
                    label="Please tell us about any previous or current project experience?*"
                    prop="project"
                  >
                    <el-input
                      v-model="application.project"
                      type="textarea"
                      :rows="4"
                      placeholder="Details here"
                    ></el-input>
                  </el-form-item>
                </el-col>
                <el-col :xs="24" :sm="24" :md="12">
                  <el-form-item
                    label="Personal website / portfolio *"
                    prop="website"
                  >
                    <el-input
                      v-model="application.website"
                      placeholder="wwww.portfolio.com"
                    ></el-input>
                  </el-form-item>
                </el-col>
                <!-- optional questions tailored -->
                <el-col :xs="24" :sm="24" :md="12">
                  <el-form-item
                    label="Do you have a reliable internet connection and a computer*"
                    prop="experience"
                  >
                    <el-radio-group v-model="application.internet">
                      <el-radio class="mt-10" label="Yes"></el-radio>
                      <br />
                      <el-radio class="mt-10" label="No"></el-radio>
                    </el-radio-group>
                  </el-form-item>
                </el-col>

                <el-col :xs="24" :sm="24" :md="12">
                  <el-form-item
                    label="What is your preferred stack? (Software Devs Only)"
                    prop="stack"
                  >
                    <el-radio-group v-model="application.stack">
                      <el-radio class="mt-10" label="Frontend"></el-radio>
                      <br />
                      <el-radio class="mt-10" label="Backend"></el-radio>
                      <br />
                      <el-radio class="mt-10" label="Fullstack"></el-radio>
                    </el-radio-group>
                  </el-form-item>
                </el-col>
              </el-row>

              <div v-if="activeStep === 3">
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
              v-if="activeStep > 1"
              :type="activeStep > 0 ? 'danger' : 'primary'"
              icon="el-icon-back"
              @click="activeStep--"
              >Previous</el-button
            >
            <el-button
              v-if="activeStep < 3"
              :type="activeStep == null ? 'danger' : 'primary'"
              icon="el-icon-right"
              @click="nextStep"
              >{{
                activeStep == null
                  ? 'Begin Application'
                  : 'Proceed to Next Step'
              }}</el-button
            >
            <flutterwave-pay-button
              v-if="activeStep == 3"
              :tx_ref="generateReference()"
              :amount="3"
              currency="GHS"
              payment_options="card,mobilemoney"
              redirect_url="http://localhost:8080"
              class="payment_btn"
              :meta="{
                counsumer_id: '7898',
                consumer_mac: 'kjs9s8ss7dd',
              }"
              :customer="{
                name: `${application.first_name} ${application.last_name}`,
                email: application.email,
                phone_number: application.phone,
              }"
              :customizations="{
                title: 'Course Registration',
                description: 'Customization Description',
                logo: 'https://flutterwave.com/images/logo-colored.svg',
              }"
              :callback="makePaymentCallback"
              :onclose="closedPaymentModal"
            >
              Proceed to Payments
            </flutterwave-pay-button>
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
import Footer from '../components/Footer.vue';
export default {
  name: 'Application',
  components: {
    Footer,
  },
  data() {
    return {
      activeCourse: '',
      activeStep: null,
      application: {
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        gender: '',
        country: '',
        experience: '',
        employment: '',
        internet: '',
        linkedIn: '',
        about_us: '',
        time_zone: '',
        website: '',
        stack: '',
        project: '',
        fav_project: '',
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
        phone: [
          {
            required: true,
            message: 'Enter a valid number',
            trigger: 'change',
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
        date2: [
          {
            type: 'date',
            required: true,
            message: 'Please pick a time',
            trigger: 'change',
          },
        ],
        type: [
          {
            type: 'array',
            required: true,
            message: 'Please select at least one activity type',
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
        desc: [
          {
            required: true,
            message: 'Please input activity form',
            trigger: 'blur',
          },
        ],
      },
    };
  },
  created() {
    console.log(this.$route.query);
    this.activeCourse = this.$route.query;
  },
  methods: {
    nextStep() {
      if (this.activeStep == null) {
        this.activeStep = 1;
      } else if (this.activeStep === 1) {
        this.activeStep = 2;
      } else if (this.activeStep === 2) {
        this.activeStep = 3;
      }
    },
    makePaymentCallback(response) {
      console.log('Payment callback', response);
    },
    closedPaymentModal() {
      console.log('payment modal is closed');
    },
    generateReference() {
      let date = new Date();
      return date.getTime().toString();
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
</style>
