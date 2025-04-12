<template>
    <Hero/>
    <WhyUs/>
    <Subjects/>
    <FAQs/>
    <!-- <Faculty/> -->
    <Contact/>
</template>
<script>
import Hero from "../components/Hero";
import WhyUs from "../components/WhyUs";
import Subjects from "../components/Subjects";
// import Faculty from "../components/Faculty";
import FAQs from "../components/Faq";
import Contact from "../components/Contact";

export default {
  components: {
    Hero,
    WhyUs,
    Subjects,
    // Faculty,
    FAQs,
    Contact,
  },
};
</script>