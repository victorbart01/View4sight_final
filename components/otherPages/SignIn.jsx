"use client";
import Link from "next/link";
import Image from "next/image";

export default function SignIn() {
  return (
    <div
      id="sign-in"
      className="sign-in section panel overflow-hidden bg-secondary dark:bg-gray-900"
    >
      <div className="section-outer panel">
        <div className="section-inner panel">
          <div className="panel overflow-hidden">
            <div className="panel row child-cols-12 md:child-cols-6 g-0">
              <div>
                <div
                  className="panel overflow-hidden min-h-300px h-100 lg:h-screen"
                  data-anime="translateX: [-24, 0]; opacity: [0, 1]; easing: easeInOutExpo; duration: 750;"
                >
                  <figure className="panel h-100 m-0 rounded">
                    <canvas className="h-100 w-100" />
                    <Image
                      className="media-cover image"
                      alt="Hero login image"
                      src="/assets/images/common/login.webp"
                      width="1500"
                      height="1000"
                    />
                  </figure>
                  <div className="position-cover text-white vstack justify-end p-4 lg:p-6 xl:py-8">
                    <div className="position-cover bg-gradient-to-t from-black to-transparent opacity-50" />
                    <div className="panel z-1">
                      <div
                        className="vstack gap-3"
                        data-anime="targets: >*; translateY: [-24, 0]; opacity: [0, 1]; easing: easeInOutExpo; duration: 750; delay: anime.stagger(100, {start: 250});"
                      >
                        <p className="fs-5 xl:fs-4 fw-medium">
                          "Grâce à View4Sight, on a pu éviter 3 déplacements chantier et finaliser notre DOE en 48h. Enfin une solution française qui comprend nos contraintes."
                        </p>
                        <div className="vstack gap-0">
                          <p className="fs-6 lg:fs-5 fw-medium">
                            Pierre Moreau
                          </p>
                          <span className="fs-7 opacity-80">
                            Géomètre-expert &amp; Cabinet Moreau & Associés
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="panel vstack justify-center h-100 overflow-hidden">
                  <div className="panel py-4 px-2">
                    <div
                      className="panel vstack gap-3 w-100 sm:w-350px mx-auto text-center"
                      data-anime="targets: >*; translateY: [24, 0]; opacity: [0, 1]; easing: easeInOutExpo; duration: 750; delay: anime.stagger(100);"
                    >
                      <h1 className="h4 sm:h2">Sign in</h1>
                      <div className="hstack gap-2">
                        <a
                          href="#github"
                          className="hstack items-center justify-center flex-1 gap-1 h-48px text-none rounded bg-dark text-white dark:bg-white dark:text-dark"
                        >
                          <i className="icon icon-1 unicon-logo-github" />
                        </a>
                        <a
                          href="#facebook"
                          className="hstack items-center justify-center flex-1 gap-1 h-48px text-none rounded bg-blue-600 text-white"
                        >
                          <i className="icon icon-1 unicon-logo-facebook" />
                        </a>
                      </div>
                      <div className="panel my-2">
                        <hr className="m-0" />
                        <span className="position-absolute top-50 start-50 translate-middle p-1 fs-7 text-uppercase bg-secondary dark:bg-gray-900">
                          Or
                        </span>
                      </div>
                      <form
                        onSubmit={(e) => e.preventDefault()}
                        className="vstack gap-2"
                      >
                        <input
                          className="form-control h-48px w-full bg-white dark:bg-opacity-0 dark:text-white dark:border-gray-300 dark:border-opacity-30"
                          type="email"
                          placeholder="Your email"
                          required
                        />
                        <input
                          className="form-control h-48px w-full bg-white dark:bg-opacity-0 dark:text-white dark:border-gray-300 dark:border-opacity-30"
                          type="password"
                          placeholder="Password"
                          required
                        />
                        <div className="hstack justify-between text-start">
                          <div className="form-check text-start rtl:text-end">
                            <input
                              id="uc_form_remember_me"
                              className="form-check-input rounded bg-white dark:bg-opacity-0 dark:text-white dark:border-gray-300 dark:border-opacity-30"
                              type="checkbox"
                            />
                            <label
                              htmlFor="uc_form_remember_me"
                              className="hstack justify-between form-check-label fs-6"
                            >
                              Remember me?
                            </label>
                          </div>
                          <Link href={`/reset-password`} className="uc-link">
                            Forgot password
                          </Link>
                        </div>
                        <button
                          className="btn btn-primary btn-md text-white mt-2"
                          type="submit"
                        >
                          Log in
                        </button>
                      </form>
                      <p>
                        Have no account yet?
                        <Link className="uc-link" href={`/sign-up`}>
                          Sign up
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
