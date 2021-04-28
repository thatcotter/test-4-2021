<template>
  <div class="menu" v-bind:class="{ active: isActive }">
    <div class="title3 greeting">Hello, Donovan Beck</div>

    <ul class="list" v-bind:class="{ active: isActive }">
      <li class="menu-item" v-for="item in items" v-bind:key="item.id">
        <div v-if="item.subvalues.length > 0">
          <div @click="toggleSubMenu(item.index)">
            <i class="far fa-file-image"></i>
            {{ item.value.toUpperCase() }}
            <span class="icon">
              <i class="fas fa-angle-right" aria-hidden="true"></i>
            </span>
          </div>
          <Submenu
            :domainName="item.value"
            :index="item.index"
            :providedLinks="item.subvalues"
          ></Submenu>
        </div>

        <router-link @click="toggleMenu" v-else :to="'/' + item.value + '/'">
          <span @click="toggleMenu">
            <i @click="toggleMenu" class="far fa-file-image"></i
            >{{ item.value.toUpperCase() }}
          </span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Submenu from "./Submenu.vue";
import { mapActions } from "vuex";

export default Vue.extend({
  name: "Menu",
  components: {
    Submenu,
  },
  computed: {
    isActive() {
      return this.$store.state.menuActive;
    },
  },
  methods: {
    ...mapActions(["toggleMenu", "toggleSubMenu"]),
  },
  data: function () {
    return {
      // isActive: false,
      items: [
        {
          value: "My Schedule & Bidding",
          index: 0,
          subvalues: ["schedule", "bidding"],
        },
        {
          value: "Safety",
          index: 1,
          subvalues: [
            {
              value: "reporting",
              subvalues: [
                "I-21 Injury",
                "ASAP Reporting",
                "General ASAP Information",
                "Flight Attendant Incident Report",
              ],
            },
            {
              value: "agriculture & customs",
              subvalues: ["more", "placeholder", "values"],
            },
            "known crewmember",
            "product safety data search",
          ],
        },
        {
          value: "Training",
          subvalues: [],
        },
        {
          value: "Administration",
          index: 2,
          subvalues: [
            {
              value: "OJI and leaves",
              subvalues: [
                "I-21 Injury",
                "ASAP Reporting",
                "General ASAP Information",
                "Flight Attendant Incident Report",
              ],
            },
            {
              value: "pay and benefits",
              subvalues: ["more", "placeholder", "values"],
            },
            {
              value: "performance",
              subvalues: ["more", "placeholder", "values"],
            },
            "inflight resource directory",
            {
              value: "mobile and web",
              subvalues: ["more", "placeholder", "values"],
            },
            "AFA",
          ],
        },
        {
          value: "Catering & Brand",
          index: 3,
          subvalues: ["catering", "brand"],
        },
        {
          value: "Hotels",
          subvalues: [],
        },
        {
          value: "My Base",
          subvalues: [],
        },
        {
          value: "Recognition",
          subvalues: [],
        },
        {
          value: "My Leadership Team",
          subvalues: [],
        },
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
* {
  background-color: rgb(70, 127, 179);
  // position: absolute;
  // overflow: hidden;
  // z-index: 1000;
  color: white;
}

.menu {
  min-height: calc(100vh - 50px);
  display: table;
  // z-index: 1000;
  margin-top: -50px;
  margin-left: -100vw;
  margin-right: 100vw;
  transition: all 0.5s ease;

  div.greeting {
    padding: 5%;
    padding-bottom: 10%;
    color: white;
    z-index: 10;
  }

  ul .list {
    height: 100%;
    opacity: 0;
    transition: all 1s ease;
  }

  ul .list .active {
    opacity: 1;
  }

  i {
    padding-right: 12px;
    z-index: inherit;
  }

  .menu-item {
    padding: 20px;
    border: 0;
    border-top: 1px solid #ffffff88;
    transition: all 0.5s ease;
    z-index: inherit;
    transition: all 0.5s ease;
  }

  .menu-item:active {
    background: white;
  }
}

.icon {
  float: right;
}

@media screen and (min-width: 720px) {
  .menu {
    width: 45%;
  }
}

@media screen and (max-width: 720px) {
  .menu {
    width: 100%;
  }
}

div.active {
  margin-left: 0;
  margin-right: 0;
  left: 100vw;
}
</style>