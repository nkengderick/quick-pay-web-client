
export interface ProfileItem {
    icon: any;
    label: string;
    link: string;
    value?: string;
    isVerified?: boolean;
  }
  
export  interface ProfileSection {
    section: string;
    items: ProfileItem[];
  }
  