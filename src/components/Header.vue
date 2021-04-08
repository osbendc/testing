<template>
  <header role="banner" class="border-t-14 border-gray-900">
      <nav
        class="container mx-auto flex flex-wrap justify-between items-center py-8"
        role="navigation"
        aria-label="main navigation"
      >
        <div class="mx-auto">
            <img src="../../static/VinuShot_logo.png" width="100x" />
        </div>

        <div class="block lg:hidden">
          <button
            aria-label="burger-menu"
            @click="toggle"
            class="flex items-center px-3 py-2 border rounded border-gray-500 hover:text-gray-600 hover:border-gray-600"
          >
            <svg
              class="current-color h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"
                fill="gray"
              />
            </svg>
          </button>
        </div>

        <div class="mt-5 text-center container mx-auto flex flex-wrap">
          <ul
            class="mx-auto uppercase tracking-wide font-bold w-full block flex-grow lg:space-x-8 space-y-6 lg:space-y-0 lg:flex lg:flex-initial lg:w-auto items-center mt-8 lg:mt-0"
            :class="isOpen ? 'block' : 'hidden'"
          >
            <li>
              <a
                v-if="$route.path === '/'"
                href="/collections"
                class="text-copy-primary hover:text-gray-600"
                >Collections</a
              >
              <g-link
                v-else
                to="/collections"
                class="text-copy-primary hover:text-gray-600"
                >Collections</g-link
              >
            </li>
            <li>
              <a
                v-if="$route.path === '/'"
                href="https://gridsomify.com"
                class="text-copy-primary hover:text-gray-600"
                >About</a
              >
              <g-link
                v-else
                to="https://gridsomify.com"
                class="text-copy-primary hover:text-gray-600"
                >About</g-link
              >
            </li>
            <li>
              <a
                v-if="$route.path === '/'"
                href="https://gridsomify.com"
                class="text-copy-primary hover:text-gray-600"
                >Contact</a
              >
              <g-link
                v-else
                to="https://gridsomify.com"
                class="text-copy-primary hover:text-gray-600"
                >Contact</g-link
              >
            </li>
            <li>
              <search-input />
            </li>
            <li>
              <div class="">
                <g-link to="/cart" class="lowercase">
                  cart - {{ cart.length }} Item{{
                    cart.length !== 1 ? "s" : ""
                  }}
                </g-link>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
</template>

<script>
import SearchInput from "../components/SearchInput";
import ThemeSwitcher from "../components/ThemeSwitcher";

export default {
  components: {
    SearchInput,
    ThemeSwitcher,
  },
  mounted() {
    this.theme = localStorage.getItem("theme") || "theme-light";
  },
  data() {
    return {
      isOpen: false,
      theme: "",
      searchTerm: "",
    };
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
    },
    updateTheme(theme) {
      this.theme = theme;
    },
  },
  computed: {
    cart() {
      return this.$store.state.cart;
    },
    searchResults() {
      const searchTerm = this.searchTerm;
      if (searchTerm.length < 3) return [];
      return this.$search.search({
        query: searchTerm,
        limit: 5,
        suggest: true,
      });
    },
  },
  watch: {
    $route(to, from) {
      this.searchTerm = "";
    },
  },
}
</script>