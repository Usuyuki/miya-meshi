<template>
  <div>
    <v-container class="pt-3 pb-2">
      <template v-if="!state.loading">
        <div v-if="maxItem > 0" class="text-right">
          <p class="mb-1 display-count">
            <span class="red--text">{{ state.menus.length }}件</span>表示中/全{{ maxItem }}件中
          </p>
        </div>

        <v-row class="px-1" :justify="justify">
          <template v-if="state.menus.length > 0">
            <template v-for="(menu, key) in state.menus">
              <v-col :key="key" cols="6" md="4" class="px-1 py-1">
                <MenuCard :menu="menu" :src="menu.image" />
              </v-col>
            </template>
          </template>

          <template v-else>
            <v-col class="py-6">
              <p class="mb-0 text-center">
                条件に見合うお店が見つかりませんでした。
              </p>
            </v-col>
          </template>
        </v-row>
      </template>

      <template v-else>
        <v-row justify="center" class="py-8">
          <div>
            <v-progress-circular
              :size="50"
              indeterminate
            />
          </div>
        </v-row>
      </template>
    </v-container>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, SetupContext, watchEffect } from '@nuxtjs/composition-api'
import { Menu } from '@/lib'

type State = {
  menus: Props['menus'],
  loading: boolean
}

type Props = {
  menus: Menu[],
  maxItem: number
}
export default defineComponent({
  props: {
    menus: {
      type: Array,
      default: () => []
    },

    maxItem: {
      type: Number,
      default: 0
    },

    justify: {
      type: String,
      default: 'start'
    }
  },

  setup (props: Props, _: SetupContext) {
    const state = reactive({
      menus: props.menus,
      loading: true
    })

    watchEffect(() => {
      state.menus = props.menus
      state.loading = false
    })

    return {
      state
    }
  }
})
</script>

<style lang="scss" scoped>
.display-count {
  font-size: 0.8rem;
}

</style>
