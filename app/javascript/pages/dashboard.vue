<template lang="pug">
  v-container(grid-list-md, text-xs-center)
    v-layout(row, wrap)
      v-flex(xs12)
        v-card(color="light-blue darken-1")
          v-card-title
            h4 Average
          v-divider
          v-list.dense
            v-list-tile
              v-list-tile-content 打率
              v-list-tile-content.align-end 0.333
            v-list-tile
              v-list-tile-content 打点
              v-list-tile-content.align-end 92
            v-list-tile
              v-list-tile-content 本塁打
              v-list-tile-content.align-end 28
    v-layout(row, wrap)
      v-flex(xs6)
        v-card(color="deep-purple lighten-4")
          v-card-title
            h4 Hitting
          v-divider
          v-list.dense
            v-list-tile
              v-list-tile-content 打率
              v-list-tile-content.align-end 0.333
            v-list-tile
              v-list-tile-content 打点
              v-list-tile-content.align-end 92
            v-list-tile
              v-list-tile-content 本塁打
              v-list-tile-content.align-end 28
      v-flex(xs6)
        v-card(color="blue lighten-4")
          v-card-title
            h4 Defence
          v-divider
          v-list.dense
            v-list-tile
              v-list-tile-content 打率
              v-list-tile-content.align-end 0.333
            v-list-tile
              v-list-tile-content 打点
              v-list-tile-content.align-end 92
            v-list-tile
              v-list-tile-content 本塁打
              v-list-tile-content.align-end 28
      v-flex(xs6)
        v-card(color="cyan lighten-4")
          v-card-title
            h4 Piching
          v-divider
          v-list.dense
            v-list-tile
              v-list-tile-content 打率
              v-list-tile-content.align-end 0.333
            v-list-tile
              v-list-tile-content 打点
              v-list-tile-content.align-end 92
            v-list-tile
              v-list-tile-content 本塁打
              v-list-tile-content.align-end 28
      v-flex(xs6)
        v-card(color="yellow lighten-4")
          v-card-title
            h4 Running
          v-divider
          v-list.dense
            v-list-tile
              v-list-tile-content 打率
              v-list-tile-content.align-end 0.333
            v-list-tile
              v-list-tile-content 打点
              v-list-tile-content.align-end 92
            v-list-tile
              v-list-tile-content 本塁打
              v-list-tile-content.align-end 28
      v-flex(xs6)
        v-card(color="red lighten-4")
          v-card-title
            h4 Seibar
          v-divider
          v-list.dense
            v-list-tile
              v-list-tile-content 打率
              v-list-tile-content.align-end 0.333
            v-list-tile
              v-list-tile-content 打点
              v-list-tile-content.align-end 92
            v-list-tile
              v-list-tile-content 本塁打
              v-list-tile-content.align-end 28
</template>
