import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Heart, Trophy } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Passion",
      description: "Kecintaan mendalam terhadap sepak bola dan komunitas Papua"
    },
    {
      icon: Users,
      title: "Unity",
      description: "Menyatukan keluarga, pemuda, dan masyarakat melalui olahraga"
    },
    {
      icon: Target,
      title: "Excellence",
      description: "Komitmen untuk mencapai prestasi terbaik di setiap pertandingan"
    },
    {
      icon: Trophy,
      title: "Victory",
      description: "Meraih kemenangan dengan sportivitas dan kerja keras"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 hero-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-primary-foreground">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-shadow-lg">
              Tentang Petra FC
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Gerakan Sepak Bola Berbasis Komunitas dari Tanah Papua
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
              Misi Kami
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-primary">
                  Menyatukan Papua Melalui Sepak Bola
                </h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Petra FC lahir dari mimpi untuk menciptakan platform yang menyatukan 
                  keluarga, pemuda, dan seluruh lapisan masyarakat Papua melalui kekuatan 
                  sepak bola. Kami percaya bahwa olahraga dapat menjadi jembatan yang 
                  menghubungkan perbedaan dan membangun persatuan.
                </p>
                <p className="text-lg text-muted-foreground">
                  Dengan semangat gotong royong dan kearifan lokal Papua, kami berkomitmen 
                  untuk mengembangkan talenta-talenta muda dan memberikan kontribusi positif 
                  bagi masyarakat.
                </p>
              </div>
              <div className="relative">
                <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                  <Users size={80} className="text-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
              Nilai-Nilai Kami
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="text-center hover:shadow-soft transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <value.icon size={32} className="text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-foreground">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
              Visi Masa Depan
            </h2>
            <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-8 rounded-lg">
              <p className="text-xl text-muted-foreground mb-6">
                "Menjadi klub sepak bola kebanggaan Papua yang menginspirasi generasi muda 
                untuk berprestasi, berkarakter, dan berkontribusi positif bagi masyarakat."
              </p>
              <p className="text-lg text-muted-foreground">
                Kami bermimpi melihat Petra FC menjadi rumah bagi talenta-talenta terbaik Papua, 
                tempat di mana passion bertemu dengan profesionalisme, dan di mana setiap anggota 
                komunitas dapat turut serta dalam perjalanan menuju kesuksesan.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;