import CTAWidget from "./cta-widget"

<div className="space-y-10">
  <h1 className="text-4xl font-bold">Design Simplicity</h1>
  <CTAWidget actionText="Book a demo" />
</div>
<div class="container mx-auto px-4 py-8">
  <h1 class="text-3xl font-bold mb-6">Explore Featured Listings</h1>
  <section
    data-tradly-token="dynamic.data.listing.list"
    data-tradly-token-params='{"is_featured":true,"limit":12}'
  >
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <template data-tradly-item>
        <div
          data-component="product-card"
          data-component-variant="featured"
        ></div>
      </template>
    </div>
  </section>
  
 
</div>
