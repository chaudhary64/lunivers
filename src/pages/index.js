export default function Home() {
  return (
    <>
      <div className="leading-none">
        <p
          style={{
            backgroundImage: 'url("/images/home_intro.gif")',
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            fontSize: "clamp(25vw, 26.5vw, 28vw)",
          }}
          className="text-center text-transparent bg-clip-text bg-linear-to-r from-cyan-500 to-blue-500 select-none"
        >
          lunivers
        </p>
      </div>
    </>
  );
}
