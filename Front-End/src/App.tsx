import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { TechStack } from './components/TechStack'


function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
