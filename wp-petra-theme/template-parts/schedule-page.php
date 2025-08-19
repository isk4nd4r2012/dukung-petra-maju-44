<?php
/**
 * Template Name: Schedule Page
 */
get_header(); ?>

<div style="padding-top: 80px;">
    <section style="background: var(--gradient-hero); color: white; padding: 4rem 0; text-align: center;">
        <div class="container">
            <h1>Jadwal & Hasil Pertandingan</h1>
            <p>Ikuti perkembangan terbaru Petra FC</p>
        </div>
    </section>

    <section style="padding: 4rem 0;">
        <div class="container">
            <!-- Schedule/Results Toggle -->
            <div style="text-align: center; margin-bottom: 3rem;">
                <div style="display: inline-flex; background: var(--muted); border-radius: var(--radius); padding: 0.5rem;">
                    <button class="tab-btn active" data-tab="schedule">Jadwal</button>
                    <button class="tab-btn" data-tab="results">Hasil</button>
                    <button class="tab-btn" data-tab="standings">Klasemen</button>
                </div>
            </div>

            <!-- Schedule Content -->
            <div id="schedule-content" class="tab-content active">
                <div class="grid grid-cols-1" style="gap: 1rem;">
                    <div class="card">
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <div>
                                <h3>Petra FC vs Persipura</h3>
                                <p>Liga 1 Indonesia</p>
                            </div>
                            <div style="text-align: right;">
                                <div style="font-weight: bold;">15:30 WIT</div>
                                <div>25 Agustus 2024</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Standings Table -->
            <div id="standings-content" class="tab-content">
                <div class="card">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Pos</th>
                                <th>Tim</th>
                                <th>M</th>
                                <th>W</th>
                                <th>D</th>
                                <th>L</th>
                                <th>GF</th>
                                <th>GA</th>
                                <th>GD</th>
                                <th>Pts</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td>1</td><td>Persib Bandung</td><td>10</td><td>8</td><td>1</td><td>1</td><td>25</td><td>8</td><td>17</td><td>25</td></tr>
                            <tr><td>2</td><td>PSM Makassar</td><td>10</td><td>7</td><td>2</td><td>1</td><td>20</td><td>10</td><td>10</td><td>23</td></tr>
                            <tr style="background: var(--primary); color: white;"><td>3</td><td><strong>Petra FC</strong></td><td>10</td><td>6</td><td>3</td><td>1</td><td>18</td><td>12</td><td>6</td><td>21</td></tr>
                            <tr><td>4</td><td>Persipura</td><td>10</td><td>5</td><td>3</td><td>2</td><td>15</td><td>11</td><td>4</td><td>18</td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </section>
</div>

<?php get_footer(); ?>