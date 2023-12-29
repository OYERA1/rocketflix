import react, { ReactNode } from "react";

export default function Main({ children }: { children: ReactNode }) {
  return (
    <main
      className="
      flex flex-col flex-wrap items-center justify-center
      min-h-screen max-h-full  px-6 py-3 sm:px-28 
      bg-bkg-primary text-content isolate 
      transition-colors duration-700 ease-in-out
      before:absolute before:h-[200px] before:w-8/12 sm:before:w-3/12 before:rounded-tr-full 
      before:rounded-bl-full before:blur-[100px] before:bg-gradient-2 
      before:animate-spin-slower before:-z-10
      before:transition-colors before:duration-700 before:ease-in-out
      after:absolute after:h-2/5 sm:after:h-2/3 after:w-1/6 sm:after:w-2/12 
      after:rounded-tr-full after:rounded-bl-full after:blur-[90px]
      after:bg-gradient-1/80 after:animate-spin-slow after:-z-10
      after:transition-colors after:duration-700 after:ease-in-out
     
    "
    >
      {children}
    </main>
  );
}
