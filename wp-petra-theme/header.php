<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="https://gmpg.org/xfn/11">
    
    <!-- SEO Meta Tags -->
    <meta name="description" content="<?php echo get_bloginfo('description'); ?>">
    <meta name="keywords" content="petra fc, football club, papua, sepak bola, indonesia, olahraga">
    <meta name="author" content="Petra FC">
    
    <!-- Open Graph Meta Tags -->
    <meta property="og:title" content="<?php wp_title('|', true, 'right'); bloginfo('name'); ?>">
    <meta property="og:description" content="<?php echo get_bloginfo('description'); ?>">
    <meta property="og:type" content="website">
    <meta property="og:url" content="<?php echo home_url(); ?>">
    <meta property="og:image" content="<?php echo get_template_directory_uri(); ?>/assets/images/petra-fc-logo.jpg">
    
    <!-- Twitter Card Meta Tags -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="<?php wp_title('|', true, 'right'); bloginfo('name'); ?>">
    <meta name="twitter:description" content="<?php echo get_bloginfo('description'); ?>">
    <meta name="twitter:image" content="<?php echo get_template_directory_uri(); ?>/assets/images/petra-fc-logo.jpg">
    
    <!-- Favicon -->
    <link rel="icon" type="image/x-icon" href="<?php echo get_template_directory_uri(); ?>/assets/images/favicon.ico">
    <link rel="apple-touch-icon" href="<?php echo get_template_directory_uri(); ?>/assets/images/apple-touch-icon.png">
    
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<header>
    <!-- Navigation -->
    <nav class="navbar">
        <div class="container">
            <a href="<?php echo home_url(); ?>" class="navbar-brand">
                <?php if (get_theme_mod('petra_logo')) : ?>
                    <img src="<?php echo get_theme_mod('petra_logo'); ?>" alt="<?php bloginfo('name'); ?>" style="height: 40px;">
                <?php else : ?>
                    Petra FC
                <?php endif; ?>
            </a>
            
            <ul class="navbar-nav">
                <li><a href="<?php echo home_url(); ?>">Beranda</a></li>
                <li><a href="<?php echo home_url('/jadwal'); ?>">Jadwal</a></li>
                <li><a href="<?php echo home_url('/tentang'); ?>">Tentang</a></li>
                <li><a href="<?php echo home_url('/tim'); ?>">Tim</a></li>
                <li><a href="<?php echo home_url('/berita'); ?>">Berita</a></li>
                <li><a href="<?php echo home_url('/kontak'); ?>">Kontak</a></li>
            </ul>
            
            <!-- Mobile Menu Toggle -->
            <button class="mobile-menu-toggle" style="display: none; background: none; border: none; color: var(--foreground); font-size: 1.5rem;" onclick="toggleMobileMenu()">
                ☰
            </button>
        </div>
    </nav>
</header>

<main>