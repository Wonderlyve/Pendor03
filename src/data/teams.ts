import { Trophy } from 'lucide-react';

export interface Team {
  id: string;
  name: string;
  logo: string;
  league: string;
}

export const teams: Team[] = [
  // Ligue 1
  {
    id: "psg",
    name: "Paris Saint-Germain",
    logo: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?ixlib=rb-1.2.1&auto=format&fit=crop&w=50&q=60",
    league: "Ligue 1"
  },
  {
    id: "om",
    name: "Olympique de Marseille",
    logo: "https://images.unsplash.com/photo-1589487391730-58f20eb2c308?ixlib=rb-1.2.1&auto=format&fit=crop&w=50&q=60",
    league: "Ligue 1"
  },
  {
    id: "ol",
    name: "Olympique Lyonnais",
    logo: "https://images.unsplash.com/photo-1589487391730-58f20eb2c308?ixlib=rb-1.2.1&auto=format&fit=crop&w=50&q=60",
    league: "Ligue 1"
  },
  {
    id: "monaco",
    name: "AS Monaco",
    logo: "https://images.unsplash.com/photo-1589487391730-58f20eb2c308?ixlib=rb-1.2.1&auto=format&fit=crop&w=50&q=60",
    league: "Ligue 1"
  },
  {
    id: "lille",
    name: "LOSC Lille",
    logo: "https://images.unsplash.com/photo-1589487391730-58f20eb2c308?ixlib=rb-1.2.1&auto=format&fit=crop&w=50&q=60",
    league: "Ligue 1"
  },
  {
    id: "rennes",
    name: "Stade Rennais",
    logo: "https://images.unsplash.com/photo-1589487391730-58f20eb2c308?ixlib=rb-1.2.1&auto=format&fit=crop&w=50&q=60",
    league: "Ligue 1"
  },
  {
    id: "nice",
    name: "OGC Nice",
    logo: "https://images.unsplash.com/photo-1589487391730-58f20eb2c308?ixlib=rb-1.2.1&auto=format&fit=crop&w=50&q=60",
    league: "Ligue 1"
  },
  {
    id: "lens",
    name: "RC Lens",
    logo: "https://images.unsplash.com/photo-1589487391730-58f20eb2c308?ixlib=rb-1.2.1&auto=format&fit=crop&w=50&q=60",
    league: "Ligue 1"
  },
  {
    id: "toulouse",
    name: "Toulouse FC",
    logo: "https://images.unsplash.com/photo-1589487391730-58f20eb2c308?ixlib=rb-1.2.1&auto=format&fit=crop&w=50&q=60",
    league: "Ligue 1"
  },
  {
    id: "nantes",
    name: "FC Nantes",
    logo: "https://images.unsplash.com/photo-1589487391730-58f20eb2c308?ixlib=rb-1.2.1&auto=format&fit=crop&w=50&q=60",
    league: "Ligue 1"
  },
  {
    id: "strasbourg",
    name: "RC Strasbourg",
    logo: "https://images.unsplash.com/photo-1589487391730-58f20eb2c308?ixlib=rb-1.2.1&auto=format&fit=crop&w=50&q=60",
    league: "Ligue 1"
  },
  {
    id: "reims",
    name: "Stade de Reims",
    logo: "https://images.unsplash.com/photo-1589487391730-58f20eb2c308?ixlib=rb-1.2.1&auto=format&fit=crop&w=50&q=60",
    league: "Ligue 1"
  },
  {
    id: "montpellier",
    name: "Montpellier HSC",
    logo: "https://images.unsplash.com/photo-1589487391730-58f20eb2c308?ixlib=rb-1.2.1&auto=format&fit=crop&w=50&q=60",
    league: "Ligue 1"
  },
  {
    id: "lorient",
    name: "FC Lorient",
    logo: "https://images.unsplash.com/photo-1589487391730-58f20eb2c308?ixlib=rb-1.2.1&auto=format&fit=crop&w=50&q=60",
    league: "Ligue 1"
  },
  {
    id: "clermont",
    name: "Clermont Foot",
    logo: "https://images.unsplash.com/photo-1589487391730-58f20eb2c308?ixlib=rb-1.2.1&auto=format&fit=crop&w=50&q=60",
    league: "Ligue 1"
  },
  {
    id: "metz",
    name: "FC Metz",
    logo: "https://images.unsplash.com/photo-1589487391730-58f20eb2c308?ixlib=rb-1.2.1&auto=format&fit=crop&w=50&q=60",
    league: "Ligue 1"
  },
  {
    id: "havre",
    name: "Le Havre AC",
    logo: "https://images.unsplash.com/photo-1589487391730-58f20eb2c308?ixlib=rb-1.2.1&auto=format&fit=crop&w=50&q=60",
    league: "Ligue 1"
  },
  {
    id: "brest",
    name: "Stade Brestois",
    logo: "https://images.unsplash.com/photo-1589487391730-58f20eb2c308?ixlib=rb-1.2.1&auto=format&fit=crop&w=50&q=60",
    league: "Ligue 1"
  },

  // Premier League
  {
    id: "arsenal",
    name: "Arsenal FC",
    logo: "https://images.unsplash.com/photo-1589487391730-58f20eb2c308?ixlib=rb-1.2.1&auto=format&fit=crop&w=50&q=60",
    league: "Premier League"
  },
  {
    id: "chelsea",
    name: "Chelsea FC",
    logo: "https://images.unsplash.com/photo-1589487391730-58f20eb2c308?ixlib=rb-1.2.1&auto=format&fit=crop&w=50&q=60",
    league: "Premier League"
  },
  {
    id: "liverpool",
    name: "Liverpool FC",
    logo: "https://images.unsplash.com/photo-1589487391730-58f20eb2c308?ixlib=rb-1.2.1&auto=format&fit=crop&w=50&q=60",
    league: "Premier League"
  },
  {
    id: "mancity",
    name: "Manchester City",
    logo: "https://images.unsplash.com/photo-1589487391730-58f20eb2c308?ixlib=rb-1.2.1&auto=format&fit=crop&w=50&q=60",
    league: "Premier League"
  },
  {
    id: "manutd",
    name: "Manchester United",
    logo: "https://images.unsplash.com/photo-1589487391730-58f20eb2c308?ixlib=rb-1.2.1&auto=format&fit=crop&w=50&q=60",
    league: "Premier League"
  },
  {
    id: "tottenham",
    name: "Tottenham Hotspur",
    logo: "https://images.unsplash.com/photo-1589487391730-58f20eb2c308?ixlib=rb-1.2.1&auto=format&fit=crop&w=50&q=60",
    league: "Premier League"
  },
  {
    id: "newcastle",
    name: "Newcastle United",
    logo: "https://images.unsplash.com/photo-1589487391730-58f20eb2c308?ixlib=rb-1.2.1&auto=format&fit=crop&w=50&q=60",
    league: "Premier League"
  },
  {
    id: "westham",
    name: "West Ham United",
    logo: "https://images.unsplash.com/photo-1589487391730-58f20eb2c308?ixlib=rb-1.2.1&auto=format&fit=crop&w=50&q=60",
    league: "Premier League"
  },
  {
    id: "brighton",
    name: "Brighton & Hove Albion",
    logo: "https://images.unsplash.com/photo-1589487391730-58f20eb2c308?ixlib=rb-1.2.1&auto=format&fit=crop&w=50&q=60",
    league: "Premier League"
  },
  {
    id: "astonvilla",
    name: "Aston Villa",
    logo: "https://images.unsplash.com/photo-1589487391730-58f20eb2c308?ixlib=rb-1.2.1&auto=format&fit=crop&w=50&q=60",
    league: "Premier League"
  },

  // La Liga
  {
    id: "real_madrid",
    name: "Real Madrid",
    logo: "https://images.unsplash.com/photo-1589487391730-58f20eb2c308?ixlib=rb-1.2.1&auto=format&fit=crop&w=50&q=60",
    league: "La Liga"
  },
  {
    id: "barcelona",
    name: "FC Barcelona",
    logo: "https://images.unsplash.com/photo-1589487391730-58f20eb2c308?ixlib=rb-1.2.1&auto=format&fit=crop&w=50&q=60",
    league: "La Liga"
  },
  {
    id: "atletico",
    name: "Atlético Madrid",
    logo: "https://images.unsplash.com/photo-1589487391730-58f20eb2c308?ixlib=rb-1.2.1&auto=format&fit=crop&w=50&q=60",
    league: "La Liga"
  },
  {
    id: "sevilla",
    name: "Sevilla FC",
    logo: "https://images.unsplash.com/photo-1589487391730-58f20eb2c308?ixlib=rb-1.2.1&auto=format&fit=crop&w=50&q=60",
    league: "La Liga"
  },
  {
    id: "valencia",
    name: "Valencia CF",
    logo: "https://images.unsplash.com/photo-1589487391730-58f20eb2c308?ixlib=rb-1.2.1&auto=format&fit=crop&w=50&q=60",
    league: "La Liga"
  },
  {
    id: "realsociedad",
    name: "Real Sociedad",
    logo: "https://images.unsplash.com/photo-1589487391730-58f20eb2c308?ixlib=rb-1.2.1&auto=format&fit=crop&w=50&q=60",
    league: "La Liga"
  },
  {
    id: "betis",
    name: "Real Betis",
    logo: "https://images.unsplash.com/photo-1589487391730-58f20eb2c308?ixlib=rb-1.2.1&auto=format&fit=crop&w=50&q=60",
    league: "La Liga"
  },
  {
    id: "villarreal",
    name: "Villarreal CF",
    logo: "https://images.unsplash.com/photo-1589487391730-58f20eb2c308?ixlib=rb-1.2.1&auto=format&fit=crop&w=50&q=60",
    league: "La Liga"
  },
  {
    id: "getafe",
    name: "Getafe CF",
    logo: "https://images.unsplash.com/photo-1589487391730-58f20eb2c308?ixlib=rb-1.2.1&auto=format&fit=crop&w=50&q=60",
    league: "La Liga"
  },
  {
    id: "osasuna",
    name: "CA Osasuna",
    logo: "https://images.unsplash.com/photo-1589487391730-58f20eb2c308?ixlib=rb-1.2.1&auto=format&fit=crop&w=50&q=60",
    league: "La Liga"
  }
];

export const betTypes = {
  "1X2": ["1", "X", "2"],
  "Double Chance": ["1X", "12", "X2"],
  "Les Deux Équipes Marquent": ["Oui", "Non"],
  "Over/Under 2.5": ["Over", "Under"],
  "Score Exact": ["1-0", "2-0", "2-1", "0-0", "1-1", "2-2", "0-1", "0-2", "1-2"],
  "Buteur": ["Premier", "Dernier", "À tout moment"],
  "Nombre de Corners": ["Over 9.5", "Under 9.5"],
  "Cartons": ["Over 3.5", "Under 3.5"],
  "Personnalisé": []
} as const;

export interface Match {
  team1: Team;
  team2: Team;
  betType: string;
  betValue: string;
  customBet?: string;
}