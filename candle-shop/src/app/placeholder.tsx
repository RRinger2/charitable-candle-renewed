export default function PlaceholderImage({ name }: { name: string }) {
  return (
    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
      <span className="text-gray-500 text-sm">{name}</span>
    </div>
  );
} 