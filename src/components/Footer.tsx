export const FooterComponent = () => {
  return (
    <div className="mx-auto max-w-2xl border-t-2 border-solid border-neutral-700 p-8 md:px-0">
      <p className="mb-1 text-3xl font-extrabold text-neutral-500">
        Piset Heang
      </p>
      <p className="text-lg font-light text-neutral-600">
        Full-stack Developer • {new Date().getFullYear()}
      </p>
    </div>
  );
};
