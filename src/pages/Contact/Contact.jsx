const Contact = () => {
  return (
    <div className="mb-7">
      <h3 className="text-3xl text-center mt-32 mb-2 font-medium border-y-2 border-[#FFC5C5] w-80 py-2 mx-auto">
        Contact us{" "}
      </h3>

      <footer className=" w-11/12 mx-auto footer p-10 bg-slate-200 text-base-content">
        <nav className="flex gap-3 md:flex-col lg:flex-col">
          <header className="footer-title ">Services</header>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertise</a>
        </nav>
        <nav className="flex gap-3 md:flex-col lg:flex-col">
          <header className="footer-title">Company</header>

          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav className="flex gap-3 md:flex-col lg:flex-col">
          <header className="footer-title">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <form>
          <header className="footer-title">Newsletter</header>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="join">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered join-item"
              />
              <button className="btn btn-primary join-item">Subscribe</button>
            </div>
          </fieldset>
        </form>
      </footer>
    </div>
  );
};

export default Contact;
