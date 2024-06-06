import React, { useState } from "react";

function TestPage() {
  const [openMenu, setOpenMenu] = useState(false);

  const toogleMenu = () => {
    setOpenMenu((prevState) => !prevState);
  };

  return (
    <>
      <div id="top-banner" className="h-[180px] w-full bg-[#5cd151]"></div>
      <div
        id="wrapped-container"
        className="flex h-[2200px] w-full justify-center"
      >
        <div id="left-banner" className="h-full w-[180px] bg-[#8f5f5f]"></div>
        <div id="main-content" className="h-full w-[1200px] bg-[#313131]">
          <div
            id="sticky-header"
            className="sticky top-0 h-[100px] w-full bg-[#d0df51]"
          >
            <button
              id="burgerButton"
              className="h-50px absolute left-0 w-[50px] bg-[#691f1f] text-white"
              onClick={toogleMenu}
            >
              X
            </button>

            <div className="absolute right-0 top-0 h-[2200px] overflow-hidden sm:w-full md:w-1/2 lg:w-2/5 xl:w-2/5">
              <div
                className={`
                "z-overlay-base absolute right-0 top-0 origin-right bg-opacity-25 transition-transform duration-200 ease-in-out ${
                  openMenu
                    ? "translate-x-0 sm:w-full md:w-1/2 lg:w-2/5 xl:w-2/5"
                    : "translate-x-full sm:w-full md:w-1/2 lg:w-2/5 xl:w-2/5"
                }`}
              >
                <div
                  id="burger-menu"
                  className="flex h-[2200px] flex-col overflow-y-auto bg-[#3ebed4]"
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
        <div id="right-banner" className="h-full w-[180px] bg-[#8f5f5f]"></div>
      </div>
    </>
  );
}

export { TestPage };
