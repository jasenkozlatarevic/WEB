"use strict";
jQuery(document).ready(function ($) {

//for Preloader

    $(window).load(function () {
        $("#loading").fadeOut(500);
    });



// scroll Up

    $(window).scroll(function () {
        if ($(this).scrollTop() > 600) {
            $('.scrollup').fadeIn('slow');
        } else {
            $('.scrollup').fadeOut('slow');
        }
    });
    $('.scrollup').click(function () {
        $("html, body").animate({scrollTop: 0}, 1000);
        return false;
    });
    //End
});

//THEME SWITCHER!
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    themeToggle.addEventListener('change', function() {
        if (this.checked) {
            body.classList.remove('light-theme');
            body.classList.add('dark-theme');
        } else {
            body.classList.remove('dark-theme');
            body.classList.add('light-theme');
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const openPopupBtn = document.getElementById('openPopupBtn');
    const closePopupBtn = document.getElementById('closePopupBtn');
    const popupContainer = document.getElementById('popupContainer');
    const overlay = document.getElementById('overlay');

    openPopupBtn.addEventListener('click', function() {
        popupContainer.classList.add('show');
        overlay.classList.add('show');
    });

    closePopupBtn.addEventListener('click', function() {
        popupContainer.classList.remove('show');
        overlay.classList.remove('show');
    });

    overlay.addEventListener('click', function() {
        popupContainer.classList.remove('show');
        overlay.classList.remove('show');
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const accordionHeaders = document.querySelectorAll(".accordion-header");

    accordionHeaders.forEach(header => {
        header.addEventListener("click", function() {
            const parent = this.parentNode;
            const isActive = parent.classList.contains("active");

            // Close all accordion items
            accordionHeaders.forEach(item => {
                item.parentNode.classList.remove("active");
            });

            // Toggle active class for clicked item
            if (!isActive) {
                parent.classList.add("active");
            }
        });
    });
});
