<template>
  <div class="section py-100">
    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :md="12">
        <div>
          <h2>
            Frequently Asked <br />
            Questions ?
          </h2>
          <p class="mt-20 text_highlight">
            Not sure how Skill Embassy can help you? Wonder why you need the tech Skills and 
            leverage your ways into tech.
          </p>

          <el-button type="primary" class="mt-40" >Apply for a Course Refund</el-button>
        </div>
      </el-col>

      <el-col :xs="24" :sm="24" :md="12" class="mob_mt">
        <div>
          <el-collapse accordion>
            <el-collapse-item
              title="What is skill embassy product accelerator?"
              name="1"
            >
              <div>
                <p>
                  Skill embassy is an 10-week program of hands-on learning.
                  Based on your workstyles and interests, you'll be paired with
                  a Developer and a Designer. Three of you will take a real
                  product idea and turn it into a working MVP. Your team will be
                  assigned a project mentor, as well as other Developer mentors
                  to whom you can ask questions for help along the way.
                </p>
                <p class="mt-10">
                  You'll also have full access to our community, which allows
                  you to participate in workshops led by Github, Jira, Miro, and
                  others, as well as talks given by industry leaders from
                  Microsoft, Facebook, Amazon, and others!
                </p>
                <p class="mt-10">
                  You will be taking on the responsibilities of a true Product
                  Manager. Imagine telling that to the recruiters who attend
                  Skill Embassy's Demo Day at the end!
                </p>
              </div>
            </el-collapse-item>
            <el-collapse-item
              title="What will I gain from skill embassy product accelerator?"
              name="2"
            >
              <div>
                <p>
                 You'll be able to: In addition to having a solid product with actual customers, you'll be able to:
                </p>
                <p class="mt-10">
                 <ul class="a">
                   <li>Work as a real product team with a Product Designer and Developer.</li>
                   <li class="mt-0">Work in an agile environment (carry out sprint planning, roadmapping, and retros!)</li>
                   <li class="mt-0">Stakeholders should negotiate scope and design trade-offs for implementation.</li>
                   <li class="mt-0">Iterate until your product is being used by real people to make a real difference.</li>
                   <li class="mt-0">Select your technology stack and design the entire solution from start to finish</li>
                   <li class="mt-0">Come Demo Day, you'll make connections with recruiters, hiring managers, and others.</li>
                   <li class="mt-0">Essentially, you'll gain real-world product experience as a product manager as you work your way through the end-to-end software development process! Setting yourself apart from the crowd is critical.</li>
                 </ul>
                </p>
              </div>
              <div></div>
            </el-collapse-item>
            <el-collapse-item
              title="What is the cost of skill embassy product accelerator?"
              name="3"
            >
              <div>
                <p>
               The entire 10-week product accelerator is **850 Ghana Cedis**. We do offer flexible pricing options as well as payment plans; please contact us for more information!
                </p>
              </div>
            </el-collapse-item>
            <el-collapse-item
              title="Can I apply without a college/university degree?"
              name="4"
            >
              <div>
                <p>
                 Of course! As long as you're 18 years old, you can apply.
                </p>
              </div>
            </el-collapse-item>
            <el-collapse-item
              title="Will Skill Embassy Product Accelerator help me find work?"
              name="5"
            >
              <div>
                <p>
                  Finally, don't believe anyone who claims that completing a course, program, or bootcamp will guarantee you a job
                  We do know the following:
                </p>
                <p class="mt-10">
                  <ul>
                    <li>Recruiters and hiring managers want to see practical experience in addition to theoretical knowledge.</li>
                    <li class="mt-0">Working across disciplines is an essential component of teamwork in an agile environment.</li>
                     <li class="mt-0">Mentorship, networking, and support are essential, especially at the start of your career.
We also know you already have the skills and motivation, we just want to make sure to empower you with the confidence such that you know it yourself.</li>

                  </ul>
                </p>

                <p class="mt-0">
                  So, while Skill Embassy will assist you in obtaining professional references, practical experience, and expanding your industry network, the final decision is yours.

But don't be concerned; we're here to assist you.
                </p>
              </div>
            </el-collapse-item>
          </el-collapse>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Faqs',
}
</script>


