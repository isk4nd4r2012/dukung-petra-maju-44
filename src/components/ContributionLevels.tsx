import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Crown, Star, Zap, Award, Shield, Trophy, Gem, Diamond } from "lucide-react";

const ContributionLevels = () => {
  const levels = [
    {
      name: "Community Backer",
      price: "300.000",
      icon: Star,
      color: "bg-blue-500",
      benefits: [
        "Sertifikat digital pendukung resmi",
        "Update perkembangan tim via WhatsApp",
        "Merchandise eksklusif (stiker, pin)",
        "Akses grup komunitas Petra FC"
      ]
    },
    {
      name: "Youth Supporter",
      price: "500.000",
      icon: Zap,
      color: "bg-green-500",
      benefits: [
        "Semua benefit Community Backer",
        "Jersey latihan Petra FC",
        "Tiket gratis 2 pertandingan kandang",
        "Meet & greet dengan pemain"
      ]
    },
    {
      name: "Family Champion",
      price: "1.000.000",
      icon: Award,
      color: "bg-purple-500",
      benefits: [
        "Semua benefit Youth Supporter",
        "Jersey resmi dengan nama Anda",
        "Akses VIP area saat pertandingan",
        "Dinner eksklusif dengan manajemen tim"
      ]
    },
    {
      name: "Team Advocate",
      price: "2.500.000",
      icon: Shield,
      color: "bg-orange-500",
      benefits: [
        "Semua benefit Family Champion",
        "Hak rekomendasi pemain muda",
        "Sesi latihan pribadi dengan pelatih",
        "Merchandise limited edition"
      ]
    },
    {
      name: "Club Ambassador",
      price: "5.000.000",
      icon: Trophy,
      color: "bg-red-500",
      popular: true,
      shareholder: true,
      benefits: [
        "Semua benefit Team Advocate",
        "Status calon pemegang saham PT Mitra Sport Management",
        "Keterlibatan dalam keputusan strategis klub",
        "Jersey dengan nomor khusus pilihan Anda"
      ]
    },
    {
      name: "Strategic Partner",
      price: "10.000.000",
      icon: Gem,
      color: "bg-indigo-500",
      shareholder: true,
      benefits: [
        "Semua benefit Club Ambassador",
        "Logo/nama di jersey tim",
        "Akses ke semua pertandingan (home & away)",
        "Konsultasi bisnis sport management"
      ]
    },
    {
      name: "Executive Patron",
      price: "25.000.000",
      icon: Crown,
      color: "bg-pink-500",
      shareholder: true,
      benefits: [
        "Semua benefit Strategic Partner",
        "Kursi di dewan penasihat klub",
        "Hak suara dalam transfer pemain",
        "Executive box pribadi di stadion"
      ]
    },
    {
      name: "Platinum Investor",
      price: "100.000.000",
      icon: Diamond,
      color: "bg-gray-700",
      shareholder: true,
      benefits: [
        "Semua benefit Executive Patron",
        "Saham prioritas di PT Mitra Sport Management",
        "Co-branding opportunities",
        "Annual profit sharing"
      ]
    },
    {
      name: "Honorary Investor",
      price: "250.000.000",
      icon: Diamond,
      color: "bg-gradient-to-r from-yellow-400 to-yellow-600",
      premium: true,
      shareholder: true,
      benefits: [
        "Semua benefit Platinum Investor",
        "Status co-owner klub",
        "Naming rights untuk fasilitas tertentu",
        "Legacy fund untuk pemain muda Papua"
      ]
    }
  ];

  return (
    <section id="contribution-levels" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Dukung Petra FC
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Bergabunglah dengan gerakan sepak bola Papua yang revolusioner. 
            Pilih level dukungan yang sesuai dengan komitmen Anda untuk membangun masa depan olahraga Indonesia.
          </p>
          
          <div className="mt-8 p-6 bg-secondary/10 rounded-2xl border border-secondary/20 max-w-2xl mx-auto">
            <p className="text-lg font-semibold text-foreground mb-2">
              🎯 Peluang Investasi Eksklusif
            </p>
            <p className="text-muted-foreground">
              Kontributor dari <span className="font-bold text-primary">5 juta IDR ke atas</span> 
              akan memiliki kesempatan menjadi pemegang saham di 
              <span className="font-bold text-primary"> PT Mitra Sport Management</span>
            </p>
          </div>
        </div>

        {/* Contribution Levels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {levels.map((level, index) => {
            const IconComponent = level.icon;
            return (
              <Card 
                key={index} 
                className={`relative transition-all duration-300 hover:shadow-strong hover:scale-105 ${
                  level.popular ? 'ring-2 ring-primary shadow-strong' : ''
                } ${level.premium ? 'ring-2 ring-secondary shadow-glow' : ''}`}
              >
                {level.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                    Paling Populer
                  </Badge>
                )}
                {level.premium && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 secondary-gradient text-secondary-foreground">
                    Premium
                  </Badge>
                )}

                <CardHeader className="text-center pb-4">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${level.color} mx-auto mb-4`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold">{level.name}</CardTitle>
                  <CardDescription className="text-3xl font-bold text-primary">
                    IDR {level.price}
                  </CardDescription>
                  {level.shareholder && (
                    <Badge variant="secondary" className="mt-2">
                      Calon Pemegang Saham
                    </Badge>
                  )}
                </CardHeader>

                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {level.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className="w-full" 
                    variant={level.popular ? "hero" : level.premium ? "contribute" : "default"}
                    onClick={() => window.open('https://bit.ly/DukungPetra', '_blank')}
                  >
                    Pilih Paket Ini
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Siap Menjadi Bagian Sejarah Petra FC?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Setiap kontribusi Anda tidak hanya mendukung tim, tetapi juga membangun ekosistem 
              sepak bola yang berkelanjutan untuk generasi mendatang di Papua.
            </p>
            <Button 
              size="xl" 
              variant="hero"
              onClick={() => window.open('https://bit.ly/DukungPetra', '_blank')}
            >
              Mulai Kontribusi Sekarang
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContributionLevels;