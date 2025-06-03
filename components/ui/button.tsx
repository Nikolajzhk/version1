export function Button({ children, ...props }) {
  return <button {...props} className='bg-indigo-600 text-white p-3 rounded-lg'>{children}</button>;
}