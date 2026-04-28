import { memo, type ReactNode } from 'react'; 

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  children: ReactNode; 
  onClick?: () => void; 
  className?: string;
}

const Button = memo(({ variant = 'primary', children, onClick, className = '' }: ButtonProps) => {
  let baseStyle = "px-6 py-2 font-medium transition-all duration-300 rounded-md text-sm md:text-base tracking-wide active:scale-95 " + className + " ";
  
  if (variant === 'primary') {
    baseStyle += "bg-primary text-white hover:opacity-90 shadow-sm";
  } else if (variant === 'secondary') {
    baseStyle += "bg-stone-200 text-stone-800 hover:bg-stone-300";
  } else if (variant === 'outline') {
    baseStyle += "border border-primary text-primary hover:bg-stone-50";
  }

  return (
    <button className={baseStyle} onClick={onClick}>
      {children}
    </button>
  );
});

export default Button;