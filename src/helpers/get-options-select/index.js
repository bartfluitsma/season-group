import _ from 'lodash'

const getOptions = (options) => _.map(options, (option) => ({
  value: option.slug,
  label: option.name,
}))

export default getOptions
