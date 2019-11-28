<script>
  export let item;
</script>

<style>
  .card {
    margin-top: 32px;
  }
</style>

<div class="card">
  <div class="card-header">
    <a href="#" class="card-header-icon">
      <span class="icon">
        <i class="fas fa-users-cog"></i>
      </span>
    </a>
    <p class="card-header-title">
      Insieme di preferenze che individuano una nuance
    </p>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-left">
        <figure class="image is-128x128">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI74-HyanJa4kp4ysCc9ejaNNnbV86pEFFli9tgd27LmoCxuYj&s"
               alt="Nome della nuance"
               class="is-rounded"/>
        </figure>
      </div>
      <div class="media-content notification">
        <h3 class="title is-4">
          Nome: {item.name} - Id: {item.id}
        </h3>
        <p class="subtitle is5">
          {item.subtitle}
        </p>
        <p class="content">
          {item.descrizione}
        </p>
        <div class="columns">
          <div class="column is-one-fifth">
            <b>Componenti del gruppo</b>
          </div>
          <div class="column">
            <div class="content">
              <ul>
                {#each item.componenti as tizio}
                <li class="list-item">
                  <span class="icon">
                    <i class="fas fa-angry"></i>
                  </span>
                  {tizio}
                </li>
                {/each}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="card-footer">
    <div class="card-footer-item">
      <p class="content">
        fondatore: <b>{item.fondatore}</b>
      </p>
    </div>
    <div class="card-footer-item">
      <p class="content">
        create il: <b>{item.creato}</b>
      </p>
    </div>
  </div>
</div>
