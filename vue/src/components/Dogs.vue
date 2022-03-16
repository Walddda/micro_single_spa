<template>
    <div>
      <!-- <page-header title="I LOVE APP"></page-header> -->
      <div class="content-dogs">
        <rate-dogs @created="(c) => storeurl(1, c)" @sub="win(1)" ref="dog1"></rate-dogs>
        <rate-dogs @created="(c) => storeurl(2, c)" @sub="win(2)" ref="dog2"></rate-dogs>
      </div>
      <button @click="disgusting">They all ugly as hell lmfao + L + ratio</button>
    </div>
</template>

<script>
import rateDogs from "./RateDogs.vue";
// import { PageHeader } from "@vue-mf/styleguide";
export default {
  components: { rateDogs },
  data (){
    return {
      game: {id: '', url1: '', url2: '', winner:''}
    }
  },
  methods: {
    win(x){
      // alert('heii');
      this.game.winner = x
      const winnerjson = JSON.parse(localStorage.getItem("games")) || [];
      this.game.id = winnerjson.length;
      winnerjson.push(this.game);
      localStorage.setItem("games", JSON.stringify(winnerjson));
      this.$refs.dog1.newDog()
      this.$refs.dog2.newDog()
    },
    storeurl(x, y){
      this.game['url'+x] = y
    },
    disgusting(){
      this.win(3)
    }
  }
  
}
</script>

<style>
.content-dogs{
  display: flex;
  flex-direction: row;
}
</style>