import Wallet from "./wallet"
import CTAWidget from "./cta-widget"


<div className="space-y-10">
  <h1 className="text-4xl font-bold">Design Simplicity</h1>
  <CTAWidget actionText="Book a demo" />
</div>

<div class="max-w-4xl mx-auto px-4 py-10">
  <h1 class="text-4xl font-bold mb-4 text-center">Design Simplicity</h1>
  <p class="text-lg text-gray-700 mb-8 text-center">
    Discover how simplicity in design enhances usability, clarity, and user
    satisfaction. Explore featured products that embody minimalist principles.
  </p>
  <Wallet />

  <section class="mb-12">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="bg-white rounded-lg shadow p-6 flex flex-col items-center">
        <svg
          class="w-12 h-12 text-blue-500 mb-4"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 4v16m8-8H4"
          />
        </svg>
        <h2 class="text-xl font-semibold mb-2">Clarity</h2>
        <p class="text-gray-600 text-center">
          Simple designs remove distractions, making content and actions clear
          for users.
        </p>
      </div>
      <div class="bg-white rounded-lg shadow p-6 flex flex-col items-center">
        <svg
          class="w-12 h-12 text-green-500 mb-4"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 12l2 2 4-4"
          />
        </svg>
        <h2 class="text-xl font-semibold mb-2">Usability</h2>
        <p class="text-gray-600 text-center">
          Minimal interfaces are easier to navigate, reducing cognitive load and
          errors.
        </p>
      </div>
      <div class="bg-white rounded-lg shadow p-6 flex flex-col items-center">
        <svg
          class="w-12 h-12 text-yellow-500 mb-4"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 8v4l3 3"
          />
        </svg>
        <h2 class="text-xl font-semibold mb-2">Efficiency</h2>
        <p class="text-gray-600 text-center">
          Simplicity speeds up decision-making and helps users achieve goals
          faster.
        </p>
      </div>
    </div>
  </section>
  <h2 class="text-2xl font-bold mb-6 mt-10">Featured Minimalist Products</h2>
  <section
    data-tradly-token="dynamic.data.listing.list"
    data-tradly-token-params='{"is_featured":true,"limit":6}'
  >
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <template data-tradly-item>
        <div
          data-component="product-card"
          data-component-variant="minimal"
        ></div>
      </template>
    </div>
  </section>
</div>
