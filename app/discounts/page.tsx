import { Header } from "@/components/header"
import { DiscountCard } from "@/components/discount-card"

export default function DiscountsPage() {
  const allDiscounts = [
    {
      image: "/spa-treatment-with-stones.jpg",
      title: "Luxury Spa Package",
      discount: "30% OFF",
      originalPrice: "$200",
      discountedPrice: "$140",
      validUntil: "Dec 31",
    },
    {
      image: "/massage-therapy-hands.jpg",
      title: "Deep Tissue Massage",
      discount: "25% OFF",
      originalPrice: "$120",
      discountedPrice: "$90",
      validUntil: "Dec 25",
    },
    {
      image: "/makeup-artist-applying-makeup.jpg",
      title: "Bridal Makeup Package",
      discount: "20% OFF",
      originalPrice: "$250",
      discountedPrice: "$200",
      validUntil: "Jan 15",
    },
    {
      image: "/hairstylist-cutting-hair.jpg",
      title: "Hair Color & Style",
      discount: "15% OFF",
      originalPrice: "$150",
      discountedPrice: "$127",
      validUntil: "Dec 28",
    },
    {
      image: "/nail-care-manicure.jpg",
      title: "Gel Manicure & Pedicure",
      discount: "20% OFF",
      originalPrice: "$80",
      discountedPrice: "$64",
      validUntil: "Dec 30",
    },
    {
      image: "/spa-treatment-with-stones.jpg",
      title: "Hot Stone Massage",
      discount: "35% OFF",
      originalPrice: "$180",
      discountedPrice: "$117",
      validUntil: "Jan 5",
    },
    {
      image: "/person-lifting-weights-training.jpg",
      title: "10-Session Training Package",
      discount: "40% OFF",
      originalPrice: "$1000",
      discountedPrice: "$600",
      validUntil: "Jan 10",
    },
    {
      image: "/makeup-artist-applying-makeup.jpg",
      title: "Skincare Consultation & Treatment",
      discount: "25% OFF",
      originalPrice: "$160",
      discountedPrice: "$120",
      validUntil: "Dec 29",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="px-6 lg:px-20 py-12">
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4">Exclusive Discounts</h1>
          <p className="text-xl text-muted-foreground">
            Save big on premium beauty and wellness services from our top-rated professionals
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {allDiscounts.map((discount, index) => (
            <DiscountCard key={index} {...discount} />
          ))}
        </div>
      </main>
    </div>
  )
}
