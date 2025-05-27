import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function TeacherTab() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="GraduationCap" className="h-5 w-5 text-blue-600" />
              Инструменты для учителя
            </CardTitle>
            <CardDescription>
              Управляйте цифровой активностью учеников
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button className="w-full justify-start" variant="outline">
              <Icon name="Users" className="h-4 w-4 mr-2" />
              Мониторинг класса
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <Icon name="BookOpen" className="h-4 w-4 mr-2" />
              Образовательные ресурсы
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <Icon name="BarChart3" className="h-4 w-4 mr-2" />
              Отчеты по активности
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="Target" className="h-5 w-5 text-green-600" />
              Рекомендации
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-3 bg-green-50 rounded-lg">
              <p className="font-medium text-green-800">
                Поощряйте образовательные приложения
              </p>
              <p className="text-sm text-green-600">
                Используйте геймификацию в обучении
              </p>
            </div>
            <div className="p-3 bg-blue-50 rounded-lg">
              <p className="font-medium text-blue-800">
                Ограничьте развлекательный контент
              </p>
              <p className="text-sm text-blue-600">Во время учебных часов</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
