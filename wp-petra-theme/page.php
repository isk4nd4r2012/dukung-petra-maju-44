<?php get_header(); ?>

<div style="padding-top: 80px;"> <!-- Account for fixed navbar -->
    <?php while (have_posts()) : the_post(); ?>
        <!-- Page Hero -->
        <section style="background: var(--gradient-hero); color: white; padding: 4rem 0; text-align: center;">
            <div class="container">
                <h1 style="font-size: 3rem; margin-bottom: 1rem; text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);">
                    <?php the_title(); ?>
                </h1>
                <?php if (get_the_excerpt()) : ?>
                    <p style="font-size: 1.2rem; opacity: 0.9; max-width: 600px; margin: 0 auto;">
                        <?php echo get_the_excerpt(); ?>
                    </p>
                <?php endif; ?>
            </div>
        </section>

        <!-- Page Content -->
        <section style="padding: 4rem 0;">
            <div class="container">
                <div style="max-width: 800px; margin: 0 auto;">
                    <article>
                        <?php if (has_post_thumbnail()) : ?>
                            <div style="margin-bottom: 2rem;">
                                <img src="<?php the_post_thumbnail_url('large'); ?>" 
                                     alt="<?php the_title(); ?>" 
                                     style="width: 100%; height: 400px; object-fit: cover; border-radius: var(--radius); box-shadow: var(--shadow-soft);">
                            </div>
                        <?php endif; ?>

                        <div style="line-height: 1.8; color: var(--foreground);">
                            <?php
                            the_content();
                            
                            wp_link_pages(array(
                                'before' => '<div style="margin-top: 2rem; text-align: center;">',
                                'after'  => '</div>',
                            ));
                            ?>
                        </div>

                        <?php if (get_edit_post_link()) : ?>
                            <div style="margin-top: 2rem; padding-top: 2rem; border-top: 1px solid var(--border);">
                                <a href="<?php echo get_edit_post_link(); ?>" class="btn btn-outline">
                                    Edit Page
                                </a>
                            </div>
                        <?php endif; ?>
                    </article>
                </div>
            </div>
        </section>

        <!-- Comments Section -->
        <?php if (comments_open() || get_comments_number()) : ?>
            <section style="background: var(--muted); padding: 4rem 0;">
                <div class="container">
                    <div style="max-width: 800px; margin: 0 auto;">
                        <?php comments_template(); ?>
                    </div>
                </div>
            </section>
        <?php endif; ?>

    <?php endwhile; ?>
</div>

<?php get_footer(); ?>