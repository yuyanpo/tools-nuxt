import { json2HTML } from '~/utils/jsonFormat'

export default defineNuxtPlugin(() => {
  return {
    provide: {
      json2HTML: (json: string) => json2HTML(json),
    },
  }
})
