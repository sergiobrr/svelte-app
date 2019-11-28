<script>
  export let heroTitle;
  export let heroSubTitle;
  export let link1;
  export let link1Text;
  export let link2;
  export let link2Text;
</script>

<style>

</style>

<section class="hero is-dark is-fullheight">
  <div class="hero-body">
    <div class="container">
      <h1 class="title is-1">
        {heroTitle}
      </h1>
      <h2 class="subtitle">
        {heroSubTitle}
      </h2>
      <div class="hero-buttons">
        <a class="button is-light"
           href={link1}>
          {link1Text}
        </a>
      </div>
      <div class="hero-buttons">
        <a class="button is-light"
           href={link2}>
          {link2Text}
        </a>
      </div>
    </div>
  </div>
</section>
