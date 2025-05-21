import Header from "@/components/Header";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Animation for sections
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".section-animate").forEach((section) => {
      observer.observe(section);
    });

    return () => {
      document.querySelectorAll(".section-animate").forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section
        id="inicio"
        className="gradient-bg min-h-screen flex items-center pt-16"
      >
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="md:w-1/2 section-animate">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Você se sente sobrecarregado(a) emocionalmente e não sabe por
                onde começar?
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
                Descubra como a psicoterapia online pode transformar sua rotina
                com acolhimento real, escuta ativa e estratégias práticas para o
                seu bem-estar emocional. Sinta-se compreendido(a), apoiado(a) e
                pronto(a) para evoluir no seu tempo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contato"
                  className="inline-flex items-center justify-center bg-white text-burnt-red hover:bg-off-white hover:text-burnt-red font-semibold px-8 py-6 rounded-lg text-lg transition-all shadow-lg"
                >
                  Agende uma Sessão
                </a>
                <a
                  href="#sobre"
                  className="inline-flex items-center justify-center bg-transparent text-white hover:bg-white/20 border border-white hover:text-white font-semibold px-8 py-6 rounded-lg text-lg"
                >
                  Conheça meu Trabalho
                </a>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center section-animate">
              <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden border-4 border-white/50 shadow-lg">
                <img
                  src="https://i.imgur.com/TE2A8YK.png"
                  alt="Psicóloga acolhedora"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 bg-off-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16 section-animate">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Sobre mim!
            </h2>
            <div className="w-24 h-1 bg-burnt-red mx-auto mb-8"></div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/3 section-animate">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <img
                  src="https://i.imgur.com/Sv3Wkil.png"
                  alt="Psicóloga"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
                  <div className="text-white">
                    <h3 className="text-2xl font-semibold">Daniela Victoria</h3>
                    <p className="text-white/80">CRP 01/28233</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-2/3 mt-8 md:mt-0 section-animate">
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                Olá! Sou Daniela Victoria, formada em Psicologia com foco em terapias
                comportamentais. Meu trabalho é baseado em acolhimento,
                dedicação e estratégias reais que fazem sentido na sua vida.
                Aqui, cada pessoa é única — e meu compromisso é te escutar,
                orientar e apoiar com todo o cuidado que você merece.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                <div className="bg-white p-4 rounded-lg shadow-md flex items-center gap-3">
                  <div className="bg-burnt-red/10 p-3 rounded-lg">
                    <svg
                      className="w-6 h-6 text-burnt-red"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <span className="font-medium">
                    Atendimentos de segunda a sábado
                  </span>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-md flex items-center gap-3">
                  <div className="bg-burnt-red/10 p-3 rounded-lg">
                    <svg
                      className="w-6 h-6 text-burnt-red"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <span className="font-medium">Sessões 100% online</span>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-md flex items-center gap-3">
                  <div className="bg-burnt-red/10 p-3 rounded-lg">
                    <svg
                      className="w-6 h-6 text-burnt-red"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                  </div>
                  <span className="font-medium">Suporte via WhatsApp</span>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-md flex items-center gap-3">
                  <div className="bg-burnt-red/10 p-3 rounded-lg">
                    <svg
                      className="w-6 h-6 text-burnt-red"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                      />
                    </svg>
                  </div>
                  <span className="font-medium">Atividades personalizadas</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="diferenciais" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16 section-animate">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Diferenciais
            </h2>
            <div className="w-24 h-1 bg-burnt-red mx-auto mb-8"></div>
            <p className="text-lg text-gray-700">
              O que torna meu atendimento especial e adequado para suas
              necessidades
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg
                    className="w-8 h-8 text-burnt-red"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                ),
                title: "Sessões 100% online",
                description:
                  "Atendimento de qualidade no conforto do seu lar, economizando tempo e deslocamento.",
              },
              {
                icon: (
                  <svg
                    className="w-8 h-8 text-burnt-red"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                ),
                title: "Ligações mensais sob demanda",
                description:
                  "Suporte adicional quando precisar, com chamadas de acolhimento em momentos difíceis.",
              },
              {
                icon: (
                  <svg
                    className="w-8 h-8 text-burnt-red"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                ),
                title: "Atividades práticas personalizadas",
                description:
                  "Exercícios e reflexões adaptados ao seu caso, para aplicar no dia a dia e potencializar resultados.",
              },
              {
                icon: (
                  <svg
                    className="w-8 h-8 text-burnt-red"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                    />
                  </svg>
                ),
                title: "Resposta rápida via WhatsApp",
                description:
                  "Comunicação facilitada para dúvidas pontuais e suporte entre sessões.",
              },
              {
                icon: (
                  <svg
                    className="w-8 h-8 text-burnt-red"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                ),
                title: "Acompanhamento contínuo",
                description:
                  "Evolução monitorada com feedbacks constantes e adaptação do processo terapêutico.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-off-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-burnt-red section-animate"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-burnt-red/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-center mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contato" className="py-20 gradient-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center section-animate">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Vamos conversar?
            </h2>
            <p className="text-xl text-white/90 mb-10">
              Escolha seu caminho e dê o primeiro passo para o seu bem-estar
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <a
                href="https://wa.me/5511914506603?text=Ol%C3%A1%20Daniela%2C%20Vim%20do%20Instagram%20e%20queria%20agendar%20uma%20consulta%20com%20voc%C3%AA%21"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-burnt-red hover:bg-off-white hover:text-burnt-red font-semibold px-6 py-8 rounded-lg text-lg flex flex-col items-center gap-3 transition-all shadow-lg"
              >
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path
                    d="M11.998 0C5.379 0 0 5.379 0 12c0 2.657.875 5.11 2.351 7.093L.813 23.584l4.63-1.47c1.891 1.292 4.164 2.047 6.603 2.047C18.618 24.16 24 18.782 24 12.16 24 5.538 18.62.16 11.998.16zm0 22.057c-2.444 0-4.71-.756-6.378-2.047l-.456-.273-4.725 1.505 1.531-4.473-.344-.486C.606 15.345 0 12.828 0 12.16 0 5.538 5.38 0 11.998 0 18.618 0 23.998 5.378 23.998 11.998c0 6.623-5.38 12.202-12 12.202z"
                    fillRule="evenodd"
                  />
                </svg>
                <span>Agendar atendimento</span>
              </a>

              <a
                href="https://www.instagram.com/victoriiia_011/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-burnt-red hover:bg-off-white hover:text-burnt-red font-semibold px-6 py-8 rounded-lg text-lg flex flex-col items-center gap-3 transition-all shadow-lg"
              >
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                </svg>
                <span>Me acompanhe por lá</span>
              </a>

              <a
                href="https://chat.whatsapp.com/Bgegij8fddUHKFFCO5mFnE"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-burnt-red hover:bg-off-white hover:text-burnt-red font-semibold px-6 py-8 rounded-lg text-lg flex flex-col items-center gap-3 transition-all shadow-lg pulse-button"
              >
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm-1-9c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm5 9h-2v-2h-2V9h2v2h2v6z" />
                </svg>
                <span>Entrar na Comunidade de Saúde Mental</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-semibold mb-2">PsicoAcolhe</h3>
              <p className="text-white/70">
                Cuidando da sua saúde mental com carinho e profissionalismo
              </p>
            </div>

            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                </svg>
              </a>
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path
                    d="M11.998 0C5.379 0 0 5.379 0 12c0 2.657.875 5.11 2.351 7.093L.813 23.584l4.63-1.47c1.891 1.292 4.164 2.047 6.603 2.047C18.618 24.16 24 18.782 24 12.16 24 5.538 18.62.16 11.998.16zm0 22.057c-2.444 0-4.71-.756-6.378-2.047l-.456-.273-4.725 1.505 1.531-4.473-.344-.486C.606 15.345 0 12.828 0 12.16 0 5.538 5.38 0 11.998 0 18.618 0 23.998 5.378 23.998 11.998c0 6.623-5.38 12.202-12 12.202z"
                    fillRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/20 text-center text-white/60 text-sm">
            <p>
              &copy; {new Date().getFullYear()} PsicoAcolhe. Todos os direitos
              reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
