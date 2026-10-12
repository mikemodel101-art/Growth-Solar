import { useState, type FormEvent } from "react";
import { cn } from "@/utils/cn";
import { ArrowRight, CheckCircle } from "@/components/icons";

const SOLUTIONS = [
  "Residential Solar",
  "Residential Solar with Battery",
  "Commercial or Industrial Solar",
  "EV Charging Station",
  "Other",
];

const fieldBase =
  "w-full rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 transition-colors focus:border-volt-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-volt-400/20";

function Label({ children, required }: { children: string; required?: boolean }) {
  return (
    <label className="mb-1.5 block text-sm font-semibold text-slate-700">
      {children}
      {required && <span className="ml-0.5 text-sun-500">*</span>}
    </label>
  );
}

/** Reusable quote / enquiry form. No backend — shows a success state on submit. */
export function QuoteForm({
  submitLabel = "Start Your Solar Energy Today!",
}: {
  submitLabel?: string;
}) {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  if (sent) {
    return (
      <div className="flex min-h-[420px] flex-col items-center justify-center rounded-3xl border border-volt-300 bg-volt-50 p-10 text-center">
        <span className="grid h-16 w-16 place-items-center rounded-full bg-volt-400 text-slate-900 shadow-lg shadow-volt-600/30">
          <CheckCircle className="h-8 w-8" />
        </span>
        <h3 className="mt-6 font-display text-2xl font-medium text-slate-900">
          Thank you!
        </h3>
        <p className="mt-3 max-w-sm text-slate-600">
          Your enquiry has been received. A Growth Solar consultant will be in touch
          within 24 hours with your free, no-obligation quote.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-6 text-sm font-semibold text-volt-700 hover:text-volt-800"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2" noValidate>
      <div>
        <Label required>First name</Label>
        <input required type="text" placeholder="First name" className={fieldBase} />
      </div>
      <div>
        <Label required>Last name</Label>
        <input required type="text" placeholder="Last name" className={fieldBase} />
      </div>
      <div>
        <Label required>Email address</Label>
        <input required type="email" placeholder="you@email.com" className={fieldBase} />
      </div>
      <div>
        <Label required>Phone number</Label>
        <input required type="tel" placeholder="04XX XXX XXX" className={fieldBase} />
      </div>
      <div className="sm:col-span-2">
        <Label>Property address</Label>
        <input type="text" placeholder="Suburb and street (optional)" className={fieldBase} />
      </div>
      <div className="sm:col-span-2">
        <Label>Solution required</Label>
        <select defaultValue="" className={fieldBase}>
          <option value="" disabled>
            Select a solution
          </option>
          {SOLUTIONS.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>
      <div className="sm:col-span-2">
        <Label required>Message</Label>
        <textarea
          required
          rows={4}
          placeholder="Tell us about your home or business and your energy goals"
          className={cn(fieldBase, "resize-none")}
        />
      </div>
      <div className="sm:col-span-2">
        <button
          type="submit"
          className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-volt-400 px-7 py-4 text-base font-semibold text-slate-900 shadow-lg shadow-volt-600/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-volt-300"
        >
          {submitLabel}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </button>
      </div>
    </form>
  );
}
