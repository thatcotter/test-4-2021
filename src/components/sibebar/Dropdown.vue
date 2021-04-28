<template>
  <div class="dropdown" :class="{ 'is-active': open }">
    <div class="dropdown-trigger" @click="toggleDrop">
      <div
        class=""
        aria-haspopup="true"
        :aria-controls="'dropdown-menu' + value"
      >
        <span>{{ value }}</span>
        <span class="icon is-small" :class="{'is-open': open}">
          <i class="fas fa-angle-down" aria-hidden="true"></i>
        </span>
      </div>
    </div>

    <div class="dropdown-menu" :id="'dropdown-menu-' + value" role="menu">
      <!-- <div class="dropdown-content"> -->
      <router-link
        v-for="sublink in subvalues"
        v-bind:key="sublink.id"
        class="dropdown-item"
        @click="toggleMenu"
        :to="
          '/' + value.split(' ').join('_') + '/' + sublink.split(' ').join('_')
        "
      >
        <span @click="toggleMenu">{{ sublink }}</span>
      </router-link>
      <!-- </div> -->
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions } from "vuex";
export default Vue.extend({
  name: "Dropdown",
  data() {
    return {
      open: false,
    };
  },
  props: {
    value: String,
    subvalues: Array,
  },
  methods: {
    toggleDrop: function () {
      this.open = !this.open;
    },
    ...mapActions(["toggleMenu", "toggleSubMenu"]),
  },
});
</script>

<style lang="scss" scoped>
.dropdown {
  width: 100%;
  display: block;
  clear: both;
}

.dropdown-trigger {
  display: block;
  clear: both;
}

.icon {
  float: right;
  transition: all 0.25s ease;
}
.is-open {
	transform: rotate(180deg)
}

.dropdown-menu {
  background-color: rgb(111, 154, 196);
  width: 125%;
  margin-left: -11%;
  clear: both;
  position: relative;
  padding-top: 10px;
}

.dropdown-item {
  width: 100%;
  word-wrap: break-word;
  margin-top: -4%;
  padding-bottom: 20px;
  padding-top: 20px;

  border: 0;
  border-top: 1px solid #ffffff88;
  //   border-bottom: 1px solid #ffffff88;
}
</style>