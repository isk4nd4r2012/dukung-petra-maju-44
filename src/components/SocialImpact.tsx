import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Heart, Target, Award, MapPin, Handshake } from "lucide-react";
import communityImage from "@/assets/community-impact.jpg";

const SocialImpact = () => {
  const impacts = [
    {
      icon: Users,
      title: "Pemberdayaan Pemuda",
      description: "Memberikan platform bagi 500+ pemuda Papua untuk mengembangkan bakat sepak bola mereka"
    },
    {
      icon: Heart,
      title: "Kesatuan Keluarga",
      description: "Menyatukan keluarga-keluarga di Papua melalui semangat olahraga dan kompetisi yang sehat"
    },
    {
      icon: Target,
      title: "Pendidikan Karakter",
      description: "Mengajarkan disiplin, kerja sama, dan sportivitas melalui program sepak bola terintegrasi"
    },
    {
      icon: Award,
      title: "Prestasi Daerah",
      description: "Meningkatkan nama baik Papua di kancah sepak bola nasional dan internasional"
    },
    {
      icon: MapPin,
      title: "Ekonomi Lokal",
      description: "Menciptakan peluang ekonomi baru melalui industri olahraga dan pariwisata"
    },
    {
      icon: Handshake,
      title: "Kemitraan Strategis",
      description: "Membangun jaringan kemitraan untuk pengembangan infrastruktur olahraga Papua"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Dampak Sosial & Komunitas
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Petra FC bukan sekadar klub sepak bola. Kami adalah gerakan sosial yang 
            berkomitmen membangun Papua melalui kekuatan olahraga dan persatuan.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <div className="relative">
            <img 
              src={communityImage} 
              alt="Komunitas Papua bersatu melalui sepak bola"
              className="rounded-3xl shadow-strong w-full h-auto"
            />
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Membangun Masa Depan Papua
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Melalui program sepak bola yang komprehensif, kami tidak hanya menciptakan atlet berbakat, 
                tetapi juga membangun karakter, menciptakan lapangan kerja, dan memperkuat ikatan sosial 
                di seluruh Papua.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 hero-gradient rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">15</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Desa Terjangkau</p>
                    <p className="text-sm text-muted-foreground">Program pembinaan sepak bola di daerah terpencil</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 secondary-gradient rounded-full flex items-center justify-center">
                    <span className="text-secondary-foreground font-bold text-lg">200</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Beasiswa Diberikan</p>
                    <p className="text-sm text-muted-foreground">Bantuan pendidikan untuk pemain berbakat</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                    <span className="text-accent-foreground font-bold text-lg">50</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Lapangan Kerja</p>
                    <p className="text-sm text-muted-foreground">Peluang karir di industri olahraga Papua</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {impacts.map((impact, index) => {
            const IconComponent = impact.icon;
            return (
              <Card key={index} className="transition-all duration-300 hover:shadow-soft hover:scale-105">
                <CardHeader className="text-center pb-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 hero-gradient rounded-full mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold">{impact.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center leading-relaxed">
                    {impact.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Quote Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-3xl p-8 border border-primary/10 max-w-4xl mx-auto">
            <blockquote className="text-2xl sm:text-3xl font-medium text-foreground mb-6 italic">
              "Sepak bola adalah bahasa universal yang dapat menyatukan kita semua. 
              Melalui Petra FC, kami membuktikan bahwa mimpi besar Papua dapat menjadi kenyataan."
            </blockquote>
            <cite className="text-lg text-muted-foreground font-semibold">
              - Tim Manajemen Petra FC
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialImpact;