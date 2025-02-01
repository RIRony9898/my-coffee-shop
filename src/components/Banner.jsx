const Banner = () => {
  return (
    <div className="relative bg-[url('/assets/banner.jpg')] min-h-[600px] flex justify-center items-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-5xl font-bold">Welcome to My Coffee Shop</h1>
        <p className="text-lg mt-8">Explore the world best Coffees here</p>
      </div>
    </div>
  );
};

export default Banner;
