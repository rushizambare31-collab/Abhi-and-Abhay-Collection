import { Link } from 'react-router-dom';
import { ArrowRight, Crown, Gem, Shirt, Star, ShoppingBag, CheckCircle, Award, Heart, Sparkles } from 'lucide-react';
import { getFeaturedProducts, getNewProducts } from '../data/products';
import ProductCard from '../components/ProductCard';
import { useScrollReveal } from '../hooks/useUtils';

function RevealSection({ children, className = '', delay = 0 }) {
  const [ref, isVisible] = useScrollReveal(0.1);
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function Home() {
  const featured = getFeaturedProducts().slice(0, 8);
  const newArrivals = getNewProducts().slice(0, 4);

  return (
    <div>
      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-maroon via-burgundy to-maroon-deep">
        {/* Decorative overlay pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C5A24A' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
        
        {/* Gold corner accents */}
        <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-gold/30 m-6 hidden lg:block" />
        <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-gold/30 m-6 hidden lg:block" />

        <div className="container-main relative z-10 py-20 md:py-0">
          <div className="max-w-3xl mx-auto text-center">
            {/* Ornamental top */}
            <div className="flex items-center justify-center gap-3 mb-8 animate-fade-in">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-gold/60" />
              <Gem size={14} className="text-gold" />
              <span className="text-gold/80 text-[11px] tracking-[0.3em] uppercase font-sans">Premium Indian Menswear</span>
              <Gem size={14} className="text-gold" />
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-gold/60" />
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 animate-fade-in" style={{ animationDelay: '0.15s' }}>
              Where Heritage Meets{' '}
              <span className="text-gold italic">Modern Royalty</span>
            </h1>

            <p className="text-base md:text-lg text-cream/70 max-w-xl mx-auto mb-10 leading-relaxed animate-fade-in" style={{ animationDelay: '0.3s' }}>
              Timeless Maharashtrian-inspired menswear crafted for weddings, celebrations and every distinguished occasion.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in" style={{ animationDelay: '0.45s' }}>
              <Link
                to="/ethnic-suits"
                className="group flex items-center gap-2 px-8 py-3.5 bg-gold text-dark font-semibold rounded-lg hover:bg-gold-light transition-all duration-300 text-sm tracking-wide"
              >
                EXPLORE ETHNIC WEAR
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/casual-outerwear"
                className="flex items-center gap-2 px-8 py-3.5 border-2 border-cream/30 text-cream font-medium rounded-lg hover:bg-cream/10 hover:border-cream/50 transition-all duration-300 text-sm tracking-wide"
              >
                VIEW ALL COLLECTIONS
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              {[
                { icon: <Crown size={16} />, text: 'Premium Indian Craftsmanship' },
                { icon: <Shirt size={16} />, text: 'Curated Menswear' },
                { icon: <Sparkles size={16} />, text: 'Modern Royal Styling' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-cream/50 text-xs tracking-wide">
                  <span className="text-gold/70">{item.icon}</span>
                  {item.text}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-ivory dark:from-[#1A1614] to-transparent" />
      </section>

      {/* ===== HERITAGE INTRO ===== */}
      <section className="py-20 md:py-28">
        <div className="container-main">
          <RevealSection>
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
              {/* Image side */}
              <div className="relative">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-burgundy/10 to-gold/5 border border-border/50">
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-cream-dark via-cream to-ivory">
                    <div className="text-center p-8">
                      <Crown size={48} className="text-gold/40 mx-auto mb-4" />
                      <p className="font-serif text-2xl text-burgundy/30 italic">Heritage & Craft</p>
                    </div>
                  </div>
                </div>
                {/* Decorative frame */}
                <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-gold/20 rounded-2xl -z-10 hidden md:block" />
              </div>

              {/* Story side */}
              <div>
                <div className="ornament-divider mb-6 justify-start">
                  <div className="ornament-diamond" />
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-dark mb-6 leading-tight">
                  THE ART OF<br />
                  <span className="text-burgundy">MAHARASHTRIAN MENSWEAR</span>
                </h2>
                <div className="space-y-4 text-muted leading-relaxed text-sm md:text-base">
                  <p>
                    Inspired by the grandeur of Paithani-woven fabrics and the stately elegance of Peshwa-era architecture, ABHI & ABHAY COLLECTIONS brings you menswear that bridges centuries of tradition with contemporary tailoring.
                  </p>
                  <p>
                    Every piece in our collection tells a story — from the intricate patterns reminiscent of Wada courtyards to the regal silhouettes inspired by Maharashtrian royalty. We blend time-honored craftsmanship with modern fits to create clothing worthy of life's most distinguished moments.
                  </p>
                  <p>
                    Our artisans draw from a rich legacy of textile heritage, ensuring that each garment carries the essence of authentic Indian menswear while meeting the standards of contemporary fashion.
                  </p>
                </div>
                <div className="mt-8 flex items-center gap-3">
                  <div className="w-16 h-px bg-gold" />
                  <span className="text-gold text-xs tracking-[0.2em] uppercase font-semibold">Est. 2024</span>
                </div>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ===== FEATURED COLLECTIONS ===== */}
      <section className="py-16 md:py-24 bg-cream/50 dark:bg-[#1E1A16]">
        <div className="container-main">
          <RevealSection>
            <div className="text-center mb-14">
              <div className="ornament-divider mb-4">
                <div className="ornament-diamond" />
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-dark mb-3">
                Our Collections
              </h2>
              <p className="text-muted max-w-lg mx-auto text-sm md:text-base">
                Explore curated collections designed for the modern Indian gentleman
              </p>
            </div>
          </RevealSection>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: 'Ethnic & Suits',
                desc: 'Royal kurtas, sherwanis, bandhgalas, blazers, and wedding suits for distinguished occasions.',
                path: '/ethnic-suits',
                gradient: 'from-maroon to-burgundy',
                icon: <Crown size={28} />,
              },
              {
                title: 'Casual & Outerwear',
                desc: 'Premium shirts, t-shirts, hoodies, trousers, and jackets for everyday sophistication.',
                path: '/casual-outerwear',
                gradient: 'from-brown to-brown-light',
                icon: <Shirt size={28} />,
              },
              {
                title: 'Footwear & Accessories',
                desc: 'Traditional mojari, kolhapuri chappals, watches, belts, wallets, and refined accessories.',
                path: '/footwear-accessories',
                gradient: 'from-gold-dark to-gold',
                icon: <Gem size={28} />,
              },
            ].map((collection, i) => (
              <RevealSection key={i} delay={i * 150}>
                <Link
                  to={collection.path}
                  className="group block relative overflow-hidden rounded-2xl border border-border/50 bg-white dark:bg-[#231F1B] hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
                >
                  {/* Collection image placeholder */}
                  <div className={`aspect-[4/3] bg-gradient-to-br ${collection.gradient} flex items-center justify-center relative overflow-hidden`}>
                    <div className="text-white/20 group-hover:text-white/30 transition-colors duration-500 group-hover:scale-110 transition-transform">
                      {collection.icon}
                    </div>
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-xl font-semibold text-dark mb-2 group-hover:text-burgundy transition-colors">
                      {collection.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed mb-4">
                      {collection.desc}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-burgundy group-hover:text-maroon transition-colors">
                      Explore Collection
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURED PRODUCTS ===== */}
      <section className="py-16 md:py-24">
        <div className="container-main">
          <RevealSection>
            <div className="flex items-end justify-between mb-10">
              <div>
                <div className="ornament-divider mb-4 justify-start">
                  <div className="ornament-diamond" />
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-dark">
                  Featured Products
                </h2>
                <p className="text-muted text-sm mt-2">Handpicked selections for the discerning gentleman</p>
              </div>
              <Link
                to="/ethnic-suits"
                className="hidden md:flex items-center gap-1.5 text-sm font-medium text-burgundy hover:text-maroon transition-colors"
              >
                View All <ArrowRight size={14} />
              </Link>
            </div>
          </RevealSection>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {featured.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link
              to="/ethnic-suits"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-burgundy hover:text-maroon"
            >
              View All Products <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== ROYAL ETHNIC STORY ===== */}
      <section className="py-20 md:py-28 bg-maroon relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23C5A24A' fill-opacity='0.5'%3E%3Ccircle cx='40' cy='40' r='2'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
        <div className="container-main relative z-10">
          <RevealSection>
            <div className="text-center max-w-3xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-16 h-px bg-gradient-to-r from-transparent to-gold/40" />
                <Crown size={20} className="text-gold" />
                <div className="w-16 h-px bg-gradient-to-l from-transparent to-gold/40" />
              </div>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Made for Moments<br />
                <span className="text-gold italic">That Matter</span>
              </h2>
              <p className="text-cream/60 max-w-xl mx-auto mb-10 leading-relaxed">
                From wedding ceremonies to family celebrations, our collection ensures you make an unforgettable impression at every significant occasion.
              </p>
            </div>
          </RevealSection>

          <RevealSection delay={200}>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6 max-w-4xl mx-auto">
              {[
                { name: 'Sherwanis', icon: '👑' },
                { name: 'Bandhgalas', icon: '🎭' },
                { name: 'Kurta-Pajama', icon: '✨' },
                { name: 'Nehru Jackets', icon: '🏛️' },
                { name: 'Wedding Suits', icon: '💎' },
              ].map((item, i) => (
                <Link
                  key={i}
                  to="/ethnic-suits"
                  className="group flex flex-col items-center p-6 rounded-xl border border-cream/10 hover:border-gold/30 hover:bg-white/5 transition-all duration-300"
                >
                  <span className="text-2xl mb-3">{item.icon}</span>
                  <span className="text-sm font-medium text-cream/80 group-hover:text-gold transition-colors text-center">
                    {item.name}
                  </span>
                </Link>
              ))}
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ===== SHOPPING EXPERIENCE ===== */}
      <section className="py-16 md:py-24">
        <div className="container-main">
          <RevealSection>
            <div className="text-center mb-14">
              <div className="ornament-divider mb-4">
                <div className="ornament-diamond" />
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-dark mb-3">
                The Experience
              </h2>
              <p className="text-muted text-sm">Your journey to royal styling, simplified</p>
            </div>
          </RevealSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { step: '01', title: 'Discover', desc: 'Browse our curated collections', icon: <Search size={24} /> },
              { step: '02', title: 'Choose', desc: 'Select your perfect style', icon: <Heart size={24} /> },
              { step: '03', title: 'Order', desc: 'Seamless checkout experience', icon: <ShoppingBag size={24} /> },
              { step: '04', title: 'Confirm', desc: 'Delivered to your doorstep', icon: <CheckCircle size={24} /> },
            ].map((item, i) => (
              <RevealSection key={i} delay={i * 100}>
                <div className="text-center group">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-cream dark:bg-[#231F1B] border border-border flex items-center justify-center mx-auto mb-5 group-hover:bg-burgundy group-hover:border-burgundy transition-all duration-300">
                    <span className="text-burgundy group-hover:text-white transition-colors">{item.icon}</span>
                  </div>
                  <span className="text-gold font-serif text-lg font-bold">{item.step}</span>
                  <h3 className="font-serif text-lg font-semibold text-dark mt-1 mb-2">{item.title}</h3>
                  <p className="text-sm text-muted">{item.desc}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TRUST / BRAND PROMISE ===== */}
      <section className="py-16 md:py-20 bg-cream/50 dark:bg-[#1E1A16]">
        <div className="container-main">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { icon: <Award size={28} />, title: 'Authentic Indian Craft', desc: 'Rooted in traditional Maharashtrian textile heritage' },
              { icon: <Gem size={28} />, title: 'Premium Fabrics', desc: 'Carefully sourced materials for lasting quality' },
              { icon: <Sparkles size={28} />, title: 'Tailored Finishing', desc: 'Precision stitching and attention to detail' },
              { icon: <Heart size={28} />, title: 'Customer-first Service', desc: 'Dedicated support for a seamless experience' },
            ].map((item, i) => (
              <RevealSection key={i} delay={i * 100}>
                <div className="bg-white dark:bg-[#231F1B] rounded-xl border border-border/50 p-6 md:p-8 text-center hover:shadow-md transition-shadow">
                  <div className="text-gold mb-4 flex justify-center">{item.icon}</div>
                  <h3 className="font-serif text-base md:text-lg font-semibold text-dark mb-2">{item.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-burgundy to-maroon relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23C5A24A' fill-opacity='0.3'%3E%3Cpath d='M20 20l-4-4 4-4 4 4zM0 20l-4-4 4-4 4 4zM40 20l-4-4 4-4 4 4z'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
        <div className="container-main relative z-10 text-center">
          <RevealSection>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-10 h-px bg-gold/40" />
              <Gem size={14} className="text-gold" />
              <div className="w-10 h-px bg-gold/40" />
            </div>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-5 leading-tight">
              Your Next Royal Look<br />
              <span className="text-gold italic">Begins Here</span>
            </h2>
            <p className="text-cream/60 max-w-md mx-auto mb-10">
              Discover the perfect blend of Maharashtrian heritage and contemporary fashion.
            </p>
            <Link
              to="/ethnic-suits"
              className="group inline-flex items-center gap-2 px-10 py-4 bg-gold text-dark font-semibold rounded-lg hover:bg-gold-light transition-all duration-300 text-sm tracking-wider"
            >
              EXPLORE COLLECTION
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </RevealSection>
        </div>
      </section>
    </div>
  );
}

function Search({ size }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
    </svg>
  );
}
