<template>
  <div id="game-container"></div>
</template>

<script>
import { populateScreen } from '@/services/utils.ts'
export default {
  mounted() {
    console.log('MOUNTED')
    const gameDiv = document.getElementById('game-container')
    if (gameDiv) {
      populateScreen(gameDiv, 150, {
        url: '/assets/logo.png',
        height: 50,
        width: 50,
      })
    }
  },
}
</script>

<style lang="scss" scoped>
#game-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 2px solid black;
  height: 50vh;
  width: 50vw;
}
</style>
