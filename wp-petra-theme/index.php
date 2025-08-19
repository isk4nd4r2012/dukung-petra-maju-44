<?php get_header(); ?>

<!-- Hero Section -->
<section class="hero" id="hero">
    <div class="container">
        <div class="hero-content animate-fade-in-up">
            <h1><?php echo get_theme_mod('petra_hero_title', 'PETRA FOOTBALL CLUB'); ?></h1>
            <p><?php echo get_theme_mod('petra_hero_subtitle', 'Membangun Papua Melalui Sepak Bola dan Membuka Peluang untuk Semua'); ?></p>
            <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; margin-top: 2rem;">
                <a href="<?php echo get_theme_mod('petra_primary_button_url', '#dukungan'); ?>" class="btn btn-primary">
                    <?php echo get_theme_mod('petra_primary_button_text', 'Dukung Petra FC Sekarang'); ?>
                </a>
                <a href="<?php echo get_theme_mod('petra_secondary_button_url', '#paket'); ?>" class="btn btn-outline">
                    <?php echo get_theme_mod('petra_secondary_button_text', 'Lihat Paket Dukungan'); ?>
                </a>
            </div>
        </div>
    </div>
</section>

<!-- Statistics Section -->
<section style="background: var(--muted); padding: 4rem 0;">
    <div class="container">
        <div class="stats-grid">
            <div class="stat-card">
                <span class="stat-number"><?php echo get_theme_mod('petra_stat_supporters', '15,000+'); ?></span>
                <span class="stat-label">Pendukung Setia</span>
            </div>
            <div class="stat-card">
                <span class="stat-number"><?php echo get_theme_mod('petra_stat_players', '30+'); ?></span>
                <span class="stat-label">Pemain Profesional</span>
            </div>
            <div class="stat-card">
                <span class="stat-number"><?php echo get_theme_mod('petra_stat_reach', '50+'); ?></span>
                <span class="stat-label">Kabupaten di Papua</span>
            </div>
        </div>
    </div>
</section>

<!-- Social Impact Section -->
<section style="padding: 4rem 0;">
    <div class="container">
        <div class="grid grid-cols-2" style="gap: 3rem; align-items: center;">
            <div>
                <h2 style="font-size: 2.5rem; color: var(--primary); margin-bottom: 1rem;">
                    <?php echo get_theme_mod('petra_impact_title', 'Membangun Masa Depan Papua'); ?>
                </h2>
                <p style="font-size: 1.1rem; color: var(--muted-foreground); margin-bottom: 2rem;">
                    <?php echo get_theme_mod('petra_impact_description', 'Petra FC lebih dari sekadar klub sepak bola. Kami adalah gerakan yang bertujuan memberdayakan masyarakat Papua melalui olahraga, pendidikan, dan pengembangan ekonomi lokal.'); ?>
                </p>
                
                <div class="stats-grid" style="grid-template-columns: repeat(3, 1fr);">
                    <div class="stat-card">
                        <span class="stat-number">25+</span>
                        <span class="stat-label">Desa Terjangkau</span>
                    </div>
                    <div class="stat-card">
                        <span class="stat-number">150+</span>
                        <span class="stat-label">Beasiswa Diberikan</span>
                    </div>
                    <div class="stat-card">
                        <span class="stat-number">500+</span>
                        <span class="stat-label">Lapangan Kerja</span>
                    </div>
                </div>
            </div>
            <div>
                <img src="<?php echo get_template_directory_uri(); ?>/assets/images/community-impact.jpg" 
                     alt="Community Impact" 
                     style="width: 100%; border-radius: var(--radius); box-shadow: var(--shadow-strong);">
            </div>
        </div>
    </div>
</section>

<!-- Impact Areas -->
<section style="background: var(--muted); padding: 4rem 0;">
    <div class="container">
        <h2 class="text-center" style="margin-bottom: 3rem; color: var(--primary);">Area Dampak Sosial</h2>
        <div class="grid grid-cols-3">
            <div class="card">
                <h3>Pemberdayaan Pemuda</h3>
                <p>Memberikan platform bagi pemuda Papua untuk mengembangkan bakat sepak bola dan keterampilan hidup melalui program pelatihan komprehensif.</p>
            </div>
            <div class="card">
                <h3>Pendidikan Karakter</h3>
                <p>Mengintegrasikan nilai-nilai sportivitas, disiplin, dan kerja sama tim dalam setiap aspek kehidupan sehari-hari.</p>
            </div>
            <div class="card">
                <h3>Pengembangan Ekonomi Lokal</h3>
                <p>Menciptakan peluang ekonomi melalui industri olahraga dan pariwisata yang berdampak positif bagi masyarakat sekitar.</p>
            </div>
        </div>
    </div>
</section>

