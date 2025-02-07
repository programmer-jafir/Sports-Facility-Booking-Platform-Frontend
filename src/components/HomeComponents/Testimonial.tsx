
const Testimonial = () => {
  const data = [
    {
      "name": "John Doe",
      "testimonial": "This product has helped my team be more productive.",
      "img": "https://images.pexels.com/photos/713520/pexels-photo-713520.jpeg",
    },
    {
      "name": "Devel Doe",
      "testimonial": "This product has helped my team be more productive.",
      "img": "https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg",
    },
    {
      "name": "Jack Doe",
      "testimonial": "This product has helped my team be more productive.",
      "img": "https://images.pexels.com/photos/819530/pexels-photo-819530.jpeg",
    },
  ]
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-secondary">What Our Clients Say</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-14">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-blue-100 rounded-lg shadow-md p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105"
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-16 h-16 rounded-full mb-4"
            />
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <p className="text-gray-700">"{item.testimonial}"</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;