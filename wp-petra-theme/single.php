<?php get_header(); ?>

<div style="padding-top: 80px;"> <!-- Account for fixed navbar -->
    <?php while (have_posts()) : the_post(); ?>
        <!-- Article Hero -->
        <section style="background: var(--gradient-dark); color: white; padding: 4rem 0;">
            <div class="container">
                <div style="max-width: 800px; margin: 0 auto;">
                    <!-- Category -->
                    <?php $categories = get_the_category(); ?>
                    <?php if (!empty($categories)) : ?>
                        <div style="margin-bottom: 1rem;">
                            <span style="background: var(--secondary); color: var(--secondary-foreground); padding: 0.5rem 1rem; border-radius: 2rem; font-size: 0.9rem; font-weight: 500;">
                                <?php echo esc_html($categories[0]->name); ?>
                            </span>
                        </div>
                    <?php endif; ?>

                    <!-- Title -->
                    <h1 style="font-size: 2.5rem; line-height: 1.2; margin-bottom: 1.5rem; text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);">
                        <?php the_title(); ?>
                    </h1>

                    <!-- Meta Information -->
                    <div style="display: flex; gap: 2rem; flex-wrap: wrap; opacity: 0.9; font-size: 0.95rem;">
                        <div>
                            <strong>Penulis:</strong> <?php the_author(); ?>
                        </div>
                        <div>
                            <strong>Tanggal:</strong> <?php echo get_the_date('d F Y'); ?>
                        </div>
                        <div>
                            <strong>Waktu Baca:</strong> <?php echo petra_fc_reading_time(); ?> menit
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Featured Image -->
        <?php if (has_post_thumbnail()) : ?>
            <section style="padding: 2rem 0;">
                <div class="container">
                    <div style="max-width: 1000px; margin: 0 auto;">
                        <img src="<?php the_post_thumbnail_url('large'); ?>" 
                             alt="<?php the_title(); ?>" 
                             style="width: 100%; height: 500px; object-fit: cover; border-radius: var(--radius); box-shadow: var(--shadow-strong);">
                    </div>
                </div>
            </section>
        <?php endif; ?>

        <!-- Article Content -->
        <section style="padding: 2rem 0 4rem;">
            <div class="container">
                <div style="max-width: 800px; margin: 0 auto;">
                    <article style="line-height: 1.8; color: var(--foreground); font-size: 1.1rem;">
                        <?php
                        the_content();
                        
                        wp_link_pages(array(
                            'before' => '<div style="margin-top: 2rem; text-align: center;">',
                            'after'  => '</div>',
                        ));
                        ?>
                    </article>

                    <!-- Tags -->
                    <?php $tags = get_the_tags(); ?>
                    <?php if ($tags) : ?>
                        <div style="margin-top: 3rem; padding-top: 2rem; border-top: 1px solid var(--border);">
                            <h4 style="margin-bottom: 1rem; color: var(--primary);">Tags:</h4>
                            <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                                <?php foreach ($tags as $tag) : ?>
                                    <a href="<?php echo get_tag_link($tag->term_id); ?>" 
                                       style="background: var(--muted); color: var(--muted-foreground); padding: 0.5rem 1rem; border-radius: 2rem; font-size: 0.9rem; text-decoration: none; transition: var(--transition-smooth);">
                                        <?php echo esc_html($tag->name); ?>
                                    </a>
                                <?php endforeach; ?>
                            </div>
                        </div>
                    <?php endif; ?>

                    <!-- Author Bio -->
                    <div style="margin-top: 3rem; padding: 2rem; background: var(--muted); border-radius: var(--radius);">
                        <div style="display: flex; gap: 1rem; align-items: center;">
                            <div>
                                <?php echo get_avatar(get_the_author_meta('ID'), 80, '', '', array('style' => 'border-radius: 50%; border: 3px solid var(--primary);')); ?>
                            </div>
                            <div>
                                <h4 style="color: var(--primary); margin-bottom: 0.5rem;">
                                    <?php the_author(); ?>
                                </h4>
                                <p style="color: var(--muted-foreground); margin: 0;">
                                    <?php echo get_the_author_meta('description') ?: 'Penulis di Petra FC, berbagi berita dan update terbaru tentang klub.'; ?>
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Navigation -->
                    <div style="margin-top: 3rem; display: flex; justify-content: space-between; gap: 1rem; flex-wrap: wrap;">
                        <?php $prev_post = get_previous_post(); ?>
                        <?php if ($prev_post) : ?>
                            <a href="<?php echo get_permalink($prev_post->ID); ?>" 
                               style="flex: 1; min-width: 200px; padding: 1rem; background: var(--card); border: 1px solid var(--border); border-radius: var(--radius); text-decoration: none; transition: var(--transition-smooth);">
                                <div style="color: var(--muted-foreground); font-size: 0.9rem; margin-bottom: 0.5rem;">← Previous Article</div>
                                <div style="color: var(--primary); font-weight: 500;"><?php echo wp_trim_words($prev_post->post_title, 8); ?></div>
                            </a>
                        <?php endif; ?>

                        <?php $next_post = get_next_post(); ?>
                        <?php if ($next_post) : ?>
                            <a href="<?php echo get_permalink($next_post->ID); ?>" 
                               style="flex: 1; min-width: 200px; padding: 1rem; background: var(--card); border: 1px solid var(--border); border-radius: var(--radius); text-decoration: none; text-align: right; transition: var(--transition-smooth);">
                                <div style="color: var(--muted-foreground); font-size: 0.9rem; margin-bottom: 0.5rem;">Next Article →</div>
                                <div style="color: var(--primary); font-weight: 500;"><?php echo wp_trim_words($next_post->post_title, 8); ?></div>
                            </a>
                        <?php endif; ?>
                    </div>
                </div>
            </div>
        </section>

        <!-- Related Posts -->
        <?php
        $related_posts = get_posts(array(
            'category__in' => wp_get_post_categories($post->ID),
            'numberposts' => 3,
            'post__not_in' => array($post->ID),
        ));
        ?>
        <?php if ($related_posts) : ?>
            <section style="background: var(--muted); padding: 4rem 0;">
                <div class="container">
                    <h3 style="text-align: center; margin-bottom: 3rem; color: var(--primary);">Artikel Terkait</h3>
                    <div class="grid grid-cols-3">
                        <?php foreach ($related_posts as $related) : ?>
                            <div class="card">
                                <?php if (has_post_thumbnail($related->ID)) : ?>
                                    <img src="<?php echo get_the_post_thumbnail_url($related->ID, 'medium'); ?>" 
                                         alt="<?php echo esc_attr($related->post_title); ?>" 
                                         style="width: 100%; height: 200px; object-fit: cover; border-radius: var(--radius); margin-bottom: 1rem;">
                                <?php endif; ?>
                                <h4>
                                    <a href="<?php echo get_permalink($related->ID); ?>" 
                                       style="text-decoration: none; color: var(--primary);">
                                        <?php echo esc_html($related->post_title); ?>
                                    </a>
                                </h4>
                                <p style="color: var(--muted-foreground); margin-bottom: 1rem;">
                                    <?php echo wp_trim_words($related->post_content, 15); ?>
                                </p>
                                <div style="font-size: 0.9rem; color: var(--muted-foreground);">
                                    <?php echo get_the_date('d F Y', $related->ID); ?>
                                </div>
                            </div>
                        <?php endforeach; ?>
                    </div>
                </div>
            </section>
        <?php endif; ?>

        <!-- Comments Section -->
        <?php if (comments_open() || get_comments_number()) : ?>
            <section style="padding: 4rem 0;">
                <div class="container">
                    <div style="max-width: 800px; margin: 0 auto;">
                        <?php comments_template(); ?>
                    </div>
                </div>
            </section>
        <?php endif; ?>

    <?php endwhile; ?>
</div>

<?php
// Helper function for reading time
function petra_fc_reading_time() {
    $content = get_post_field('post_content', get_the_ID());
    $word_count = str_word_count(strip_tags($content));
    $reading_time = ceil($word_count / 200); // Average reading speed: 200 words per minute
    return $reading_time;
}
?>

<?php get_footer(); ?>