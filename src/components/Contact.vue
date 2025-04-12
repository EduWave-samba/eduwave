<template>
    <div id="contact" class="container">
        <h4 class="center-align">Contact Us</h4>
        <div class="row">
            <div class="col s12 m6">
                <div v-if="isDesktop">
                    <img src="../assets/instagramQR.png" class="responsive-img" style="height:300px">
                </div>
                <div class="row">
                    <div class="col s6 custom-margin" v-if="!isDesktop">
                        <a href="https://wa.me/917051532939?text=Hi%2C%20I%27m%20interested%20in%20your%20tuition%20services." class="btn  btn-block whatsapp-button"><i class="material-icons" style="margin-bottom:4px">message</i>Whatsapp</a>
                    </div>
                    <div class="col s6 custom-margin" v-if="!isDesktop">
                        <a href="https://www.instagram.com/eduwave.samba" class="btn btn-block instagram-button"><img src="../assets/instagram.png" class="responsive-img" style="height:24px" />Follow</a>
                    </div>
                    <div class="col s6 custom-margin">
                        <a href="tel:+917051532939" class="btn btn-block call-button"><i class="material-icons" style="margin-bottom:4px">phone</i>Call Us</a>
                    </div>
                    <div class="col s6 custom-margin">
                        <a class="btn btn-block email-button" href="mailto:eduwavesamba@gmail.com?subject=Enquiry for Tuition Fee from Website&body=Hi, I’d like to know more about your tuition services."><i class="material-icons">email</i>Email Us</a>
                    </div>
                </div>
                <p><i class="material-icons left">location_on</i>EduWave, 1st Floor, Near ISKCON, Near Hospital Road, National Highway, Samba, J&K</p>
            </div>
            <div class="video-container col s12 m6" style="margin-top: 20px; height:420px">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d210.16993606578552!2d75.11917904857012!3d32.56034457354678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391c228e275f489d%3A0x84571966b3c68b65!2sNIIT%20Samba%20Centre!5e0!3m2!1sen!2sin!4v1744390923406!5m2!1sen!2sin" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    </div>

</template>
<style scoped>
.custom-margin {
    margin: 10px 0;
}
.btn i,
.btn img {
  vertical-align: middle;
  margin-right: 8px; /* Space between icon and text */
}

.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px; /* Optional: controls space between icon and text */
}
.instagram-button {
    background: linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888);
    color: white;
}
.whatsapp-button {
    background-color: #25D366;
    color: white;
}
.call-button {
    background-color: #34A853;
    color: white;
}
.email-button {
    background-color: #4285F4;
    color: white;
}
</style>
<script>
export default {
    computed: {
        isDesktop() {
            if( screen.width > 760 ) {
                return true;
            }
            return false;
        }
    }
}
</script>