import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import OurService from "./OurService";
import Footer from "./Footer";
import SubsClinet from "./SubsClinet";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

export default function Dashboorduser() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <NavBar></NavBar>
      </header>

      <div class="relative overflow-hidden mt-12 bg-white  isolate px-6 pt-10 lg:px-6">
        <div class="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
          <div class="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div class="sm:max-w-lg">
              <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Summer styles are finally here
              </h1>
              <p class="mt-4 text-xl text-gray-500">
                This year, our new summer collection will shelter you from the
                harsh elements of a world that doesn't care if you live or die.
              </p>
            </div>
            <div>
              <div class="mt-10">
                <div
                  aria-hidden="true"
                  class="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div class="absolute mt-5 transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div class="flex items-center space-x-6 lg:space-x-8">
                      <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div class="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                          <img
                            src="https://img.freepik.com/free-photo/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg?t=st=1715398176~exp=1715401776~hmac=627f31c69a2ceca48c722988e7afcdb793b924c65379dafd8f673586ce80dc84&w=740"
                            alt=""
                            class="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div class="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://img.freepik.com/free-photo/doctor-with-his-arms-crossed-white-background_1368-5790.jpg?t=st=1715398127~exp=1715401727~hmac=7299712bbf27b073fb72c1202aabd695f2362accabdf9d5403617716085e8e64&w=740"
                            alt=""
                            class="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div class="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://img.freepik.com/free-photo/medical-stethoscope-white-surface_53876-95029.jpg?t=st=1715711001~exp=1715714601~hmac=dd7bee41cb2071f25ed20b2dc7f99386242afa42357ca780ab6f61ffe95d53b9&w=740"
                            alt=""
                            class="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div class="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://img.freepik.com/free-photo/portrait-professional-medical-worker-posing-picture-with-arms-folded_1098-19293.jpg?t=st=1715398274~exp=1715401874~hmac=c75b76578cf27de99e9b9d3abd6616faa2e3883e66458f9c537afd422237b8b5&w=740"
                            alt=""
                            class="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div class="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://img.freepik.com/free-photo/medical-stethoscope-white-surface_53876-95029.jpg?t=st=1715711001~exp=1715714601~hmac=dd7bee41cb2071f25ed20b2dc7f99386242afa42357ca780ab6f61ffe95d53b9&w=740"
                            alt=""
                            class="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div class="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://img.freepik.com/free-photo/close-up-doctor-holding-red-heart_23-2149191363.jpg?t=st=1715398331~exp=1715401931~hmac=0bcf35269a3e160a85ad853602b4b9ab9b6bdd62f435d5142fbda2a53579d8ad&w=740"
                            alt=""
                            class="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div class="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg"
                            alt=""
                            class="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Link
                  to="/AddRdv"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  New Rounde-Vous
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <OurService></OurService>

      <SubsClinet></SubsClinet>

      <div className="mt-12 ">
        <div className="relative  py-8 isolate flex items-center gap-x-6 overflow-hidden bg-gray-50 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
          <div
            className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
            aria-hidden="true"
          >
            <div className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"></div>
          </div>
          <div
            className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
            aria-hidden="true"
          >
            <div className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"></div>
          </div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <p className="text-sm leading-6 text-gray-900">
              {/* <strong className="font-semibold">GeneriCon 2023</strong><svg viewBox="0 0 2 2" className="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true"><circle cx="1" cy="1" r="1" /></svg>Join us in Denver from June 7 – 9 to see what’s coming next. */}
            </p>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}
