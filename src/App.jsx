<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Home | Tradly Sky</title>
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <script type="module" src="/main.js"></script>
  </head>
  <body class="bg-gray-50 min-h-screen">
    <header class="bg-white shadow sticky top-0 z-30">
      <div class="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="/" class="text-2xl font-bold text-blue-700">Tradly Sky</a>
        <nav class="space-x-6">
          <a href="/" class="text-gray-700 hover:text-blue-600">Home</a>
          <a href="/products" class="text-gray-700 hover:text-blue-600">Products</a>
          <a href="/categories" class="text-gray-700 hover:text-blue-600">Categories</a>
        </nav>
      </div>
    </header>
    <main class="container mx-auto px-4 py-8">
      <div data-component="hero-banner"></div>
      <section class="my-10">
        <h2 class="text-2xl font-semibold mb-6 text-gray-800">Featured Products</h2>
        <section data-tradly-token="dynamic.data.listing.list" data-tradly-token-params='{"is_featured":true,"limit":8}'>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <template data-tradly-item>
              <div data-component="product-card" data-component-variant="featured"></div>
            </template>
          </div>
        </section>
      </section>
      <section class="my-10">
        <h2 class="text-2xl font-semibold mb-6 text-gray-800">Browse Categories</h2>
        <section data-tradly-token="dynamic.data.category.list" data-tradly-token-params='{"limit":8}'>
          <div class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4">
            <template data-tradly-item>
              <div data-component="category-card"></div>
            </template>
          </div>
        </section>
      </section>
      <section class="my-10">
        <h2 class="text-2xl font-semibold mb-6 text-gray-800">Latest Products</h2>
        <section data-tradly-token="dynamic.data.listing.list" data-tradly-token-params='{"limit":12}'>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <template data-tradly-item>
              <div data-component="product-card"></div>
            </template>
          </div>
        </section>
      </section>
    </main>
    <footer class="bg-white border-t mt-12 py-6">
      <div class="container mx-auto px-4 text-center text-gray-500 text-sm">
        &copy; {{year}} Tradly Sky. All rights reserved.
      </div>
    </footer>
  </body>
</html>