export default function OnboardingLayout({ children }: any) {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-[420px] m-auto">{children}</div>
    </div>
  );
}
