import {
  Rocket,
  Package,
  ShoppingCart,
  ClipboardList,
  BarChart3,
  TrendingUp,
  Palette,
  Settings,
  Lightbulb,
  AlertTriangle,
  Check,
  X,
  UtensilsCrossed,
  Scissors,
  Shirt,
  Home,
  Car,
  Camera,
  Wrench,
  Smartphone,
  Mail,
  BookOpen,
  Target,
} from 'lucide-react'
import { cn } from '@/lib/shared/utils'
import type { LucideIcon } from 'lucide-react'

// ============================================================
// MDX ICON SHORTCODES
// Replaces emoji used across content/docs/**/*.mdx.
// Registered globally via useMDXComponents() in mdx-components.tsx,
// so any .mdx file can use these tags directly — no per-file import.
//
// Usage inside .mdx:
//   ## <IconRocket /> Mulai dari sini
//   - <IconCheck /> Toko online
//   - <IconX /> Kasir
//
// Sizing: inline with text by default (size-4, -translate-y-[1px] to
// optically align with cap-height), matching how emoji sat in the
// original copy. Pass className to override per-use if needed.
// ============================================================

interface MdxIconProps {
  className?: string
}

function makeMdxIcon(Icon: LucideIcon, defaultColorClass: string, label: string) {
  const Component = ({ className }: MdxIconProps) => (
    <Icon
      className={cn(
        'inline-block size-4 -translate-y-[1px] shrink-0 align-middle',
        defaultColorClass,
        className,
      )}
      aria-hidden
      role="img"
      aria-label={label}
    />
  )
  Component.displayName = `Mdx${label.replace(/\s+/g, '')}Icon`
  return Component
}

// --- Module / feature icons (was: 🚀 📦 🛒 📋 📊 📈 🎨 ⚙️) ---
export const IconRocket = makeMdxIcon(Rocket, 'text-fd-foreground', 'Setup Toko')
export const IconPackage = makeMdxIcon(Package, 'text-fd-foreground', 'Manajemen Produk')
export const IconCart = makeMdxIcon(ShoppingCart, 'text-fd-foreground', 'Kasir')
export const IconBoard = makeMdxIcon(ClipboardList, 'text-fd-foreground', 'Papan Kerja')
export const IconStock = makeMdxIcon(BarChart3, 'text-fd-foreground', 'Manajemen Stok')
export const IconReports = makeMdxIcon(TrendingUp, 'text-fd-foreground', 'Laporan')
export const IconStudio = makeMdxIcon(Palette, 'text-fd-foreground', 'Studio')
export const IconSettings = makeMdxIcon(Settings, 'text-fd-foreground', 'Pengaturan')

// --- Callout inline markers (was: 💡 ⚠️) ---
export const IconTip = makeMdxIcon(Lightbulb, 'text-[#8145b5]', 'Tip')
export const IconWarning = makeMdxIcon(AlertTriangle, 'text-[#ab6400]', 'Peringatan')

// --- Feature-table check / cross (was: ✅ ❌) ---
export const IconCheck = makeMdxIcon(Check, 'text-[#16a34a]', 'Tersedia')
export const IconCross = makeMdxIcon(X, 'text-[#eb8e90]', 'Tidak tersedia')

// --- Business sector icons (was: 🍽️ 💇 👗 🏠 🚗 📸 🛠️) ---
export const IconFood = makeMdxIcon(UtensilsCrossed, 'text-fd-foreground', 'Makanan & Minuman')
export const IconBeauty = makeMdxIcon(Scissors, 'text-fd-foreground', 'Kesehatan & Kecantikan')
export const IconRetail = makeMdxIcon(Shirt, 'text-fd-foreground', 'Retail')
export const IconHousehold = makeMdxIcon(Home, 'text-fd-foreground', 'Jasa Rumah Tangga')
export const IconAutomotive = makeMdxIcon(Car, 'text-fd-foreground', 'Otomotif')
export const IconLifestyle = makeMdxIcon(Camera, 'text-fd-foreground', 'Gaya Hidup & Hiburan')
export const IconProfessional = makeMdxIcon(Wrench, 'text-fd-foreground', 'Jasa Profesional')

// --- Contact / misc (was: 📱 📧 📖 🎯 🔧) ---
export const IconWhatsapp = makeMdxIcon(Smartphone, 'text-fd-foreground', 'WhatsApp')
export const IconEmail = makeMdxIcon(Mail, 'text-fd-foreground', 'Email')
export const IconGuide = makeMdxIcon(BookOpen, 'text-fd-foreground', 'Panduan')
export const IconTarget = makeMdxIcon(Target, 'text-fd-foreground', 'Target Pengguna')
export const IconHelp = makeMdxIcon(Wrench, 'text-fd-foreground', 'Bantuan')

// Map of every shortcode exposed to MDX. Spread this into the
// components object returned by useMDXComponents().
export const mdxIconComponents = {
  IconRocket,
  IconPackage,
  IconCart,
  IconBoard,
  IconStock,
  IconReports,
  IconStudio,
  IconSettings,
  IconTip,
  IconWarning,
  IconCheck,
  IconCross,
  IconFood,
  IconBeauty,
  IconRetail,
  IconHousehold,
  IconAutomotive,
  IconLifestyle,
  IconProfessional,
  IconWhatsapp,
  IconEmail,
  IconGuide,
  IconTarget,
  IconHelp,
}