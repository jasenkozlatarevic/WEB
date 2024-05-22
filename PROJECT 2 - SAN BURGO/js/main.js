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

var accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(function(item) {
    item.querySelector('.accordion-header').addEventListener('click', function() {
        var content = this.nextElementSibling;
        if (content.style.display === 'block') {
            content.style.display = 'none';
        } else {
            content.style.display = 'block';
        }
    });
});
    function openModal(imgSrc) {
        var modalHtml = `
            <div class="modal" id="imageModal" tabindex="-1" role="dialog">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <img class="img-fluid" src="${imgSrc}" alt="Image">
                        </div>
                    </div>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', modalHtml);
        $('#imageModal').modal('show');
    }
    var thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach(function(thumbnail) {
        thumbnail.addEventListener('click', function() {
            openModal(this.src);
        });
    });
