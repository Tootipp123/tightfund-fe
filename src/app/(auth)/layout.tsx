export default function AuthLayout({ children }: any) {
  return (
    <>
      {/* <nav
        id="navbar"
        className="dark:bg-neutral-950 dark:border-neutral-800 bg-white md:sticky bottom-0 md:top-0 z-[100] border-b"
      >
        <div className="w-full md:w-[1200px] px-3 md:px-0 py-3 m-auto flex items-center justify-between">
          <Link href="/">
            <h4 className="dark:text-neutral-50 font-cormorant text-2xl cursor-pointer">
              M.
            </h4>
          </Link>
          <div className="flex gap-3 items-center">
            <Link href="/signin">
              <Button variant="secondary">Sign In</Button>
            </Link>
            <Link href="/signup">
              <Button>Sign Up</Button>
            </Link>
          </div>
        </div>
      </nav> */}
      {children}
    </>
  );
}
