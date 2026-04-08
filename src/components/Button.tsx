interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  children: any; 
  onClick?: any; 
}

const Button = ({ variant = 'primary', children, onClick }: ButtonProps) => {
  
  let baseStyle = "px-6 py-2 font-medium transition duration-300 rounded-md text-sm tracking-wide ";
  
  
  if (variant === 'primary') {
    baseStyle += "bg-rose-600 text-white hover:bg-rose-700 shadow-sm";
  } else if (variant === 'secondary') {
    baseStyle += "bg-stone-200 text-stone-800 hover:bg-stone-300";
  } else if (variant === 'outline') {
    baseStyle += "border border-rose-600 text-rose-600 hover:bg-rose-50";
  }

  return (
    <button className={baseStyle} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;