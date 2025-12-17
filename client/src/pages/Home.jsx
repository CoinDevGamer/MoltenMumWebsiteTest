import React from "react";
import { motion } from "framer-motion";
import CinematicStarRating from "../components/CinematicStarRating";

const pawBlur = (
  <div className="pointer-events-none absolute inset-0 opacity-50">
    <div className="absolute -top-10 -left-10 w-64 h-64 bg-[#f4d9a5] blur-3xl rounded-full" />
    <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#f2c78a] blur-3xl rounded-full" />
  </div>
);

export default function Home() {
  return (
    <div className="w-full bg-[#f6f0e6] overflow-hidden">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#3b2415] via-[#4a2d1a] to-[#2b180e]" />
        {pawBlur}
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_20%_20%,rgba(255,221,170,0.5),transparent_45%),radial-gradient(circle_at_80%_60%,rgba(255,205,145,0.4),transparent_40%)]" />
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 relative z-10 flex flex-col md:flex-row md:items-center gap-12">
          <div className="flex-1 space-y-6 text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs uppercase tracking-[0.08em]"
            >
              🐾 Natural • Local • Loved
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight"
            >
              Nourish Your Pets
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#ffe6bb] via-[#f9d299] to-[#ffd18b]">
                With Honest Goodness
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="text-lg text-white/85 max-w-2xl"
            >
              Craft snacks, chews, and supplements that keep tails wagging. Trusted by the
              Grange-over-Sands community for freshness, care, and sparkle.
            </motion.p>
            <div className="h-2" />
            <div className="flex flex-wrap gap-4 text-sm text-white/80">
              <div className="px-3 py-2 rounded-lg bg-white/10 border border-white/15">
                4.9 ⭐ Google • Community-loved
              </div>
              <div className="px-3 py-2 rounded-lg bg-white/10 border border-white/15">
                Freshly sourced, gently crafted
              </div>
              <div className="px-3 py-2 rounded-lg bg-white/10 border border-white/15">
                Local delivery within 15 miles
              </div>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="flex-1 bg-white/10 border border-white/15 rounded-3xl backdrop-blur-sm p-6 shadow-2xl space-y-4"
          >
            <div className="text-white text-xl font-semibold">Trusted by pet parents</div>
            <CinematicStarRating value={5} size={40} />
            <p className="text-white/85 text-sm leading-relaxed">
              “These treats are our go-to. The dogs dance when Pawlina arrives, and customer care is
              incredible.”
            </p>
            <div className="text-white/70 text-xs">Local customer, Grange-over-Sands</div>
          </motion.div>
        </div>
      </section>

      {/* PROMO STRIP */}
      <section className="bg-gradient-to-r from-[#f8edd7] via-[#f2dec1] to-[#f7e7d3] py-6 shadow-inner">
        <div className="max-w-6xl mx-auto px-6 flex flex-wrap items-center justify-center gap-4 text-[#3b2415] text-sm font-semibold">
          <div className="px-4 py-2 rounded-full bg-white shadow-sm border border-[#ead6b8]">🐾 Natural ingredients</div>
          <div className="px-4 py-2 rounded-full bg-white shadow-sm border border-[#ead6b8]">🚚 Local delivery & collect</div>
          <div className="px-4 py-2 rounded-full bg-white shadow-sm border border-[#ead6b8]">💛 Loved by locals</div>
          <div className="px-4 py-2 rounded-full bg-white shadow-sm border border-[#ead6b8]">✨ Special offers weekly</div>
        </div>
      </section>

      {/* SIGNATURE EXPERIENCE */}
      <section className="max-w-6xl mx-auto px-6 py-14 space-y-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-[#b07a3d] font-semibold">Signature experience</div>
            <h3 className="text-3xl md:text-4xl font-black text-[#3b2415]">A joyful ritual for you and your pet</h3>
            <p className="text-[#5a4535] max-w-2xl mt-2">
              Unwrap a box that feels crafted, from the scent of fresh chews to the sparkle of healthy coats.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 text-sm text-[#3b2415]">
            <span className="px-3 py-2 rounded-full bg-[#f8edd7] border border-[#ead6b8]">✨ Curated by species</span>
            <span className="px-3 py-2 rounded-full bg-[#f8edd7] border border-[#ead6b8]">🌿 Gentle ingredients</span>
            <span className="px-3 py-2 rounded-full bg-[#f8edd7] border border-[#ead6b8]">🧡 Human grade care</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "The welcome sniff", desc: "Open a pack and watch tails wag at the aroma of honest meats.", badge: "Scent-first", icon: "👃" },
            { title: "Shine and vitality", desc: "Omega rich oils and gentle supplements that keep coats glossy.", badge: "Glow", icon: "✨" },
            { title: "Easy, every week", desc: "Order, schedule, and repeat with simple re-stocks for your routine.", badge: "Convenient", icon: "⏱" },
          ].map((card, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8, scale: 1.01 }}
              className="rounded-2xl bg-gradient-to-br from-[#fff9f2] to-[#f5e0bf] border border-[#ead6b8] shadow-xl p-6 space-y-3"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 text-xs font-semibold text-[#b07a3d] border border-[#e5cda7]">
                {card.icon} {card.badge}
              </div>
              <div className="text-xl font-semibold text-[#3b2415]">{card.title}</div>
              <div className="text-sm text-[#5a4535]">{card.desc}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PRODUCT TEASERS */}
      <section className="max-w-6xl mx-auto px-6 py-14 space-y-6">
        <div className="text-center">
          <div className="text-xs uppercase tracking-[0.2em] text-[#b07a3d] font-semibold">Browse quickly</div>
          <h3 className="text-3xl md:text-4xl font-black text-[#3b2415]">Favorites for today</h3>
          <p className="text-[#5a4535] mt-2">A few highlights to tempt your pet’s tastebuds.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Beef Chew Bone", desc: "Slow-dried for mindful gnawing.", price: "£7.99" },
            { title: "Salmon Treats", desc: "Omega-rich bites, flaky and soft.", price: "£4.99" },
            { title: "Coat & Shine Oil", desc: "Gloss-boosting drizzle for meals.", price: "£9.99" },
          ].map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6, scale: 1.01 }}
              className="rounded-2xl bg-white shadow-xl border border-[#ead6b8] p-6 space-y-2"
            >
              <div className="text-xl font-semibold text-[#3b2415]">{p.title}</div>
              <div className="text-sm text-[#5a4535]">{p.desc}</div>
              <div className="text-sm font-bold text-[#3b2415]">{p.price}</div>
              <button
                type="button"
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#f9d99b] to-[#e4b96e] text-[#2f1f13] font-semibold shadow hover:shadow-lg transition"
              >
                View
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="max-w-6xl mx-auto px-6 py-16 space-y-10">
        <div className="text-center">
          <div className="text-xs uppercase tracking-[0.2em] text-[#b07a3d] font-semibold">Why Pawlina</div>
          <h2 className="text-4xl md:text-5xl font-black text-[#3b2415] mt-2">Made with love, served with care</h2>
          <p className="text-[#5a4535] max-w-3xl mx-auto mt-3">
            Premium treats, gentle chews, thoughtful supplements curated for happy, healthy pets.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Local delivery", desc: "Fast drop-offs within 15 miles, or collect in-store.", icon: "🚚" },
            { title: "Natural ingredients", desc: "Wholesome recipes with no nasties, just goodness.", icon: "🌱" },
            { title: "Loved by locals", desc: "4.9+ ratings and glowing word of mouth in our community.", icon: "💛" },
          ].map((f, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6, scale: 1.01 }}
              className="rounded-2xl bg-white shadow-xl border border-[#ead6b8] p-6 space-y-2"
            >
              <div className="text-2xl">{f.icon}</div>
              <div className="text-xl font-semibold text-[#3b2415]">{f.title}</div>
              <div className="text-sm text-[#5a4535]">{f.desc}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="max-w-6xl mx-auto px-6 py-14 space-y-8">
        <div className="text-center">
          <div className="text-xs uppercase tracking-[0.2em] text-[#b07a3d] font-semibold">How it works</div>
          <h3 className="text-3xl md:text-4xl font-black text-[#3b2415]">Simple steps to happy tails</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { step: "1", title: "Pick their favourites", desc: "Choose chews, treats, or supplements by species.", icon: "🎯" },
            { step: "2", title: "Set delivery or collect", desc: "Local drop-off within 15 miles or easy pick-up.", icon: "📦" },
            { step: "3", title: "Enjoy the glow", desc: "Watch them thrive with wholesome, joyful bites.", icon: "🌟" },
          ].map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6, scale: 1.01 }}
              className="rounded-2xl bg-white shadow-xl border border-[#ead6b8] p-6 space-y-2"
            >
              <div className="flex items-center gap-2 text-[#b07a3d] text-sm font-semibold">
                <span className="h-8 w-8 rounded-full bg-[#f6d59b] flex items-center justify-center text-[#3b2415]">{s.step}</span>
                <span>{s.icon}</span>
              </div>
              <div className="text-xl font-semibold text-[#3b2415]">{s.title}</div>
              <div className="text-sm text-[#5a4535]">{s.desc}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* REVIEWS */}
      <section className="max-w-6xl mx-auto px-6 py-16 space-y-8">
        <div className="text-center">
          <div className="text-xs uppercase tracking-[0.2em] text-[#b07a3d] font-semibold">Reviews</div>
          <h3 className="text-3xl md:text-4xl font-black text-[#3b2415]">Pet parents can’t stop talking</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            "Absolutely amazing pet shop with a wide variety for dogs, cats, birds, rabbits, and more. The owner is incredibly friendly and helpful.",
            "A lovely independent shop with a friendly smile and welcome for customers and pets.",
            "Excellent pet shop with a great selection of products and very friendly staff.",
          ].map((quote, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8, scale: 1.01 }}
              className="rounded-2xl bg-white shadow-xl border border-[#ead6b8] p-6 text-[#3b2415]"
            >
              <div className="text-xl">“{quote}”</div>
              <div className="text-xs text-[#7a6140] mt-3">Local pet parent</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FINAL CTA REMOVED FOR CLEANER FLOW */}
    </div>
  );
}
