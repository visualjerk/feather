<template>
  <div id="app">
    <h1>hey</h1>
    <lo-button>button</lo-button>
    <div v-for="component in componentsMap" :key="component[0].name">
      <component-doc :component="component[0]" />
    </div>
  </div>
</template>

<script>
import ComponentDoc from './components/ComponentDoc'
import { componentsMap } from './components'

export default {
  components: {
    ComponentDoc
  },
  data() {
    return {
      componentsMap
    }
  },
  created() {}
}
</script>
