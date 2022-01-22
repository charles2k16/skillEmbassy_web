<template>
  <div class="section">
    <el-row :gutter="10">
      <el-col :xs="24" :sm="24" :md="12">
        <div class="mentors_div py-100">
          <div>
            <h4>They Love What They Do</h4>

            <h3 class="mt-20">
              Our Mentors <br />
              from Renowed Industries
            </h3>
            <p class="mt-20 text_highlight white">
              Our dedicated projects and discipline mentors will make sure
              you're on track. Along with check-ins, workshops, office hours and
              more.
            </p>

            <el-button type="danger" class="mt-40" icon="el-icon-user">
              <b>JOIN AS A MENTOR</b></el-button
            >
          </div>
        </div>
      </el-col>

      <el-col :xs="24" :sm="24" :md="12">
        <div class="mentors_img py-100">
          <div class="d-flex justify-evenly">
            <el-popover
              v-for="(mentor, idx) in mentors.mentor1"
              :key="idx"
              placement="top-start"
              width="220"
              trigger="hover"
            >
              <div class="mentor_details">
                <h3>{{ mentor.name }}</h3>

                <p>
                  {{ mentor.title }} <br />
                  <b> {{ mentor.company }} </b>
                </p>
              </div>
              <el-avatar
                slot="reference"
                :size="120"
                :src="require(`../assets/images/mentors/${mentor.image}`)"
                class="float_img"
              ></el-avatar>
            </el-popover>
          </div>

          <div class="d-flex justify-evenly">
            <el-popover
              v-for="(mentor, id) in mentors.mentor2"
              :key="id"
              placement="top-start"
              width="220"
              trigger="hover"
            >
              <div>
                <h3>{{ mentor.name }}</h3>

                <p>
                  {{ mentor.title }} <br />
                  <b> {{ mentor.company }} </b>
                </p>
              </div>
              <el-avatar
                slot="reference"
                :size="120"
                :src="require(`../assets/images/mentors/${mentor.image}`)"
                class="float_img_"
              ></el-avatar>
            </el-popover>
          </div>

          <div class="d-flex justify_center">
            <el-popover
              v-for="(mentor, i) in mentors.mentor3"
              :key="i"
              placement="top-start"
              width="220"
              trigger="hover"
              class="ml-1"
            >
              <div>
                <h3>{{ mentor.name }}</h3>

                <p>
                  {{ mentor.title }} <br />
                  <b> {{ mentor.company }} </b>
                </p>
              </div>
              <el-avatar
                slot="reference"
                :size="120"
                icon="el-icon-user-solid"
                :src="require(`../assets/images/mentors/${mentor.image}`)"
                class="float_img_scale"
              ></el-avatar>
            </el-popover>
          </div>

          <div class="d-flex justify-evenly">
            <el-popover
              v-for="(mentor, index) in mentors.mentor4"
              :key="index"
              placement="top-start"
              width="220"
              trigger="hover"
            >
              <div>
                <h3>{{ mentor.name }}</h3>

                <p>
                  {{ mentor.title }} <br />
                  <b> {{ mentor.company }} </b>
                </p>
              </div>
              <!-- :src="require(`~/assets/img/products/${deals.image}`)" -->
              <el-avatar
                slot="reference"
                :size="120"
                :src="require(`../assets/images/mentors/${mentor.image}`)"
                class="float_img"
              ></el-avatar>
            </el-popover>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'OurMentors',
  data() {
    return {
      mentors: {
        mentor1: [
          {
            name: 'Edith Akati',
            title: 'Product Manager',
            company: 'mPharma',
            image: 'edith.png',
          },
          {
            name: 'Diego Martins',
            title: 'Senior Product Designer',
            company: 'Spotify',
            image: 'diego.png',
          },
          {
            name: 'Frank Arkhurst Odoom',
            title: 'Principal Software Consultant',
            company: 'Accede',
            image: 'frank.png',
          },
          {
            name: 'Davide Marchisio',
            title: 'Senior Product Manager',
            company: 'One Insurance Ltd.',
            image: 'davide.png',
          },
        ],
        mentor2: [
          {
            name: 'May Chin',
            title: 'Principal Product Manager',
            company: 'ZALORA Group',
            image: 'may.png',
          },
          {
            name: 'Martin Bussas',
            title: 'Senior Software Engineer',
            company: 'TROUT',
            image: 'martin.png',
          },
          {
            name: 'Evans Frimpong',
            title: 'Software Engineer',
            company: 'Waya',
            image: 'evans.png',
          },
        ],
        mentor3: [
          {
            name: 'Amit Baliga',
            title: 'Senior Program Manager',
            company: 'Microsoft',
            image: 'amit.png',
          },
          {
            name: 'Taylor Hunt',
            title: 'Senior Product Designer',
            company: 'CashApp',
            image: 'taylor.png',
          },
          {
            name: 'Lilia Gorbachik',
            title: 'Product Manager',
            company: 'Intermedia Cloud Communications',
            image: 'lilia.png',
          },
          {
            name: 'José Manuel',
            title: 'Senior Software Engineer',
            company: 'Certainly',
            image: 'jose.png',
          },
        ],
        mentor4: [
          {
            name: 'Newton Ikhariale',
            title: 'Director of Engineering',
            company: 'Teachable',
            image: 'newton.png',
          },
          {
            name: 'Shraddha Bandaru',
            title: 'Product Designer',
            company: 'Berkshire Hathaway Specialty Insurance',
            image: 'shraddha.png',
          },
          {
            name: 'Adam Van Lente',
            title: 'CTO',
            company: 'MikMak',
            image: 'adam.png',
          },
          {
            name: 'Jackie Jiménez',
            title: 'Senior Software Engineer',
            company: 'GitHub',
            image: 'jackie.png',
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.mentors_div {
  // background: #6246ea;
  height: 700px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;

  h4 {
    font-size: 17px;
    font-weight: 900;
    color: rgb(11, 4, 107);
  }
  h3 {
    color: rgb(252, 239, 239);
    font-size: 50px;
    line-height: 60px;
    font-family: PoppinsMedium;
  }
}

.mentors_img {
  // background: #fda310;

  .mentor_details {
    h3 {
      font-weight: bold;
      font-family: PoppinsMedium;
    }
  }
}
</style>
