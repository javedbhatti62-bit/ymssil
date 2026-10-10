import type { ReactNode } from "react";
import { Info } from "lucide-react";

export function InformationBanner({ children }: { children: ReactNode }) {
  return (
    <div className="information-banner">
      <Info aria-hidden="true" size={19} />
      <p>{children}</p>
    </div>
  );
}