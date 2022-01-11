export default {
  methods: {
    viewCourse(course) {
      // this.$router.replace({ name: 'course', param: { name: course } })
      this.$router.push({
        name: course,
        param: { course: course },
        query: { name: course },
      });
    },
    applyCourse(course) {
      console.log(course);
      this.$router.push({
        name: 'application',
        query: { name: course },
      });
    },
  },
};
