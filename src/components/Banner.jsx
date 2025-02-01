const Banner = () => {
  return (
    <div className="relative bg-[url('/assets/banner.jpg')] min-h-[600px] flex justify-center items-center bg-cover bg-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <h2 className="text-3xl font-bold">Welcome to <br /> </h2>
        <h1 className="m-5 text-7xl font-bold">My Coffee Shop</h1>
        <p className="text-lg mt-8">Meet with your desire Coffees</p>
      </div>
    </div>
  );
};

export default Banner;
