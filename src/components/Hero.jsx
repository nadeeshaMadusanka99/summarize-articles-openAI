import logo from "../assets/logo-created.svg";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="w-full flex justify-between items-center mb-10 pt-3">
        <img src={logo} alt="sumz_logo" className=" object-contain" />
        <button
          type="button"
          onClick={() => window.open("https://github.com/nadeeshaMadusanka99")}
          className="black_btn"
        >
          GitHub
        </button>
      </nav>

      <h1 className="head_text ">
        Summarize Articles with <br className="max-md:hidden" />
        <span className="blue_gradient">OpenAI GPT</span>
      </h1>
      <h2 className="desc">
        Simplify your reading with our AI-powered summarizer. <br className="max-md:hidden" />
        <span className="blue_gradient">Free</span> and{" "}
        <span className="blue_gradient">Open Source</span>.
      </h2>
    </header>
  );
};

export default Hero;
