'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Phone, Mail, MessageCircle, MessageSquare, X, Send, User } from 'lucide-react';
import Link from 'next/link';

interface Message {
  id: string;
  text: string;
  sender: 'bot' | 'user';
  timestamp: Date;
}

export const FloatingContact = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [hasInteracted, setHasInteracted] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Load messages from localStorage on mount
  useEffect(() => {
    const savedMessages = localStorage.getItem('chatMessages');
    const savedHasInteracted = localStorage.getItem('chatHasInteracted');
    
    if (savedMessages) {
      try {
        const parsed = JSON.parse(savedMessages);
        // Convert string timestamps back to Date objects
        const hydratedMessages = parsed.map((msg: any) => ({
          ...msg,
          timestamp: new Date(msg.timestamp)
        }));
        setMessages(hydratedMessages);
      } catch (e) {
        console.error('Failed to parse chat messages', e);
      }
    }

    if (savedHasInteracted) {
      setHasInteracted(JSON.parse(savedHasInteracted));
    }
  }, []);

  // Save messages to localStorage whenever they change
  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem('chatMessages', JSON.stringify(messages));
    }
  }, [messages]);

  // Save interaction state
  useEffect(() => {
    localStorage.setItem('chatHasInteracted', JSON.stringify(hasInteracted));
  }, [hasInteracted]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!hasInteracted && !isOpen) {
      // Initial greeting when opening for the first time
      setTimeout(() => {
        addBotMessage("Moin! 👋 Willkommen bei Happy Garten. Ich bin Ihr digitaler Assistent.");
      }, 500);
      setTimeout(() => {
        addBotMessage("Verraten Sie mir kurz Ihren Namen und wie wir Ihnen helfen können? (z.B. Angebot für Lüftungsreinigung)");
      }, 1500);
      setHasInteracted(true);
    }
  };

  const addBotMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: 'bot',
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, newMessage]);
  };

  const handleSendMessage = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    const userMsg: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');

    // Simple bot response simulation
    setTimeout(() => {
      addBotMessage("Vielen Dank! Wir haben Ihre Anfrage erhalten. Einer unserer Experten wird sich schnellstmöglich bei Ihnen melden.");
    }, 1000);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end gap-4">
      {/* Chat Window - Positioned to the left of the buttons */}
      {isOpen && (
        <div className="bg-white rounded-2xl shadow-2xl w-80 sm:w-96 border border-gray-200 overflow-hidden flex flex-col h-[500px] animate-in slide-in-from-bottom-10 fade-in duration-300 origin-bottom-right">
          {/* Header */}
          <div className="bg-primary p-4 flex justify-between items-center text-white">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <User className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-sm">Happy Garten Support</h3>
                <p className="text-xs text-white/80">Antwortet sofort</p>
              </div>
            </div>
            <button onClick={toggleChat} className="text-white/80 hover:text-white transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 bg-gray-50 space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                    msg.sender === 'user'
                      ? 'bg-primary text-white rounded-tr-none'
                      : 'bg-white text-gray-800 border border-gray-200 rounded-tl-none shadow-sm'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form onSubmit={handleSendMessage} className="p-3 bg-white border-t border-gray-100 flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ihre Nachricht..."
              className="flex-1 bg-gray-100 border-0 rounded-full px-4 py-2 text-sm focus:ring-2 focus:ring-primary/50 outline-none"
            />
            <button
              type="submit"
              disabled={!inputValue.trim()}
              className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="w-4 h-4 ml-0.5" />
            </button>
          </form>
        </div>
      )}

      {/* Floating Buttons Stack */}
      <div className="flex flex-col gap-3 items-center">
        {/* WhatsApp */}
        <Link
          href="https://wa.me/4940123456789"
          target="_blank"
          className="w-12 h-12 bg-[#25D366] text-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-200 group relative"
          aria-label="WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="absolute right-full mr-3 bg-gray-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            WhatsApp
          </span>
        </Link>

        {/* Phone */}
        <Link
          href="tel:+4940123456789"
          className="w-12 h-12 bg-blue-600 text-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-200 group relative"
          aria-label="Anrufen"
        >
          <Phone className="w-5 h-5" />
          <span className="absolute right-full mr-3 bg-gray-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Anrufen
          </span>
        </Link>

        {/* Email */}
        <Link
          href="mailto:info@happy-garten.de"
          className="w-12 h-12 bg-gray-700 text-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-200 group relative"
          aria-label="E-Mail schreiben"
        >
          <Mail className="w-5 h-5" />
          <span className="absolute right-full mr-3 bg-gray-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            E-Mail
          </span>
        </Link>

        {/* Main Chat Toggle */}
        <button
          onClick={toggleChat}
          className={`w-14 h-14 rounded-full shadow-xl flex items-center justify-center transition-all duration-300 ${
            isOpen ? 'bg-gray-200 text-gray-600 rotate-90' : 'bg-primary text-white hover:scale-105'
          }`}
          aria-label="Chat öffnen"
        >
          {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-7 h-7" />}
        </button>
      </div>
    </div>
  );
};
