/**
 * Petra FC Theme JavaScript
 */

(function($) {
    'use strict';

    // Mobile menu toggle
    function initMobileMenu() {
        $('.mobile-menu-toggle').on('click', function() {
            $('.navbar-nav').slideToggle();
        });
    }

    // Smooth scrolling
    function initSmoothScroll() {
        $('a[href^="#"]').on('click', function(e) {
            e.preventDefault();
            var target = $(this.getAttribute('href'));
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top - 80
                }, 1000);
            }
        });
    }

    // Navbar scroll effect
    function initNavbarScroll() {
        $(window).on('scroll', function() {
            if ($(window).scrollTop() > 100) {
                $('.navbar').addClass('navbar-scrolled');
            } else {
                $('.navbar').removeClass('navbar-scrolled');
            }
        });
    }

    // Initialize all functions
    $(document).ready(function() {
        initMobileMenu();
        initSmoothScroll();
        initNavbarScroll();
    });

})(jQuery);