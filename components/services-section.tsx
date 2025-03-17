export function ServicesSection() {
    return (
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">our services</h2>
            <p className="text-gray-500 max-w-3xl mx-auto">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry
              standard dummy text ever since the 1500s.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard title="Search" />
            <ServiceCard title="Purchase" />
            <ServiceCard title="Shipping" />
          </div>
        </div>
      </section>
    )
  }
  
  interface ServiceCardProps {
    title: string
  }
  
  function ServiceCard({ title }: ServiceCardProps) {
    return (
      <div className="bg-white p-8 rounded-lg shadow-sm text-center">
        <div className="w-24 h-24 bg-yellow-400 rounded-full mx-auto mb-6" />
        <h3 className="text-xl font-bold mb-4 text-yellow-400">{title}</h3>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa
        </p>
      </div>
    )
  }
  
  