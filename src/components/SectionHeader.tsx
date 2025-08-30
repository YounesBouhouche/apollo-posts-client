import type { ReactNode } from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  trailing?: ReactNode;
}

export default function SectionHeader({ title, subtitle, trailing }: SectionHeaderProps) {
  return (
    <div className="text-center">
      <h2 className="font-display text-5xl md:text-6xl font-bold text-gray-800 mb-4">{title}</h2>
      {subtitle && (
        <p className="text-lg text-gray-600 mb-6">{subtitle}</p>
      )}
      <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"></div>
      {trailing && (
        <div className="mt-6">
          {trailing}
        </div>
      )}
    </div>
  );
}
