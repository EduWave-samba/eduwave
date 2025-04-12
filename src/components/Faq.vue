<template>
    <div id="faq">
        <h3>
            FAQs and Announcements
        </h3>
<div class="row">
    <div class="col s12 m6">
        <h5>FAQs</h5>
        <ul class="collapsible">
            <li>
                <div class="collapsible-header"><i class="material-icons">help_outline</i>What classes do you offer?</div>
                <div class="collapsible-body"><span>We offer coaching for classes 8 to 12 in all major subjects.</span></div>
            </li>
            <li>
                <div class="collapsible-header"><i class="material-icons">schedule</i>What are the batch timings?</div>
                <div class="collapsible-body"><span>Our evening batches ensure that students can continue their school education without any disruption.</span></div>
            </li>
            <li>
                <div class="collapsible-header"><i class="material-icons">payments</i>What is the fee structure?</div>
                <div class="collapsible-body"><span>Our fees vary by subject and class. Contact us for detailed information.</span></div>
            </li>
        </ul>
    </div>

    <div class="col s12 m6">
        <h5>Announcements</h5>
        <ul class="collapsible">
            <li>
                <div class="collapsible-header"><i class="material-icons">announcement</i>New Batch Starting April 24</div>
                <div class="collapsible-body"><span>Enroll now for the new batch starting April 24. Limited seats available!</span></div>
            </li>
        </ul>
    </div>
</div>

    </div>
</template>
<style scoped>
#faq {
    background-color: #DAF4FA;
    padding: 10px;
}
@media only screen and (min-width: 600px) {
    #faq {
        padding: 60px;
  }
}
</style>
<script>
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.collapsible');
    M.Collapsible.init(elems);
  });
</script>