import { useMemo, useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { CalendarIcon, CheckCircle2, Clock, User } from "lucide-react";
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
  const [selectedService, setSelectedService] = useState(services[0]?.id ?? "");
  const [date, setDate] = useState<Date>();
  const [time, setTime] = useState("");
  const [therapist, setTherapist] = useState("any");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const selectedServiceData = useMemo(
    () => services.find((service) => service.id === selectedService),
    [selectedService]
  );

  const canSubmit =
    !!selectedService &&
    !!date &&
    !!time &&
    name.trim().length > 0 &&
    phone.trim().length > 0;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!canSubmit) return;
    setSubmitted(true);
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
          <h2 className="font-display text-3xl text-foreground mb-3">Booking Request Sent</h2>
          <div className="divider-gold" />
          <p className="text-sm text-muted-foreground font-body mt-4 leading-relaxed">
            Thank you, {name}! Your spa booking request has been received. We'll confirm your appointment on WhatsApp at {phone}.
          </p>
          <div className="mt-6 p-4 bg-muted rounded-sm text-left text-sm font-body space-y-2">
            <p><strong>Service:</strong> {selectedServiceData?.title}</p>
            <p><strong>Price:</strong> {selectedServiceData?.price}</p>
            <p><strong>Date:</strong> {date ? format(date, "PPP") : ""}</p>
            <p><strong>Time:</strong> {time}</p>
            <p><strong>Therapist:</strong> {therapists.find((item) => item.id === therapist)?.name}</p>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div>
      <section className="relative h-[40vh] min-h-[350px] flex items-center justify-center">
        <img src={heroImage} alt="Spa treatment" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-charcoal/60" />
        <div className="relative z-10 text-center px-6">
          <h1 className="font-display text-4xl md:text-6xl text-cream font-light">Book Your Escape</h1>
          <div className="divider-gold mt-4" />
          <p className="mt-4 text-sm font-body text-cream-dark/85">
            Choose your service, view the price instantly, and send your booking request.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            onSubmit={handleSubmit}
            className="glass-card p-8 md:p-10 space-y-8"
          >
            <div>
              <span className="text-xs tracking-[0.3em] uppercase font-body text-primary">Specialized Booking</span>
              <h2 className="font-display text-3xl text-foreground mt-3">Reserve a Signature Treatment</h2>
              <p className="text-sm text-muted-foreground font-body mt-3">
                Select any service from the dropdown below. The price and duration update automatically.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <label className="block space-y-2 md:col-span-2">
                <span className="text-xs tracking-widest uppercase font-body text-muted-foreground">
                  Service & Price
                </span>
                <select
                  value={selectedService}
                  onChange={(event) => setSelectedService(event.target.value)}
                  className="w-full border border-border bg-background px-4 py-3 rounded-sm font-body text-sm focus:outline-none focus:border-primary transition-colors"
                >
                  {services.map((service) => (
                    <option key={service.id} value={service.id}>
                      {service.title} — {service.price}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block space-y-2">
                <span className="text-xs tracking-widest uppercase font-body text-muted-foreground">
                  Full Name
                </span>
                <input
                  type="text"
                  placeholder="Your full name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  className="w-full border border-border bg-background px-4 py-3 rounded-sm font-body text-sm focus:outline-none focus:border-primary transition-colors"
                />
              </label>

              <label className="block space-y-2">
                <span className="text-xs tracking-widest uppercase font-body text-muted-foreground">
                  Phone / WhatsApp
                </span>
                <input
                  type="tel"
                  placeholder="+254..."
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  className="w-full border border-border bg-background px-4 py-3 rounded-sm font-body text-sm focus:outline-none focus:border-primary transition-colors"
                />
              </label>

              <label className="block space-y-2">
                <span className="text-xs tracking-widest uppercase font-body text-muted-foreground">
                  Email
                </span>
                <input
                  type="email"
                  placeholder="Optional email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="w-full border border-border bg-background px-4 py-3 rounded-sm font-body text-sm focus:outline-none focus:border-primary transition-colors"
                />
              </label>

              <label className="block space-y-2">
                <span className="text-xs tracking-widest uppercase font-body text-muted-foreground">
                  Preferred Therapist
                </span>
                <div className="relative">
                  <User className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <select
                    value={therapist}
                    onChange={(event) => setTherapist(event.target.value)}
                    className="w-full border border-border bg-background py-3 pl-11 pr-4 rounded-sm font-body text-sm focus:outline-none focus:border-primary transition-colors"
                  >
                    {therapists.map((item) => (
                      <option key={item.id} value={item.id}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                </div>
              </label>

              <div className="space-y-2">
                <span className="text-xs tracking-widest uppercase font-body text-muted-foreground">
                  Appointment Date
                </span>
                <Popover>
                  <PopoverTrigger asChild>
                    <button
                      type="button"
                      className={cn(
                        "flex w-full items-center gap-2 border border-border bg-background px-4 py-3 rounded-sm font-body text-sm transition-colors",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="w-4 h-4" />
                      {date ? format(date, "PPP") : "Pick a date"}
                    </button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      disabled={(day) => day < new Date(new Date().setHours(0, 0, 0, 0))}
                      className="p-3 pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <label className="block space-y-2">
                <span className="text-xs tracking-widest uppercase font-body text-muted-foreground">
                  Preferred Time
                </span>
                <div className="relative">
                  <Clock className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <select
                    value={time}
                    onChange={(event) => setTime(event.target.value)}
                    className="w-full border border-border bg-background py-3 pl-11 pr-4 rounded-sm font-body text-sm focus:outline-none focus:border-primary transition-colors"
                  >
                    <option value="">Select a time slot</option>
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
              </label>

              <label className="block space-y-2 md:col-span-2">
                <span className="text-xs tracking-widest uppercase font-body text-muted-foreground">
                  Notes
                </span>
                <textarea
                  rows={5}
                  placeholder="Add any preferences, occasion details, or treatment notes"
                  value={notes}
                  onChange={(event) => setNotes(event.target.value)}
                  className="w-full border border-border bg-background px-4 py-3 rounded-sm font-body text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                />
              </label>
            </div>

            <button
              type="submit"
              disabled={!canSubmit}
              className="w-full bg-primary text-primary-foreground px-8 py-4 text-sm tracking-widest uppercase font-body disabled:opacity-40 hover:bg-gold-light transition-colors"
            >
              Send Booking Request
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-6"
          >
            <div className="glass-card p-8">
              <span className="text-xs tracking-[0.3em] uppercase font-body text-primary">Booking Summary</span>
              <h3 className="font-display text-2xl text-foreground mt-3">
                {selectedServiceData?.title ?? "Select a service"}
              </h3>
              <div className="divider-gold !mx-0" />
              <div className="space-y-4 text-sm font-body">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-muted-foreground">Price</span>
                  <span className="text-foreground font-medium">{selectedServiceData?.price ?? "—"}</span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-muted-foreground">Duration</span>
                  <span className="text-foreground font-medium">{selectedServiceData?.duration ?? "—"}</span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-muted-foreground">Category</span>
                  <span className="text-foreground font-medium">{selectedServiceData?.category ?? "—"}</span>
                </div>
                <div className="border-t border-border pt-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedServiceData?.description ?? "Select a service to view treatment details."}
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-8">
              <h3 className="font-display text-2xl text-foreground">Appointment Snapshot</h3>
              <div className="divider-gold !mx-0" />
              <div className="space-y-3 text-sm font-body text-muted-foreground">
                <p><strong className="text-foreground">Date:</strong> {date ? format(date, "PPP") : "Not selected"}</p>
                <p><strong className="text-foreground">Time:</strong> {time || "Not selected"}</p>
                <p><strong className="text-foreground">Therapist:</strong> {therapists.find((item) => item.id === therapist)?.name}</p>
                <p><strong className="text-foreground">Payment:</strong> M-Pesa or PayPal arranged after confirmation</p>
                {notes.trim() && (
                  <p><strong className="text-foreground">Notes:</strong> {notes}</p>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Booking;
