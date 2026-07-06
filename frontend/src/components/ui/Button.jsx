export default function Button({
  children,
  ...props
}) {
  return (
    <button
      {...props}
      className="
        bg-blue-600
        hover:bg-blue-700
        transition
        text-white
        px-6
        py-3
        rounded-xl
        font-semibold
        cursor-pointer
      "
    >
      {children}
    </button>
  );
}