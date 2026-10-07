import { motion } from "framer-motion";
import { Loader } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";
import { SectionLabel } from "../components/ui";

function getFormspreeId(value) {
  if (!value) return "";
  const trimmed = String(value).trim();
  const match = trimmed.match(/formspree\.io\/f\/([^/?#]+)/i);
  return match ? match[1] : trimmed;
}

const FORMSPREE = getFormspreeId(import.meta.env.VITE_FORMSPREE_ID);

const inputClass =
  "w-full border-0 border-b border-border bg-transparent px-0 py-3 text-foreground placeholder:text-muted/70 outline-none transition-colors focus:border-foreground disabled:opacity-60";

const details = [
  { label: "Email", value: "christiandave120702@gmail.com", href: "mailto:christiandave120702@gmail.com" },
  { label: "Phone", value: "+63 956 537 6522" },
  { label: "GitHub", value: "ChristianAlicaba2002", href: "https://github.com/ChristianAlicaba2002" },
  { label: "Location", value: "Philippines" },
];

export default function ContactMe() {
  const [state, handleSubmit] = useForm(FORMSPREE);

  return (
    <div className="w-full bg-background px-6 py-24 sm:px-8">
      <div className="contact-container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <SectionLabel>Contact</SectionLabel>
          <h2 className="max-w-xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            If you have a project or a question, write.
          </h2>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted">
            I usually reply within a day or two. Email is fine if you&apos;d rather skip the form.
          </p>
        </motion.div>

        <motion.div
          className="mt-16 grid gap-16 lg:grid-cols-[minmax(0,16rem)_1fr]"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45, delay: 0.05, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <dl className="space-y-8">
            {details.map((item) => (
              <div key={item.label}>
                <dt className="text-xs text-muted">{item.label}</dt>
                <dd className="mt-1 text-sm text-foreground">
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="underline decoration-border underline-offset-4 hover:decoration-foreground"
                    >
                      {item.value}
                    </a>
                  ) : (
                    item.value
                  )}
                </dd>
              </div>
            ))}
          </dl>

          <div>
            {state.succeeded && (
              <p className="mb-8 text-sm text-foreground">Sent. I&apos;ll get back to you soon.</p>
            )}
            {state.errors && state.errors.length > 0 && (
              <p className="mb-8 text-sm text-red-600 dark:text-red-400">
                Couldn&apos;t send. Try again or email me directly.
              </p>
            )}

            <form onSubmit={handleSubmit} className="space-y-8" method="post">
              <div>
                <label htmlFor="name" className="block text-xs text-muted">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  className={inputClass}
                  required
                  disabled={state.submitting}
                />
                <ValidationError prefix="Name" field="name" errors={state.errors} className="mt-1 text-xs text-red-500" />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs text-muted">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  className={inputClass}
                  required
                  disabled={state.submitting}
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} className="mt-1 text-xs text-red-500" />
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs text-muted">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="What is this about?"
                  className={inputClass}
                  required
                  disabled={state.submitting}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs text-muted">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="A short note is enough."
                  className={`${inputClass} resize-none`}
                  required
                  disabled={state.submitting}
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} className="mt-1 text-xs text-red-500" />
              </div>

              <button
                type="submit"
                disabled={state.submitting}
                className="inline-flex h-8 shrink-0 items-center justify-center whitespace-nowrap rounded-md border border-foreground px-3 text-xs font-medium leading-none text-foreground duration-300 hover:bg-foreground hover:text-background disabled:cursor-not-allowed disabled:opacity-60"
              >
                {state.submitting ? (
                  <span className="inline-flex items-center gap-2">
                    <Loader size={14} className="animate-spin" />
                    Sending
                  </span>
                ) : (
                  "Send message"
                )}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
