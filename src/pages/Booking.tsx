import { useState } from "react";
import { motion } from "framer-motion";
import { CalendarIcon, Clock, User, CheckCircle2 } from "lucide-react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { services } from "@/data/services";
import heroImage from "@/assets/massage-room.jpg";

const therapists = [
  { id: "any", name: "Any Available Therapist" },
  { id: "grace", name: "Grace Mwangi — Senior Massage Therapist" },
  { id: "james", name: "James Ochieng — Skincare Specialist" },
  { id: "wanjiku", name: "Wanjiku Njeri — Nail Artist" },
  { id: "aisha", name: "Aisha Mohamed — Holistic Wellness Expert" },
];

const timeSlots = [
  "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
  "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM",
  "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM",
];

const Booking = () => {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState("");
  const [date, setDate] = useState<Date>();
  const [time, setTime] = useState("");
  const [therapist, setTherapist] = useState("any");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const canProceed = (s: number) => {
    if (s === 1) return !!selectedService;
    if (s === 2) return !!date && !!time;
    if (s === 3) return name.trim().length > 0 && phone.trim().length > 0;
    return false;
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background pt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass-card p-12 text-center max-w-md mx-6"
        >
          <CheckCircle2 className="w-16 h-16 text-secondary mx-auto mb-6" />
          <h2 className="font-display text-3xl text-foreground mb-3">Booking Confirmed</h2>
          <div className="divider-gold" />
          <p className="text-sm text-muted-foreground font-body mt-4 leading-relaxed">
            Thank you, {name}! Your appointment has been reserved. We'll send a confirmation via WhatsApp to {phone}.
          </p>
          <div className="mt-6 p-4 bg-muted rounded-sm text-left text-sm font-body space-y-2">
            <p><strong>Service:</strong> {services.find(s => s.id === selectedService)?.title}</p>
            <p><strong>Date:</strong> {date ? format(date, "PPP") : ""}</p>
            <p><strong>Time:</strong> {time}</p>
            <p><strong>Therapist:</strong> {therapists.find(t => t.id === therapist)?.name}</p>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[350px] flex items-center justify-center">
        <img src={heroImage} alt="Spa treatment" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-charcoal/60" />
        <div className="relative z-10 text-center px-6">
          <h1 className="font-display text-4xl md:text-6xl text-cream font-light">Book Your Escape</h1>
          <div className="divider-gold mt-4" />
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="max-w-2xl mx-auto">
          {/* Steps indicator */}
          <div className="flex items-center justify-center gap-4 mb-12">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center gap-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-body ${
                  step >= s ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                }`}>
                  {s}
                </div>
                <span className="text-xs font-body text-muted-foreground hidden sm:inline">
                  {s === 1 ? "Service" : s === 2 ? "Date & Time" : "Details"}
                </span>
                {s < 3 && <div className={`w-12 h-px ${step > s ? "bg-primary" : "bg-border"}`} />}
              </div>
            ))}
          </div>

          {/* Step 1: Service */}
          {step === 1 && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-3">
              <h3 className="font-display text-2xl text-center mb-6">Select Your Treatment</h3>
              {services.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setSelectedService(s.id)}
                  className={`w-full text-left p-4 border rounded-sm transition-all font-body text-sm flex justify-between items-center ${
                    selectedService === s.id
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  <div>
                    <span className="font-medium text-foreground">{s.title}</span>
                    <span className="text-muted-foreground ml-2">· {s.duration}</span>
                  </div>
                  <span className="text-primary font-medium">{s.price}</span>
                </button>
              ))}
            </motion.div>
          )}

          {/* Step 2: Date & Time */}
          {step === 2 && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
              <h3 className="font-display text-2xl text-center mb-6">Choose Date & Time</h3>
              <div className="flex justify-center">
                <Popover>
                  <PopoverTrigger asChild>
                    <button className={cn(
                      "flex items-center gap-2 border border-border px-6 py-3 rounded-sm font-body text-sm",
                      !date && "text-muted-foreground"
                    )}>
                      <CalendarIcon className="w-4 h-4" />
                      {date ? format(date, "PPP") : "Pick a date"}
                    </button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="center">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      disabled={(d) => d < new Date()}
                      className="p-3 pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div>
                <p className="text-sm font-body text-muted-foreground text-center mb-4">Available Times</p>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                  {timeSlots.map((t) => (
                    <button
                      key={t}
                      onClick={() => setTime(t)}
                      className={`py-2.5 text-xs font-body border rounded-sm transition-all ${
                        time === t
                          ? "border-primary bg-primary/5 text-foreground"
                          : "border-border text-muted-foreground hover:border-primary/50"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-sm font-body text-muted-foreground text-center mb-4">Preferred Therapist</p>
                <div className="space-y-2">
                  {therapists.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => setTherapist(t.id)}
                      className={`w-full text-left p-3 border rounded-sm transition-all font-body text-sm flex items-center gap-3 ${
                        therapist === t.id
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <User className="w-4 h-4 text-muted-foreground" />
                      {t.name}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 3: Details */}
          {step === 3 && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
              <h3 className="font-display text-2xl text-center mb-6">Your Details</h3>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border border-border bg-background px-4 py-3 rounded-sm font-body text-sm focus:outline-none focus:border-primary transition-colors"
                />
                <input
                  type="tel"
                  placeholder="Phone / WhatsApp (+254...)"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full border border-border bg-background px-4 py-3 rounded-sm font-body text-sm focus:outline-none focus:border-primary transition-colors"
                />
                <input
                  type="email"
                  placeholder="Email (optional)"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-border bg-background px-4 py-3 rounded-sm font-body text-sm focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              {/* Summary */}
              <div className="p-6 bg-muted rounded-sm text-sm font-body space-y-2">
                <h4 className="font-display text-lg mb-3">Booking Summary</h4>
                <p><strong>Service:</strong> {services.find(s => s.id === selectedService)?.title}</p>
                <p><strong>Price:</strong> {services.find(s => s.id === selectedService)?.price}</p>
                <p><strong>Date:</strong> {date ? format(date, "PPP") : "—"}</p>
                <p><strong>Time:</strong> {time}</p>
                <p><strong>Therapist:</strong> {therapists.find(t => t.id === therapist)?.name}</p>
              </div>

              <p className="text-xs text-muted-foreground font-body text-center">
                Payment via M-Pesa or PayPal will be arranged upon confirmation.
              </p>
            </motion.div>
          )}

          {/* Navigation */}
          <div className="flex justify-between mt-10">
            {step > 1 && (
              <button
                onClick={() => setStep(step - 1)}
                className="text-sm tracking-widest uppercase font-body text-muted-foreground hover:text-foreground transition-colors"
              >
                ← Back
              </button>
            )}
            <div className="ml-auto">
              {step < 3 ? (
                <button
                  disabled={!canProceed(step)}
                  onClick={() => setStep(step + 1)}
                  className="bg-primary text-primary-foreground px-8 py-3 text-sm tracking-widest uppercase font-body disabled:opacity-40 hover:bg-gold-light transition-colors"
                >
                  Continue →
                </button>
              ) : (
                <button
                  disabled={!canProceed(step)}
                  onClick={handleSubmit}
                  className="bg-primary text-primary-foreground px-8 py-3 text-sm tracking-widest uppercase font-body disabled:opacity-40 hover:bg-gold-light transition-colors"
                >
                  Confirm Booking
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Booking;
