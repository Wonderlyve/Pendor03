import React, { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { Team } from '../data/teams';

interface TeamSelectProps {
  teams: Team[];
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  excludeTeamId?: string;
}

export default function TeamSelect({ teams, value, onChange, placeholder, excludeTeamId }: TeamSelectProps) {
  const [search, setSearch] = useState('');
  const [showCustomInput, setShowCustomInput] = useState(false);
  const [customTeam, setCustomTeam] = useState('');

  const selectedTeam = teams.find(team => team.id === value);

  const filteredTeams = useMemo(() => {
    if (!search) return teams;
    const searchLower = search.toLowerCase();
    return teams.filter(team => 
      team.name.toLowerCase().includes(searchLower) ||
      team.league.toLowerCase().includes(searchLower)
    );
  }, [teams, search]);

  const handleTeamSelect = (teamId: string) => {
    onChange(teamId);
    setSearch('');
  };

  const handleCustomTeamSubmit = () => {
    if (customTeam.trim()) {
      onChange(customTeam.trim());
      setShowCustomInput(false);
      setCustomTeam('');
    }
  };

  return (
    <div className="relative">
      {!showCustomInput ? (
        <div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={selectedTeam ? selectedTeam.name : placeholder}
              className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-lg text-sm"
              onFocus={() => setSearch('')}
            />
          </div>
          
          {search && (
            <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
              {filteredTeams.length > 0 ? (
                <>
                  {filteredTeams.map((team) => {
                    if (team.id === excludeTeamId) return null;
                    return (
                      <button
                        key={team.id}
                        onClick={() => handleTeamSelect(team.id)}
                        className={`w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center space-x-2 ${
                          team.id === value ? 'bg-blue-50' : ''
                        }`}
                      >
                        <span className="font-medium">{team.name}</span>
                        <span className="text-sm text-gray-500">({team.league})</span>
                      </button>
                    );
                  })}
                </>
              ) : (
                <div className="p-2">
                  <button
                    onClick={() => {
                      setShowCustomInput(true);
                      setCustomTeam(search);
                    }}
                    className="w-full text-left px-4 py-2 text-blue-600 hover:bg-blue-50 rounded"
                  >
                    Ajouter "{search}" comme équipe personnalisée
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      ) : (
        <div className="flex gap-2">
          <input
            type="text"
            value={customTeam}
            onChange={(e) => setCustomTeam(e.target.value)}
            placeholder="Nom de l'équipe..."
            className="flex-1 rounded-lg border border-gray-300 p-2 text-sm"
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                handleCustomTeamSubmit();
              }
            }}
            autoFocus
          />
          <button
            onClick={handleCustomTeamSubmit}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition-colors"
          >
            Ajouter
          </button>
          <button
            onClick={() => {
              setShowCustomInput(false);
              setCustomTeam('');
            }}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg text-sm hover:bg-gray-300 transition-colors"
          >
            Annuler
          </button>
        </div>
      )}
    </div>
  );
}