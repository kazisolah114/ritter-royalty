import { MapPin, Zap, BookOpen, Navigation } from "lucide-react"

interface PropertyLocationMapProps {
  location: any
}

const PropertyLocation = ({ location }: PropertyLocationMapProps) => {
  return (
    <div>
      <h2 className="text-2xl font-serif font-bold text-foreground mb-6">Location & Neighborhood</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Map */}
        <div className="bg-secondary/10 rounded-xl h-80 flex items-center justify-center border border-border">
          <div className="text-center">
            <MapPin size={48} className="text-accent mx-auto mb-4" />
            <p className="text-foreground/60">Interactive map coming soon</p>
          </div>
        </div>

        {/* Details */}
        <div className="space-y-4">
          <div className="bg-card border border-border rounded-xl p-6 hover:border-accent/50 transition-colors">
            <div className="flex items-start gap-4">
              <Navigation className="text-accent mt-1 flex-shrink-0" size={24} />
              <div>
                <h3 className="font-semibold text-foreground mb-1">Neighborhood</h3>
                <p className="text-foreground/60">{location.neighborhood}</p>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-6 hover:border-accent/50 transition-colors">
            <div className="flex items-start gap-4">
              <Zap className="text-accent mt-1 flex-shrink-0" size={24} />
              <div>
                <h3 className="font-semibold text-foreground mb-1">Walk Score</h3>
                <p className="text-foreground/60">{location.walkScore} - Very Walkable</p>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-6 hover:border-accent/50 transition-colors">
            <div className="flex items-start gap-4">
              <BookOpen className="text-accent mt-1 flex-shrink-0" size={24} />
              <div>
                <h3 className="font-semibold text-foreground mb-1">Schools</h3>
                <p className="text-foreground/60">{location.schools}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PropertyLocation;