import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, MessageCircle, Users, Trophy, Heart } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Alamat Sekretariat",
      content: "Jl. Abepura Raya No. 123\nJayapura, Papua 99224\nIndonesia"
    },
    {
      icon: Phone,
      title: "Telepon",
      content: "+62 967 123 4567\n+62 812 3456 7890"
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@petrafc.id\nmedia@petrafc.id\nsupport@petrafc.id"
    },
    {
      icon: Clock,
      title: "Jam Operasional",
      content: "Senin - Jumat: 08:00 - 17:00\nSabtu: 08:00 - 12:00\nMinggu: Tutup"
    }
  ];

  const departments = [
    {
      icon: Users,
      title: "Manajemen & Administrasi",
      person: "Maria Tanggahma",
      role: "Manajer Umum",
      contact: "maria@petrafc.id"
    },
    {
      icon: Trophy,
      title: "Pelatihan & Pengembangan",
      person: "John Rumbiak",
      role: "Pelatih Kepala",
      contact: "john@petrafc.id"
    },
    {
      icon: MessageCircle,
      title: "Media & Komunikasi",
      person: "David Kogoya",
      role: "Media Officer",
      contact: "media@petrafc.id"
    },
    {
      icon: Heart,
      title: "Komunitas & Kemitraan",
      person: "Sarah Wenda",
      role: "Community Manager",
      contact: "community@petrafc.id"
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
              Hubungi Kami
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Kami Siap Membantu dan Mendengar Dari Anda
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
              Informasi Kontak
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactInfo.map((info, index) => (
                <Card key={index} className="text-center hover:shadow-soft transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <info.icon size={32} className="text-primary" />
                    </div>
                    <h3 className="text-lg font-bold mb-3 text-foreground">{info.title}</h3>
                    <p className="text-muted-foreground whitespace-pre-line text-sm">
                      {info.content}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Department Contacts */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
              Kontak Departemen
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {departments.map((dept, index) => (
                <Card key={index} className="hover:shadow-soft transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <dept.icon size={24} className="text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-foreground">{dept.title}</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p className="font-semibold text-foreground">{dept.person}</p>
                      <p className="text-sm text-muted-foreground">{dept.role}</p>
                      <p className="text-sm text-primary">{dept.contact}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
              Kirim Pesan
            </h2>
            <Card>
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Nama Lengkap *
                      </label>
                      <input 
                        type="text" 
                        required
                        className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Masukkan nama lengkap"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email *
                      </label>
                      <input 
                        type="email" 
                        required
                        className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Masukkan email"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Nomor Telepon
                      </label>
                      <input 
                        type="tel" 
                        className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Masukkan nomor telepon"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Subjek *
                      </label>
                      <select 
                        required
                        className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="">Pilih subjek</option>
                        <option value="kemitraan">Kemitraan</option>
                        <option value="sponsorship">Sponsorship</option>
                        <option value="tryout">Tryout</option>
                        <option value="media">Media & Press</option>
                        <option value="komunitas">Program Komunitas</option>
                        <option value="lainnya">Lainnya</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Pesan *
                    </label>
                    <textarea 
                      rows={6}
                      required
                      className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                      placeholder="Tulis pesan Anda di sini..."
                    ></textarea>
                  </div>

                  <div className="flex items-center gap-2">
                    <input 
                      type="checkbox" 
                      id="agreement" 
                      required
                      className="w-4 h-4 text-primary border-border rounded focus:ring-primary"
                    />
                    <label htmlFor="agreement" className="text-sm text-muted-foreground">
                      Saya setuju untuk dihubungi oleh tim Petra FC mengenai pesan ini.
                    </label>
                  </div>

                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                    Kirim Pesan
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
              Lokasi Kami
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-primary">
                  Kunjungi Sekretariat Petra FC
                </h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Sekretariat kami berlokasi di jantung kota Jayapura, mudah diakses 
                  dari berbagai arah. Kami menyambut kunjungan dari para pendukung, 
                  media, dan mitra yang ingin berkolaborasi.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <MapPin size={20} className="text-primary" />
                    <span className="text-muted-foreground">
                      Dekat dengan Universitas Cenderawasih
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin size={20} className="text-primary" />
                    <span className="text-muted-foreground">
                      10 menit dari Bandara Sentani
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin size={20} className="text-primary" />
                    <span className="text-muted-foreground">
                      Akses mudah transportasi umum
                    </span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin size={48} className="text-primary mx-auto mb-2" />
                    <span className="text-foreground font-semibold">Peta Lokasi</span>
                    <p className="text-sm text-muted-foreground mt-1">
                      Jl. Abepura Raya No. 123, Jayapura
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
              Mari Bersama Membangun Petra FC
            </h2>
            <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-8 rounded-lg">
              <p className="text-lg text-muted-foreground mb-6">
                Petra FC adalah milik kita bersama. Setiap dukungan, saran, dan 
                partisipasi Anda sangat berarti untuk masa depan sepak bola Papua.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild>
                  <a 
                    href="https://bit.ly/DukungPetra" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-primary hover:bg-primary/90"
                  >
                    Dukung Petra FC
                  </a>
                </Button>
                <Button variant="outline">
                  <a href="/tentang">
                    Pelajari Lebih Lanjut
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;