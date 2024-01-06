const Footer = () => {
  return (
    <div className="max-w-3xl mx-auto border-solid border-t-2 border-neutral-700 pt-8 pb-16 mt-8 px-8 md:px-0">
      <p className="text-3xl font-extrabold text-neutral-500 mb-1">
        Piset Heang
      </p>
      <p className="text-lg font-light text-neutral-600">
        Full-stack Developer • {new Date().getFullYear()}
      </p>
    </div>
  );
};

export default Footer;
