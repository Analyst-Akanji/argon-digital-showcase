import type { ProjectStatus } from "../../data/caseStudies";

const LABELS: Record<ProjectStatus, string> = {
  "live-paid": "Live · Paid",
  live: "Live",
  "in-progress": "In Progress",
};

interface StatusStampProps {
  status: ProjectStatus;
}

export default function StatusStamp({ status }: StatusStampProps) {
  return (
    <span className={`pm-stamp pm-stamp--${status}`} aria-label={`Status: ${LABELS[status]}`}>
      {LABELS[status]}
    </span>
  );
}
