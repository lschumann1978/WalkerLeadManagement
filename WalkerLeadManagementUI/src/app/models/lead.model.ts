export interface Lead {
    id: number;
    name: string;
    phoneNumber: string;
    zipCode: string;
    email?: string;
    isEmailPermitted: boolean;
    isTextPermitted: boolean;
  }
  