import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const tours = [
    {
      id: 1,
      title: "Горные Тропы",
      description: "Захватывающее путешествие по горным дорогам с потрясающими видами на вершины и леса",
      image: "/img/29f37c58-65a1-4bec-b057-a0163511b4fb.jpg",
      duration: "6 часов",
      difficulty: "Средняя",
      price: "от 8 000 ₽"
    },
    {
      id: 2,
      title: "Лесные Приключения", 
      description: "Исследование дикой природы на джипах с посещением скрытых водопадов и озер",
      image: "/img/b0e80b2a-f304-4c0b-a860-ce7a67589a71.jpg",
      duration: "8 часов",
      difficulty: "Легкая",
      price: "от 6 500 ₽"
    },
    {
      id: 3,
      title: "Экстрим Сафари",
      description: "Адреналиновые маршруты для истинных любителей приключений и острых ощущений",
      image: "/img/de43eb85-0f65-49b6-9450-f9dac3591c99.jpg", 
      duration: "12 часов",
      difficulty: "Сложная",
      price: "от 12 000 ₽"
    }
  ];

  const features = [
    {
      icon: "Truck",
      title: "Внедорожники 4x4",
      description: "Мощные и надежные джипы для любых дорог"
    },
    {
      icon: "MapPin",
      title: "Уникальные Маршруты",
      description: "Секретные места, недоступные обычным туристам"
    },
    {
      icon: "Shield",
      title: "Безопасность",
      description: "Профессиональные гиды и современное снаряжение"
    },
    {
      icon: "Users",
      title: "Групповые Туры",
      description: "Приключения в компании единомышленников"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-adventure-green via-adventure-green to-adventure-dark overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(/img/29f37c58-65a1-4bec-b057-a0163511b4fb.jpg)`
          }}
        ></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            ДЖИП ТУРЫ
            <span className="block text-adventure-orange">ПРИКЛЮЧЕНИЯ</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-in opacity-90">
            Откройте для себя дикую природу России на внедорожниках!
            Незабываемые маршруты по самым красивым местам страны.
          </p>
          <div className="space-x-4 animate-fade-in">
            <Button 
              size="lg" 
              className="bg-adventure-orange hover:bg-adventure-orange/90 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Забронировать Тур
              <Icon name="ArrowRight" className="ml-2" size={20} />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-adventure-green px-8 py-4 text-lg font-semibold transition-all duration-300"
            >
              Смотреть Галерею
              <Icon name="Camera" className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-adventure-dark">
            Почему выбирают нас?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="text-center group hover:scale-105 transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-adventure-orange/10 rounded-full flex items-center justify-center group-hover:bg-adventure-orange/20 transition-colors">
                  <Icon name={feature.icon} size={32} className="text-adventure-orange" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-adventure-dark">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tours Gallery Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-adventure-dark">
            Популярные Маршруты
          </h2>
          <p className="text-xl text-center text-gray-600 mb-16">
            Выберите свое приключение из наших лучших туров
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours.map((tour) => (
              <Card 
                key={tour.id} 
                className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-white border-0"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={tour.image} 
                    alt={tour.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-adventure-orange text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {tour.price}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {tour.title}
                    </h3>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {tour.description}
                  </p>
                  
                  <div className="flex justify-between items-center mb-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Icon name="Clock" size={16} className="mr-1" />
                      {tour.duration}
                    </div>
                    <div className="flex items-center">
                      <Icon name="TrendingUp" size={16} className="mr-1" />
                      {tour.difficulty}
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full bg-adventure-green hover:bg-adventure-green/90 text-white font-semibold py-3 transition-all duration-300"
                  >
                    Подробнее о туре
                    <Icon name="ArrowRight" className="ml-2" size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-adventure-green text-white">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">
            Готовы к Приключению?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Свяжитесь с нами сегодня и забронируйте свой незабываемый джип-тур!
            Наши эксперты помогут выбрать идеальный маршрут для вас.
          </p>
          <div className="space-x-4">
            <Button 
              size="lg"
              className="bg-adventure-orange hover:bg-adventure-orange/90 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              <Icon name="Phone" className="mr-2" size={20} />
              Позвонить Сейчас
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-adventure-green px-8 py-4 text-lg font-semibold transition-all duration-300"
            >
              <Icon name="MessageCircle" className="mr-2" size={20} />
              Написать в WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-adventure-dark text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-adventure-orange">
                ДЖИП ТУРЫ
              </h3>
              <p className="text-gray-300">
                Ваш проводник в мир незабываемых приключений и открытий дикой природы России.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center">
                  <Icon name="Phone" size={16} className="mr-2" />
                  +7 (999) 123-45-67
                </div>
                <div className="flex items-center">
                  <Icon name="Mail" size={16} className="mr-2" />
                  info@jeeptours.ru  
                </div>
                <div className="flex items-center">
                  <Icon name="MapPin" size={16} className="mr-2" />
                  Москва, Россия
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Следите за нами</h4>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="text-gray-300 hover:text-adventure-orange">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-300 hover:text-adventure-orange">
                  <Icon name="Facebook" size={20} />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-300 hover:text-adventure-orange">
                  <Icon name="Youtube" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Джип Туры. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;