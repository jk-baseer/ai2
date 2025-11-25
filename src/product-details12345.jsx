<section class="max-w-4xl mx-auto px-4 py-10">
  <section data-tradly-token="dynamic.data.listing.byId" data-tradly-token-params='{"id":"{{id}}"}'>
    <template data-tradly-item>
      <div class="flex flex-col md:flex-row gap-8">
        <div class="md:w-1/2">
          <img src="{{images.0.url}}" alt="{{title}}" class="rounded-lg w-full object-cover mb-4" />
        </div>
        <div class="md:w-1/2">
          <h1 class="text-3xl font-bold mb-2">{{title}}</h1>
          <p class="text-gray-600 mb-4">{{description}}</p>
          <div class="mb-4">
            {{#sale_price}}
              <span class="text-2xl font-bold text-red-600">{{sale_price|currency}}</span>
              <span class="text-lg line-through text-gray-500 ml-2">{{list_price|currency}}</span>
            {{/sale_price}}
            {{^sale_price}}
              <span class="text-2xl font-bold text-gray-900">{{list_price|currency}}</span>
            {{/sale_price}}
          </div>
          {{#offer_percent}}
            <span class="inline-block bg-red-100 text-red-800 text-xs px-2 py-1 rounded">Save {{offer_percent}}%</span>
          {{/offer_percent}}
          <button class="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">Buy Now</button>
        </div>
      </div>
    </template>
  </section>
</section>