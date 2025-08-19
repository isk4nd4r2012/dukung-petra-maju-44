<?php
/**
 * Petra FC Theme Functions
 * 
 * @package Petra_FC
 * @version 1.0.0
 */

// Prevent direct access
if (!defined('ABSPATH')) {
    exit;
}

/**
 * Theme Setup
 */
function petra_fc_setup() {
    // Add theme support for various features
    add_theme_support('automatic-feed-links');
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('customize-selective-refresh-widgets');
    add_theme_support('custom-logo', array(
        'height'      => 100,
        'width'       => 400,
        'flex-width'  => true,
        'flex-height' => true,
    ));

    // Add custom image sizes
    add_image_size('petra-hero', 1920, 1080, true);
    add_image_size('petra-card', 400, 300, true);
    add_image_size('petra-thumbnail', 150, 150, true);

    // Register navigation menus
    register_nav_menus(array(
        'primary' => __('Primary Menu', 'petra-fc'),
        'footer'  => __('Footer Menu', 'petra-fc'),
    ));

    // Add HTML5 support
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
    ));

    // Add custom post type support
    add_theme_support('custom-background');
    add_theme_support('custom-header');
}
add_action('after_setup_theme', 'petra_fc_setup');

/**
 * Content Width
 */
function petra_fc_content_width() {
    $GLOBALS['content_width'] = apply_filters('petra_fc_content_width', 1200);
}
add_action('after_setup_theme', 'petra_fc_content_width', 0);

/**
 * Enqueue Scripts and Styles
 */
function petra_fc_scripts() {
    // Enqueue theme stylesheet
    wp_enqueue_style('petra-fc-style', get_stylesheet_uri(), array(), '1.0.0');
    
    // Enqueue custom JavaScript
    wp_enqueue_script('petra-fc-script', get_template_directory_uri() . '/assets/js/petra-fc.js', array(), '1.0.0', true);
    
    // Enqueue comment reply script
    if (is_singular() && comments_open() && get_option('thread_comments')) {
        wp_enqueue_script('comment-reply');
    }
}
add_action('wp_enqueue_scripts', 'petra_fc_scripts');

/**
 * Register Widget Areas
 */
function petra_fc_widgets_init() {
    register_sidebar(array(
        'name'          => __('Primary Sidebar', 'petra-fc'),
        'id'            => 'sidebar-1',
        'description'   => __('Add widgets here.', 'petra-fc'),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget'  => '</section>',
        'before_title'  => '<h2 class="widget-title">',
        'after_title'   => '</h2>',
    ));

    register_sidebar(array(
        'name'          => __('Footer 1', 'petra-fc'),
        'id'            => 'footer-1',
        'description'   => __('Add widgets here for footer column 1.', 'petra-fc'),
        'before_widget' => '<div id="%1$s" class="widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h4 class="widget-title">',
        'after_title'   => '</h4>',
    ));
}
add_action('widgets_init', 'petra_fc_widgets_init');

/**
 * Custom Post Types
 */
function petra_fc_custom_post_types() {
    // Players Post Type
    register_post_type('players', array(
        'labels' => array(
            'name' => 'Players',
            'singular_name' => 'Player',
            'menu_name' => 'Players',
            'add_new' => 'Add New Player',
            'add_new_item' => 'Add New Player',
            'edit_item' => 'Edit Player',
            'new_item' => 'New Player',
            'view_item' => 'View Player',
            'search_items' => 'Search Players',
        ),
        'public' => true,
        'has_archive' => true,
        'supports' => array('title', 'editor', 'thumbnail', 'custom-fields'),
        'menu_icon' => 'dashicons-groups',
        'rewrite' => array('slug' => 'players'),
    ));

    // Matches Post Type
    register_post_type('matches', array(
        'labels' => array(
            'name' => 'Matches',
            'singular_name' => 'Match',
            'menu_name' => 'Matches',
            'add_new' => 'Add New Match',
            'add_new_item' => 'Add New Match',
            'edit_item' => 'Edit Match',
            'new_item' => 'New Match',
            'view_item' => 'View Match',
            'search_items' => 'Search Matches',
        ),
        'public' => true,
        'has_archive' => true,
        'supports' => array('title', 'editor', 'thumbnail', 'custom-fields'),
        'menu_icon' => 'dashicons-calendar-alt',
        'rewrite' => array('slug' => 'matches'),
    ));
}
add_action('init', 'petra_fc_custom_post_types');

/**
 * Theme Customizer
 */
