
import { TeamColor } from '@/types/team';

export const teamColors: Record<TeamColor, string> = {
  red: '#FF4136',
  blue: '#0074D9',
  green: '#2ECC40',
  gold: '#FFDC00',
  purple: '#B10DC9',
  none: '#85144b',
  neutral: '#AAAAAA',
  silver: '#C0C0C0',
  bronze: '#CD7F32'
};

export const teamHexColors: Record<TeamColor, string> = {
  red: '#FF4136',
  blue: '#0074D9',
  green: '#2ECC40',
  gold: '#FFDC00',
  purple: '#B10DC9',
  none: '#85144b',
  neutral: '#AAAAAA',
  silver: '#C0C0C0',
  bronze: '#CD7F32'
};

export const teamTailwindColors: Record<TeamColor, string> = {
  red: 'text-red-500',
  blue: 'text-blue-500',
  green: 'text-green-500',
  gold: 'text-yellow-500',
  purple: 'text-purple-500',
  none: 'text-gray-500',
  neutral: 'text-gray-400',
  silver: 'text-gray-300',
  bronze: 'text-amber-700'
};

export const teamTailwindBgColors: Record<TeamColor, string> = {
  red: 'bg-red-500',
  blue: 'bg-blue-500',
  green: 'bg-green-500',
  gold: 'bg-yellow-500',
  purple: 'bg-purple-500',
  none: 'bg-gray-500',
  neutral: 'bg-gray-400',
  silver: 'bg-gray-300',
  bronze: 'bg-amber-700'
};
