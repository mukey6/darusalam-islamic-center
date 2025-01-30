import React from 'react'

function Hero() {
  return (
    <div className="relative min-h-screen bg-mosque-background">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-10" />
      <div className="container relative mx-auto px-4 py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-up">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-500 to-mosque-dscolor bg-clip-text text-transparent">
              Welcome to<br /> Darusalam Islamic Center
            </h1>
            <p className="text-xl text-mosque-text/80">
              A place of worship, learning, and community gathering
            </p>
            <button className="bg-mosque-primary text-white px-8 py-3 rounded-lg hover:bg-mosque-primary/90 transition-colors">
              Join Our Community
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero