import { Shield, Brain, Network, Bot, Lock, Eye, Search } from 'lucide-react';
import type { Project } from '../types/project';

export const projects: Project[] = [
  {
    title: "Password Manager & Strength Checker",
    description: "Secure password management and strength analysis tool built with Python-JSON",
    icon: Lock,
    color: "cyan",
    link: "https://github.com/MatrixEncoder/PassCheck"
  },
  
  {
    title: "AI-Powered Network Guardian",
    description: "Intelligent network monitoring and protection system using Python and Streamlit",
    icon: Eye,
    color: "purple",
    link: "https://github.com/MatrixEncoder/AI-Network-Guardian"
  },
  
  {
    title: "SHASTRA",
    description: "Source code and log analyzer that detects vulnerabilities like SQL Injection, XSS, exposed secrets, and suspicious activities using regex patterns",
    icon: Search,
    color: "cyan",
    link: "https://shastra.streamlit.app"
  }
] as const;