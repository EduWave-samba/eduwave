<template>
    <div id="subjects">
        <h3>
            Subjects we can offer
        </h3>
        <br><br>
        <div class="row">
            <div class="col s12">
            <ul class="tabs">
                <li class="tab col s6"><a class="active" href="#test1">Class 8th - 10th</a></li>
                <li class="tab col s6"><a href="#test2">Class 11th - 12th</a></li>
            </ul>
            </div>
            <div id="test1" class="col s12">
                <div class="row same-height">
                    <div class="col s12 m4">
                        <div class="card hover-animate">
                            <div class="card-content center">
                                <i class="material-icons large">calculate</i>
                                <span class="card-title">Math</span>
                                <p>Foundation to advanced levels, including algebra, geometry, and exam prep.</p>
                            </div>
                        </div>
                    </div>

                    <div class="col s12 m4">
                        <div class="card hover-animate">
                        <div class="card-content center">
                            <i class="material-icons large">science</i>
                            <span class="card-title">Science</span>
                            <p>Physics, Chemistry, and Biology simplified with hands-on concepts.</p>
                        </div>
                        </div>
                    </div>

                    <div class="col s12 m4">
                        <div class="card hover-animate">
                        <div class="card-content center">
                            <i class="material-icons large">menu_book</i>
                            <span class="card-title">English</span>
                            <p>Improve grammar, comprehension, writing, and communication skills.</p>
                        </div>
                        </div>
                    </div>
                </div>

            </div>
            <div id="test2" class="col s12">
                <div class="row same-height">
                    <div class="col s12 m4">
                        <div class="card hover-animate">
                        <div class="card-content center">
                            <i class="material-icons large">speed</i>
                            <span class="card-title">Physics</span>
                            <p>Understand the laws of motion, electricity, optics, and more through engaging explanations and problem-solving.</p>
                        </div>
                        </div>
                    </div>

                    <div class="col s12 m4">
                        <div class="card hover-animate">
                        <div class="card-content center">
                            <i class="material-icons large">science</i>
                            <span class="card-title">Chemistry</span>
                            <p>Master chemical reactions, periodic trends, equations, and practical applications with step-by-step guidance.</p>
                        </div>
                        </div>
                    </div>

                    <div class="col s12 m4">
                        <div class="card hover-animate">
                        <div class="card-content center">
                            <i class="material-icons large">biotech</i>
                            <span class="card-title">Biology</span>
                            <p>Explore the world of life — from cells to ecosystems — with visual learning and interactive practice.</p>
                        </div>
                        </div>
                    </div>
                    <div class="col s12 m6">
                        <div class="card hover-animate">
                            <div class="card-content center">
                                <i class="material-icons large">calculate</i>
                                <span class="card-title">Math</span>
                                <p>Foundation to advanced levels, including algebra, geometry, and exam prep.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col s12 m6">
                        <div class="card hover-animate">
                        <div class="card-content center">
                            <i class="material-icons large">menu_book</i>
                            <span class="card-title">English</span>
                            <p>Improve grammar, comprehension, writing, and communication skills.</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.tabs .tab a {
  color: #DAF4FA;
}

.tabs .tab a:hover {
  color:#DAF4FA;
}

.tabs .tab a:focus.active {
  color:#DAF4FA;
  background-color: #daf4fa8d;
}
.indicator {
    background-color: #DAF4FA !important;
}
.tabs .indicator {
    background-color: #DAF4FA !important;
}
.hover-animate {
  transition: background-color 0.3s ease, color 0.3s ease;
}

.hover-animate:hover {
  background-color: #DAF4FA;
  color: #0d47a1;
}

.hover-animate:hover .material-icons {
  color: #0d47a1;
}
@media only screen and (min-width: 600px) {
  .same-height {
    display: flex;
    flex-wrap: wrap;
  }
}
.card {
    min-height: 250px;
    border-radius: 20px;
    cursor: pointer;
}
</style>
<script>
export default {
    mounted() {
        const elem = document.querySelector(".tabs");
        this.tabs = window.M.Tabs.init(elem)[0];
    }
}
</script>