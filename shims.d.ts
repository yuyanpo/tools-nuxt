declare module '#app' {
  interface NuxtApp {
    $json2HTML (json: string): string
  }
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $json2HTML (json: string): string
  }
}
export {}
