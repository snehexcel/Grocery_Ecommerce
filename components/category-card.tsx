import Link from "next/link"

interface CategoryCardProps {
  name: string
  image: string
  href: string
}

export function CategoryCard({ name, image, href }: CategoryCardProps) {
  return (
    <Link href={href} className="group">
      <div className="overflow-hidden rounded-lg border bg-white transition-colors hover:border-green-600 dark:bg-gray-950">
        <div className="relative aspect-square overflow-hidden">
          <img
            src={image || "/placeholder.svg"}
            alt={name}
            className="object-cover transition-transform group-hover:scale-105"
          />
        </div>
        <div className="p-4 text-center">
          <h3 className="font-medium">{name}</h3>
        </div>
      </div>
    </Link>
  )
}