<!-- Contribution Levels Section -->
<section id="paket" style="padding: 4rem 0;">
    <div class="container">
        <div class="text-center" style="margin-bottom: 3rem;">
            <h2 style="color: var(--primary); margin-bottom: 1rem;">Paket Dukungan Petra FC</h2>
            <p style="color: var(--muted-foreground); font-size: 1.1rem;">Pilih paket dukungan yang sesuai dengan kemampuan Anda dan bergabunglah dalam misi membangun Papua</p>
        </div>
        
        <div class="grid grid-cols-3">
            <!-- Supporter Package -->
            <div class="card" style="position: relative;">
                <div style="text-align: center; margin-bottom: 1.5rem;">
                    <div style="background: var(--gradient-hero); width: 60px; height: 60px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem; color: white; font-size: 1.5rem;">⚽</div>
                    <h3>Supporter</h3>
                    <div style="font-size: 2rem; font-weight: bold; color: var(--primary);">Rp 50.000</div>
                    <div style="color: var(--muted-foreground);">per bulan</div>
                </div>
                <ul style="list-style: none; margin-bottom: 2rem;">
                    <li style="margin-bottom: 0.5rem;">✓ Jersey eksklusif supporter</li>
                    <li style="margin-bottom: 0.5rem;">✓ Update rutin progress tim</li>
                    <li style="margin-bottom: 0.5rem;">✓ Akses komunitas online</li>
                    <li style="margin-bottom: 0.5rem;">✓ Diskon merchandise</li>
                </ul>
                <a href="#" class="btn btn-primary" style="width: 100%;">Pilih Paket Ini</a>
            </div>
            
            <!-- Fanatic Package -->
            <div class="card" style="position: relative; border: 2px solid var(--primary);">
                <div style="position: absolute; top: -10px; left: 50%; transform: translateX(-50%); background: var(--primary); color: white; padding: 0.25rem 1rem; border-radius: 1rem; font-size: 0.8rem;">Paling Populer</div>
                <div style="text-align: center; margin-bottom: 1.5rem;">
                    <div style="background: var(--gradient-secondary); width: 60px; height: 60px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem; color: var(--secondary-foreground); font-size: 1.5rem;">🏆</div>
                    <h3>Fanatic</h3>
                    <div style="font-size: 2rem; font-weight: bold; color: var(--primary);">Rp 150.000</div>
                    <div style="color: var(--muted-foreground);">per bulan</div>
                </div>
                <ul style="list-style: none; margin-bottom: 2rem;">
                    <li style="margin-bottom: 0.5rem;">✓ Semua benefit Supporter</li>
                    <li style="margin-bottom: 0.5rem;">✓ Tiket gratis pertandingan home</li>
                    <li style="margin-bottom: 0.5rem;">✓ Meet & greet dengan pemain</li>
                    <li style="margin-bottom: 0.5rem;">✓ Merchandise eksklusiv</li>
                    <li style="margin-bottom: 0.5rem;">✓ Priority customer service</li>
                </ul>
                <a href="#" class="btn btn-primary" style="width: 100%;">Pilih Paket Ini</a>
            </div>
            
            <!-- Champion Package -->
            <div class="card">
                <div style="text-align: center; margin-bottom: 1.5rem;">
                    <div style="background: var(--gradient-dark); width: 60px; height: 60px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem; color: white; font-size: 1.5rem;">👑</div>
                    <h3>Champion</h3>
                    <div style="font-size: 2rem; font-weight: bold; color: var(--primary);">Rp 500.000</div>
                    <div style="color: var(--muted-foreground);">per bulan</div>
                </div>
                <ul style="list-style: none; margin-bottom: 2rem;">
                    <li style="margin-bottom: 0.5rem;">✓ Semua benefit Fanatic</li>
                    <li style="margin-bottom: 0.5rem;">✓ VIP seating di stadion</li>
                    <li style="margin-bottom: 0.5rem;">✓ Private dinner dengan manajemen</li>
                    <li style="margin-bottom: 0.5rem;">✓ Nama di jersey resmi</li>
                    <li style="margin-bottom: 0.5rem;">✓ Akses training exclusive</li>
                </ul>
                <a href="#" class="btn btn-primary" style="width: 100%;">Pilih Paket Ini</a>
            </div>
        </div>
    </div>
</section>

<!-- Call to Action Section -->
<section id="dukungan" style="background: var(--gradient-hero); color: white; padding: 4rem 0;">
    <div class="container">
        <div class="text-center">
            <h2 style="margin-bottom: 1rem; font-size: 2.5rem;">
                <?php echo get_theme_mod('petra_cta_title', 'Bergabunglah dengan Gerakan Perubahan Papua'); ?>
            </h2>
            <p style="font-size: 1.2rem; margin-bottom: 2rem; opacity: 0.9;">
                <?php echo get_theme_mod('petra_cta_description', 'Setiap kontribusi Anda membantu menciptakan masa depan yang lebih cerah bagi pemuda Papua'); ?>
            </p>
            <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
                <a href="#" class="btn btn-secondary">Daftar Sekarang</a>
                <a href="#paket" class="btn btn-outline">Lihat Paket Lagi</a>
            </div>
        </div>
    </div>
</section>

<?php if (have_posts()) : ?>
    <!-- Latest Posts Section -->
    <section style="padding: 4rem 0;">
        <div class="container">
            <h2 class="text-center" style="margin-bottom: 3rem; color: var(--primary);">Berita Terbaru</h2>
            <div class="grid grid-cols-3">
                <?php while (have_posts()) : the_post(); ?>
                    <div class="card">
                        <?php if (has_post_thumbnail()) : ?>
                            <img src="<?php the_post_thumbnail_url('medium'); ?>" 
                                 alt="<?php the_title(); ?>" 
                                 style="width: 100%; height: 200px; object-fit: cover; border-radius: var(--radius); margin-bottom: 1rem;">
                        <?php endif; ?>
                        <h3><a href="<?php the_permalink(); ?>" style="text-decoration: none; color: var(--primary);"><?php the_title(); ?></a></h3>
                        <p style="color: var(--muted-foreground); margin-bottom: 1rem;"><?php echo wp_trim_words(get_the_excerpt(), 20); ?></p>
                        <div style="font-size: 0.9rem; color: var(--muted-foreground);">
                            <?php echo get_the_date(); ?> • <?php the_author(); ?>
                        </div>
                    </div>
                <?php endwhile; ?>
            </div>
        </div>
    </section>
<?php endif; ?>

<?php get_footer(); ?>