<template>
  <div id="app" class="container mx-auto px-4 py-16 sm:p-12 lg:pt-20 text-gray-800">
    <vue-headful title="Alexandre - Portfólio" />
    <h2 class="text-4xl sm:text-6xl font-medium">Olá 👋</h2>
    <h2 class="text-2xl sm:text-4xl font-medium mt-4">
      Meu nome é Alexandre 🙂
    </h2>
    <div class="text">
      <p class="text-xl sm:text-2xl">
        Sou um desenvolvedor Front-End desde 2018, fluente em inglês, experiente com HTML, CSS, JavaScript, 
        <Link text="React" href="https://reactjs.org" />, 
        <Link text="Vue" href="https://vuejs.org" />, 
        <Link text="Git" href="https://git-scm.com/" />,
        <Link text="Node.js" href="https://nodejs.org" />, e muito mais! 💻
      </p>
      <p class="text-xl sm:text-3xl">
        Você pode me encontrar no
        <Link text="Github" href="https://github.com/xanderios" /> e no
        <Link
          text="Linkedin"
          href="https://www.linkedin.com/in/alexandre-rios-496bb7196/"
        />. Aqui estão alguns de meus projetos:
        <ul class="mt-4">
          <li><Link text="Intelmais - Website" href="https://www.intelmais.com.br" /> 📱</li>
          <li><Link text="Moveit" href="https://moveit-reactjs.vercel.app/" /> 🏋️ <span class="text-gray-500 text-lg">(<a class="underline" href="https://rocketseat.com.br/">Rocketseat's</a> NLW#4)</span></li>
          <li><Link text="Offices" href="https://github.com/xanderios/senior-frontend-test" /> 📌 <span class="text-gray-500 text-lg">(senior test)</span></li>
          <li><Link text="Boookmarker" href="https://boookmarker.herokuapp.com" /> 🔖 <span class="text-gray-500 text-lg">(deployed @ <a class="underline" href="https://heroku.com">Heroku</a>)</span></li>
          <span class="text-gray-500 text-xl">Seu projeto aqui...</span>
        </ul>
      <!-- eslint-disable-next-line prettier/prettier -->
      </p>
      <p class="text-xl sm:text-3xl">
        Eu gosto de me manter ocupado, seja estudando ou lendo um livro, ou até mesmo praticando esportes ouvindo música. 😁
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
@import url("https://fonts.googleapis.com/css2?family=Rubik:wght@300;500&display=swap");

#app {
  font-family: "Rubik", Avenir, Helvetica, Arial, sans-serif;
  font-weight: 300;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  .text p {
    max-width: 705px;
    @apply mt-6;
  }
}
</style>
