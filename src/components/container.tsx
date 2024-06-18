export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-auto min-h-screen w-full max-w-2xl px-8 md:px-0 md:py-16 lg:py-8">
      {children}
    </div>
  );
};
