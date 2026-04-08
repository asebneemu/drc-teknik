import { CheckCircle } from "lucide-react";

export default function AuthorizedServiceCenter() {
  return (
    <div className="bg-white py-4">
      <div className="w-[65%] mx-auto flex items-center justify-center gap-3">
        <CheckCircle className="text-neutral-900 w-5 h-5 shrink-0" />
        <h1
          className="text-center text-neutral-900 text-[clamp(0.95rem,1.9vw,2rem)] uppercase leading-none tracking-[0.12em]"
          style={{
            fontFamily: '"Saira Stencil One", "Arial Black", sans-serif',
          }}
        >
          Authorized Service Center
        </h1>
      </div>
    </div>
  );
}
