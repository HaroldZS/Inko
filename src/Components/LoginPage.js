import React, { useEffect, useState } from "react";

function LoginPage() {
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    console.log(openMenu);
  }, [openMenu]);

  const toogleMenu = () => {
    setOpenMenu((prevState) => !prevState);
  };

  return (
    <>
      <div id="top-banner" className="w-full h-[180px] bg-[#5cd151]"></div>
      <div
        id="wrapped-container"
        className="flex justify-center w-full h-[2200px]"
      >
        <div id="left-banner" className="w-[180px] h-full bg-[#8f5f5f]"></div>
        <div id="main-content" className="w-[1200px] h-full bg-[#313131]">
          <div
            id="sticky-header"
            className="w-full h-[100px] bg-[#d0df51] sticky top-0"
          >
            <button
              id="burgerButton"
              className="absolute w-[50px] h-50px bg-[#691f1f] text-white left-0"
              onClick={toogleMenu}
            >
              X
            </button>

            <div className="absolute sm:w-full md:w-1/2 lg:w-2/5 xl:w-2/5 right-0 top-0 h-[2200px] overflow-hidden">
              <div
                className={`
                "z-overlay-base absolute right-0 top-0 origin-right bg-opacity-25 transition-transform duration-200 ease-in-out ${
                  openMenu
                    ? "translate-x-0 sm:w-full md:w-1/2 lg:w-2/5 xl:w-2/5"
                    : "translate-x-full sm:w-full md:w-1/2 lg:w-2/5 xl:w-2/5"
                  //   "translate-x-0 w-[500px]"
                  // : "translate-x-full w-[500px]"
                }`}
              >
                <div
                  id="burger-menu"
                  className="bg-[#3ebed4] flex flex-col overflow-y-auto h-[2200px]"
                  style={{ scrollbarGutter: "stable" }}
                >
                  <div className="mx-2 flex flex-col">
                    <nav>
                      <ul>
                        <li>Content 1</li>
                        <li>Content 2</li>
                        <li>Content 3</li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="right-banner" className="w-[180px] h-full bg-[#8f5f5f]"></div>
      </div>
    </>
  );
}

export { LoginPage };
