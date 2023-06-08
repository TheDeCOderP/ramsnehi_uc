import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ramsnehi Ply House',
    description: 'A Complete interior Solution for Your Home',
    keywords: 'Ramsnehi Plywood, Plywood shop Mandsaur, Plywood Shop Near Me, Hardware store Mandsaur, Plywood suppliers Mandsaur, Plywood dealer Mandsaur, Hardware shop near me, Plywood and hardware Mandsaur, Quality plywood Mandsaur, Sunmica, Affordable hardware Mandsaur, Plywood sheets Mandsaur, Door hardware Mandsaur, Plywood cutting service Mandsaur, Cabinet hardware Mandsaur, Plywood for furniture Mandsaur, Hardware fittings Mandsaur, Best plywood shop Mandsaur',
  }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
