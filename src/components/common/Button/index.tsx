interface ButtonProps {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export const Button = ({ 
  variant = 'primary', 
  children, 
  onClick,
  className = ''
}: ButtonProps) => {
  const baseStyles = "px-8 py-4 rounded-lg font-bold transition-all";
  const variants = {
    primary: "bg-primary-500 hover:bg-primary-600 text-white",
    secondary: "bg-secondary-800 hover:bg-secondary-700 text-white"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};