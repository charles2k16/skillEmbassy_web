<template>
  <div class="section py-100">
    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :md="12">
        <div class="white mt-20 mob_pt">
          Skill Embassy
          <p class="white px-10 mt-10">
            Skill Embassy empowers and prepares product managers, product
            designers, and software developers for success within the tech
            industry.
          </p>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" class="mob_mt">
        <div class="d-flex justify-evenly">
          <el-input
            v-model="email"
            placeholder="Please input"
            class="footer_input"
          ></el-input>
          <el-button type="primary"><b>SUBSCRIBE</b></el-button>
        </div>

        <div>
          <p class="white px-10 mt-10">
            Subscribe to our newsletter to receive updates on our blogs and
            upcoming events as well as new podcasts.
          </p>
        </div>
      </el-col>
    </el-row>
    <br /><br />
    <hr />

    <el-row :gutter="20" class="mt-40">
      <el-col :xs="24" :sm="24" :md="5">
        <div class="footer_content">
          <h4>Contact Us</h4>
          <ul class="mt-20">
            <li>
              We’re 100% remote but send mail here: <b>skill@skillembassy.de</b>
            </li>
            <li>+44 345 678 903</li>
            <li>SchenkendorfstraÃŸe 7 34119 Kassel, Germany</li>
          </ul>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="5" class="mob_mt">
        <div class="footer_content">
          <h4>Courses</h4>
          <ul class="mt-20">
            <li>
              <b>Software Development</b>
            </li>
            <li>Product Design</li>
            <li>Product Management</li>
            <li>DevOps Engineer</li>
          </ul>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="4" class="mob_mt">
        <div class="footer_content">
          <h4>Help</h4>
          <ul class="mt-20">
            <li>About skill embassy</li>
            <li>Podcasts</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="4" class="mob_mt">
        <div class="footer_content">
          <h4>Refund Policy</h4>
          <ul class="mt-20">
            <li>Get a Refund</li>
            <li>Become a Mentor</li>
          </ul>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="5">
        <div class="footer_social">
          <a><img src="../assets/images/instagram.png" alt="instagram" /></a>
          <a><img src="../assets/images/facebook.png" alt="facebook" /></a>
          <a><img src="../assets/images/linkedin.png" alt="linkedin" /></a>
        </div>
        <div class="copyright mt-20">
          <p>Find us on Socila Media</p>
          <p class="mt-10">Copyright © skillembassy 2021</p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      email: '',
    };
  },
};
</script>

<style lang="scss" scoped>
.footer_content {
  h4 {
    font-family: PoppinsMedium;
    font-size: 1rem;
    color: rgb(148, 147, 147);
  }

  ul li {
    list-style: none;
    color: rgb(240, 240, 240);
    margin: 12px 0px;
  }
}
.footer_social {
  display: flex;
  justify-content: flex-end;

  a {
    margin-right: 10px;

    img {
      width: 40px;
    }
  }
}
.copyright {
  p {
    color: rgb(240, 240, 240);
    float: right;
  }
}
</style>
