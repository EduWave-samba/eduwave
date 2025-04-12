<template>
    <div id="why-us">
        <h3>
            Why Us?
        </h3>
        <br><br><br>
        <div class="row same-height">
            <div class="col s12 l4 m6">
                <div class="card">
                    <span class="card-title">🧑‍🏫 Expert Faculty & Specialized Training</span>
                    <p>
                        Our passionate, qualified teachers bring years of experience and care to every session.
                    </p>
                </div>
            </div>
            <div class="col s12 l4 m6">
                <div class="card">
                    <span class="card-title">🤝 Personalized Support</span>
                    <p>
                        Small class sizes and tailored learning plans ensure every student gets the help they need
                    </p>
                </div>
            </div>
            <div class="col s12 l4 m6">
                <div class="card">
                    <span class="card-title">📚 Access to Exclusive Resources</span>
                    <p>
                        Students get premium study materials, practice papers, and tools designed to boost learning and exam performance
                    </p>
                </div>
            </div>
            <div class="col s12 l4 m6">
                <div class="card">
                    <span class="card-title">🎓 Career Guidance & Counseling</span>
                    <p>
                        Along with academic support, we also provide career guidance, helping students map their future pathways with insights into industry trends and job prospects
                    </p>
                </div>
            </div>
            <div class="col s12 l4 m6">
                <div class="card">
                    <span class="card-title">🧠 Post-Course Support</span>
                    <p>
                        We offer continued support even after the course ends, ensuring students can reach out for clarifications or guidance when needed
                    </p>
                </div>
            </div>
            <div class="col s12 l4 m6">
                <div class="card">
                    <span class="card-title">📈 Proven Results</span>
                    <p>
                        We track progress regularly — and our students consistently improve grades and confidence
                    </p>
                </div>
            </div>
        </div>
        <h4>
            👉 Ready to see the difference? <router-link to="#contact" style="background-color: #fff; font-weight: 600;">CONTACT US</router-link> for a free demo!
        </h4>
    </div>
</template>
<style scoped>
#why-us {
    padding: 10px;
    background-color: #DAF4FA;
}
@media only screen and (min-width: 600px) {
    #why-us {
        padding: 40px;
  }
  .same-height {
    display: flex;
    flex-wrap: wrap;
  }
}
p {
    padding: 30px;
}
.card {
    min-height: 200px;
    border-radius: 20px;
    cursor: pointer;
}
</style>