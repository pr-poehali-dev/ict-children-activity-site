import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";
import HomeTab from "@/components/tabs/home-tab";
import TeacherTab from "@/components/tabs/teacher-tab";

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

          <TabsContent value="home">
            <HomeTab />
          </TabsContent>

          <TabsContent value="teacher">
            <TeacherTab />
          </TabsContent>

          <TabsContent value="student">
            <div className="text-center py-8">
              <p className="text-gray-600">Раздел для учеников в разработке</p>
            </div>
          </TabsContent>

          <TabsContent value="parent">
            <div className="text-center py-8">
              <p className="text-gray-600">Раздел для родителей в разработке</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
