<template>
  <div>
    <h1>Events</h1>
    <EventCard
      v-for="(event, index) in events"
      :key="index"
      :event="event"
      :data-index="index"
    />
  </div>
</template>
<script>
import EventCard from '@/components/EventCard.vue'
import EventService from '~/services/EventService'
export default {
  components: {
    EventCard,
  },
  async asyncData({ error }) {
    try {
      const { data } = await EventService.getEvents()
      return {
        events: data,
      }
    } catch (e) {
      error({
        statusCode: 503,
        message: 'Unable to fetch events events at this time',
      })
    }
  },
  head() {
    return {
      title: 'Event Listing',
    }
  },
}
</script>
