import statusData from "./data/status.json";

export type MilestoneStatus = "done" | "in-progress" | "pending";

export interface Milestone {
  id: string;
  title: string;
  plannedMonth: number;
  status: MilestoneStatus;
  evidence: string | null;
  description: string;
}

export interface StatusData {
  fundedDash: number;
  spentDash: number;
  currentMonth: number;
  lastUpdated: string;
  nextMilestone: string;
  milestones: Milestone[];
}

export function getStatusData(): StatusData {
  return statusData as StatusData;
}
