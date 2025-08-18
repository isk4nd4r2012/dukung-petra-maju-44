import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Users } from "lucide-react";
import heroImage from "@/assets/petra-fc-hero.jpg";

const PetraHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Tim Petra FC bersatu dalam semangat Papua"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 hero-gradient opacity-70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* Logo/Badge */}
        <div className="mb-8 animate-float">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 shadow-glow">
            <span className="text-4xl font-bold text-white">FC</span>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 text-shadow-lg animate-fade-in-up">
          <span className="block">PETRA</span>
          <span className="block secondary-gradient bg-clip-text text-transparent">FOOTBALL CLUB</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed text-shadow-lg">
          Gerakan sepak bola yang menyatukan keluarga, pemuda, dan masyarakat Papua 
          melalui kekuatan olahraga dan semangat kebersamaan
        </p>

        {/* Mission Statement */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20 mb-10 max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-4">
            <Heart className="w-8 h-8 text-secondary" />
            <Users className="w-8 h-8 text-secondary" />
          </div>
          <p className="text-lg text-white/95 leading-relaxed">
            "Membangun masa depan yang lebih cerah untuk Papua melalui sepak bola, 
            menciptakan kesempatan, dan menginspirasi generasi muda untuk bermimpi besar"
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="xl" 
            variant="hero"
            className="group"
            onClick={() => window.open('https://bit.ly/DukungPetra', '_blank')}
          >
            Dukung Petra FC Sekarang
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button 
            size="xl" 
            variant="premium"
            onClick={() => document.getElementById('contribution-levels')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Lihat Paket Dukungan
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-secondary mb-2">1000+</div>
            <div className="text-white/80">Pendukung Setia</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-secondary mb-2">50+</div>
            <div className="text-white/80">Pemain Berbakat</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-secondary mb-2">5</div>
            <div className="text-white/80">Kabupaten Papua</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PetraHero;