/**
 * ============================================
 * WebBag Shorts Maker AI
 * Main Application
 * Version : 1.0.0
 * Author  : WebBag
 * ============================================
 */

"use strict";

// =============================
// DOM Ready
// =============================

document.addEventListener("DOMContentLoaded", () => {

    console.log("🚀 WebBag Shorts Maker Started");

    initTheme();

initUploadArea();

initGenerateButton();

initPreview();

    

    

});


// =============================
// Theme
// =============================

function initTheme() {

    const themeBtn = document.getElementById("themeToggle");

    if (!themeBtn) return;

    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("light-mode");

    });

}


// =============================
// Upload Area
// =============================

function initUploadArea() {

    const dropArea = document.getElementById("dropArea");

    const input = document.getElementById("videoInput");

    if (!dropArea || !input) return;

    // Click

    dropArea.addEventListener("click", () => {

        input.click();

    });

    // File Selected

    input.addEventListener("change", (e) => {

        if (!e.target.files.length) return;

        const file = e.target.files[0];

        showSelectedFile(file);

    });

    // Drag Events

    ["dragenter", "dragover"].forEach(eventName => {

        dropArea.addEventListener(eventName, e => {

            e.preventDefault();

            dropArea.classList.add("dragging");

        });

    });

    ["dragleave", "drop"].forEach(eventName => {

        dropArea.addEventListener(eventName, e => {

            e.preventDefault();

            dropArea.classList.remove("dragging");

        });

    });

    // Drop File

    dropArea.addEventListener("drop", e => {

        const files = e.dataTransfer.files;

        if (!files.length) return;

        showSelectedFile(files[0]);

    });

}


// =============================
// Show File
// =============================

function showSelectedFile(file) {

    const dropArea = document.getElementById("dropArea");

    dropArea.innerHTML = `

        <i class="fa-solid fa-circle-check"></i>

        <br><br>

        <strong>${file.name}</strong>

        <br>

        ${(file.size / 1024 / 1024).toFixed(2)} MB

    `;

}


// =============================
// Generate Button
// =============================


function initGenerateButton() {

    const btn = document.getElementById("generateBtn");

    if (!btn) return;

    btn.addEventListener("click", () => {

        const textarea = document.querySelector("textarea");

        if (!textarea.value.trim()) {

            alert("يرجى كتابة فكرة الفيديو أولاً.");

            return;

        }

        alert("🚀 سيتم ربط الذكاء الاصطناعي في المرحلة القادمة.");

    });

}
// ============================================
// Preview Area
// ============================================

function initPreview() {

    const input = document.getElementById("videoInput");

    const preview = document.querySelector(".preview");

    if (!input || !preview) return;

    input.addEventListener("change", () => {

        if (!input.files.length) return;

        const file = input.files[0];

        preview.innerHTML = "";

        // الصور

        if (file.type.startsWith("image")) {

            const img = document.createElement("img");

            img.src = URL.createObjectURL(file);

            img.className = "preview-image";

            preview.appendChild(img);

        }

        // الفيديو

        else if (file.type.startsWith("video")) {

            const video = document.createElement("video");

            video.src = URL.createObjectURL(file);

            video.controls = true;

            video.className = "preview-video";

            preview.appendChild(video);

        }

    });

}


// ============================================
// Progress Bar
// ============================================

function fakeUploadProgress() {

    const progress = document.getElementById("uploadProgress");

    if (!progress) return;

    let value = 0;

    const timer = setInterval(() => {

        value += 5;
        ┌───────────────┐
│ 🖼️ صورة 1     │
└───────────────┘

┌───────────────┐
│ 🖼️ صورة 2     │
└───────────────┘

┌───────────────┐
│ 🖼️ صورة 3     │
└───────────────┘

        progress.value = value;

        if (value >= 100) {

            clearInterval(timer);

        }

    }, 80);

}


// ============================================
// Remove File
// ============================================

function clearUpload() {

    const input = document.getElementById("videoInput");

    const preview = document.querySelector(".preview");

    const dropArea = document.getElementById("dropArea");

    if (!input || !preview || !dropArea) return;

    input.value = "";

    preview.innerHTML = "";

    dropArea.innerHTML = `

        اسحب الصور أو الفيديو هنا

        <br><br>

        أو اضغط للاختيار

    `;

}
