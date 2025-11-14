// types.ts
// Shared frontend types based on Prisma schema

export type Role = "volunteer" | "organization";
export type Gender = "female" | "male";

export type ApplicationStatus = 
  | "PENDING"
  | "ACCEPTED"
  | "REJECTED"
  | "COMPLETED";

// ----------------------
// USER
// ----------------------
export interface User {
  id: number;
  name: string;
  email: string;
  password?: string; // optional in frontend
  role: Role;
  file?: string | null;

  volunteerProfile?: VolunteerProfile | null;
  organizationProfile?: OrganizationProfile | null;

  createdAt: string;
  updatedAt: string;
}

// ----------------------
// VOLUNTEER PROFILE
// ----------------------
export interface VolunteerProfile {
  id: number;
  location?: string | null;
  dateOfBirth?: string | null;
  gender?: Gender | null;

  availableDay: string[]; // ["Monday", "Tuesday"]
  interests: string[];
  skills: string[];

  userId: number;
  user?: User;

  applications?: Application[];
  portfolios?: Portfolio[];
  availableTimes?: AvailableTime[];

  createdAt: string;
  updatedAt: string;
}

// ----------------------
// AVAILABLE TIME
// ----------------------
export interface AvailableTime {
  id: number;
  timeFrom: string; // "09:00"
  timeTo: string;   // "10:00"

  usageCountVolunteer: number;
  usageCountOpportunity: number;

  volunteerProfiles?: VolunteerProfile[];
  volunteerOpportunities?: VolunteerOpportunity[];

  createdAt: string;
  updatedAt: string;
}

// ----------------------
// ORGANIZATION PROFILE
// ----------------------
export interface OrganizationProfile {
  id: number;
  name: string;
  address?: string | null;
  phone?: string | null;
  description?: string | null;
  structure?: string | null;

  userId: number;
  user?: User;

  opportunities?: VolunteerOpportunity[];
  impactAnalyses?: ImpactAnalysis[];

  createdAt: string;
  updatedAt: string;
}

// ----------------------
// VOLUNTEER OPPORTUNITY
// ----------------------
export interface VolunteerOpportunity {
  id: number;
  title: string;
  description?: string | null;
  rules?: string | null;

  location?: string | null;
  startDate: string;
  endDate: string;

  category?: string | null;
  capacity: number;

  requiredSkills: string[];
  matchingScore?: number | null;

  organizationId: number;
  organization?: OrganizationProfile;

  applications?: Application[];
  availableTimes?: AvailableTime[];
  impactAnalyses?: ImpactAnalysis[];

  createdAt: string;
  updatedAt: string;
}

// ----------------------
// APPLICATION
// ----------------------
export interface Application {
  id: number;
  applyDate: string;
  status: ApplicationStatus;

  position: string;
  description: string;

  volunteerId: number;
  volunteer?: VolunteerProfile;

  opportunityId: number;
  opportunity?: VolunteerOpportunity;

  createdAt: string;
  updatedAt: string;
}

// ----------------------
// IMPACT ANALYSIS
// ----------------------
export interface ImpactAnalysis {
  id: number;
  totalHours: number;
  totalVolunteers: number;
  beneficiaries: number;
  regionCovered?: string | null;

  lastUpdated: string;

  organizationId: number;
  organization?: OrganizationProfile;

  opportunityId: number;
  opportunity?: VolunteerOpportunity;

  createdAt: string;
  updatedAt: string;
}

// ----------------------
// PORTFOLIO
// ----------------------
export interface Portfolio {
  id: number;
  activityTitle: string;
  contributionHours: number;

  certificate?: string | null;
  badge?: string | null;
  feedback?: string | null;

  volunteerId: number;
  volunteer?: VolunteerProfile;

  createdAt: string;
  updatedAt: string;
}