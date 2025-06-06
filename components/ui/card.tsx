export function Card({ children }) {
  return <div className='border rounded-xl bg-white'>{children}</div>;
}

export function CardContent({ children, className }) {
  return <div className={className}>{children}</div>;
}