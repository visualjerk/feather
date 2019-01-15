// ToDo: create custom format in style-dictionary
// It sets the values of scss variables to css variable names
// Example: $color-primary: var(--color-primary)

module.exports = {
  color: {
    primary: {
      value: '#5fc6d2',
      comment: 'only used for important elements'
    },
    neutral: {
      value: 'rgb(40, 40, 40)',
      comment: 'used for most text elements'
    }
  },
  textColor: {
    primary: {
      value: '{color.primary.value}',
      comment: 'used for important parts of the text'
    },
    neutral: { value: '{color.neutral.value}' }
  },
  backgroundColor: {
    primary: {
      value: '{color.primary.value}',
      comment: 'used for important backgrounds'
    },
    neutral: { value: '{color.neutral.value}' }
  },
}