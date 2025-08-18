import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, MapPin, Calendar } from "lucide-react";

const Team = () => {
  const players = [
    {
      name: "Yosef Numberi",
      position: "Penyerang",
      age: 23,
      hometown: "Jayapura",
      achievements: ["Top Scorer Liga Papua 2023", "Pemain Terbaik Final"]
    },
    {
      name: "David Wambrauw", 
      position: "Gelandang",
      age: 25,
      hometown: "Biak",
      achievements: ["Kapten Tim", "Assist Terbanyak 2023"]
    },
    {
      name: "Michael Sarunai",
      position: "Bek",
      age: 27,
      hometown: "Merauke",
      achievements: ["Bek Terbaik Liga Papua", "Clean Sheet Terbanyak"]
    },
    {
      name: "Samuel Kogoya",
      position: "Kiper",
      age: 24,
      hometown: "Wamena",
      achievements: ["Kiper Terbaik 2023", "Penyelamatan Terbanyak"]
    },
    {
      name: "Robert Mandowen",
      position: "Sayap",
      age: 22,
      hometown: "Sorong",
      achievements: ["Pemain Termuda", "Dribble Terbaik"]
    },
    {
      name: "Markus Rumbewas",
      position: "Gelandang Bertahan",
      age: 26,
      hometown: "Nabire",
      achievements: ["Tackle Terbanyak", "Fair Play Award"]
    }
  ];

  const staff = [
    {
      name: "John Rumbiak",
      role: "Pelatih Kepala",
      experience: "15 tahun pengalaman melatih"
    },
    {
      name: "Maria Tanggahma",
      role: "Manajer Tim",
      experience: "Manajemen olahraga profesional"
    },
    {
      name: "Dr. Paul Youw",
      role: "Dokter Tim", 
      experience: "Spesialis kedokteran olahraga"
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
              Tim Petra FC
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Keluarga Besar Pejuang Lapangan Hijau
            </p>
          </div>
        </div>
      </section>

      {/* Players Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
              Skuat Pemain
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {players.map((player, index) => (
                <Card key={index} className="hover:shadow-soft transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-center mb-4">
                      <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <User size={40} className="text-primary" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-center mb-2 text-foreground">
                      {player.name}
                    </h3>
                    <div className="text-center mb-4">
                      <Badge variant="secondary" className="mb-2">
                        {player.position}
                      </Badge>
                    </div>
                    <div className="space-y-2 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{player.age} tahun</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>{player.hometown}</span>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-semibold text-sm text-foreground">Prestasi:</h4>
                      {player.achievements.map((achievement, i) => (
                        <div key={i} className="text-xs text-muted-foreground">
                          • {achievement}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Staff Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
              Staf Pelatih & Manajemen
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {staff.map((member, index) => (
                <Card key={index} className="text-center hover:shadow-soft transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <User size={32} className="text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-foreground">{member.name}</h3>
                    <Badge variant="outline" className="mb-3">{member.role}</Badge>
                    <p className="text-sm text-muted-foreground">{member.experience}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
              Bergabung dengan Tim
            </h2>
            <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-8 rounded-lg">
              <p className="text-lg text-muted-foreground mb-6">
                Apakah kamu memiliki passion untuk sepak bola dan ingin menjadi bagian dari keluarga Petra FC? 
                Kami selalu mencari talenta-talenta baru yang siap berjuang untuk Papua!
              </p>
              <p className="text-md text-muted-foreground mb-6">
                Tryout terbuka dilakukan setiap bulan. Hubungi kami untuk informasi lebih lanjut.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://bit.ly/DukungPetra" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors font-medium"
                >
                  Daftar Tryout
                </a>
                <a 
                  href="/kontak"
                  className="inline-flex items-center px-6 py-3 border border-primary text-primary rounded-md hover:bg-primary/10 transition-colors font-medium"
                >
                  Kontak Kami
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;