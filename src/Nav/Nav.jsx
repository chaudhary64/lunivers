const Nav = () => {
  return (
    <header>
      <nav className="px-20 py-10 flex justify-between items-center border">
        <svg
          id="Ebene_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 42 40.2"
          style={{
            enableBackground: "new 0 0 42 40.2",
          }}
          xmlSpace="preserve"
          className="h-10 fill-[#004052]"
        >
          <path
            id="Pfad_20"
            className="st0"
            d="M15,20.4c0,6.7,5.3,12.1,12,12.2c6.7,0,12-5.5,12-12.2V2.6L27,9v17.8C27,33.5,21.7,39,15,39 C8.3,39,3,33.5,3,26.9V9l12-6.5L15,20.4z"
          />
        </svg>
        <div className="p-13 border border-[#6AAFB7] rounded-full relative">
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold text-xl">
            Menu
          </span>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
