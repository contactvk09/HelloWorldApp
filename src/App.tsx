import { useState, useEffect } from 'react'

function App() {
  const [visible, setVisible] = useState(false)
  const [emoji, setEmoji] = useState('👋')

  useEffect(() => {
    setVisible(true)
    const emojis = ['👋', '🌍', '✨', '🚀', '💫', '🎉']
    let index = 0
    const interval = setInterval(() => {
      index = (index + 1) % emojis.length
      setEmoji(emojis[index])
    }, 1500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 flex items-center justify-center p-6 overflow-hidden relative">
      {/* Animated background orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>

      {/* Main content */}
      <div
        className={`relative z-10 text-center transition-all duration-1000 ease-out ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {/* Emoji */}
        <div className="text-8xl mb-8 animate-bounce">
          {emoji}
        </div>

        {/* Hello World text */}
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 tracking-tight">
          Hello, <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400">World!</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-purple-200 mb-8 font-light">
          Welcome to your new React app ✨
        </p>

        {/* Card */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 max-w-md mx-auto border border-white/20 shadow-2xl">
          <p className="text-white/80 text-lg leading-relaxed">
            Built with <span className="text-cyan-400 font-semibold">React</span>,{' '}
            <span className="text-blue-400 font-semibold">Vite</span> &{' '}
            <span className="text-teal-400 font-semibold">Tailwind CSS</span>
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <span className="px-3 py-1 bg-white/10 rounded-full text-sm text-white/70 border border-white/10">
              TypeScript
            </span>
            <span className="px-3 py-1 bg-white/10 rounded-full text-sm text-white/70 border border-white/10">
              Tailwind
            </span>
            <span className="px-3 py-1 bg-white/10 rounded-full text-sm text-white/70 border border-white/10">
              Vite
            </span>
          </div>
        </div>

        {/* Footer */}
        <p className="mt-12 text-purple-300/60 text-sm">
          Start editing <code className="bg-white/10 px-2 py-1 rounded text-purple-200">src/App.tsx</code> to make changes
        </p>
      </div>
    </div>
  )
}

export default App
