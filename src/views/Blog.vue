<template>
  <div>
    <div class="bg_callUs py-100">
      <div class="center">
        <h2 class="mt-20 white">More Journals from us</h2>
      </div>
    </div>
    <div class="full_width bg_testimony">
      <div class="section py-70">
        <div class="blog_container" v-loading="blogLoading">
          <div
            v-for="(blog, index) in stories"
            :key="index"
            :class="index % 2 == 0 ? 'blog' : 'blog blog_content'"
          >
            <div>
              <img :src="blog.content.image.url" alt="alt" class="blog_image" />
            </div>
            <div class="p-10">
              <h3>{{ blog.content.title }}</h3>
              <p class="mt-15">
                {{ blog.content.summary }}
              </p>
              <br />
            </div>
            <div class="p-10">
              <el-button
                type="primary"
                size="small"
                class="animate__animated animate__backInLeft mt-15"
                @click="selectedBlog(blog.content)"
                >Read more
              </el-button>
            </div>
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
import blogApi from '@/api/blog';

export default {
  name: 'BlogLists',
  components: {
    Footer,
  },
  data() {
    return {
      blogLoading: true,
      stories: [],
    };
  },
  created() {
    this.getBlogStories();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },
  methods: {
    getBlogStories() {
      blogApi
        .getBlogPosts()
        .then(response => {
          const allStories = response.stories;
          let firstFiveStories = allStories.slice(0, 5);
          this.stories = firstFiveStories;
          this.blogLoading = false;
        })
        .catch(error => console.log(error));
    },
    selectedBlog(blog) {
      sessionStorage.setItem('blog', JSON.stringify(blog));
      let routeData = this.$router.resolve({
        name: 'Blog',
        params: { title: blog.title },
      });
      window.open(routeData.href, '_blank');
    },
  },
};
</script>

<style lang="scss" scoped>
.blog_container {
  // display: grid;
  // grid-row-gap: 25px;
  // grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  // grid-auto-flow: column;
  // grid-auto-columns: minmax(300px, 1fr);
  // grid-gap: 2rem;

  display: flex;
  flex-wrap: wrap;
  margin-top: 25px;
  margin-left: 5px;
  margin-bottom: 25px;
  margin-right: 5px;
  // position: relative;
  // overflow-x: auto;
  // width: 100%;
  // -webkit-overflow-scrolling: touch;

  .blog {
    width: 300px;
    height: auto;
    border-radius: 5px;
    box-shadow: 0 8px 6px -4px rgb(168, 167, 167);
    padding-bottom: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 25px;
    margin-left: 25px;

    h3 {
      color: #2c89df;
    }
  }
  .blog_content {
    background: #2c3036;

    h3 {
      color: white;
    }
    p {
      color: white;
    }
  }
}
.blog_image {
  width: 299px;
  height: 179px;
  border-radius: 5px;
}
::-webkit-scrollbar {
  display: none;
}
</style>
