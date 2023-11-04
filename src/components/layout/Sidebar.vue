<script>
import { mapActions, mapState } from 'vuex'
import { getCategories } from '../../services/categories.service'

export default {
  data() {
    return {
      categories: [],
    }
  },
  mounted() {
    this.fetchCategories()
  },
  computed: {
    ...mapState([
        'selectedCategory',
    ]),
  },
  methods: {
    ...mapActions([
        'setSelectedCategory',
    ]),
    fetchCategories() {
        getCategories()
            .then((categories) => {
                this.categories = categories
            })
            .catch(() => console.error)
    },
    onCategoryClick(category) {
        this.setSelectedCategory(category)
    },
  },
}
</script>

<template>
  <div class="menu-wrapper">
    <div class="layout-menu-container">
        <ul class="layout-menu">
            <li class="layout-root-menuitem">
                <div>
                    <span class="layout-menuitem-text">
                        Categories
                    </span>
                </div>
                <ul role="menu">
                    <li v-for="category in categories"
                        role="menu-item">
                        <a @click="onCategoryClick(category)" 
                            :class="{'active': selectedCategory === category}">
                            <span class="layout-menuitem-text">
                                {{ category }}
                            </span>
                        </a>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
  </div>
</template>

<style scoped>
.menu-wrapper {
    height: calc(100% - 56px);
    width: 240px;
    position: fixed;
    left: 0;
    top: 56px;
    z-index: 998;
    transform: none;
    transition: transform 0.4s cubic-bezier(0.05, 0.74, 0.2, 0.99);
    background-color: #3C4962;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.06);
}
.layout-menu-container {
    overflow: auto;
    height: 100%;
}
.layout-menu {
    list-style-type: none;
    margin: 0;
    padding: 0;
    padding-bottom: 36px;
}
.layout-root-menuitem {
    padding: 0;
}
.layout-root-menuitem > div {
    padding-left: 20px;
    margin-bottom: 6px;
    margin-top: 24px;
}
.layout-root-menuitem > div > .layout-menuitem-text {
    font-size: 16px;
    font-weight: 600;
    text-transform: uppercase;
    color: #CDD2DB;
}
.layout-root-menuitem ul {
    list-style-type: none;
    padding: 0 0 0 20px;
    margin: 0;
}
.layout-root-menuitem ul li {
    padding: 0;
    margin-top: 8px;
}
.layout-root-menuitem ul li a {
    margin: 0px;
    padding: 7px 10px 6px 20px;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    -moz-transition: all 0.2s;
    -o-transition: all 0.2s;
    -webkit-transition: all 0.2s;
    transition: all 0.2s;
    font-size: 13px;
    font-weight: 500;
    border-radius: 0;
    cursor: pointer;
    user-select: none;
    color: #E5E8EC;
    text-transform: capitalize;
    -moz-border-radius-topleft: 10px;
    -webkit-border-top-left-radius: 10px;
    border-top-left-radius: 10px;
    -moz-border-radius-bottomleft: 10px;
    -webkit-border-bottom-left-radius: 10px;
    border-bottom-left-radius: 10px;
}
.layout-root-menuitem ul li a:hover,
.layout-root-menuitem ul li a.active {
    background-color: #59667D;
    color: #ffffff;
    cursor: pointer;
}
</style>
