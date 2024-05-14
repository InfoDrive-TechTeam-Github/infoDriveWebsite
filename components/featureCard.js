function FeatureCard({ icon, title, description }) {
  return (
    <div className="group relative rounded-xl border border-gray-800 p-4 bg-white text-gray-800 font-semibold py-2 px-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
      <span className="inline-block rounded-lg p-3">
        <div className="bg-red-400 rounded-lg p-3">{icon}</div>
      </span>
      <h2 className="mt-2 font-semibold text-base sm:text-lg">{title}</h2>
      <p className="sm:mt-1 block text-sm sm:text-base text-gray-600">
        {description}
      </p>
    </div>
  );
}

export default FeatureCard;
