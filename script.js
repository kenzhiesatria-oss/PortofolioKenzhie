// 1. Tampilkan pesan saat website dibuka
console.log("Welcome to Kenzhi's Portfolio!");

// 2. Efek tombol saat diklik
const buttons = document.querySelectorAll(".btn");

buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        console.log("Tombol diklik:", button.textContent);
    });
});

// 3. Animasi sederhana saat bagian website terlihat
const sections = document.querySelectorAll("main section");

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, {
    threshold: 0.15
});

sections.forEach(function(section) {
    observer.observe(section);
});

// 4. Tahun footer otomatis
const footer = document.querySelector("footer");

if (footer) {
    footer.innerHTML = footer.innerHTML.replace(
        /\d{4}/,
        new Date().getFullYear()
    );
}
