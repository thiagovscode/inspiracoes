import React from 'react';
import { pageConfig } from './config';

function App() {
  return (
    <div className="min-h-screen bg-[#FAF9F6] py-16 px-4 sm:px-6 lg:px-8 font-sans selection:bg-stone-200">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-20 space-y-4">
          <h1 className="text-4xl md:text-6xl font-light text-stone-800 tracking-tight">
            {pageConfig.title}
          </h1>
          <p className="text-lg md:text-xl text-stone-500 font-light max-w-2xl mx-auto">
            {pageConfig.subtitle}
          </p>
          <div className="w-16 h-px bg-stone-300 mx-auto mt-8"></div>
        </header>

        <main className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {pageConfig.eventDetails && (
            <div className="md:col-span-2 group relative overflow-hidden rounded-2xl bg-stone-100 aspect-[2/1] md:aspect-[3/1] flex flex-col justify-end shadow-sm hover:shadow-xl transition-all duration-500">
              <div className="absolute inset-0 w-full h-full">
                <img 
                  src={pageConfig.eventDetails.image} 
                  alt={pageConfig.eventDetails.title}
                  className="w-full h-full object-cover transition-transform duration-700 md:group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10 opacity-100 md:opacity-80 md:group-hover:opacity-90 transition-opacity duration-500"></div>
              </div>
              
              <div className="relative p-6 md:p-8 z-10 w-full flex flex-col justify-end h-full">
                <div className="transform transition-transform duration-500 mt-auto">
                  <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-[10px] md:text-xs text-white/90 uppercase tracking-wider mb-2 md:mb-3">
                    Cerimônia & Festa
                  </span>
                  <h2 className="text-2xl md:text-4xl font-medium text-white mb-2">
                    {pageConfig.eventDetails.title}
                  </h2>
                  <div className="flex flex-col md:flex-row gap-4 md:gap-6 text-stone-200 font-light text-sm md:text-lg mt-2 items-start md:items-center">
                    <div>
                      <p className="flex items-center gap-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                        {pageConfig.eventDetails.location}
                      </p>
                      <p className="text-xs md:text-sm text-stone-300 ml-7 mt-1 opacity-80">
                        {pageConfig.eventDetails.address}
                      </p>
                    </div>
                    <p className="flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      {pageConfig.eventDetails.time}
                    </p>
                  </div>
                  
                  <div className="flex gap-3 mt-5">
                    <a href={pageConfig.eventDetails.mapLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-xs text-white transition-colors backdrop-blur-sm">
                      Google Maps
                    </a>
                    <a href={pageConfig.eventDetails.wazeLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-xs text-white transition-colors backdrop-blur-sm">
                      Waze
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {pageConfig.links.map((link) => (
            <a 
              key={link.id} 
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl bg-stone-100 aspect-square md:aspect-[4/3] flex flex-col justify-end shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
            >
              <div className="absolute inset-0 w-full h-full">
                <img 
                  src={link.image} 
                  alt={link.title}
                  className="w-full h-full object-cover transition-transform duration-700 md:group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10 opacity-100 md:opacity-80 md:group-hover:opacity-90 transition-opacity duration-500"></div>
              </div>
              
              <div className="relative p-6 md:p-8 z-10 w-full flex flex-col justify-end h-full">
                <div className="transform transition-transform duration-500 md:group-hover:-translate-y-2 mt-auto">
                  <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-[10px] md:text-xs text-white/90 uppercase tracking-wider mb-2 md:mb-3">
                    Inspiração
                  </span>
                  <h2 className="text-2xl md:text-3xl font-medium text-white mb-2">
                    {link.title}
                  </h2>
                  <p className="text-stone-200 font-light text-sm md:text-base opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 delay-100 h-auto md:h-0 md:group-hover:h-auto mt-2 md:mt-0 md:group-hover:mt-2">
                    {link.description}
                  </p>
                </div>
                
                <div className="hidden md:flex absolute bottom-8 right-8 w-10 h-10 bg-white rounded-full items-center justify-center transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 shadow-lg delay-75">
                  <svg className="w-5 h-5 text-stone-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </main>
        
        <footer className="mt-24 text-center text-stone-400 text-sm font-light">
          <p>Feito com ♥ para o nosso grande dia</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