function petra_fc_customize_register($wp_customize) {
    // Hero Section
    $wp_customize->add_section('petra_hero_section', array(
        'title' => __('Hero Section', 'petra-fc'),
        'priority' => 30,
    ));

    $wp_customize->add_setting('petra_hero_title', array(
        'default' => 'PETRA FOOTBALL CLUB',
        'sanitize_callback' => 'sanitize_text_field',
    ));

    $wp_customize->add_control('petra_hero_title', array(
        'label' => __('Hero Title', 'petra-fc'),
        'section' => 'petra_hero_section',
        'type' => 'text',
    ));

    $wp_customize->add_setting('petra_hero_subtitle', array(
        'default' => 'Membangun Papua Melalui Sepak Bola dan Membuka Peluang untuk Semua',
        'sanitize_callback' => 'sanitize_textarea_field',
    ));

    $wp_customize->add_control('petra_hero_subtitle', array(
        'label' => __('Hero Subtitle', 'petra-fc'),
        'section' => 'petra_hero_section',
        'type' => 'textarea',
    ));

    // Contact Information
    $wp_customize->add_section('petra_contact_section', array(
        'title' => __('Contact Information', 'petra-fc'),
        'priority' => 35,
    ));

    $wp_customize->add_setting('petra_contact_email', array(
        'default' => 'info@petrafc.id',
        'sanitize_callback' => 'sanitize_email',
    ));

    $wp_customize->add_control('petra_contact_email', array(
        'label' => __('Contact Email', 'petra-fc'),
        'section' => 'petra_contact_section',
        'type' => 'email',
    ));

    $wp_customize->add_setting('petra_contact_phone', array(
        'default' => '+62 811-484-xxxx',
        'sanitize_callback' => 'sanitize_text_field',
    ));

    $wp_customize->add_control('petra_contact_phone', array(
        'label' => __('Contact Phone', 'petra-fc'),
        'section' => 'petra_contact_section',
        'type' => 'text',
    ));

    // Social Media Links
    $wp_customize->add_section('petra_social_section', array(
        'title' => __('Social Media', 'petra-fc'),
        'priority' => 40,
    ));

    $wp_customize->add_setting('petra_facebook_url', array(
        'default' => '',
        'sanitize_callback' => 'esc_url_raw',
    ));

    $wp_customize->add_control('petra_facebook_url', array(
        'label' => __('Facebook URL', 'petra-fc'),
        'section' => 'petra_social_section',
        'type' => 'url',
    ));

    $wp_customize->add_setting('petra_instagram_url', array(
        'default' => '',
        'sanitize_callback' => 'esc_url_raw',
    ));

    $wp_customize->add_control('petra_instagram_url', array(
        'label' => __('Instagram URL', 'petra-fc'),
        'section' => 'petra_social_section',
        'type' => 'url',
    ));
}
add_action('customize_register', 'petra_fc_customize_register');

/**
 * Excerpt Length
 */
function petra_fc_excerpt_length($length) {
    return 20;
}
add_filter('excerpt_length', 'petra_fc_excerpt_length', 999);

/**
 * Excerpt More
 */
function petra_fc_excerpt_more($more) {
    return '...';
}
add_filter('excerpt_more', 'petra_fc_excerpt_more');

/**
 * Custom Meta Fields for Players
 */
function petra_fc_add_player_meta_boxes() {
    add_meta_box(
        'player-details',
        'Player Details',
        'petra_fc_player_meta_box_callback',
        'players'
    );
}
add_action('add_meta_boxes', 'petra_fc_add_player_meta_boxes');

function petra_fc_player_meta_box_callback($post) {
    wp_nonce_field('petra_fc_save_player_meta', 'petra_fc_player_meta_nonce');
    
    $position = get_post_meta($post->ID, '_player_position', true);
    $jersey_number = get_post_meta($post->ID, '_jersey_number', true);
    $goals = get_post_meta($post->ID, '_goals', true);
    $assists = get_post_meta($post->ID, '_assists', true);
    $matches_played = get_post_meta($post->ID, '_matches_played', true);
    
    echo '<table class="form-table">';
    echo '<tr><th><label for="player_position">Position</label></th>';
    echo '<td><input type="text" id="player_position" name="player_position" value="' . esc_attr($position) . '" /></td></tr>';
    echo '<tr><th><label for="jersey_number">Jersey Number</label></th>';
    echo '<td><input type="number" id="jersey_number" name="jersey_number" value="' . esc_attr($jersey_number) . '" /></td></tr>';
    echo '<tr><th><label for="goals">Goals</label></th>';
    echo '<td><input type="number" id="goals" name="goals" value="' . esc_attr($goals) . '" /></td></tr>';
    echo '<tr><th><label for="assists">Assists</label></th>';
    echo '<td><input type="number" id="assists" name="assists" value="' . esc_attr($assists) . '" /></td></tr>';
    echo '<tr><th><label for="matches_played">Matches Played</label></th>';
    echo '<td><input type="number" id="matches_played" name="matches_played" value="' . esc_attr($matches_played) . '" /></td></tr>';
    echo '</table>';
}

function petra_fc_save_player_meta($post_id) {
    if (!isset($_POST['petra_fc_player_meta_nonce']) || !wp_verify_nonce($_POST['petra_fc_player_meta_nonce'], 'petra_fc_save_player_meta')) {
        return;
    }

    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
        return;
    }

    if (!current_user_can('edit_post', $post_id)) {
        return;
    }

    if (isset($_POST['player_position'])) {
        update_post_meta($post_id, '_player_position', sanitize_text_field($_POST['player_position']));
    }
    
    if (isset($_POST['jersey_number'])) {
        update_post_meta($post_id, '_jersey_number', sanitize_text_field($_POST['jersey_number']));
    }
    
    if (isset($_POST['goals'])) {
        update_post_meta($post_id, '_goals', sanitize_text_field($_POST['goals']));
    }
    
    if (isset($_POST['assists'])) {
        update_post_meta($post_id, '_assists', sanitize_text_field($_POST['assists']));
    }
    
    if (isset($_POST['matches_played'])) {
        update_post_meta($post_id, '_matches_played', sanitize_text_field($_POST['matches_played']));
    }
}
add_action('save_post', 'petra_fc_save_player_meta');

/**
 * Security Enhancements
 */
// Remove WordPress version from head
remove_action('wp_head', 'wp_generator');

// Disable file editing from admin
define('DISALLOW_FILE_EDIT', true);

// Hide login errors
function petra_fc_login_errors() {
    return 'Something is wrong!';
}
add_filter('login_errors', 'petra_fc_login_errors');