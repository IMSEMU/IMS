import jwt_decode from "jwt-decode";
import { useEffect, useState } from "react";

export const ProtectedRoute = ({ children }) => {
  const [userPrivilege, setUserPrivilege] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    let decodedToken;
    if (token) {
      decodedToken = jwt_decode(token);
      const privilege = decodedToken?.userrole;

      setUserPrivilege(privilege);
      setIsLoading(false);
    }
    setIsLoading(false);
  }, []);
  if (isLoading) {
    return <></>;
  }
  if (userPrivilege === 1 && !isLoading) {
    return <>{children}</>;
  } else {
    return (
      <>
        <div className="flex h-screen overflow-hidden">
          <div className="w-[100%] h-[100vh] flex flex-col items-center justify-start pt-[100px]">
            <h1 className="text-4xl font-extrabold">Forbidden</h1>
            <small>You are not authorized to access this page</small>
          </div>
        </div>
      </>
    );
  }
};
