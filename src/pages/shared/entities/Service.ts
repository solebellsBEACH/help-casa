export interface Service {
  id: number;
  serviceName: string;
  serviceDescription: string;
  servicePrice: number;
  location: string;
  category: string;
  dateTime: string;
  isActive: boolean;
  employer: {
    id: number;
    name: string;
  };
  employee?: {
    id: number;
    name: string;
  };
}
