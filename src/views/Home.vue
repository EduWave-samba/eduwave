<template>
    <Hero/>
    <WhyUs/>
    <Subjects/>
    <Faculty/>
    <Contact/>
</template>
<script>
import Hero from "../components/Hero";
import WhyUs from "../components/WhyUs";
import Subjects from "../components/Subjects";
import Faculty from "../components/Faculty";
import Contact from "../components/Contact";

export default {
  components: {
    Hero,
    WhyUs,
    Subjects,
    Faculty,
    Contact,
  },
};
</script>