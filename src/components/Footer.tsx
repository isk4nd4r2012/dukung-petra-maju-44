import { Heart, Mail, Phone, MapPin, Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 hero-gradient rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">FC</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Petra FC</h3>
                <p className="text-sm text-muted-foreground">Papua Football Club</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Gerakan sepak bola yang menyatukan Papua melalui semangat 
              olahraga dan pemberdayaan masyarakat.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Kontak Kami</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">info@petrafc.id</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">+62 821-PETRA-FC</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">Jayapura, Papua, Indonesia</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Informasi</h4>
            <div className="space-y-2">
              <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Tentang Petra FC
              </a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Program Pembinaan
              </a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Jadwal Pertandingan
              </a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Laporan Keuangan
              </a>
            </div>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Media Sosial</h4>
            <div className="flex gap-3">
              <a 
                href="#" 
                className="w-10 h-10 bg-primary/10 hover:bg-primary hover:text-primary-foreground rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-primary/10 hover:bg-primary hover:text-primary-foreground rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-primary/10 hover:bg-primary hover:text-primary-foreground rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
            <p className="text-xs text-muted-foreground">
              Ikuti perkembangan terbaru Petra FC di media sosial
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>© 2024 Petra Football Club.</span>
            <span>Dibuat dengan</span>
            <Heart className="w-4 h-4 text-primary" />
            <span>untuk Papua</span>
          </div>
          
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Kebijakan Privasi</a>
            <a href="#" className="hover:text-primary transition-colors">Syarat & Ketentuan</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;