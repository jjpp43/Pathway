import { useInView } from "react-intersection-observer";
import FormCard from "./formcard"; // Assuming FormCard is a separate component

const SlidingFormCard = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Trigger only once when it enters the viewport
    threshold: 0.3, // Trigger when 30% of the component is visible
  });

  return (
    <div
      ref={ref}
      className="relative flex flex-col justify-between bg-[url('/background2.jpg')] bg-cover bg-center md:py-36 sm:py-24 py-16 px-4 md:px-48 sm:px-8 xs:px-4"
    >
      <div className="absolute inset-0 bg-white opacity-30"></div>

      {/* FormCard Section */}
      <div
        className={`transition-transform duration-1000 ease-out transform ${
          inView ? "animate-slideIn" : "translate-x-full opacity-50"
        }`}
      >
        <FormCard
          title="Is your school not listed?"
          description="Please let us know and we will work on it!"
        />
      </div>
    </div>
  );
};

export default SlidingFormCard;
