export default function CTAWidget({
  title = "Ready to get started?",
  actionText = "Launch now",
}) {
  return (
    <section className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white rounded-2xl p-8 shadow-xl">
      <div className="flex flex-col items-center gap-4 text-center">
        <h2 className="text-3xl font-semibold tracking-tight">{title}</h2>
        <p className="max-w-md text-white/80">
          Build and launch your marketplace in minutes. Customize sections,
          import shared components, and publish instantly.
        </p>
        <button className="px-6 py-3 rounded-full bg-white text-blue-700 font-semibold shadow-lg hover:shadow-xl transition-all">
          {actionText}
        </button>
      </div>
    </section>
  )
}
