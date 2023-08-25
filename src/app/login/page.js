
import {LoginBody} from "@/app/login/components/loginBody";
import {LoginNav} from "@/app/login/components/loginNav";

export const metadata = {
  title: 'Login | I.M.S.',
}
export default function Login() {

  return (
        <>
            <LoginNav />
            <LoginBody />
        </>
  )
}