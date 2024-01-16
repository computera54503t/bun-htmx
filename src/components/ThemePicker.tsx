export function ThemePicker() {
  return (
    <details className="dropdown">
      <summary className="m-1 btn btn-ghost">Theme</summary>
      <div className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
        <div className="grid grid-cols-1 gap-3 p-3">
          <button
            className="outline-base-content text-start outline-offset-4 [&amp;_svg]:visible"
            data-set-theme="light"
            data-act-classname="[&amp;_svg]:visible"
          >
            <span
              data-theme="light"
              className="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
            >
              <span className="grid grid-cols-5 grid-rows-3">
                <span className="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="invisible h-3 w-3 shrink-0"
                  >
                    <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                  </svg>{" "}
                  <span className="flex-grow text-sm">light</span>{" "}
                  <span className="flex h-full shrink-0 flex-wrap gap-1">
                    <span className="bg-primary rounded-badge w-2"></span>{" "}
                    <span className="bg-secondary rounded-badge w-2"></span>{" "}
                    <span className="bg-accent rounded-badge w-2"></span>{" "}
                    <span className="bg-neutral rounded-badge w-2"></span>
                  </span>
                </span>
              </span>
            </span>
          </button>
          <button
            className="outline-base-content text-start outline-offset-4"
            data-set-theme="dark"
            data-act-classname="[&amp;_svg]:visible"
          >
            <span
              data-theme="dark"
              className="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
            >
              <span className="grid grid-cols-5 grid-rows-3">
                <span className="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="invisible h-3 w-3 shrink-0"
                  >
                    <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                  </svg>{" "}
                  <span className="flex-grow text-sm">dark</span>{" "}
                  <span className="flex h-full shrink-0 flex-wrap gap-1">
                    <span className="bg-primary rounded-badge w-2"></span>{" "}
                    <span className="bg-secondary rounded-badge w-2"></span>{" "}
                    <span className="bg-accent rounded-badge w-2"></span>{" "}
                    <span className="bg-neutral rounded-badge w-2"></span>
                  </span>
                </span>
              </span>
            </span>
          </button>
          <button
            className="outline-base-content text-start outline-offset-4"
            data-set-theme="cupcake"
            data-act-classname="[&amp;_svg]:visible"
          >
            <span
              data-theme="cupcake"
              className="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
            >
              <span className="grid grid-cols-5 grid-rows-3">
                <span className="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="invisible h-3 w-3 shrink-0"
                  >
                    <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                  </svg>{" "}
                  <span className="flex-grow text-sm">cupcake</span>{" "}
                  <span className="flex h-full shrink-0 flex-wrap gap-1">
                    <span className="bg-primary rounded-badge w-2"></span>{" "}
                    <span className="bg-secondary rounded-badge w-2"></span>{" "}
                    <span className="bg-accent rounded-badge w-2"></span>{" "}
                    <span className="bg-neutral rounded-badge w-2"></span>
                  </span>
                </span>
              </span>
            </span>
          </button>
          <button
            className="outline-base-content text-start outline-offset-4"
            data-set-theme="bumblebee"
            data-act-classname="[&amp;_svg]:visible"
          >
            <span
              data-theme="bumblebee"
              className="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
            >
              <span className="grid grid-cols-5 grid-rows-3">
                <span className="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="invisible h-3 w-3 shrink-0"
                  >
                    <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                  </svg>{" "}
                  <span className="flex-grow text-sm">bumblebee</span>{" "}
                  <span className="flex h-full shrink-0 flex-wrap gap-1">
                    <span className="bg-primary rounded-badge w-2"></span>{" "}
                    <span className="bg-secondary rounded-badge w-2"></span>{" "}
                    <span className="bg-accent rounded-badge w-2"></span>{" "}
                    <span className="bg-neutral rounded-badge w-2"></span>
                  </span>
                </span>
              </span>
            </span>
          </button>
          <button
            className="outline-base-content text-start outline-offset-4"
            data-set-theme="emerald"
            data-act-classname="[&amp;_svg]:visible"
          >
            <span
              data-theme="emerald"
              className="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
            >
              <span className="grid grid-cols-5 grid-rows-3">
                <span className="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="invisible h-3 w-3 shrink-0"
                  >
                    <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                  </svg>{" "}
                  <span className="flex-grow text-sm">emerald</span>{" "}
                  <span className="flex h-full shrink-0 flex-wrap gap-1">
                    <span className="bg-primary rounded-badge w-2"></span>{" "}
                    <span className="bg-secondary rounded-badge w-2"></span>{" "}
                    <span className="bg-accent rounded-badge w-2"></span>{" "}
                    <span className="bg-neutral rounded-badge w-2"></span>
                  </span>
                </span>
              </span>
            </span>
          </button>
          <button
            className="outline-base-content text-start outline-offset-4"
            data-set-theme="corporate"
            data-act-classname="[&amp;_svg]:visible"
          >
            <span
              data-theme="corporate"
              className="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
            >
              <span className="grid grid-cols-5 grid-rows-3">
                <span className="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="invisible h-3 w-3 shrink-0"
                  >
                    <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                  </svg>{" "}
                  <span className="flex-grow text-sm">corporate</span>{" "}
                  <span className="flex h-full shrink-0 flex-wrap gap-1">
                    <span className="bg-primary rounded-badge w-2"></span>{" "}
                    <span className="bg-secondary rounded-badge w-2"></span>{" "}
                    <span className="bg-accent rounded-badge w-2"></span>{" "}
                    <span className="bg-neutral rounded-badge w-2"></span>
                  </span>
                </span>
              </span>
            </span>
          </button>
          <button
            className="outline-base-content text-start outline-offset-4"
            data-set-theme="synthwave"
            data-act-classname="[&amp;_svg]:visible"
          >
            <span
              data-theme="synthwave"
              className="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
            >
              <span className="grid grid-cols-5 grid-rows-3">
                <span className="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="invisible h-3 w-3 shrink-0"
                  >
                    <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                  </svg>{" "}
                  <span className="flex-grow text-sm">synthwave</span>{" "}
                  <span className="flex h-full shrink-0 flex-wrap gap-1">
                    <span className="bg-primary rounded-badge w-2"></span>{" "}
                    <span className="bg-secondary rounded-badge w-2"></span>{" "}
                    <span className="bg-accent rounded-badge w-2"></span>{" "}
                    <span className="bg-neutral rounded-badge w-2"></span>
                  </span>
                </span>
              </span>
            </span>
          </button>
          <button
            className="outline-base-content text-start outline-offset-4"
            data-set-theme="retro"
            data-act-classname="[&amp;_svg]:visible"
          >
            <span
              data-theme="retro"
              className="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
            >
              <span className="grid grid-cols-5 grid-rows-3">
                <span className="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="invisible h-3 w-3 shrink-0"
                  >
                    <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                  </svg>{" "}
                  <span className="flex-grow text-sm">retro</span>{" "}
                  <span className="flex h-full shrink-0 flex-wrap gap-1">
                    <span className="bg-primary rounded-badge w-2"></span>{" "}
                    <span className="bg-secondary rounded-badge w-2"></span>{" "}
                    <span className="bg-accent rounded-badge w-2"></span>{" "}
                    <span className="bg-neutral rounded-badge w-2"></span>
                  </span>
                </span>
              </span>
            </span>
          </button>
          <button
            className="outline-base-content text-start outline-offset-4"
            data-set-theme="cyberpunk"
            data-act-classname="[&amp;_svg]:visible"
          >
            <span
              data-theme="cyberpunk"
              className="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
            >
              <span className="grid grid-cols-5 grid-rows-3">
                <span className="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="invisible h-3 w-3 shrink-0"
                  >
                    <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                  </svg>{" "}
                  <span className="flex-grow text-sm">cyberpunk</span>{" "}
                  <span className="flex h-full shrink-0 flex-wrap gap-1">
                    <span className="bg-primary rounded-badge w-2"></span>{" "}
                    <span className="bg-secondary rounded-badge w-2"></span>{" "}
                    <span className="bg-accent rounded-badge w-2"></span>{" "}
                    <span className="bg-neutral rounded-badge w-2"></span>
                  </span>
                </span>
              </span>
            </span>
          </button>
          <button
            className="outline-base-content text-start outline-offset-4"
            data-set-theme="valentine"
            data-act-classname="[&amp;_svg]:visible"
          >
            <span
              data-theme="valentine"
              className="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
            >
              <span className="grid grid-cols-5 grid-rows-3">
                <span className="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="invisible h-3 w-3 shrink-0"
                  >
                    <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                  </svg>{" "}
                  <span className="flex-grow text-sm">valentine</span>{" "}
                  <span className="flex h-full shrink-0 flex-wrap gap-1">
                    <span className="bg-primary rounded-badge w-2"></span>{" "}
                    <span className="bg-secondary rounded-badge w-2"></span>{" "}
                    <span className="bg-accent rounded-badge w-2"></span>{" "}
                    <span className="bg-neutral rounded-badge w-2"></span>
                  </span>
                </span>
              </span>
            </span>
          </button>
          <button
            className="outline-base-content text-start outline-offset-4"
            data-set-theme="halloween"
            data-act-classname="[&amp;_svg]:visible"
          >
            <span
              data-theme="halloween"
              className="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
            >
              <span className="grid grid-cols-5 grid-rows-3">
                <span className="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="invisible h-3 w-3 shrink-0"
                  >
                    <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                  </svg>{" "}
                  <span className="flex-grow text-sm">halloween</span>{" "}
                  <span className="flex h-full shrink-0 flex-wrap gap-1">
                    <span className="bg-primary rounded-badge w-2"></span>{" "}
                    <span className="bg-secondary rounded-badge w-2"></span>{" "}
                    <span className="bg-accent rounded-badge w-2"></span>{" "}
                    <span className="bg-neutral rounded-badge w-2"></span>
                  </span>
                </span>
              </span>
            </span>
          </button>
          <button
            className="outline-base-content text-start outline-offset-4"
            data-set-theme="garden"
            data-act-classname="[&amp;_svg]:visible"
          >
            <span
              data-theme="garden"
              className="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
            >
              <span className="grid grid-cols-5 grid-rows-3">
                <span className="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="invisible h-3 w-3 shrink-0"
                  >
                    <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                  </svg>{" "}
                  <span className="flex-grow text-sm">garden</span>{" "}
                  <span className="flex h-full shrink-0 flex-wrap gap-1">
                    <span className="bg-primary rounded-badge w-2"></span>{" "}
                    <span className="bg-secondary rounded-badge w-2"></span>{" "}
                    <span className="bg-accent rounded-badge w-2"></span>{" "}
                    <span className="bg-neutral rounded-badge w-2"></span>
                  </span>
                </span>
              </span>
            </span>
          </button>
          <button
            className="outline-base-content text-start outline-offset-4"
            data-set-theme="forest"
            data-act-classname="[&amp;_svg]:visible"
          >
            <span
              data-theme="forest"
              className="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
            >
              <span className="grid grid-cols-5 grid-rows-3">
                <span className="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="invisible h-3 w-3 shrink-0"
                  >
                    <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                  </svg>{" "}
                  <span className="flex-grow text-sm">forest</span>{" "}
                  <span className="flex h-full shrink-0 flex-wrap gap-1">
                    <span className="bg-primary rounded-badge w-2"></span>{" "}
                    <span className="bg-secondary rounded-badge w-2"></span>{" "}
                    <span className="bg-accent rounded-badge w-2"></span>{" "}
                    <span className="bg-neutral rounded-badge w-2"></span>
                  </span>
                </span>
              </span>
            </span>
          </button>
          <button
            className="outline-base-content text-start outline-offset-4"
            data-set-theme="aqua"
            data-act-classname="[&amp;_svg]:visible"
          >
            <span
              data-theme="aqua"
              className="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
            >
              <span className="grid grid-cols-5 grid-rows-3">
                <span className="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="invisible h-3 w-3 shrink-0"
                  >
                    <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                  </svg>{" "}
                  <span className="flex-grow text-sm">aqua</span>{" "}
                  <span className="flex h-full shrink-0 flex-wrap gap-1">
                    <span className="bg-primary rounded-badge w-2"></span>{" "}
                    <span className="bg-secondary rounded-badge w-2"></span>{" "}
                    <span className="bg-accent rounded-badge w-2"></span>{" "}
                    <span className="bg-neutral rounded-badge w-2"></span>
                  </span>
                </span>
              </span>
            </span>
          </button>
          <button
            className="outline-base-content text-start outline-offset-4"
            data-set-theme="lofi"
            data-act-classname="[&amp;_svg]:visible"
          >
            <span
              data-theme="lofi"
              className="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
            >
              <span className="grid grid-cols-5 grid-rows-3">
                <span className="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="invisible h-3 w-3 shrink-0"
                  >
                    <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                  </svg>{" "}
                  <span className="flex-grow text-sm">lofi</span>{" "}
                  <span className="flex h-full shrink-0 flex-wrap gap-1">
                    <span className="bg-primary rounded-badge w-2"></span>{" "}
                    <span className="bg-secondary rounded-badge w-2"></span>{" "}
                    <span className="bg-accent rounded-badge w-2"></span>{" "}
                    <span className="bg-neutral rounded-badge w-2"></span>
                  </span>
                </span>
              </span>
            </span>
          </button>
          <button
            className="outline-base-content text-start outline-offset-4"
            data-set-theme="pastel"
            data-act-classname="[&amp;_svg]:visible"
          >
            <span
              data-theme="pastel"
              className="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
            >
              <span className="grid grid-cols-5 grid-rows-3">
                <span className="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="invisible h-3 w-3 shrink-0"
                  >
                    <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                  </svg>{" "}
                  <span className="flex-grow text-sm">pastel</span>{" "}
                  <span className="flex h-full shrink-0 flex-wrap gap-1">
                    <span className="bg-primary rounded-badge w-2"></span>{" "}
                    <span className="bg-secondary rounded-badge w-2"></span>{" "}
                    <span className="bg-accent rounded-badge w-2"></span>{" "}
                    <span className="bg-neutral rounded-badge w-2"></span>
                  </span>
                </span>
              </span>
            </span>
          </button>
          <button
            className="outline-base-content text-start outline-offset-4"
            data-set-theme="fantasy"
            data-act-classname="[&amp;_svg]:visible"
          >
            <span
              data-theme="fantasy"
              className="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
            >
              <span className="grid grid-cols-5 grid-rows-3">
                <span className="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="invisible h-3 w-3 shrink-0"
                  >
                    <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                  </svg>{" "}
                  <span className="flex-grow text-sm">fantasy</span>{" "}
                  <span className="flex h-full shrink-0 flex-wrap gap-1">
                    <span className="bg-primary rounded-badge w-2"></span>{" "}
                    <span className="bg-secondary rounded-badge w-2"></span>{" "}
                    <span className="bg-accent rounded-badge w-2"></span>{" "}
                    <span className="bg-neutral rounded-badge w-2"></span>
                  </span>
                </span>
              </span>
            </span>
          </button>
          <button
            className="outline-base-content text-start outline-offset-4"
            data-set-theme="wireframe"
            data-act-classname="[&amp;_svg]:visible"
          >
            <span
              data-theme="wireframe"
              className="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
            >
              <span className="grid grid-cols-5 grid-rows-3">
                <span className="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="invisible h-3 w-3 shrink-0"
                  >
                    <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                  </svg>{" "}
                  <span className="flex-grow text-sm">wireframe</span>{" "}
                  <span className="flex h-full shrink-0 flex-wrap gap-1">
                    <span className="bg-primary rounded-badge w-2"></span>{" "}
                    <span className="bg-secondary rounded-badge w-2"></span>{" "}
                    <span className="bg-accent rounded-badge w-2"></span>{" "}
                    <span className="bg-neutral rounded-badge w-2"></span>
                  </span>
                </span>
              </span>
            </span>
          </button>
          <button
            className="outline-base-content text-start outline-offset-4"
            data-set-theme="black"
            data-act-classname="[&amp;_svg]:visible"
          >
            <span
              data-theme="black"
              className="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
            >
              <span className="grid grid-cols-5 grid-rows-3">
                <span className="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="invisible h-3 w-3 shrink-0"
                  >
                    <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                  </svg>{" "}
                  <span className="flex-grow text-sm">black</span>{" "}
                  <span className="flex h-full shrink-0 flex-wrap gap-1">
                    <span className="bg-primary rounded-badge w-2"></span>{" "}
                    <span className="bg-secondary rounded-badge w-2"></span>{" "}
                    <span className="bg-accent rounded-badge w-2"></span>{" "}
                    <span className="bg-neutral rounded-badge w-2"></span>
                  </span>
                </span>
              </span>
            </span>
          </button>
          <button
            className="outline-base-content text-start outline-offset-4"
            data-set-theme="luxury"
            data-act-classname="[&amp;_svg]:visible"
          >
            <span
              data-theme="luxury"
              className="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
            >
              <span className="grid grid-cols-5 grid-rows-3">
                <span className="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="invisible h-3 w-3 shrink-0"
                  >
                    <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                  </svg>{" "}
                  <span className="flex-grow text-sm">luxury</span>{" "}
                  <span className="flex h-full shrink-0 flex-wrap gap-1">
                    <span className="bg-primary rounded-badge w-2"></span>{" "}
                    <span className="bg-secondary rounded-badge w-2"></span>{" "}
                    <span className="bg-accent rounded-badge w-2"></span>{" "}
                    <span className="bg-neutral rounded-badge w-2"></span>
                  </span>
                </span>
              </span>
            </span>
          </button>
          <button
            className="outline-base-content text-start outline-offset-4"
            data-set-theme="dracula"
            data-act-classname="[&amp;_svg]:visible"
          >
            <span
              data-theme="dracula"
              className="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
            >
              <span className="grid grid-cols-5 grid-rows-3">
                <span className="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="invisible h-3 w-3 shrink-0"
                  >
                    <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                  </svg>{" "}
                  <span className="flex-grow text-sm">dracula</span>{" "}
                  <span className="flex h-full shrink-0 flex-wrap gap-1">
                    <span className="bg-primary rounded-badge w-2"></span>{" "}
                    <span className="bg-secondary rounded-badge w-2"></span>{" "}
                    <span className="bg-accent rounded-badge w-2"></span>{" "}
                    <span className="bg-neutral rounded-badge w-2"></span>
                  </span>
                </span>
              </span>
            </span>
          </button>
          <button
            className="outline-base-content text-start outline-offset-4"
            data-set-theme="cmyk"
            data-act-classname="[&amp;_svg]:visible"
          >
            <span
              data-theme="cmyk"
              className="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
            >
              <span className="grid grid-cols-5 grid-rows-3">
                <span className="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="invisible h-3 w-3 shrink-0"
                  >
                    <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                  </svg>{" "}
                  <span className="flex-grow text-sm">cmyk</span>{" "}
                  <span className="flex h-full shrink-0 flex-wrap gap-1">
                    <span className="bg-primary rounded-badge w-2"></span>{" "}
                    <span className="bg-secondary rounded-badge w-2"></span>{" "}
                    <span className="bg-accent rounded-badge w-2"></span>{" "}
                    <span className="bg-neutral rounded-badge w-2"></span>
                  </span>
                </span>
              </span>
            </span>
          </button>
          <button
            className="outline-base-content text-start outline-offset-4"
            data-set-theme="autumn"
            data-act-classname="[&amp;_svg]:visible"
          >
            <span
              data-theme="autumn"
              className="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
            >
              <span className="grid grid-cols-5 grid-rows-3">
                <span className="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="invisible h-3 w-3 shrink-0"
                  >
                    <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                  </svg>{" "}
                  <span className="flex-grow text-sm">autumn</span>{" "}
                  <span className="flex h-full shrink-0 flex-wrap gap-1">
                    <span className="bg-primary rounded-badge w-2"></span>{" "}
                    <span className="bg-secondary rounded-badge w-2"></span>{" "}
                    <span className="bg-accent rounded-badge w-2"></span>{" "}
                    <span className="bg-neutral rounded-badge w-2"></span>
                  </span>
                </span>
              </span>
            </span>
          </button>
          <button
            className="outline-base-content text-start outline-offset-4"
            data-set-theme="business"
            data-act-classname="[&amp;_svg]:visible"
          >
            <span
              data-theme="business"
              className="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
            >
              <span className="grid grid-cols-5 grid-rows-3">
                <span className="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="invisible h-3 w-3 shrink-0"
                  >
                    <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                  </svg>{" "}
                  <span className="flex-grow text-sm">business</span>{" "}
                  <span className="flex h-full shrink-0 flex-wrap gap-1">
                    <span className="bg-primary rounded-badge w-2"></span>{" "}
                    <span className="bg-secondary rounded-badge w-2"></span>{" "}
                    <span className="bg-accent rounded-badge w-2"></span>{" "}
                    <span className="bg-neutral rounded-badge w-2"></span>
                  </span>
                </span>
              </span>
            </span>
          </button>
          <button
            className="outline-base-content text-start outline-offset-4"
            data-set-theme="acid"
            data-act-classname="[&amp;_svg]:visible"
          >
            <span
              data-theme="acid"
              className="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
            >
              <span className="grid grid-cols-5 grid-rows-3">
                <span className="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="invisible h-3 w-3 shrink-0"
                  >
                    <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                  </svg>{" "}
                  <span className="flex-grow text-sm">acid</span>{" "}
                  <span className="flex h-full shrink-0 flex-wrap gap-1">
                    <span className="bg-primary rounded-badge w-2"></span>{" "}
                    <span className="bg-secondary rounded-badge w-2"></span>{" "}
                    <span className="bg-accent rounded-badge w-2"></span>{" "}
                    <span className="bg-neutral rounded-badge w-2"></span>
                  </span>
                </span>
              </span>
            </span>
          </button>
          <button
            className="outline-base-content text-start outline-offset-4"
            data-set-theme="lemonade"
            data-act-classname="[&amp;_svg]:visible"
          >
            <span
              data-theme="lemonade"
              className="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
            >
              <span className="grid grid-cols-5 grid-rows-3">
                <span className="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="invisible h-3 w-3 shrink-0"
                  >
                    <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                  </svg>{" "}
                  <span className="flex-grow text-sm">lemonade</span>{" "}
                  <span className="flex h-full shrink-0 flex-wrap gap-1">
                    <span className="bg-primary rounded-badge w-2"></span>{" "}
                    <span className="bg-secondary rounded-badge w-2"></span>{" "}
                    <span className="bg-accent rounded-badge w-2"></span>{" "}
                    <span className="bg-neutral rounded-badge w-2"></span>
                  </span>
                </span>
              </span>
            </span>
          </button>
          <button
            className="outline-base-content text-start outline-offset-4"
            data-set-theme="night"
            data-act-classname="[&amp;_svg]:visible"
          >
            <span
              data-theme="night"
              className="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
            >
              <span className="grid grid-cols-5 grid-rows-3">
                <span className="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="invisible h-3 w-3 shrink-0"
                  >
                    <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                  </svg>{" "}
                  <span className="flex-grow text-sm">night</span>{" "}
                  <span className="flex h-full shrink-0 flex-wrap gap-1">
                    <span className="bg-primary rounded-badge w-2"></span>{" "}
                    <span className="bg-secondary rounded-badge w-2"></span>{" "}
                    <span className="bg-accent rounded-badge w-2"></span>{" "}
                    <span className="bg-neutral rounded-badge w-2"></span>
                  </span>
                </span>
              </span>
            </span>
          </button>
          <button
            className="outline-base-content text-start outline-offset-4"
            data-set-theme="coffee"
            data-act-classname="[&amp;_svg]:visible"
          >
            <span
              data-theme="coffee"
              className="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
            >
              <span className="grid grid-cols-5 grid-rows-3">
                <span className="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="invisible h-3 w-3 shrink-0"
                  >
                    <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                  </svg>{" "}
                  <span className="flex-grow text-sm">coffee</span>{" "}
                  <span className="flex h-full shrink-0 flex-wrap gap-1">
                    <span className="bg-primary rounded-badge w-2"></span>{" "}
                    <span className="bg-secondary rounded-badge w-2"></span>{" "}
                    <span className="bg-accent rounded-badge w-2"></span>{" "}
                    <span className="bg-neutral rounded-badge w-2"></span>
                  </span>
                </span>
              </span>
            </span>
          </button>
          <button
            className="outline-base-content text-start outline-offset-4"
            data-set-theme="winter"
            data-act-classname="[&amp;_svg]:visible"
          >
            <span
              data-theme="winter"
              className="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
            >
              <span className="grid grid-cols-5 grid-rows-3">
                <span className="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="invisible h-3 w-3 shrink-0"
                  >
                    <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                  </svg>{" "}
                  <span className="flex-grow text-sm">winter</span>{" "}
                  <span className="flex h-full shrink-0 flex-wrap gap-1">
                    <span className="bg-primary rounded-badge w-2"></span>{" "}
                    <span className="bg-secondary rounded-badge w-2"></span>{" "}
                    <span className="bg-accent rounded-badge w-2"></span>{" "}
                    <span className="bg-neutral rounded-badge w-2"></span>
                  </span>
                </span>
              </span>
            </span>
          </button>
          <button
            className="outline-base-content text-start outline-offset-4"
            data-set-theme="dim"
            data-act-classname="[&amp;_svg]:visible"
          >
            <span
              data-theme="dim"
              className="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
            >
              <span className="grid grid-cols-5 grid-rows-3">
                <span className="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="invisible h-3 w-3 shrink-0"
                  >
                    <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                  </svg>{" "}
                  <span className="flex-grow text-sm">dim</span>{" "}
                  <span className="flex h-full shrink-0 flex-wrap gap-1">
                    <span className="bg-primary rounded-badge w-2"></span>{" "}
                    <span className="bg-secondary rounded-badge w-2"></span>{" "}
                    <span className="bg-accent rounded-badge w-2"></span>{" "}
                    <span className="bg-neutral rounded-badge w-2"></span>
                  </span>
                </span>
              </span>
            </span>
          </button>
          <button
            className="outline-base-content text-start outline-offset-4"
            data-set-theme="nord"
            data-act-classname="[&amp;_svg]:visible"
          >
            <span
              data-theme="nord"
              className="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
            >
              <span className="grid grid-cols-5 grid-rows-3">
                <span className="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="invisible h-3 w-3 shrink-0"
                  >
                    <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                  </svg>{" "}
                  <span className="flex-grow text-sm">nord</span>{" "}
                  <span className="flex h-full shrink-0 flex-wrap gap-1">
                    <span className="bg-primary rounded-badge w-2"></span>{" "}
                    <span className="bg-secondary rounded-badge w-2"></span>{" "}
                    <span className="bg-accent rounded-badge w-2"></span>{" "}
                    <span className="bg-neutral rounded-badge w-2"></span>
                  </span>
                </span>
              </span>
            </span>
          </button>
          <button
            className="outline-base-content text-start outline-offset-4"
            data-set-theme="sunset"
            data-act-classname="[&amp;_svg]:visible"
          >
            <span
              data-theme="sunset"
              className="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
            >
              <span className="grid grid-cols-5 grid-rows-3">
                <span className="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="invisible h-3 w-3 shrink-0"
                  >
                    <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                  </svg>{" "}
                  <span className="flex-grow text-sm">sunset</span>{" "}
                  <span className="flex h-full shrink-0 flex-wrap gap-1">
                    <span className="bg-primary rounded-badge w-2"></span>{" "}
                    <span className="bg-secondary rounded-badge w-2"></span>{" "}
                    <span className="bg-accent rounded-badge w-2"></span>{" "}
                    <span className="bg-neutral rounded-badge w-2"></span>
                  </span>
                </span>
              </span>
            </span>
          </button>{" "}
          <a
            className="outline-base-content overflow-hidden rounded-lg"
            href="/theme-generator/"
          >
            <div className="hover:bg-neutral hover:text-neutral-content w-full cursor-pointer font-sans">
              <div className="flex gap-2 p-3">
                <svg
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 fill-current"
                  viewBox="0 0 512 512"
                >
                  <path d="M96,208H48a16,16,0,0,1,0-32H96a16,16,0,0,1,0,32Z"></path>
                  <line x1="90.25" y1="90.25" x2="124.19" y2="124.19"></line>
                  <path d="M124.19,140.19a15.91,15.91,0,0,1-11.31-4.69L78.93,101.56a16,16,0,0,1,22.63-22.63l33.94,33.95a16,16,0,0,1-11.31,27.31Z"></path>
                  <path d="M192,112a16,16,0,0,1-16-16V48a16,16,0,0,1,32,0V96A16,16,0,0,1,192,112Z"></path>
                  <line x1="293.89" y1="90.25" x2="259.95" y2="124.19"></line>
                  <path d="M260,140.19a16,16,0,0,1-11.31-27.31l33.94-33.95a16,16,0,0,1,22.63,22.63L271.27,135.5A15.94,15.94,0,0,1,260,140.19Z"></path>
                  <line x1="124.19" y1="259.95" x2="90.25" y2="293.89"></line>
                  <path d="M90.25,309.89a16,16,0,0,1-11.32-27.31l33.95-33.94a16,16,0,0,1,22.62,22.63l-33.94,33.94A16,16,0,0,1,90.25,309.89Z"></path>
                  <path d="M219,151.83a26,26,0,0,0-36.77,0l-30.43,30.43a26,26,0,0,0,0,36.77L208.76,276a4,4,0,0,0,5.66,0L276,214.42a4,4,0,0,0,0-5.66Z"></path>
                  <path d="M472.31,405.11,304.24,237a4,4,0,0,0-5.66,0L237,298.58a4,4,0,0,0,0,5.66L405.12,472.31a26,26,0,0,0,36.76,0l30.43-30.43h0A26,26,0,0,0,472.31,405.11Z"></path>
                </svg>{" "}
                <div className="flex-grow text-sm font-bold">
                  Make your theme!
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </details>
  );
}
