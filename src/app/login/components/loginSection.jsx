export const LoginSection = () => {
  return(
      <>
        <main className={"m-auto"}>
            <p className={"text-center my-6 text-lg font-black"}>Login</p>
  <div className="form">
    <input type="text" id="email" className="" autoComplete="off" placeholder=" "/>
    <label htmlFor="email" className="form__label">Email</label>
  </div>
        </main>
      </>
  )
}