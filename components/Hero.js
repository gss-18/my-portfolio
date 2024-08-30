import Particles from 'react-tsparticles';

export default function Hero() {
  return (
    <div className="relative h-screen flex items-center justify-center bg-black">
      <Particles
        id="tsparticles"
        options={{
          background: {
            
          },
          particles: {
            number: { value: 100 },
            size: { value: 3 },
            move: { speed: 1 },
            color: { value: "#ffffff" },
            line_linked: { color: "#ffffff" },
          },
        }}
      />
      <div className="absolute text-center text-white z-10">
        <h1 className="text-5xl font-bold text-white animate-fadeIn">
          Trivikram Gummaraj Shivakumar Sridevi
        </h1>
        <p className="text-xl text-gray-200 mt-4 animate-slideUp">
          Aspiring Data Scientist & Full Stack Developer
        </p>
      </div>
    </div>
  );
}
