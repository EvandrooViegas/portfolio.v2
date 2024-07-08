import "@/app/globals.css"
import "@/app/index.css"
import { Bebas_Neue } from "next/font/google"
 
import { cn } from "@/lib/utils"
import { Metadata } from "next"
 
const fontSans = Bebas_Neue({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: "400"
})

export const metadata: Metadata = {
  title: "Evandro Viegas's Portfolio",
  description: "Evandro Viegas Portfolio",
icons: {
  icon: "/icon.png"
}
}
export const formLink = "https://tally.so/r/woOAGe"
export default function RootLayout({ children }: { 
  children: React.ReactNode

}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <link rel="icon" href="/icon.png" sizes="any" />
      <body
        className={cn(
          "min-h-screen bg-background font-sans text-black antialiased",
          fontSans.variable
        )}
      >
      <>
      {children}
      </>
      </body>
    </html>
  )
}