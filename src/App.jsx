import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function App() {
  const zapLink = "https://wa.me/5521982260442"; // <-- Coloque seu número aqui!
   
  const produtos = [
  { 
    nome: "iDFace Max Premium", 
    desc: "Reconhecimento Facial de Alta Velocidade e Precisão", 
    img: "./img/idface.webp" 
  },
  { 
    nome: "iDAccess", 
    desc: "Controle de Acesso Biométrico e Proximidade Profissional", 
    img: "./img/idface-frontal.webp" 
  },
  { 
    nome: "iDBell", 
    desc: "Controlador de video e interfonia Profissional", 
    img: "./img/idbell-list.webp" 
  },
  { 
    nome: "Câmeras de Segurança", 
    desc: "Monitoramento Dentro e fora de Casa", 
    img: "./img/Dvr intelbras-600x600.png" 
  },
  { 
    nome: "Câmeras de Segurança", 
    desc: "Solução que cabe no seu bolso", 
    img: "./img/iCSee-A8.webp" 
  },
  { 
    nome: "iDLok", 
    desc: "Fechaduras ", 
    img: "./img/idlock-frente.webp" 
  },
  { 
    nome: "Catraca iDBlock Next", 
    desc: "soluções completas para seu Condominio e Academias ", 
    img: "./img/idblock-next-com-idface.webp" 
  },
  {
  nome: "Catraca iDBlock Next", 
    desc: "soluções completas para seu Comdominio e Academias ", 
    img: "./img/idblock-next-sem-idface.webp" 
  },
];
  
  // ... continue com os outros

  return (
    <div className="min-h-screen bg-[#121212] text-white font-sans antialiased">
      <div className="max-w-5xl mx-auto px-6 py-10">
        
        {/* Header Profissional */}
        <nav className="flex justify-between items-center mb-20 border-b border-white/5 pb-6">
          <div className="text-2xl font-black tracking-tighter uppercase">
            C.A SEGURANÇA ELETRONICA <span className="text-[#F05A22]">TECH</span>
          </div>
          <a href={zapLink} target="_blank" className="bg-green-600 hover:bg-green-500 hover:scale-105 transition-all px-6 py-3 rounded-full font-bold text-xs shadow-lg shadow-green-900/20">
            SOLICITAR ORÇAMENTO
          </a>
        </nav>

        {/* Seção Principal */}
        <header className="text-center mb-16">
          <span className="text-[#F05A22] font-bold tracking-widest text-sm uppercase mb-4 block">Especialista Control iD</span>
          <h2 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight leading-none">
            Segurança com <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F05A22] to-orange-400">Inteligência</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Instalação e configuração de sistemas de acesso de última geração para condomínios e empresas no Rio de Janeiro.
          </p>
        </header>

        {/* Carrossel de Produtos */}
        <div className="bg-[#1E1E1E] rounded-[2.5rem] p-4 md:p-12 shadow-2xl border border-white/5">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            autoplay={{ delay: 4000 }}
            pagination={{ clickable: true }}
            navigation={true}
            className="rounded-xl"
          >
            {produtos.map((p, i) => (
              <SwiperSlide key={i} className="text-center pb-14 pt-6 px-4">
                <div className="h-64 md:h-80 flex items-center justify-center mb-10">
                  <img src={p.img} alt={p.nome} className="max-h-full object-contain drop-shadow-[0_20px_40px_rgba(240,90,34,0.15)]" />
                </div>
                <h3 className="text-4xl font-black mb-3 tracking-tight">{p.nome}</h3>
                <p className="text-gray-400 text-lg italic max-w-md mx-auto">{p.desc}</p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Rodapé com o nome do seu projeto */}
        <footer className="mt-24 text-center border-t border-white/5 pt-12">
          <div className="text-gray-500 font-medium uppercase tracking-widest text-xs mb-2">Mantendo o foco no futuro</div>
          <p className="text-gray-400">Carlos Flores Tech & <span className="text-[#F05A22]">Projeto Ana</span> © 2026</p>
        </footer>
      </div>
    </div>
  );
}

export default App;