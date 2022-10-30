export interface MoviePreview {
  id: number;
  name: string;
  thumbnail: string;
  description: string;
}

export interface Movie {
  id: number;
  name: string;
  thumbnail: string;
  description: string;
  director: string;
  actor: string;
  year: number;
  reviews: string[];
}
