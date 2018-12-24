<template>
  <div id="app">
    <h1>Styleguide</h1>
    <div v-for="group in tokens" :key="group.name">
      <div v-for="{name, value, comment} in group" :key="name">
        <h2>{{ name }}</h2>
        <p v-if="comment">{{ comment }}</p>
        <div :style="{backgroundColor: value}">${{ tokenName(name) }}: {{ value }}</div>
      </div>
    </div>
    <div v-for="component in componentsMap" :key="component[0].name">
      <component-doc :component="component[0]" />
    </div>
  </div>
</template>

<script>
import ComponentDoc from './components/ComponentDoc'
import { componentsMap } from './components'
import tokens from '@@/tokens/generated/tokens'
import KebapCase from 'lodash/kebabCase'

export default {
  components: {
    ComponentDoc
  },
  data() {
    return {
      componentsMap,
      tokens
    }
  },
  methods: {
    tokenName(name) {
      return KebapCase(name)
    }
  }
}
</script>
