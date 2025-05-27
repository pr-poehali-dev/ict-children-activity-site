import { forwardRef } from "react";
import * as LucideIcons from "lucide-react";

interface IconProps {
  name: keyof typeof LucideIcons;
  size?: number;
  className?: string;
  fallback?: keyof typeof LucideIcons;
}

const Icon = forwardRef<SVGSVGElement, IconProps>(
  ({ name, size = 24, className = "", fallback = "AlertCircle" }, ref) => {
    const IconComponent = LucideIcons[name] || LucideIcons[fallback];

    return <IconComponent ref={ref} size={size} className={className} />;
  },
);

Icon.displayName = "Icon";

export default Icon;
