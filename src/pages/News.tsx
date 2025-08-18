import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Eye, User } from "lucide-react";

const News = () => {
  const news = [
    {
      id: 1,
      title: "Petra FC Raih Kemenangan Gemilang 3-1 Melawan Persipura",
      excerpt: "Dalam pertandingan seru di Stadion Mandala, Petra FC berhasil mengalahkan Persipura dengan skor 3-1. Gol-gol indah dari Yosef Numberi dan David Wambrauw menjadi kunci kemenangan.",
      category: "Pertandingan",
      date: "15 Januari 2024",
      author: "Tim Media Petra FC",
      views: 1250,
      featured: true
    },
    {
      id: 2,
      title: "Program Pembinaan Anak Papua Diluncurkan",
      excerpt: "Petra FC meluncurkan program pembinaan sepak bola untuk anak-anak Papua usia 8-16 tahun. Program ini bertujuan untuk mengidentifikasi dan mengembangkan bakat muda.",
      category: "Pengembangan",
      date: "12 Januari 2024", 
      author: "Maria Tanggahma",
      views: 890
    },
    {
      id: 3,
      title: "Kemitraan dengan Sekolah-Sekolah di Papua",
      excerpt: "Kerja sama strategis dengan 15 sekolah di Papua untuk program sepak bola ekstrakurikuler. Petra FC akan menyediakan pelatih dan fasilitas.",
      category: "Kemitraan",
      date: "10 Januari 2024",
      author: "John Rumbiak", 
      views: 650
    },
    {
      id: 4,
      title: "Target Lolos ke Liga Profesional 2024",
      excerpt: "Manajemen Petra FC menetapkan target ambisius untuk lolos ke Liga 2 Indonesia musim 2024. Persiapan intensif telah dimulai.",
      category: "Target",
      date: "8 Januari 2024",
      author: "Tim Media Petra FC",
      views: 1120
    },
    {
      id: 5,
      title: "Dukung Petra FC Capai 5000 Pendukung",
      excerpt: "Program 'Dukung Petra FC' telah mencapai 5000 pendukung dari berbagai kalangan. Dukungan ini sangat berarti untuk pengembangan klub.",
      category: "Komunitas",
      date: "5 Januari 2024",
      author: "Tim Fundraising",
      views: 2100
    },
    {
      id: 6,
      title: "Fasilitas Latihan Baru di Jayapura",
      excerpt: "Pembangunan fasilitas latihan modern di Jayapura memasuki tahap final. Lapangan berstandar FIFA akan segera dapat digunakan.",
      category: "Fasilitas",
      date: "3 Januari 2024",
      author: "Tim Proyek",
      views: 780
    }
  ];

  const categories = ["Semua", "Pertandingan", "Pengembangan", "Kemitraan", "Target", "Komunitas", "Fasilitas"];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 hero-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-primary-foreground">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-shadow-lg">
              Berita Petra FC
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Update Terkini dari Dunia Petra FC
            </p>
          </div>
        </div>
      </section>

      {/* Featured News */}
      {news.filter(item => item.featured).map((item) => (
        <section key={item.id} className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <Badge className="mb-4 bg-primary">{item.category}</Badge>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                    {item.title}
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    {item.excerpt}
                  </p>
                  <div className="flex items-center gap-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>{item.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User size={16} />
                      <span>{item.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Eye size={16} />
                      <span>{item.views}</span>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                    <span className="text-primary font-bold text-2xl">Foto Berita</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Category Filter */}
      <section className="py-8 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Badge 
                  key={category} 
                  variant="outline" 
                  className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
              Berita Terbaru
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {news.filter(item => !item.featured).map((item) => (
                <Card key={item.id} className="hover:shadow-soft transition-all duration-300 group cursor-pointer">
                  <CardHeader className="pb-3">
                    <div className="w-full h-48 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg mb-4 flex items-center justify-center group-hover:from-primary/20 group-hover:to-secondary/20 transition-all duration-300">
                      <span className="text-primary font-semibold">Foto Berita</span>
                    </div>
                    <Badge variant="secondary" className="w-fit">
                      {item.category}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {item.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar size={14} />
                        <span>{item.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Eye size={14} />
                        <span>{item.views}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
              Berlangganan Newsletter
            </h2>
            <div className="bg-card p-8 rounded-lg">
              <p className="text-lg text-muted-foreground mb-6">
                Dapatkan update terbaru dari Petra FC langsung di email Anda. 
                Berita pertandingan, program komunitas, dan pengumuman penting lainnya.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Email Anda"
                  className="flex-1 px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button className="px-6 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors font-medium">
                  Berlangganan
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default News;