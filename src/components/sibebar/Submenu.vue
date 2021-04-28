<template>
  <ul class="sidebar" v-bind:class="{ inactive: !submenus(this.index) }">
    <li>{{ domainName }}</li>

    <li v-for="link in providedLinks" v-bind:key="link.id">
      <Dropdown
        v-if="link.value != undefined"
        :value="link.value"
        :subvalues="link.subvalues"
        >{{ link.value }}
      </Dropdown>

      <!-- <div v-if="link.value != undefined"
		class="dropdown">
		<div class="dropdown-trigger">
			<div aria-haspopup="true" aria-controls="dropdown-menu">
				<span>Dropdown {{link.subvalues}}</span>
					<span class="icon is-small">
					<i class="fas fa-angle-down" aria-hidden="true"></i>
				</span>
			</div>
		</div>
		<div class="dropdown-menu">
			<router-link v-for="sublink in link.subvalues" v-bind:key="sublink.id" class="dropdown-item">
				{{sublink}}
			</router-link>
		</div>
      </div> -->
      <router-link
        v-else
        class="link"
        @click="toggleMenu"
        :to="
          '/' +
          domainName.split(' ').join('_') +
          '/' +
          link.split(' ').join('_')
        "
      >
        <span @click="toggleMenu">{{ link }}</span>
      </router-link>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
$width: 250px;

ul {
  transition: all 0.125s ease;
}

ul.sidebar {
  display: inline-block;
  position: relative;
  width: $width;
  height: 100%;
  min-height: calc(100vh - 50px);
  padding: 64px 0;

  position: absolute;
  top: 0;
  right: 0;
  left: auto;

  overflow: hidden;

  list-style-type: none;

  li {
    padding: 16px 24px;
    color: white;

    outline-color: white;
    outline-width: 0, 0, 1px, 0;

    border: 0;
    border-top: 1px solid #ffffff88;

    .link {
      color: white;
    }
  }
}

@media screen and (min-width: 720px) {
  ul.sidebar {
    right: 55%;
  }
}

ul.inactive {
  width: 0;
}

.domain {
  width: 100%;
  height: 10%;
  li {
    display: block;
  }
}
</style>

<script lang="ts">
import Vue from "vue";
import { mapActions, mapGetters } from "vuex";
import Dropdown from "./Dropdown.vue";

export default Vue.extend({
  name: "Submenu",
  components: {
    Dropdown,
  },
  props: {
    domainName: String,
    index: Number,
    providedLinks: Array,
  },
  data: function () {
    // placeholder data
    return {
      domain: "SUBMENU",
      links: ["these", "are", "placeholder", "links"],
    };
  },
  computed: {
    isActive() {
      return this.$store.state.submenuActive[this.index];
    },
    ...mapGetters(["submenus"]),
  },
  methods: {
    ...mapActions(["toggleMenu", "toggleSubMenu"]),
  },
});
</script>