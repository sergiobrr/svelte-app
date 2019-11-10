<script>
  let openMenu = false;
  function toggleMenu() {
      openMenu = !openMenu;
  }
</script>

<style>
  nav {
    background-color: #711517;
    color: #dbdbdb;
  }
  .navbar-burger {
    color: #dbdbdb;
  }
  .logo-claim {
    margin-left: 16px;
    margin-right: 16px;
    padding-top: 16px;
    color: #dbdbdb;
  }
</style>

<nav class="navbar is-fixed-top"
      role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <h3 class="title logo-claim">Nag Someone</h3>
    <div class="navbar-burger burger"
         class:is-active={openMenu}
         on:click={toggleMenu}
         data-target="navbarMain">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
  <div id="navbarMain" class="navbar-menu"
         class:is-active={openMenu}>
    <div class="navbar-start">
      <a class="navbar-item" href="#">
        Home
      </a>
    </div>
    <div class="navbar-end">
      <div class="navbar-item">
        <p>
          This is the end of the world as you know it
        </p>
      </div>
    </div>
</nav>
