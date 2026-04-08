interface BadgeProps {
  text: string;
}

const Badge = ({ text }: BadgeProps) => {
  return (
    <span className="inline-block bg-stone-200 text-stone-700 text-[10px] px-2 py-1 rounded-full uppercase tracking-wider font-bold">
      {text}
    </span>
  );
};

export default Badge;