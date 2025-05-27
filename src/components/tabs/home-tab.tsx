import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import StatCardComponent from "@/components/ui/stat-card";
import { StatCard } from "@/types";

const stats: StatCard[] = [
  {
    title: "Активных пользователей",
    value: "1,234",
    description: "↗️ +12% за месяц",
    icon: "Users",
    color: "border-l-blue-500",
  },
  {
    title: "Среднее экранное время",
    value: "4.2 ч",
    description: "👀 -8% за неделю",
    icon: "Clock",
    color: "border-l-green-500",
  },
  {
    title: "Образовательный контент",
    value: "68%",
    description: "📚 +15% за месяц",
    icon: "BookOpen",
    color: "border-l-purple-500",
  },
];

export default function HomeTab() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <StatCardComponent key={index} stat={stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="TrendingUp" className="h-5 w-5 text-purple-600" />
              Последние тенденции
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
              <div>
                <p className="font-medium">
                  Увеличение образовательных приложений
                </p>
                <p className="text-sm text-gray-600">
                  Дети больше используют обучающие программы
                </p>
              </div>
              <Icon name="ArrowUp" className="h-4 w-4 text-green-600" />
            </div>
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
              <div>
                <p className="font-medium">Снижение игрового времени</p>
                <p className="text-sm text-gray-600">
                  На 15% меньше времени в играх
                </p>
              </div>
              <Icon name="ArrowDown" className="h-4 w-4 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="Shield" className="h-5 w-5 text-green-600" />
              Быстрые действия
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button className="w-full justify-start" variant="outline">
              <Icon name="Settings" className="h-4 w-4 mr-2" />
              Настроить родительский контроль
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <Icon name="BarChart3" className="h-4 w-4 mr-2" />
              Создать отчет активности
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <Icon name="Bell" className="h-4 w-4 mr-2" />
              Настроить уведомления
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
