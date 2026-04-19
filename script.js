//=======================
//1. DARK MODE TOGGLE
//=======================
const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;

const savedTheme = localStorage.getItem('emilyTheme');
if(savedTheme === 'dark') {
    body.classList.add('dark-mode');
    toggleBtn.textContent = '☀️';
}

toggleBtn.addEventListener('click', function() {
    body.classList.toggle('dark-mode');
    if(body.classList.contains('dark-mode')) {
        toggleBtn.textContent ='☀️';
        localStorage.setItem('emilyTheme', 'dark');
    } else {
        toggleBtn.textContent ='🌙';
        localStorage.setItem('emilyTheme', 'light');
    }
});

//=========================
//2. STREAK COUNTER
//=========================
const streakSpan = document.getElementById('streak');
let visits = localStorage.getItem('emilyStreak');

if(visits) {
    visits = Number(visits) + 1;
} else{
    visits = 1;
}

streakSpan.textContent = visits;
localStorage.setItem('emilyStreak', visits);

//==========================
//3. BACK TO TOP BUTTON
//==========================
const backBtn = document.getElementById('back-to-top');

window.addEventListener('scroll', function() {
    if(this.window.scrollY > 400) {
        backBtn.classList.add('visible');
    } else {
        backBtn.classList.remove('visible');
    }
});

backBtn.addEventListener('ckick', function() {
    window.scrollTo({top:0, behavior:'smooth'});
});

//======================================
//4. ANIMATE PROGRESS BARS WHEN VISIBLE
//======================================
const progressSection = document.getElementById('progress-section');

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {threshold:0.3});

observer.observe(progressSection);

//===========================
//5. AUTO-UPDATE YEAR
//===========================
const yearSpan = document.getElementById('current-year');
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}