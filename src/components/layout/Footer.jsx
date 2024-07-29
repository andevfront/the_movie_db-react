export const Footer = () => {
  return (
    <footer className="relative z-[5] mt-auto bg-[linear-gradient(to_bottom,_rgba(15,_23,_42,_0)_0%,_rgba(15,_23,_42,_0.01)_1%,_rgba(15,_23,_42,_1)_100%)] py-10 text-center text-slate-400">
      <p>
        Designed by{" "}
        <a
          className="text-slate-200 transition-all duration-300 hover:text-white"
          href="https://github.com/andevfront"
          target="_blank"
        >
          andevfront
        </a>
        .
      </p>
    </footer>
  );
};
