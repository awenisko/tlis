<template>
  <div id="feed">
    
    <article class="card">
      <div class="card-date box">
        <big>22.11.</big><br>
        <small>streda</small>
      </div>
      <div class="card-image">
        <figure class="image">
          <img src="http://www.tlis.sk/sites/default/files/styles/large/public/stvrtok_1.png?itok=Am9attTD" alt="Placeholder image">
          <caption>Sychravá streda</caption>
        </figure>
      </div>
      <div class="card-content">
        <div class="content">
          Zahrejte skrehnuté kosti príjemným hlasom Mimy, rozhýbte stuhnuté zadnice s trochou rocku a nakoniec sa dajte do pohody s neskorým večerom na TLISe.
        </div>
      </div>
      <div class="card-content" >
        <div class="columns is-vcentered"  style="margin:0;">
          <div class="column is-narrow has-text-centered">
            <div>
              <time datetime="2017-11-22 19:00"><strong>19:00</strong></time>
            </div>
          </div>
          <div class="column">
            <div class="content">
              <h3 class="title is-5" style="margin-bottom:0.2rem">Mlyny Weekly</h3>
              <small>
                Dnešný diel bude plný humoru! Mima si do štúdia pozvala hosťku, s ktorou budú rozoberať situácie, v ktorých sa určite nájdete aj vy.
              </small>
            </div>
          </div>
          <div class="column is-narrow">
            <button class="button is-small">
              <i class="fa fa-bell-o"></i>
            </button>
          </div>
        </div>
      </div>      
    </article>

  </div>
</template>

<script>
export default {
  name: 'Feed',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">

  #feed {
    background-color:#f99;
  }

  .card-date{
    position:absolute;
    //width:5rem;
    //background-color:blue;
    left:-5rem;
    text-align:center;
    padding:0.5rem 0.5rem;
    
  }

  figure {
    caption {
      position:absolute;
      left:0;
      bottom:5%;
      color:#fff;
      background-color:#333;
      font-size: 1.625em;
      line-height: 1.3em;
      max-width: 50%;
      padding:0 10px;
    }
  }


</style>

</style>
