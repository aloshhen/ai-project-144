import { Shield, Trophy, Users, Zap, ChevronRight, Star, Target, TrendingUp, Calendar, Mail, Youtube, Twitter, ExternalLink, Activity, Award, BookOpen } from 'lucide-react'
import { motion } from 'framer-motion'
import { useRef } from 'react'

function App() {
  const heroesData = [
    { name: 'Anti-Mage', role: 'Carry', difficulty: 'Средняя', img: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&q=80' },
    { name: 'Invoker', role: 'Mid', difficulty: 'Высокая', img: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=400&q=80' },
    { name: 'Pudge', role: 'Support', difficulty: 'Средняя', img: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=400&q=80' },
    { name: 'Crystal Maiden', role: 'Support', difficulty: 'Низкая', img: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&q=80' },
    { name: 'Phantom Assassin', role: 'Carry', difficulty: 'Средняя', img: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=400&q=80' },
    { name: 'Rubick', role: 'Support', difficulty: 'Высокая', img: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&q=80' }
  ]

  const guides = [
    { title: 'Мастер-класс по фарму', author: 'Pro Player', views: '15K', icon: Target },
    { title: 'Продвинутая механика варда', author: 'Support God', views: '12K', icon: Shield },
    { title: 'Тайминги и контроль карты', author: 'Captain Pro', views: '18K', icon: Activity }
  ]

  const tournaments = [
    { name: 'The International 2024', date: '15-25 Октября', prize: '$40,000,000' },
    { name: 'DreamLeague Season 21', date: '5-10 Ноября', prize: '$500,000' },
    { name: 'ESL One Championship', date: '20-28 Ноября', prize: '$1,000,000' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-red-950/20 to-slate-950">
      {/* HEADER */}
      <header className="fixed top-0 w-full bg-slate-950/90 backdrop-blur-xl z-50 border-b border-red-900/30">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Shield className="w-10 h-10 text-red-600" />
            <span className="text-3xl font-black text-white tracking-tight">DOTA<span className="text-red-600">2</span></span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#heroes" className="text-gray-300 hover:text-red-500 transition-colors font-semibold">Герои</a>
            <a href="#guides" className="text-gray-300 hover:text-red-500 transition-colors font-semibold">Гайды</a>
            <a href="#tournaments" className="text-gray-300 hover:text-red-500 transition-colors font-semibold">Турниры</a>
            <a href="#subscribe" className="text-gray-300 hover:text-red-500 transition-colors font-semibold">Подписка</a>
          </div>
          <button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 py-2 rounded-lg font-bold transition-all transform hover:scale-105 shadow-lg shadow-red-600/50">
            Начать обучение
          </button>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1920&q=80" 
            alt="Dota 2" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-red-950/40 to-slate-950" />
        </div>
        <div className="relative z-10 container mx-auto text-center py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-red-600/20 backdrop-blur-sm border border-red-600/50 px-6 py-2 rounded-full mb-8">
              <Trophy className="w-5 h-5 text-red-500" />
              <span className="text-red-400 font-bold">Профессиональное обучение</span>
            </div>
            <h1 className="text-7xl md:text-9xl font-black text-white mb-6 tracking-tighter">
              МАСТЕР<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500">DOTA 2</span>
            </h1>
            <p className="text-2xl md:text-4xl text-red-400 mb-8 font-bold">
              Гайды от профи • Анонсы турниров • Актуальная мета
            </p>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Продвинутые стратегии, детальные разборы героев и эксклюзивные инсайты от топовых игроков. 
              Поднимай свой скилл на новый уровень с нашими профессиональными гайдами.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-10 py-5 rounded-xl text-lg font-bold transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-2xl shadow-red-600/50">
                Смотреть гайды
                <ChevronRight className="w-6 h-6" />
              </button>
              <button className="bg-white/10 hover:bg-white/20 text-white px-10 py-5 rounded-xl text-lg font-bold transition-all backdrop-blur-md border border-white/20 hover:border-red-500/50">
                Календарь турниров
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 px-6 bg-gradient-to-b from-transparent to-red-950/10">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-black text-red-500 mb-2">120+</div>
              <div className="text-gray-400 font-semibold">Героев в гайдах</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black text-red-500 mb-2">500+</div>
              <div className="text-gray-400 font-semibold">Видео уроков</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black text-red-500 mb-2">50K+</div>
              <div className="text-gray-400 font-semibold">Активных учеников</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black text-red-500 mb-2">24/7</div>
              <div className="text-gray-400 font-semibold">Обновления меты</div>
            </div>
          </div>
        </div>
      </section>

      {/* HEROES GALLERY */}
      <section id="heroes" className="py-24 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-16">
              <h2 className="text-6xl font-black text-white mb-4 tracking-tight">
                Галерея <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Героев</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Изучай детальные гайды по каждому герою с разбором механик, билдов и стратегий
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {heroesData.map((hero, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative bg-gradient-to-br from-slate-900 to-slate-950 rounded-2xl overflow-hidden border border-red-900/30 hover:border-red-600/70 transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-red-600/30"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img src={hero.img} alt={hero.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
                    <div className="absolute top-4 right-4 bg-red-600/90 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-bold text-white">
                      {hero.role}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-black text-white mb-2">{hero.name}</h3>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-gray-400">
                        <Target className="w-4 h-4" />
                        <span className="text-sm font-semibold">Сложность: {hero.difficulty}</span>
                      </div>
                      <button className="text-red-500 hover:text-red-400 transition-colors flex items-center gap-1 font-bold">
                        Гайд
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* GUIDES */}
      <section id="guides" className="py-24 px-6 bg-gradient-to-b from-red-950/10 to-transparent">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-16">
              <h2 className="text-6xl font-black text-white mb-4 tracking-tight">
                Топовые <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Гайды</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Эксклюзивные обучающие материалы от профессиональных игроков
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {guides.map((guide, index) => {
                const Icon = guide.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-slate-900 to-slate-950 p-8 rounded-2xl border border-red-900/30 hover:border-red-600/70 transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-red-600/20"
                  >
                    <div className="bg-gradient-to-br from-red-600/20 to-orange-600/20 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm border border-red-600/30">
                      <Icon className="w-10 h-10 text-red-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">{guide.title}</h3>
                    <p className="text-gray-400 mb-4">Автор: <span className="text-red-400 font-semibold">{guide.author}</span></p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-gray-400">
                        <Activity className="w-4 h-4" />
                        <span className="text-sm font-semibold">{guide.views} просмотров</span>
                      </div>
                      <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-bold transition-colors text-sm">
                        Смотреть
                      </button>
                    </div>
                  </motion.div>
                )
              })}
            </div>
            <div className="text-center mt-12">
              <button className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-10 py-4 rounded-xl text-lg font-bold transition-all transform hover:scale-105 shadow-lg shadow-red-600/50 flex items-center gap-2 mx-auto">
                <BookOpen className="w-5 h-5" />
                Все гайды
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TOURNAMENTS */}
      <section id="tournaments" className="py-24 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-16">
              <h2 className="text-6xl font-black text-white mb-4 tracking-tight">
                Анонсы <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Турниров</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Следи за крупнейшими киберспортивными событиями Dota 2
              </p>
            </div>
            <div className="max-w-4xl mx-auto space-y-6">
              {tournaments.map((tournament, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-r from-slate-900 to-slate-950 p-8 rounded-2xl border border-red-900/30 hover:border-red-600/70 transition-all hover:shadow-xl hover:shadow-red-600/20"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-gradient-to-br from-red-600 to-orange-600 w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Trophy className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{tournament.name}</h3>
                        <div className="flex items-center gap-4 text-gray-400">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span className="font-semibold">{tournament.date}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Award className="w-4 h-4" />
                            <span className="text-red-400 font-bold">{tournament.prize}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-bold transition-all transform hover:scale-105 flex items-center gap-2 justify-center">
                      Подробнее
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SUBSCRIBE */}
      <section id="subscribe" className="py-24 px-6 bg-gradient-to-b from-transparent via-red-950/10 to-transparent">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-slate-900 to-slate-950 p-12 rounded-3xl border border-red-900/30 shadow-2xl shadow-red-600/20"
          >
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center bg-gradient-to-br from-red-600 to-orange-600 w-20 h-20 rounded-2xl mb-6">
                <Mail className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-5xl font-black text-white mb-4 tracking-tight">
                Подписка на <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Новости</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Получай эксклюзивные гайды, анонсы турниров и актуальные обновления меты первым
              </p>
            </div>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Твой email..."
                className="flex-1 bg-slate-950 border border-red-900/30 focus:border-red-600/70 rounded-xl px-6 py-4 text-white placeholder-gray-500 outline-none transition-all"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-10 py-4 rounded-xl font-bold transition-all transform hover:scale-105 shadow-lg shadow-red-600/50 flex items-center justify-center gap-2"
              >
                Подписаться
                <ChevronRight className="w-5 h-5" />
              </button>
            </form>
            <p className="text-gray-500 text-sm text-center mt-6">
              Никакого спама. Только качественный контент про Dota 2.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 border-t border-red-900/30 py-12 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center space-x-3">
              <Shield className="w-8 h-8 text-red-600" />
              <span className="text-2xl font-black text-white">DOTA<span className="text-red-600">2</span></span>
            </div>
            <div className="flex items-center gap-6">
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                <Youtube className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="text-center text-gray-500 text-sm mt-8">
            © 2024 Dota 2 Pro Guides. Все права защищены. Не аффилирован с Valve Corporation.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App