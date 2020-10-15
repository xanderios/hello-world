<template>
  <div id="app" class="container mx-auto p-16 sm:p-12 lg:pt-20 text-gray-800">
    <vue-headful title="Alexandre - Portfólio" />
    <h2 class="text-4xl sm:text-6xl font-medium">Olá</h2>
    <h2 class="text-2xl sm:text-4xl font-medium mt-4">
      Meu nome é Alexandre
    </h2>
    <div class="text">
      <p class="text-xl sm:text-3xl">
        Sou um desenvolvedor front-end fluente em inglês, com 3 anos de
        experiência.
      </p>
      <p class="text-xl sm:text-3xl">
        Experiente com HTML, CSS, 
        <Link text="Sass" href="https://sass-lang.com"/>, 
        JavaScript, 
        <Link text="React" href="https://reactjs.org" />, 
        <Link text="Vue" href="https://vuejs.org" /> e 
        <Link text="NodeJS" href="https://nodejs.org" />.
      </p>
      <p class="text-xl sm:text-3xl">
        Você pode me encontrar no
        <Link text="Github" href="https://github.com/xanderios" /> e no
        <Link
          text="Linkedin"
          href="https://www.linkedin.com/in/alexandre-rios-496bb7196/"
        />. Aqui estão alguns de meus projetos:
        <ul>
          <li><Link text="Boookmarker" href="https://boookmarker.herokuapp.com" /></li>
          <li><Link text="Offices (senior test)" href="https://github.com/xanderios/senior-frontend-test" /></li>
          <span class="text-gray-500">Em breve...</span>
        </ul>
      <!-- eslint-disable-next-line prettier/prettier -->
      </p>
      <p class="text-xl sm:text-3xl">
        No meu tempo livre, gosto de praticar esportes, ler livros e assistir filmes ou séries 😁.
      </p>
    </div>
  </div>
</template>

<script>
import Link from "./components/Link"

export default {
  name: "App",
  components: {
    Link
  }
}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Rubik:wght@400;500&display=swap");

#app {
  font-family: "Rubik", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  .text p {
    max-width: 700px;
    @apply mt-6;
  }
}
</style>
