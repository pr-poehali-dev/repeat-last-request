import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface Article {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  readTime: string;
  category: string;
}

const articles: Article[] = [
  {
    id: 1,
    title: 'Минимализм в современной архитектуре',
    excerpt: 'Исследование того, как простота формы создает максимальное визуальное воздействие в архитектурном дизайне.',
    date: '15 октября 2024',
    image: 'https://cdn.poehali.dev/projects/19e1afcf-4ba7-4d40-ab3c-bd60afe12249/files/3e4c6a1c-ac64-43da-b397-048887adb0e6.jpg',
    readTime: '5 мин',
    category: 'Архитектура'
  },
  {
    id: 2,
    title: 'Философия простоты в дизайне',
    excerpt: 'Как минималистичный подход к дизайну помогает сфокусироваться на главном и отбросить лишнее.',
    date: '12 октября 2024',
    image: 'https://cdn.poehali.dev/projects/19e1afcf-4ba7-4d40-ab3c-bd60afe12249/files/8550ce6e-e8ab-4eb5-aa92-2b6f5137abc7.jpg',
    readTime: '7 мин',
    category: 'Дизайн'
  },
  {
    id: 3,
    title: 'Геометрия городского пространства',
    excerpt: 'Взгляд на современный город через призму геометрических форм и контрастов света и тени.',
    date: '8 октября 2024',
    image: 'https://cdn.poehali.dev/projects/19e1afcf-4ba7-4d40-ab3c-bd60afe12249/files/76ca4a29-146b-42ae-b19b-a96e28d2336d.jpg',
    readTime: '6 мин',
    category: 'Фотография'
  },
  {
    id: 4,
    title: 'Искусство черно-белой фотографии',
    excerpt: 'История и техника создания выразительных черно-белых снимков, которые говорят больше цветных.',
    date: '5 октября 2024',
    image: 'https://cdn.poehali.dev/projects/19e1afcf-4ba7-4d40-ab3c-bd60afe12249/files/3e4c6a1c-ac64-43da-b397-048887adb0e6.jpg',
    readTime: '8 мин',
    category: 'Фотография'
  },
  {
    id: 5,
    title: 'Эссенциализм: меньше значит больше',
    excerpt: 'Практическое применение принципа "меньше значит больше" в повседневной жизни и работе.',
    date: '1 октября 2024',
    image: 'https://cdn.poehali.dev/projects/19e1afcf-4ba7-4d40-ab3c-bd60afe12249/files/8550ce6e-e8ab-4eb5-aa92-2b6f5137abc7.jpg',
    readTime: '4 мин',
    category: 'Философия'
  },
  {
    id: 6,
    title: 'Современная типографика',
    excerpt: 'Как выбор шрифта и композиция текста влияют на восприятие информации в цифровую эпоху.',
    date: '28 сентября 2024',
    image: 'https://cdn.poehali.dev/projects/19e1afcf-4ba7-4d40-ab3c-bd60afe12249/files/76ca4a29-146b-42ae-b19b-a96e28d2336d.jpg',
    readTime: '5 мин',
    category: 'Дизайн'
  }
];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredArticles = articles.filter(article =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-black/10">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-2 tracking-tight">Минимал</h1>
          <p className="text-muted-foreground text-lg">Блог о простоте, дизайне и осознанности</p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="mb-16">
          <div className="relative max-w-2xl">
            <Icon name="Search" className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
            <Input
              type="text"
              placeholder="Поиск по статьям..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 py-6 text-lg border-black/20 focus:border-black transition-colors"
            />
          </div>
          {searchQuery && (
            <p className="mt-4 text-sm text-muted-foreground">
              Найдено статей: {filteredArticles.length}
            </p>
          )}
        </div>

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 pb-4 border-b border-black/10">Избранное</h2>
          {filteredArticles.length > 0 && (
            <Card className="overflow-hidden border-black/10 hover:shadow-2xl transition-shadow duration-300">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-auto overflow-hidden">
                  <img
                    src={filteredArticles[0].image}
                    alt={filteredArticles[0].title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-semibold tracking-wider uppercase text-muted-foreground">
                      {filteredArticles[0].category}
                    </span>
                    <span className="text-xs text-muted-foreground">•</span>
                    <span className="text-xs text-muted-foreground">{filteredArticles[0].readTime}</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-4 leading-tight hover:text-muted-foreground transition-colors cursor-pointer">
                    {filteredArticles[0].title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {filteredArticles[0].excerpt}
                  </p>
                  <p className="text-sm text-muted-foreground">{filteredArticles[0].date}</p>
                </CardContent>
              </div>
            </Card>
          )}
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-8 pb-4 border-b border-black/10">Все статьи</h2>
          {filteredArticles.length === 0 ? (
            <div className="text-center py-20">
              <Icon name="FileText" size={48} className="mx-auto mb-4 text-muted-foreground" />
              <p className="text-xl text-muted-foreground">Статьи не найдены</p>
              <p className="text-sm text-muted-foreground mt-2">Попробуйте изменить поисковый запрос</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.slice(1).map((article) => (
                <Card
                  key={article.id}
                  className="overflow-hidden border-black/10 hover:shadow-xl transition-all duration-300 cursor-pointer group"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-semibold tracking-wider uppercase text-muted-foreground">
                        {article.category}
                      </span>
                      <span className="text-xs text-muted-foreground">•</span>
                      <span className="text-xs text-muted-foreground">{article.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 leading-tight group-hover:text-muted-foreground transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {article.excerpt}
                    </p>
                    <p className="text-xs text-muted-foreground">{article.date}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </section>
      </main>

      <footer className="border-t border-black/10 mt-20">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Минимал</h3>
              <p className="text-sm text-muted-foreground">© 2024 Все права защищены</p>
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                О проекте
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Контакты
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                RSS
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
