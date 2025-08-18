import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Shield, Star } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 dark-gradient"></div>
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-12">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 text-shadow-lg">
              Waktunya Bertindak untuk 
              <span className="block secondary-gradient bg-clip-text text-transparent">Papua yang Lebih Baik</span>
            </h2>
            <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              Bergabunglah dengan ribuan pendukung yang telah memilih untuk menjadi bagian 
              dari perubahan positif melalui sepak bola. Setiap kontribusi Anda menciptakan dampak nyata.
            </p>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">100% Transparan</h3>
              <p className="text-white/80 text-sm">Laporan penggunaan dana secara berkala</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 flex items-center justify-center mb-4">
                <Star className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Terpercaya</h3>
              <p className="text-white/80 text-sm">Didukung komunitas dan tokoh Papua</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 flex items-center justify-center mb-4">
                <Clock className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Dampak Cepat</h3>
              <p className="text-white/80 text-sm">Program langsung berjalan setelah target tercapai</p>
            </div>
          </div>

          {/* Main CTA */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-glow mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">
              Bergabung Sekarang dan Dapatkan:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 text-left">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 secondary-gradient rounded-full"></div>
                <span className="text-white/90">Akses eksklusif ke komunitas Petra FC</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 secondary-gradient rounded-full"></div>
                <span className="text-white/90">Update real-time perkembangan tim</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 secondary-gradient rounded-full"></div>
                <span className="text-white/90">Merchandise eksklusif berdasar level</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 secondary-gradient rounded-full"></div>
                <span className="text-white/90">Kesempatan investasi masa depan</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="xl" 
                variant="contribute"
                className="group text-lg px-12"
                onClick={() => window.open('https://bit.ly/DukungPetra', '_blank')}
              >
                Daftar Sekarang
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                size="xl" 
                variant="outline"
                className="text-white border-white hover:bg-white hover:text-primary text-lg px-8"
                onClick={() => document.getElementById('contribution-levels')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Lihat Paket Lagi
              </Button>
            </div>
          </div>

          {/* Urgency */}
          <div className="text-center">
            <p className="text-secondary font-semibold text-lg mb-2">
              ⏰ Program Terbatas Waktu
            </p>
            <p className="text-white/80">
              Hanya tersisa <span className="font-bold text-secondary">50 slot</span> untuk 
              level Club Ambassador dengan benefit pemegang saham
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;