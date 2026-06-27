/*
=========================================
WebBag Shorts Maker AI
Version: 1.0.0
Author: WebBag
=========================================
*/

document.addEventListener("DOMContentLoaded", () => {
    console.log("🚀 WebBag Shorts Maker AI Started");

    initializeApp();
});

function initializeApp() {
    initTheme();
    initNavigation();
    initUploadArea();
    initButtons();
}

// ===========================
// Theme
// ===========================

function initTheme() {
    const themeBtn = document.getElementById("themeToggle");

    if (!themeBtn) return;

    themeBtn.addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    });
}

// ===========================
// Navigation
// ===========================

function initNavigation() {

    const menuBtn = document.getElementById("menuToggle");
    const nav = document.querySelector(".nav-links");

    if (!menuBtn || !nav) return;

    menuBtn.addEventListener("click", () => {
        nav.classList.toggle("active");
    });

}

// ===========================
// Upload Area
// ===========================

function initUploadArea() {

    const dropArea = document.getElementById("dropArea");
    const input = document.getElementById("videoInput");

    if (!dropArea || !input) return;

    dropArea.addEventListener("click", () => {
        input.click();
    });

    input.addEventListener("change", () => {

        if (!input.files.length) return;

        const file = input.files[0];

        console.log("Selected:", file.name);

    });

}

// ===========================
// Buttons
// ===========================

function initButtons() {

    const generateBtn = document.getElementById("generateBtn");

    if (!generateBtn) return;

    generateBtn.addEventListener("click", () => {

        alert("🚀 سيتم ربط الذكاء الاصطناعي في المرحلة القادمة.");

    });

}
