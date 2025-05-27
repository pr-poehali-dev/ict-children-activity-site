import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { StatCard } from "@/types";

interface StatCardProps {
  stat: StatCard;
}

export default function StatCardComponent({ stat }: StatCardProps) {
  return (
    <Card className={`bg-white/80 backdrop-blur-sm border-l-4 ${stat.color}`}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-gray-600">
          {stat.title}
        </CardTitle>
        <Icon name={stat.icon as any} className="h-4 w-4 text-gray-500" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
        <p className="text-xs text-gray-500 mt-1">{stat.description}</p>
      </CardContent>
    </Card>
  );
}
