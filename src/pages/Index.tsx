import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            ИКТ Активность Ребенка
          </h1>
          <p className="text-lg text-gray-600">
            Мониторинг и управление цифровой активностью детей
          </p>
        </header>

        <Tabs defaultValue="home" className="w-full max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="home" className="flex items-center gap-2">
              <Icon name="Home" size={16} />
              Главная
            </TabsTrigger>
            <TabsTrigger value="teacher" className="flex items-center gap-2">
              <Icon name="GraduationCap" size={16} />
              Учителю
            </TabsTrigger>
            <TabsTrigger value="student" className="flex items-center gap-2">
              <Icon name="BookOpen" size={16} />
              Ученику
            </TabsTrigger>
            <TabsTrigger value="parent" className="flex items-center gap-2">
              <Icon name="Users" size={16} />
              Родителю
            </TabsTrigger>
          </TabsList>

          {/* Главная страница */}
          <TabsContent value="home" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Clock" size={20} />
                    Экранное время
                  </CardTitle>
                  <CardDescription>Сегодня</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-violet-600">
                    4ч 32м
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    ↓ На 23% меньше вчера
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Gamepad2" size={20} />
                    Игры
                  </CardTitle>
                  <CardDescription>Время в играх</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-indigo-600">
                    1ч 45м
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    Рекомендуемый лимит: 2ч
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="BookOpenCheck" size={20} />
                    Обучение
                  </CardTitle>
                  <CardDescription>Образовательные приложения</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-green-600">
                    2ч 15м
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    ↑ На 15% больше вчера
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Рекомендации на сегодня</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg">
                    <Icon
                      name="CheckCircle"
                      size={20}
                      className="text-green-600 mt-0.5"
                    />
                    <div>
                      <h3 className="font-semibold text-green-800">
                        Отличная работа!
                      </h3>
                      <p className="text-sm text-green-700">
                        Больше времени потрачено на образовательные приложения
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-yellow-50 rounded-lg">
                    <Icon
                      name="AlertCircle"
                      size={20}
                      className="text-yellow-600 mt-0.5"
                    />
                    <div>
                      <h3 className="font-semibold text-yellow-800">
                        Перерыв рекомендуется
                      </h3>
                      <p className="text-sm text-yellow-700">
                        Сделайте 15-минутную паузу от экрана
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Раздел для учителя */}
          <TabsContent value="teacher" className="space-y-6">
            <Card className="bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Users" size={20} />
                  Мониторинг класса
                </CardTitle>
                <CardDescription>Обзор ИКТ активности учеников</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3">
                      Средние показатели класса
                    </h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Экранное время</span>
                        <span className="font-medium">3ч 45м</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Образовательные приложения</span>
                        <span className="font-medium">2ч 10м</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Развлекательный контент</span>
                        <span className="font-medium">1ч 35м</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3">Инструменты</h3>
                    <div className="space-y-2">
                      <Button
                        variant="outline"
                        className="w-full justify-start"
                      >
                        <Icon name="BarChart" size={16} className="mr-2" />
                        Отчеты по активности
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full justify-start"
                      >
                        <Icon name="Settings" size={16} className="mr-2" />
                        Настройки ограничений
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full justify-start"
                      >
                        <Icon name="Bell" size={16} className="mr-2" />
                        Уведомления родителям
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Рекомендации для урока</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <Icon
                      name="Monitor"
                      size={24}
                      className="text-blue-600 mb-2"
                    />
                    <h3 className="font-semibold">Цифровая грамотность</h3>
                    <p className="text-sm text-gray-600">
                      Урок безопасности в интернете
                    </p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <Icon
                      name="Timer"
                      size={24}
                      className="text-green-600 mb-2"
                    />
                    <h3 className="font-semibold">Тайм-менеджмент</h3>
                    <p className="text-sm text-gray-600">
                      Планирование цифрового времени
                    </p>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <Icon
                      name="Brain"
                      size={24}
                      className="text-purple-600 mb-2"
                    />
                    <h3 className="font-semibold">Критическое мышление</h3>
                    <p className="text-sm text-gray-600">
                      Анализ информации онлайн
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Раздел для ученика */}
          <TabsContent value="student" className="space-y-6">
            <Card className="bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Target" size={20} />
                  Твои цели на сегодня
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-gradient-to-r from-green-100 to-green-50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">
                        Образовательные приложения
                      </span>
                      <Icon
                        name="CheckCircle"
                        size={20}
                        className="text-green-600"
                      />
                    </div>
                    <div className="text-2xl font-bold text-green-600">
                      2ч / 2ч
                    </div>
                    <p className="text-sm text-green-700">
                      Цель достигнута! 🎉
                    </p>
                  </div>
                  <div className="p-4 bg-gradient-to-r from-blue-100 to-blue-50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">Время для игр</span>
                      <Icon name="Clock" size={20} className="text-blue-600" />
                    </div>
                    <div className="text-2xl font-bold text-blue-600">
                      45м / 1ч 30м
                    </div>
                    <p className="text-sm text-blue-700">Осталось 45 минут</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Рекомендуемые приложения</CardTitle>
                <CardDescription>
                  Полезные приложения для обучения
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                    <Icon
                      name="Calculator"
                      size={32}
                      className="text-blue-600 mb-2"
                    />
                    <h3 className="font-semibold">Математика</h3>
                    <p className="text-sm text-gray-600">
                      Интерактивные задачи
                    </p>
                    <Button size="sm" className="mt-2 w-full">
                      Открыть
                    </Button>
                  </div>
                  <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                    <Icon
                      name="Globe"
                      size={32}
                      className="text-green-600 mb-2"
                    />
                    <h3 className="font-semibold">География</h3>
                    <p className="text-sm text-gray-600">
                      Виртуальные путешествия
                    </p>
                    <Button size="sm" className="mt-2 w-full">
                      Открыть
                    </Button>
                  </div>
                  <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                    <Icon
                      name="Languages"
                      size={32}
                      className="text-purple-600 mb-2"
                    />
                    <h3 className="font-semibold">Языки</h3>
                    <p className="text-sm text-gray-600">
                      Изучение английского
                    </p>
                    <Button size="sm" className="mt-2 w-full">
                      Открыть
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Полезные советы</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg">
                    <Icon
                      name="Lightbulb"
                      size={20}
                      className="text-yellow-600"
                    />
                    <span>
                      Делай перерыв каждые 20 минут работы за компьютером
                    </span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                    <Icon name="Eye" size={20} className="text-blue-600" />
                    <span>Держи экран на расстоянии вытянутой руки</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                    <Icon name="Moon" size={20} className="text-green-600" />
                    <span>Выключай гаджеты за час до сна</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Раздел для родителя */}
          <TabsContent value="parent" className="space-y-6">
            <Card className="bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Shield" size={20} />
                  Родительский контроль
                </CardTitle>
                <CardDescription>
                  Управление цифровой активностью ребенка
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3">Текущие ограничения</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <span>Общее время экрана</span>
                        <span className="font-medium">5 часов/день</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <span>Игры</span>
                        <span className="font-medium">2 часа/день</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <span>Время сна</span>
                        <span className="font-medium">21:00 - 07:00</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3">Быстрые действия</h3>
                    <div className="space-y-2">
                      <Button
                        variant="outline"
                        className="w-full justify-start"
                      >
                        <Icon name="Pause" size={16} className="mr-2" />
                        Приостановить устройство
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full justify-start"
                      >
                        <Icon name="Calendar" size={16} className="mr-2" />
                        Запланировать перерыв
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full justify-start"
                      >
                        <Icon name="MessageSquare" size={16} className="mr-2" />
                        Отправить сообщение
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Еженедельный отчет</CardTitle>
                <CardDescription>
                  Активность за последние 7 дней
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-violet-600">
                      28ч
                    </div>
                    <p className="text-sm text-gray-600">Общее время</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">15ч</div>
                    <p className="text-sm text-gray-600">Обучение</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">10ч</div>
                    <p className="text-sm text-gray-600">Игры</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">3ч</div>
                    <p className="text-sm text-gray-600">Соц. сети</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Рекомендации экспертов</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h3 className="font-semibold text-blue-800 mb-2">
                      Возраст 6-12 лет
                    </h3>
                    <p className="text-sm text-blue-700">
                      Рекомендуемое время экрана: не более 2 часов в день для
                      развлечений
                    </p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h3 className="font-semibold text-green-800 mb-2">
                      Образовательный контент
                    </h3>
                    <p className="text-sm text-green-700">
                      Время, проведенное с образовательными приложениями, может
                      быть больше установленного лимита
                    </p>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h3 className="font-semibold text-purple-800 mb-2">
                      Семейное время
                    </h3>
                    <p className="text-sm text-purple-700">
                      Планируйте совместные активности без гаджетов минимум 1
                      час в день
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
