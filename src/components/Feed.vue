<template>
  <div id="feed">
    <template v-for="(a, index) in articles">
      <program-article v-if="a.type=='program'" :program='a' :key='index'></program-article>
    </template>

  </div>
</template>

<script>
import ProgramArticle from './ProgramArticle'
export default {
  name: 'Feed',
  components: {
    ProgramArticle
  },
  data () {
    return {
      articles: [
        {
          type: 'program',
          date: '2017-11-22',
          title: 'Sychravá streda',
          image: 'http://www.tlis.sk/sites/default/files/styles/large/public/stvrtok_1.png?itok=Am9attTD',
          description: 'Zahrejte skrehnuté kosti príjemným hlasom Mimy, rozhýbte stuhnuté zadnice s trochou rocku a nakoniec sa dajte do pohody s neskorým večerom na TLISe.',
          shows: [
            {
              title: 'Mlyny Weekly',
              description: 'Dnešný diel bude plný humoru! Mima si do štúdia pozvala hosťku, s ktorou budú rozoberať situácie, v ktorých sa určite nájdete aj vy.',
              datetime: '2017-11-22 19:00'
            },
            {
              title: 'the Dust',
              description: 'Vďaka vám sme sa vydali na púť nájsť svoju "počúvateľnú" stránku a budeme vám to demnoštrovať v dnešnej relácii..... Alebo aj nie. Či?',
              datetime: '2017-11-22 20:00'
            },
            {
              title: 'LateNightTLIS',
              description: 'Dnes Fero a Viktor o veciach zadarmo, najdrbnutejších inzerátoch a...kde sa tí dvaja vlastne flákali posledné dva týždne, sakra?!',
              datetime: '2017-11-22 21:00'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss">
  #feed {
    background-color:#f99;
  }
</style>
