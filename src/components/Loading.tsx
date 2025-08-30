interface LoadingProps {
  text?: string;
}

export default function Loading({ text = "Loading amazing content..." }: LoadingProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
        <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-r-purple-600 rounded-full animate-spin animation-delay-75"></div>
      </div>
      <p className="mt-6 text-lg text-gray-600 font-medium">{text}</p>
    </div>
  );
}
