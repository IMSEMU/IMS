import {ImageSection} from "@/app/login/components/imageSection";
import {LoginSection} from "@/app/login/components/loginSection";

export const LoginBody = () => {

  return (
    <main className="grid grid-cols-1 md:grid-cols-2">
      <div className={"hidden md:block"}> <ImageSection /></div>
      <LoginSection />
    </main>
  );
};




