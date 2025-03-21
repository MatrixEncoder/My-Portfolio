import React from 'react';
import { Sparkles } from 'lucide-react';
import { GradientText } from './ui/GradientText';

export default function About() {
  return (
    <section id="about" className="relative py-20 bg-black overflow-hidden">
      {/* Animated light effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-cyan-500/20 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-purple-500/20 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-blue-500/20 rounded-full filter blur-3xl animate-pulse" />
      </div>

      {/* Grid background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Sparkles className="inline-block h-12 w-12 text-cyan-500 animate-pulse mb-4" />
          <h2 className="text-3xl font-bold mb-8">
            <GradientText>About Me</GradientText>
          </h2>
        </div>

        <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 shadow-2xl hover:border-cyan-500/50 transition-all duration-500">
  <p className="text-lg leading-relaxed text-gray-300 space-y-6">
    My name is <span className="font-extrabold text-3xl tracking-wide">
      <GradientText className="animate-pulse">SURYANSH SRIVASTAVA</GradientText>
    </span>. My job is to break things before the bad guys do.
    <br /><br />
    I'm the guy who can do it for you: <span className="text-cyan-400 font-semibold italic">Penetration Testing</span>,{' '}
    <span className="text-purple-400 font-semibold italic">building Cybersecurity tools (example SHASTRA) </span>—and if that's your thing,{' '}
    <span className="text-blue-400 font-semibold italic">AI-driven Security Solutions</span>. Damn near anything within reason! (💵💰😼)
    <br /><br />
    Currently, I’m diving deep into <span className="text-cyan-400 font-bold uppercase">Offensive Security</span> and{' '}
    <span className="text-purple-400 font-bold uppercase">AI in Cybersecurity</span>, building{' '}
    <span className="text-blue-400 font-bold uppercase">AI-powered Defense Systems</span> to keep the internet a safer place. Before this, I completed an{' '}
    <span className="text-cyan-400 font-semibold">Ethical Hacking</span> training, reported my first vulnerability, and tackled some of the toughest{' '}
    <span className="text-purple-400 font-semibold">Web Security Academy</span> labs.
    <br /><br />
    In the past, I’ve been a <span className="text-cyan-400 font-semibold underline">Hackathon Finalist</span>, an{' '}
    <span className="text-purple-400 font-semibold underline">AI Enthusiast</span> <span className="text-gray-400">(which I still am ;] )</span> and the guy who set up his own{' '}
    <span className="text-blue-400 font-semibold underline">Kali Linux Lab</span> just for fun.
    <br /><br />
    When I’m not breaking into systems <span className="text-gray-400">(ethically, of course)</span>, you’ll find me <span className="font-semibold text-cyan-400">playing games</span> or <span className="font-semibold text-purple-400">watching thriller movies</span>.
    <br /><br />
    <span className="text-gray-300 text-xl font-bold tracking-wide">My ultimate goal?</span>
    <br /><br />
    <span className="text-cyan-400 font-bold text-xl tracking-wide">Fusing</span>: <span className="text-cyan-400 font-bold">Machine Learning</span> & <span className="text-purple-400 font-bold">AI</span> into <span className="text-blue-400 font-bold">Cybersecurity</span>—because the future of security is <span className="italic font-semibold text-gray-300">smarter, not just stronger.</span>
  </p>
</div>



        {/* Decorative elements */}
        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full blur-sm" />
      </div>
    </section>
  );
}