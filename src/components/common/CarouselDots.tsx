import React from 'react';

interface CarouselDotsProps {
  total: number;
  activeIndex: number;
  onChange?: (index: number) => void;
  className?: string;
}

export const CarouselDots: React.FC<CarouselDotsProps> = ({
  total,
  activeIndex,
  onChange,
  className = '',
}) => {
  return (
    <div
      className={`carousel-dots ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        padding: '4px',
      }}
    >
      {Array.from({ length: total }).map((_, idx) => {
        const isActive = idx === activeIndex;
        return (
          <button
            key={idx}
            type="button"
            onClick={() => onChange?.(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            style={{
              padding: 0,
              border: 'none',
              background: isActive
                ? '#4f46e5'
                : 'rgba(199, 210, 254, 0.65)',
              width: isActive ? '20px' : '7px',
              height: '7px',
              borderRadius: '9999px',
              cursor: onChange ? 'pointer' : 'default',
              transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
              boxShadow: isActive ? '0 1px 4px rgba(79, 70, 229, 0.4)' : 'none',
            }}
          />
        );
      })}
    </div>
  );
};

export default CarouselDots;
