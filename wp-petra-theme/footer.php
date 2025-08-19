</main>

<!-- Footer -->
<footer class="footer">
    <div class="container">
        <div class="footer-content">
            <!-- Brand Section -->
            <div>
                <h4><?php echo get_theme_mod('petra_footer_brand_title', 'Petra FC'); ?></h4>
                <p style="color: rgba(255, 255, 255, 0.8); margin-bottom: 1rem;">
                    <?php echo get_theme_mod('petra_footer_brand_description', 'Membangun Papua melalui sepak bola dan membuka peluang untuk semua. Bergabunglah dalam misi kami menciptakan perubahan positif.'); ?>
                </p>
                <div style="display: flex; gap: 1rem;">
                    <?php if (get_theme_mod('petra_facebook_url')) : ?>
                        <a href="<?php echo get_theme_mod('petra_facebook_url'); ?>" target="_blank" aria-label="Facebook">📘</a>
                    <?php endif; ?>
                    <?php if (get_theme_mod('petra_instagram_url')) : ?>
                        <a href="<?php echo get_theme_mod('petra_instagram_url'); ?>" target="_blank" aria-label="Instagram">📷</a>
                    <?php endif; ?>
                    <?php if (get_theme_mod('petra_youtube_url')) : ?>
                        <a href="<?php echo get_theme_mod('petra_youtube_url'); ?>" target="_blank" aria-label="YouTube">📺</a>
                    <?php endif; ?>
                </div>
            </div>
            
            <!-- Contact Section -->
            <div>
                <h4>Kontak</h4>
                <div style="color: rgba(255, 255, 255, 0.8);">
                    <p>📧 <?php echo get_theme_mod('petra_contact_email', 'info@petrafc.id'); ?></p>
                    <p>📞 <?php echo get_theme_mod('petra_contact_phone', '+62 811-484-xxxx'); ?></p>
                    <p>📍 <?php echo get_theme_mod('petra_contact_address', 'Jayapura, Papua, Indonesia'); ?></p>
                </div>
            </div>
            
            <!-- Quick Links -->
            <div>
                <h4>Informasi</h4>
                <div style="display: flex; flex-direction: column; gap: 0.5rem;">
                    <a href="<?php echo home_url('/tentang'); ?>">Tentang Kami</a>
                    <a href="<?php echo home_url('/program'); ?>">Program</a>
                    <a href="<?php echo home_url('/jadwal'); ?>">Jadwal</a>
                    <a href="<?php echo home_url('/keuangan'); ?>">Transparansi Keuangan</a>
                </div>
            </div>
            
            <!-- Social Links -->
            <div>
                <h4>Media Sosial</h4>
                <div style="display: flex; flex-direction: column; gap: 0.5rem;">
                    <?php if (get_theme_mod('petra_facebook_url')) : ?>
                        <a href="<?php echo get_theme_mod('petra_facebook_url'); ?>" target="_blank">Facebook</a>
                    <?php endif; ?>
                    <?php if (get_theme_mod('petra_instagram_url')) : ?>
                        <a href="<?php echo get_theme_mod('petra_instagram_url'); ?>" target="_blank">Instagram</a>
                    <?php endif; ?>
                    <?php if (get_theme_mod('petra_youtube_url')) : ?>
                        <a href="<?php echo get_theme_mod('petra_youtube_url'); ?>" target="_blank">YouTube Channel</a>
                    <?php endif; ?>
                </div>
            </div>
        </div>
        
        <div class="footer-bottom">
            <p>&copy; <?php echo date('Y'); ?> Petra Football Club. All rights reserved.</p>
            <div style="margin-top: 0.5rem;">
                <a href="<?php echo home_url('/privacy-policy'); ?>">Privacy Policy</a>
                <span style="margin: 0 1rem;">•</span>
                <a href="<?php echo home_url('/terms-of-service'); ?>">Terms of Service</a>
            </div>
        </div>
    </div>
</footer>

<!-- Scripts -->
<script>
// Mobile Menu Toggle
function toggleMobileMenu() {
    const nav = document.querySelector('.navbar-nav');
    const isVisible = nav.style.display === 'flex';
    nav.style.display = isVisible ? 'none' : 'flex';
    
    if (!isVisible) {
        nav.style.position = 'absolute';
        nav.style.top = '100%';
        nav.style.left = '0';
        nav.style.right = '0';
        nav.style.background = 'white';
        nav.style.flexDirection = 'column';
        nav.style.padding = '1rem';
        nav.style.boxShadow = 'var(--shadow-strong)';
    }
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = 'var(--shadow-soft)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Responsive navigation
function handleResize() {
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('.navbar-nav');
    
    if (window.innerWidth <= 768) {
        mobileToggle.style.display = 'block';
        nav.style.display = 'none';
    } else {
        mobileToggle.style.display = 'none';
        nav.style.display = 'flex';
        nav.style.position = 'static';
        nav.style.flexDirection = 'row';
        nav.style.background = 'transparent';
        nav.style.padding = '0';
        nav.style.boxShadow = 'none';
    }
}

window.addEventListener('resize', handleResize);
window.addEventListener('load', handleResize);
</script>

<?php wp_footer(); ?>
</body>
</html>