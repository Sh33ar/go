// PAGE VIEW
gtag('event','page_view',{
page_title:document.title
});

// QR SCAN
gtag('event','qr_scan',{
event_category:'engagement'
});

// TIME ON PAGE
let startTime = Date.now();
window.addEventListener("beforeunload", function(){
let seconds = Math.round((Date.now() - startTime) / 1000);
gtag('event','time_on_page',{
event_category:'engagement',
value:seconds
});
});

// SCROLL DEPTH
let scrollTracked = false;
window.addEventListener("scroll", function(){
let scrolled = window.scrollY + window.innerHeight;
let height = document.body.scrollHeight;

if(!scrollTracked && scrolled > height * 0.6){
scrollTracked = true;
gtag('event','scroll_60',{
event_category:'engagement'
});
}
});
