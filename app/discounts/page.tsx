"use client"

import { Header } from "@/components/header"
import { DiscountCard } from "@/components/discount-card"
import { motion } from "framer-motion"

export default function DiscountsPage() {
  const allDiscounts = [
    {
      image: "/yoga-women.jpg",
      title: "10-Class Yoga Package",
      discount: "30% OFF",
      originalPrice: "$700",
      discountedPrice: "$490",
      validUntil: "Dec 31",
    },
    {
      image: "/woman-doing-pilates-with-ball.jpg",
      title: "8-Session Pilates Reformer Pack",
      discount: "25% OFF",
      originalPrice: "$680",
      discountedPrice: "$510",
      validUntil: "Dec 25",
    },
    {
      image: "/spa-treatment-with-stones.jpg",
      title: "Monthly Unlimited Yoga Pass",
      discount: "20% OFF",
      originalPrice: "$250",
      discountedPrice: "$200",
      validUntil: "Jan 15",
    },
    {
      image: "/woman-doing-pilates-with-ball.jpg",
      title: "Private Pilates 5-Pack",
      discount: "15% OFF",
      originalPrice: "$425",
      discountedPrice: "$361",
      validUntil: "Dec 28",
    },
    {
      image: "/yoga-women.jpg",
      title: "Yoga & Meditation Starter Pack",
      discount: "20% OFF",
      originalPrice: "$150",
      discountedPrice: "$120",
      validUntil: "Dec 30",
    },
    {
      image: "/spa-treatment-with-stones.jpg",
      title: "Restorative Yoga Series (6 weeks)",
      discount: "35% OFF",
      originalPrice: "$420",
      discountedPrice: "$273",
      validUntil: "Jan 5",
    },
    {
      image: "/woman-doing-pilates-with-ball.jpg",
      title: "Pilates Reformer 10-Pack",
      discount: "40% OFF",
      originalPrice: "$850",
      discountedPrice: "$510",
      validUntil: "Jan 10",
    },
    {
      image: "/yoga-women.jpg",
      title: "Power Yoga 12-Class Bundle",
      discount: "25% OFF",
      originalPrice: "$900",
      discountedPrice: "$675",
      validUntil: "Dec 29",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="min-h-screen w-full px-4 sm:px-6 lg:px-12 xl:px-20 py-12 max-w-[1920px] mx-auto">
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Exclusive Discounts 🎉</h1>
          <p className="text-lg sm:text-xl text-muted-foreground">
            Save big on premium yoga and Pilates packages from our top-rated instructors
          </p>
        </motion.div>
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {allDiscounts.map((discount, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <DiscountCard {...discount} />
            </motion.div>
          ))}
        </motion.div>
      </main>
    </div>
  )
}
