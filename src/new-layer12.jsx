export default function TestimonialWidget({
  testimonials = [
    {
      id: 1,
      name: "Avery",
      role: "Founder",
      feedback: "Loved working with Icebreaker.",
    },
    {
      id: 2,
      name: "Jordan",
      role: "Product Lead",
      feedback: "The editor made launches painless.",
    },
  ],
}) {
  return (
    <section className="bg-gray-50 py-12 px-6 rounded-lg shadow-md max-w-4xl mx-auto">
      <h2 className="text-3xl font-semibold text-center mb-8">
        What Our Customers Say
      </h2>
      <div className="flex flex-col space-y-8">
        {testimonials.map((testimonial) => (
          <blockquote
            key={testimonial.id}
            className="bg-white p-6 rounded-lg shadow-sm"
          >
            <p className="text-gray-700 text-lg mb-4">
              "{testimonial.feedback}"
            </p>
            <footer className="text-sm font-medium text-gray-900">
              — {testimonial.name},{" "}
              <span className="italic">{testimonial.role}</span>
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  )
}
