<template>
  <div>
    <h1>{{ component.name || componentName }}</h1>
    <div
      v-for="(part, index) in docParts"
      margin-bottom="xx-large"
      :key="index">
      <div>
        <markdown :content="part.description"/>
      </div>
      <code-example
        :code="part.example"
        v-if="part.example"/>
    </div>
  </div>
</template>

<script>
import CodeExample from './CodeExample'
// import ComponentOptionsDoc from './ComponentOptionsDoc'
import Markdown from './Markdown'

export default {
  name: 'ComponentDoc',
  props: {
    component: {
      type: Object,
      required: true
    }
  },
  components: {
    CodeExample,
    // ComponentOptionsDoc,
    Markdown
  },
  data() {
    return {
      propFields: {
        name: {
          label: 'Prop Name',
          width: '20%'
        },
        type: {
          label: 'Type',
          width: '20%'
        },
        default: {
          label: 'Default',
          width: '20%'
        },
        description: 'Description'
      }
    }
  },
  computed: {
    componentProps() {
      return Object.keys(this.component.props).map(name => {
        return {
          name,
          ...this.component.props[name]
        }
      })
    },
    componentSlots() {
      return Object.keys(this.component.slots).map(name => {
        return {
          name,
          ...this.component.slots[name]
        }
      })
    },
    docParts() {
      if (!this.component.docs) {
        return []
      }
      const parts = this.component.docs.split('```')
      let i = 0
      const parsed = parts.reduce((result, part, index) => {
        if (index % 2 === 0) {
          result[i] = {
            description: part
          }
        } else {
          result[i].example = part
          i++
        }
        return result
      }, [])
      return parsed
    }
  },
  methods: {
    tagColor(tag) {
      if (tag.title === 'deprecated') {
        return 'warning'
      }
      if (tag.title === 'see') {
        return 'primary'
      }
      return 'inverse'
    },
    tagDescription(tag) {
      if (tag.description === true) {
        return tag.title
      }
      if (tag.title === 'see') {
        return `Child of ${tag.description}`
      }
      return `${tag.title} ${tag.description}`
    }
  }
}
</script>

<style lang="scss">
</style>
