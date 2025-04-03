import React, { useState } from 'react';
import { MessageCircle, Star, Send } from 'lucide-react';
import ChannelChat from '../components/ChannelChat';

interface Channel {
  id: number;
  name: string;
  image: string;
  description: string;
  subscribers: number;
  rating: number;
  messages?: Message[];
}

interface Message {
  id: number;
  user: {
    name: string;
    image: string;
  };
  text: string;
  timestamp: string;
}

export default function Channels() {
  const [selectedChannel, setSelectedChannel] = useState<Channel | null>(null);
  const [messageText, setMessageText] = useState('');
  const [showChat, setShowChat] = useState(false);

  const channels: Channel[] = [
    {
      id: 1,
      name: "Expert Pronos",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100",
      description: "Analyses détaillées et pronostics de football",
      subscribers: 1250,
      rating: 4.8,
      messages: [
        {
          id: 1,
          user: {
            name: "Expert Pronos",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100",
          },
          text: "Bonjour à tous ! Voici mon analyse pour le match PSG vs Barcelone ce soir...",
          timestamp: "14:30"
        },
        {
          id: 2,
          user: {
            name: "Jean D.",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100",
          },
          text: "Merci pour l'analyse ! Que pensez-vous des corners ?",
          timestamp: "14:35"
        }
      ]
    },
    {
      id: 2,
      name: "Top Tipster",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100",
      description: "Spécialiste des paris sportifs",
      subscribers: 980,
      rating: 4.6
    },
    {
      id: 3,
      name: "Football Tips",
      image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=100",
      description: "Les meilleurs pronostics football",
      subscribers: 750,
      rating: 4.5
    }
  ];

  const handleChannelSelect = (channel: Channel) => {
    setSelectedChannel(channel);
    setShowChat(true);
  };

  return (
    <div className="flex h-[calc(100vh-180px)] gap-4">
      {/* Channels List */}
      <div className="w-full md:w-1/3 bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-4 border-b">
          <h2 className="text-xl font-bold">Canaux</h2>
        </div>
        <div className="overflow-y-auto h-[calc(100%-60px)]">
          {channels.map(channel => (
            <div
              key={channel.id}
              onClick={() => handleChannelSelect(channel)}
              className={`p-4 flex items-center gap-4 hover:bg-gray-50 cursor-pointer transition-colors ${
                selectedChannel?.id === channel.id ? 'bg-gray-50' : ''
              }`}
            >
              <img
                src={channel.image}
                alt={channel.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold truncate">{channel.name}</h3>
                <p className="text-sm text-gray-500 truncate">{channel.description}</p>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <MessageCircle className="h-4 w-4" />
                  <span>{channel.subscribers}</span>
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span>{channel.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Window */}
      {selectedChannel && showChat && (
        <ChannelChat
          channelId={selectedChannel.id.toString()}
          channelName={selectedChannel.name}
          isOpen={showChat}
          onClose={() => setShowChat(false)}
        />
      )}
    </div>
  );
}