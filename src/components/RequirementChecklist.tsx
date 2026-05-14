import { Check } from "lucide-react";
import { requirements } from "../data/landingContent";

export function RequirementChecklist() {
  return (
    <div className="checklist-grid">
      {requirements.map((requirement) => (
        <div className="check-item" key={requirement}>
          <Check aria-hidden="true" />
          <span>{requirement}</span>
        </div>
      ))}
    </div>
  );
}
