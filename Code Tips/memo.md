<script type="text/javascript">
const VIDEO_ELE = document.querySelector("#about .elementor-background-video-container video");
let MOBILE_VIDEO_URL = "https:\/\/circularity.kr\/wp-content\/uploads\/2023\/02\/mobile_background.mp4";
let PC_VIDEO = "https://circularity.kr/wp-content/uploads/2023/02/pc_background.mp4";
let DATASET = document.getElementById("about").dataset.settings;

let DATASET = document.getElementById("about").dataset.settings;

function URLChanger() {
    let WIDTH = window.innerWidth;
    if (WIDTH < '1024px') {
        VIDEO_ELE.src = MOBILE_VIDEO_URL;
        DATASET = `{"content_width":"full","background_background":"video","background_video_link":"${MOBILE_VIDEO_URL}","background_play_on_mobile":"yes"}`;
    } else {
        VIDEO_ELE.src = PC_VIDEO;
        DATASET = `{"content_width":"full","background_background":"video","background_video_link":"${PC_VIDEO}","background_play_on_mobile":"yes"}`;
    }
}

URLChanger();

window.addEventListener("resize", () => {
    URLChanger();
});

const ABOUT = document.getElementById("about");

</script>
