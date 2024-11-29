export interface Employee {
  id: number;
  name: string | null;
  email: string | null;
  address: string | null;
  phone: string | null;
  profilePicture: string | null;
  description: string | null;
  rating: number;
  availableTimeRange: string | null;
  areaOfExpertise: string | null;
  experience: string | null;
  offeredServices: string[] | null;
  userType: string;
}

export interface Employer {
  id: number;
  name: string | null;
  email: string | null;
  address: string | null;
  phone: string | null;
  profilePicture: string | null;
  description: string | null;
  rating: number;
  contractedServices: string[] | null;
  userType: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  address: string;
  phone: string;
  profilePicture: string | null;
  description: string | null;
  rating: number;
  availableTimeRange: string | null;
  areaOfExpertise: string;
  experience: string;
  offeredServices: string | null;
  userType: string;
  subscription: boolean;
}
