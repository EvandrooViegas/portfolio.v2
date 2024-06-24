import "@/app/globals.css"
import "@/app/index.css"
import { Bebas_Neue } from "next/font/google"
 
import { cn } from "@/lib/utils"
 
const fontSans = Bebas_Neue({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: "400"
})

 
export default function RootLayout({ children }: { 
  children: React.ReactNode

}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
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