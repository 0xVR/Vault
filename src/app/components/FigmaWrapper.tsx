import { ReactNode } from 'react';

interface FigmaWrapperProps {
  children: ReactNode;
  maxWidth?: string;
}

export default function FigmaWrapper({ children, maxWidth = '430px' }: FigmaWrapperProps) {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full" style={{ maxWidth }}>
        {children}
      </div>
    </div>
  );
}
