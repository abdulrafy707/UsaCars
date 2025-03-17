export function StatsSection() {
    return (
      <section className="w-full py-12 bg-[#FFF9E6]">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <StatItem value="2505" label="Cars were sold per year" />
            <StatItem value="15" label="Years of work" />
            <StatItem value="50" label="Delivery in countries" />
          </div>
        </div>
      </section>
    )
  }
  
  interface StatItemProps {
    value: string
    label: string
  }
  
  function StatItem({ value, label }: StatItemProps) {
    return (
      <div className="space-y-2">
        <h3 className="text-4xl font-bold text-yellow-400">
          {value}
          <span className="text-yellow-400">+</span>
        </h3>
        <p className="text-yellow-400">{label}</p>
      </div>
    )
  }
  
  