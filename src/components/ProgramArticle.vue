<template>
    <article class="card">
      <div class="card-date box">
        <big>{{program.date | date}}</big><br>
      </div>
      <div class="card-header">
        <p class="card-header-title">Program - {{ program.title }}</p>
      </div>
      <div class="card-image">
        <figure class="image">
          <img :src=program.image alt="Placeholder image">
          <caption>{{program.title}}</caption>
        </figure>
      </div>
      <div class="card-content">
        <div class="content">
          {{ program.description }}
        </div>
      </div>
      <div class="card-content">
        
        <template v-for="(s, index) in program.shows">
          <div :key='index' class="columns is-vcentered">
            <div class="column is-narrow has-text-centered">
              <div>
                <time :datetime=s.datetime><strong>{{ s.datetime | time }}</strong></time>
              </div>
            </div>
            <div class="column">
              <div class="content">
                <h3 class="title is-5" style="margin-bottom:0.2rem">{{ s.title }}</h3>
                <small>
                  {{ s.description }}
                </small>
              </div>
            </div>
            <div class="column is-narrow">
              <button class="button is-small">
                <i class="fa fa-bell-o"></i>
              </button>
            </div>
          </div>
        </template>

        
      </div>      
    </article>

  </div>
</template>

<script>
export default {
  name: 'ProgramArticle',
  props: ['key', 'program'],
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
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
