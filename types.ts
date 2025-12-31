
export type CropType = 'Paddy' | 'Wheat' | 'Mustard';

export interface SeedVariety {
  id: string;
  name: string;
  type: CropType;
  duration: string;
  yield: string;
  features: string[];
  description: string;
  image: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}
