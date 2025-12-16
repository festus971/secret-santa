export interface Participant {
  id: string;
  name: string;
  wishlist?: string;
  hints?: string;
}

export interface Exclusion {
  from: string;
  to: string;
}

export interface Assignment {
  gifterId: string;
  gifteeId: string;
}

export interface SecretSantaEvent {
  id: string;
  name: string;
  priceLimit?: number;
  exchangeDate?: string;
  notes?: string;
  participants: Participant[];
  exclusions: Exclusion[];
  assignments: Assignment[];
  createdAt: string;
  updatedAt: string;
}