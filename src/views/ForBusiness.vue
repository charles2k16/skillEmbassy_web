<template>
  <div>
    <div class="course_page_header">
      <div class="section py-100">
        <el-row :gutter="50">
          <el-col :xs="24" :sm="24" :md="12">
            <p class="business_p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
              reprehenderit harum recusandae aperiam error amet rerum
              necessitatibus hic, sed earum sint voluptas cupiditate, accusamus
              quos quia debitis, veritatis maiores corporis!
            </p>
            <el-button
              type="primary"
              class="mt-20"
              @click="applyCourse('dev_ops')"
              >Collaborate with us</el-button
            >
          </el-col>

          <el-col :xs="24" :sm="24" :md="12">
            <div class="d-flex-align-center justify-right">
              <img
                src="https://via.placeholder.com/458x300?text=Business+Image"
                alt=""
              />
            </div>
          </el-col>
        </el-row>
        <br />
      </div>
    </div>

    <div class="mt-40">
      <div class="section py-100">
        <el-row :gutter="50">
          <el-col :xs="24" :sm="24" :md="12">
            <img
              src="https://via.placeholder.com/458x300?text=Business+Image"
              alt=""
            />
          </el-col>

          <el-col :xs="24" :sm="24" :md="12">
            <div class="mt-40">
              <p class="business_p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                rerum esse corporis ex doloremque facere, ut amet. Ex, eius
                deleniti quaerat repellendus harum aperiam dicta doloremque
                expedita beatae quia ipsum!
              </p>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>

    <div class="bg_business py-100">
      <h3 class="center h_title white">How to Collaborate</h3>
      <br />
      <p class="text_highlight curr_p white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
        itaque, voluptatem corporis eos, perferendis eligendi expedita nihil
        nostrum recusandae minus, id eaque ullam sint deleniti beatae hic soluta
        quaerat natus.
      </p>

      <div class="section mt-40">
        <el-row :gutter="20">
          <el-col :xs="24" :sm="24" :md="8">
            <div class="program_div bordered_div">
              <div class="program spon">Become a Sponsor</div>
              <p class="px-0 mt-20 white">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit
                iure, ea fuga consectetur amet magni voluptatum asperiores
                facilis eos quibusdam consequatur ipsam minus neque cupiditate
                nemo architecto? Expedita, nemo enim!
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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit
                iure, ea fuga consectetur amet magni voluptatum asperiores
                facilis eos quibusdam consequatur ipsam minus neque cupiditate
                nemo architecto? Expedita, nemo enim!
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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit
                iure, ea fuga consectetur amet magni voluptatum asperiores
                facilis eos quibusdam consequatur ipsam minus neque cupiditate
                nemo architecto? Expedita, nemo enim!
              </p>
              <el-button class="mt-20" icon="el-icon-money" plain>
                <b>Collaborate With Us</b></el-button
              >
            </div>
          </el-col>
        </el-row>
      </div>
    </div>

    <div>
      <div class="section py-100">
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

            <div></div>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ForBusiness',
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
};
</script>

<style lang="scss" scoped>
.business_p {
  font-size: 1.5rem;
  line-height: 35px;
}

.bordered_div {
  border: 1px solid grey;
  background: #02172c;
  border-radius: 10px;
  padding: 20px;

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
}
</style>
