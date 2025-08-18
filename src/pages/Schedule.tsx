import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Calendar, Trophy, Users, Target } from "lucide-react";
import { useState } from "react";

const Schedule = () => {
  // Data jadwal pertandingan
  const [scheduleData] = useState([
    {
      id: 1,
      date: "2024-08-25",
      time: "15:00",
      opponent: "Arema FC",
      venue: "Stadion Kanjuruhan",
      type: "Liga 1",
      status: "upcoming"
    },
    {
      id: 2,
      date: "2024-08-18",
      time: "19:00",
      opponent: "Persebaya",
      venue: "Stadion Gelora Bung Tomo",
      type: "Liga 1",
      status: "result",
      score: "2-1",
      result: "win"
    },
    {
      id: 3,
      date: "2024-08-11",
      time: "15:30",
      opponent: "Bali United",
      venue: "Stadion Kapten I Wayan Dipta",
      type: "Liga 1",
      status: "result",
      score: "1-1",
      result: "draw"
    },
    {
      id: 4,
      date: "2024-08-04",
      time: "20:00",
      opponent: "Persib Bandung",
      venue: "Stadion Gelora Bandung Lautan Api",
      type: "Liga 1",
      status: "result",
      score: "0-2",
      result: "loss"
    }
  ]);

  // Data klasemen
  const [standingsData, setStandingsData] = useState([
    { 
      pos: 1, 
      team: "Persib Bandung", 
      m: 20, 
      w: 15, 
      d: 3, 
      l: 2, 
      gf: 42, 
      ga: 15, 
      gd: 27, 
      pts: 48,
      form: ["W", "W", "W", "D", "W"]
    },
    { 
      pos: 2, 
      team: "Bali United", 
      m: 20, 
      w: 13, 
      d: 5, 
      l: 2, 
      gf: 38, 
      ga: 18, 
      gd: 20, 
      pts: 44,
      form: ["W", "D", "W", "W", "L"]
    },
    { 
      pos: 3, 
      team: "Petra FC", 
      m: 20, 
      w: 12, 
      d: 4, 
      l: 4, 
      gf: 35, 
      ga: 22, 
      gd: 13, 
      pts: 40,
      form: ["W", "D", "L", "W", "W"]
    },
    { 
      pos: 4, 
      team: "Arema FC", 
      m: 20, 
      w: 11, 
      d: 5, 
      l: 4, 
      gf: 32, 
      ga: 20, 
      gd: 12, 
      pts: 38,
      form: ["L", "W", "D", "W", "D"]
    },
    { 
      pos: 5, 
      team: "PSM Makassar", 
      m: 20, 
      w: 9, 
      d: 7, 
      l: 4, 
      gf: 28, 
      ga: 22, 
      gd: 6, 
      pts: 34,
      form: ["D", "W", "L", "D", "W"]
    },
    { 
      pos: 6, 
      team: "Persebaya", 
      m: 20, 
      w: 8, 
      d: 6, 
      l: 6, 
      gf: 25, 
      ga: 24, 
      gd: 1, 
      pts: 30,
      form: ["L", "D", "W", "L", "D"]
    },
    { 
      pos: 7, 
      team: "PSIS Semarang", 
      m: 20, 
      w: 6, 
      d: 8, 
      l: 6, 
      gf: 22, 
      ga: 26, 
      gd: -4, 
      pts: 26,
      form: ["D", "L", "D", "W", "L"]
    },
    { 
      pos: 8, 
      team: "Borneo FC", 
      m: 20, 
      w: 4, 
      d: 5, 
      l: 11, 
      gf: 18, 
      ga: 35, 
      gd: -17, 
      pts: 17,
      form: ["L", "L", "D", "L", "L"]
    }
  ]);

  // Data statistik pemain
  const [playerStats] = useState([
    {
      id: 1,
      name: "Ahmad Naufal",
      position: "Striker",
      goals: 12,
      assists: 6,
      matches: 18,
      minutes: 1620,
      yellowCards: 2,
      redCards: 0
    },
    {
      id: 2,
      name: "Bayu Setiawan",
      position: "Midfielder",
      goals: 5,
      assists: 11,
      matches: 20,
      minutes: 1800,
      yellowCards: 4,
      redCards: 0
    },
    {
      id: 3,
      name: "Rizky Pratama",
      position: "Defender",
      goals: 2,
      assists: 3,
      matches: 19,
      minutes: 1710,
      yellowCards: 6,
      redCards: 1
    },
    {
      id: 4,
      name: "Dani Kurniawan",
      position: "Goalkeeper",
      goals: 0,
      assists: 1,
      matches: 15,
      minutes: 1350,
      yellowCards: 1,
      redCards: 0,
      cleanSheets: 8,
      saves: 45
    }
  ]);

  const getResultBadge = (result: string) => {
    switch (result) {
      case "win":
        return <Badge className="bg-green-500">Menang</Badge>;
      case "draw":
        return <Badge className="bg-yellow-500">Seri</Badge>;
      case "loss":
        return <Badge className="bg-red-500">Kalah</Badge>;
      default:
        return <Badge className="bg-blue-500">Belum Main</Badge>;
    }
  };

  const getFormBadge = (form: string) => {
    switch (form) {
      case "W":
        return <Badge className="bg-green-500 text-white w-6 h-6 rounded-full flex items-center justify-center p-0 text-xs">W</Badge>;
      case "D":
        return <Badge className="bg-yellow-500 text-white w-6 h-6 rounded-full flex items-center justify-center p-0 text-xs">D</Badge>;
      case "L":
        return <Badge className="bg-red-500 text-white w-6 h-6 rounded-full flex items-center justify-center p-0 text-xs">L</Badge>;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Jadwal & Klasemen
            </h1>
            <p className="text-muted-foreground text-lg">
              Ikuti perkembangan terkini Petra FC
            </p>
          </div>

          <Tabs defaultValue="schedule" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="schedule" className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Jadwal & Hasil
              </TabsTrigger>
              <TabsTrigger value="standings" className="flex items-center gap-2">
                <Trophy className="w-4 h-4" />
                Klasemen
              </TabsTrigger>
              <TabsTrigger value="players" className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                Statistik Pemain
              </TabsTrigger>
            </TabsList>

            <TabsContent value="schedule" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    Jadwal Pertandingan & Hasil
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {scheduleData.map((match) => (
                      <div
                        key={match.id}
                        className="border border-border rounded-lg p-4 hover:bg-muted/50 transition-colors"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="text-center">
                              <div className="text-sm text-muted-foreground">
                                {new Date(match.date).toLocaleDateString('id-ID', {
                                  weekday: 'short',
                                  day: 'numeric',
                                  month: 'short'
                                })}
                              </div>
                              <div className="font-semibold">{match.time}</div>
                            </div>
                            <div className="text-center">
                              <div className="font-bold text-lg">Petra FC</div>
                              <div className="text-sm text-muted-foreground">vs</div>
                              <div className="font-bold text-lg">{match.opponent}</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="mb-2">
                              {match.status === "result" ? (
                                <div className="text-2xl font-bold">{match.score}</div>
                              ) : (
                                <div className="text-sm text-muted-foreground">
                                  {match.venue}
                                </div>
                              )}
                            </div>
                            {match.status === "result" && getResultBadge(match.result!)}
                            {match.status === "upcoming" && (
                              <Badge className="bg-blue-500">Akan Datang</Badge>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="standings" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Trophy className="w-5 h-5" />
                    Klasemen Liga 1
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-12">Pos</TableHead>
                          <TableHead>Tim</TableHead>
                          <TableHead className="text-center w-12">M</TableHead>
                          <TableHead className="text-center w-12">W</TableHead>
                          <TableHead className="text-center w-12">D</TableHead>
                          <TableHead className="text-center w-12">L</TableHead>
                          <TableHead className="text-center w-12">GF</TableHead>
                          <TableHead className="text-center w-12">GA</TableHead>
                          <TableHead className="text-center w-12">GD</TableHead>
                          <TableHead className="text-center w-12">Pts</TableHead>
                          <TableHead className="text-center">Form</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {standingsData.map((team) => (
                          <TableRow
                            key={team.pos}
                            className={team.team === "Petra FC" ? "bg-primary/10" : ""}
                          >
                            <TableCell className="font-medium text-center">
                              {team.pos}
                            </TableCell>
                            <TableCell className="font-semibold">
                              {team.team}
                              {team.team === "Petra FC" && (
                                <Badge className="ml-2 bg-primary text-primary-foreground">
                                  Kami
                                </Badge>
                              )}
                            </TableCell>
                            <TableCell className="text-center">{team.m}</TableCell>
                            <TableCell className="text-center">{team.w}</TableCell>
                            <TableCell className="text-center">{team.d}</TableCell>
                            <TableCell className="text-center">{team.l}</TableCell>
                            <TableCell className="text-center">{team.gf}</TableCell>
                            <TableCell className="text-center">{team.ga}</TableCell>
                            <TableCell className="text-center">
                              {team.gd > 0 ? `+${team.gd}` : team.gd}
                            </TableCell>
                            <TableCell className="text-center font-bold">
                              {team.pts}
                            </TableCell>
                            <TableCell>
                              <div className="flex gap-1 justify-center">
                                {team.form.slice(-5).map((result, idx) => (
                                  <div key={idx}>
                                    {getFormBadge(result)}
                                  </div>
                                ))}
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                  
                  <div className="mt-6 text-sm text-muted-foreground">
                    <div className="flex gap-4 justify-center">
                      <span><strong>M:</strong> Main</span>
                      <span><strong>W:</strong> Menang</span>
                      <span><strong>D:</strong> Seri</span>
                      <span><strong>L:</strong> Kalah</span>
                      <span><strong>GF:</strong> Gol For</span>
                      <span><strong>GA:</strong> Gol Against</span>
                      <span><strong>GD:</strong> Selisih Gol</span>
                      <span><strong>Pts:</strong> Poin</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="players" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="w-5 h-5" />
                    Statistik Pemain Petra FC
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 md:grid-cols-2">
                    {playerStats.map((player) => (
                      <Card key={player.id} className="border-border">
                        <CardHeader className="pb-3">
                          <div className="flex items-center justify-between">
                            <div>
                              <CardTitle className="text-lg">{player.name}</CardTitle>
                              <p className="text-sm text-muted-foreground">{player.position}</p>
                            </div>
                            <Badge variant="outline">{player.position}</Badge>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div className="space-y-2">
                              <div className="flex justify-between">
                                <span>Pertandingan:</span>
                                <span className="font-semibold">{player.matches}</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Menit:</span>
                                <span className="font-semibold">{player.minutes}'</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Gol:</span>
                                <span className="font-semibold">{player.goals}</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Assist:</span>
                                <span className="font-semibold">{player.assists}</span>
                              </div>
                            </div>
                            <div className="space-y-2">
                              <div className="flex justify-between">
                                <span>Kartu Kuning:</span>
                                <span className="font-semibold">{player.yellowCards}</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Kartu Merah:</span>
                                <span className="font-semibold">{player.redCards}</span>
                              </div>
                              {player.position === "Goalkeeper" && (
                                <>
                                  <div className="flex justify-between">
                                    <span>Clean Sheet:</span>
                                    <span className="font-semibold">{player.cleanSheets}</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span>Saves:</span>
                                    <span className="font-semibold">{player.saves}</span>
                                  </div>
                                </>
                              )}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Schedule;