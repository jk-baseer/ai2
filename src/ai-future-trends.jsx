<main class="max-w-5xl mx-auto px-4 py-10">
  <header class="mb-10 text-center">
    <h1 class="text-4xl font-bold mb-4">
      Where is the World Heading in Terms of AI?
    </h1>
    <p class="text-lg text-gray-600">
      Exploring the current trends, innovations, and the future impact of
      Artificial Intelligence globally.
    </p>
  </header>

  <section class="mb-12">
    <h2 class="text-2xl font-semibold mb-3">
      Key Areas Shaping the Future of AI
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="bg-white rounded-lg shadow p-6">
        <h3 class="font-bold text-lg mb-2">Automation & Workforce</h3>
        <p class="text-gray-700">
          AI-driven automation is transforming industries, from manufacturing to
          services, creating new opportunities and redefining job roles
          worldwide.
        </p>
      </div>
      <div class="bg-white rounded-lg shadow p-6">
        <h3 class="font-bold text-lg mb-2">Healthcare Revolution</h3>
        <p class="text-gray-700">
          AI is accelerating drug discovery, improving diagnostics, and enabling
          personalized medicine, making healthcare more accessible and
          efficient.
        </p>
      </div>
      <div class="bg-white rounded-lg shadow p-6">
        <h3 class="font-bold text-lg mb-2">Ethics & Governance</h3>
        <p class="text-gray-700">
          With rapid advancements, ethical considerations and responsible AI
          governance are becoming central to ensure fairness, transparency, and
          accountability.
        </p>
      </div>
    </div>
  </section>

  <section class="mb-12">
    <h2 class="text-2xl font-semibold mb-3">Featured AI Innovations</h2>
    <section
      data-tradly-token="dynamic.data.listing.list"
      data-tradly-token-params='{"is_featured":true,"limit":6}'
    >
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <template data-tradly-item>
          <div
            data-component="product-card"
            data-component-variant="featured"
          ></div>
        </template>
      </div>
    </section>
  </section>

  <section class="mb-12">
    <h2 class="text-2xl font-semibold mb-3">Explore AI Categories</h2>
    <section
      data-tradly-token="dynamic.data.category.list"
      data-tradly-token-params='{"limit":6}'
    >
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        <template data-tradly-item>
          <div data-component="category-card"></div>
        </template>
      </div>
    </section>
  </section>

  <section class="mb-12">
    <h2 class="text-2xl font-semibold mb-3">AI Thought Leaders</h2>
    <section
      data-tradly-token="dynamic.data.listing.list"
      data-tradly-token-params='{"limit":3}'
    >
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <template data-tradly-item>
          <div data-component="user-card"></div>
        </template>
      </div>
    </section>
  </section>

  <footer class="mt-16 text-center text-gray-500 text-sm">
    <p>Stay updated as AI continues to shape the future of our world.</p>
  </footer>
</main>
