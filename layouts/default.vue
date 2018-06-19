<template>
  <div>
    <nav class="navbar is-dark">
      <div class="navbar-brand">
        <nuxt-link to="/" class="navbar-item">
        <img src="~assets/home-logo.png" alt="page-icon">
        </nuxt-link>
      </div>
      <div class="navbar-menu is-active">
          <div class="navbar-end">
            <nuxt-link to="/profile" class="navbar-item">프로필</nuxt-link>
            <nuxt-link to="/work" class="navbar-item">작업물</nuxt-link>
            <nuxt-link to="/hobby" class="navbar-item">취미생활</nuxt-link>
          </div>
        </div>
    </nav>
    <nuxt/>
    <footer class="footer has-text-centered">
    <p>Copyright 2018. JH's PRO rights reserved.</p>
  </footer>
  </div>
</template>