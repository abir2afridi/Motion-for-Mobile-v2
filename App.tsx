import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WorkTheSystem from './components/WorkTheSystem';
import HighEndHeadStart from './components/HighEndHeadStart';
import BoomDone from './components/BoomDone';
import BetterDoneRight from './components/BetterDoneRight';
import AnyPlatform from './components/AnyPlatform';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <WorkTheSystem />
      <HighEndHeadStart />
      <BoomDone />
      <BetterDoneRight />
      <AnyPlatform />
      <Footer />
    </div>
  );
};

export default App;