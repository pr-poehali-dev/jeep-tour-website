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

      {/* Customer Reviews Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-adventure-dark">
              Отзывы Наших Путешественников
            </h2>
            <p className="text-xl text-gray-600">
              Реальные истории от тех, кто уже побывал в наших приключениях
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <img 
                    src="/img/1312e147-249a-4e29-883e-eccf6970d861.jpg" 
                    alt="Анна - участница тура"
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-adventure-dark">Анна К.</h4>
                    <p className="text-sm text-gray-500">Горные Тропы</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed">
                  "Невероятное приключение! Виды с горных вершин просто захватывают дух. 
                  Гиды профессиональные, безопасность на высшем уровне. Обязательно поеду еще!"
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <img 
                    src="/img/748a2d05-2517-43f1-9420-c08fd2b63366.jpg" 
                    alt="Мария - участница тура"
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-adventure-dark">Мария В.</h4>
                    <p className="text-sm text-gray-500">Лесные Приключения</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed">
                  "Скрытые водопады, которые мы нашли - это что-то! Фотографии получились 
                  потрясающие. Команда очень дружелюбная, всё организовано идеально."
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <img 
                    src="/img/fdfed470-5afe-4320-ad9c-3219780030a5.jpg" 
                    alt="Елена - участница тура"
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-adventure-dark">Елена С.</h4>
                    <p className="text-sm text-gray-500">Экстрим Сафари</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed">
                  "Адреналин зашкаливал! Экстремальные маршруты - это мое. Джипы мощные, 
                  инструкторы знают свое дело. Лучший отдых в этом году!"
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-adventure-dark">
              Свяжитесь с Нами
            </h2>
            <p className="text-xl text-gray-600">
              Готовы организовать ваше приключение? Мы всегда на связи!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-adventure-orange/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" size={24} className="text-adventure-orange" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-adventure-dark">Телефон</h3>
                  <p className="text-gray-600 mb-2">Звоните ежедневно с 9:00 до 21:00</p>
                  <a href="tel:+79991234567" className="text-2xl font-bold text-adventure-orange hover:text-adventure-green transition-colors">
                    +7 (999) 123-45-67
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-adventure-orange/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="MessageCircle" size={24} className="text-adventure-orange" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-adventure-dark">WhatsApp</h3>
                  <p className="text-gray-600 mb-2">Быстрые ответы и консультации</p>
                  <a href="https://wa.me/79991234567" className="text-2xl font-bold text-adventure-orange hover:text-adventure-green transition-colors">
                    +7 (999) 123-45-67
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-adventure-orange/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Mail" size={24} className="text-adventure-orange" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-adventure-dark">Email</h3>
                  <p className="text-gray-600 mb-2">Подробные консультации и бронирование</p>
                  <a href="mailto:info@jeeptours.ru" className="text-xl font-bold text-adventure-orange hover:text-adventure-green transition-colors">
                    info@jeeptours.ru
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-adventure-orange/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" size={24} className="text-adventure-orange" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-adventure-dark">Офис</h3>
                  <p className="text-gray-600 mb-2">Приезжайте к нам для личной консультации</p>
                  <p className="text-xl font-bold text-adventure-dark">
                    г. Москва, ул. Приключений, 15<br />
                    <span className="text-base font-normal text-gray-600">Пн-Пт: 10:00-19:00, Сб-Вс: 11:00-17:00</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 text-adventure-dark">
                Быстрая Консультация
              </h3>
              <form className="space-y-4">
                <div>
                  <input 
                    type="text" 
                    placeholder="Ваше имя" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-adventure-orange focus:border-transparent outline-none transition-all"
                  />
                </div>
                <div>
                  <input 
                    type="tel" 
                    placeholder="+7 (999) 123-45-67" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-adventure-orange focus:border-transparent outline-none transition-all"
                  />
                </div>
                <div>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-adventure-orange focus:border-transparent outline-none transition-all">
                    <option>Выберите тур</option>
                    <option>Горные Тропы (от 8 000 ₽)</option>
                    <option>Лесные Приключения (от 6 500 ₽)</option>
                    <option>Экстрим Сафари (от 12 000 ₽)</option>
                    <option>Индивидуальный маршрут</option>
                  </select>
                </div>
                <div>
                  <textarea 
                    rows={4} 
                    placeholder="Расскажите о ваших пожеланиях..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-adventure-orange focus:border-transparent outline-none transition-all resize-vertical"
                  ></textarea>
                </div>
                <Button 
                  type="submit"
                  className="w-full bg-adventure-orange hover:bg-adventure-orange/90 text-white py-4 text-lg font-semibold transition-all duration-300 hover:scale-105"
                >
                  Получить Консультацию
                  <Icon name="Send" className="ml-2" size={20} />
                </Button>
              </form>
            </div>
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
            Забронируйте свой незабываемый джип-тур прямо сейчас!
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