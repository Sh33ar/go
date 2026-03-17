// ===== Advanced Tracking System =====

// QR Scan Event
gtag('event','qr_scan',{
event_category:'engagement'
});

// Time on Page
let startTime = Date.now();
window.addEventListener("beforeunload", function(){
let timeSpent = Math.round((Date.now() - startTime)/1000);
gtag('event','time_on_page',{
value:timeSpent
});
});

// Scroll Depth
let scrollTracked = false;
window.addEventListener("scroll", function(){
let scrolled = window.scrollY + window.innerHeight;
let height = document.body.scrollHeight;

if(!scrollTracked && scrolled > height * 0.6){
scrollTracked = true;
gtag('event','scroll_60');
}
});

// Device Type
let device = /Mobi|Android/i.test(navigator.userAgent) ? "mobile" : "desktop";
gtag('event','device_detected',{
event_label:device
});

// Language
gtag('event','language',{
event_label:navigator.language
});
