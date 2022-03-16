<template>
  <div>
    <div class="content">
      <div class="actions">
        <button @click="newRating">I like this dog!</button>
      </div>
      <div class="card">
        <div v-if="currentDogUrl">
          <img :src="currentDogUrl" alt="dog photo" width="500" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {  },
  data: () => ({
    currentDogUrl: null,
    rating: "10"
  }),
  created() {
    this.newDog();
  },
  methods: {
    newDog() {
      fetch("https://dog.ceo/api/breeds/image/random")
        .then(r => r.json())
        .then(json => {
          this.currentDogUrl = json.message;
          this.rating = "10";
          this.$emit('created', this.currentDogUrl);
        });
    },
    newRating(evt) {
      this.rating = evt.target.value;
      const dogs = JSON.parse(localStorage.getItem("dogs")) || [];
      dogs.push({ url: this.currentDogUrl, rating: Number(this.rating) });
      localStorage.setItem("dogs", JSON.stringify(dogs));
      // this.newDog();
      this.$emit('sub');
    }
  }
};
</script>
<style scoped>
.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.card {
  margin-top: 1.6rem;
  padding: 3.2rem;
  background-color: white;
  border-radius: 0.5rem;
  max-width: 75%;
}

.card img {
  max-width: 100%;
}

.actions {
  margin-top: 1.6rem;
  display: flex;
  justify-content: center;
}

</style>
