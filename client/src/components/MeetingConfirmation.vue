<template>
    <div class="container">

    <v-card
        class="mx-auto"
        max-width="400"
        tile
        >
        <h2>Request Status</h2>
        <v-list-item v-for="match in matches" :key="match.id" three-line v-if="match.matchedUserId === currentUserId">
            <v-list-item-content>
                <v-list-item-title>Date: {{ match.meetingDate }}</v-list-item-title>
                <v-list-item-subtitle>
                    Time: {{ match.meetingTime }}
                </v-list-item-subtitle>
                <v-list-item-subtitle>
                    Gym Location: {{ match.gymLocation }}
                </v-list-item-subtitle>
                <v-list-item-subtitle>
                    Status: {{ match.meetingStatus }}
                </v-list-item-subtitle>
                <v-btn @click="acceptMeeting(match.userId)">Accept</v-btn>
                <v-btn @click="declineMeeting(match.userId)">Decline</v-btn>
            </v-list-item-content>
        </v-list-item>
        <h2>Invite Status</h2>
        <v-list-item v-for="match in matches" :key="match.id" three-line v-if="match.userId === currentUserId">
            <v-list-item-content>
                <v-list-item-title>Date: {{ match.meetingDate }}</v-list-item-title>
                <v-list-item-subtitle>
                    Time: {{ match.meetingTime }}
                </v-list-item-subtitle>
                <v-list-item-subtitle>
                    Gym Location: {{ match.gymLocation }}
                </v-list-item-subtitle>
                <v-list-item-subtitle>
                    Status: {{ match.meetingStatus }}
                </v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>
    </v-card>
  </div>
</template>

  <script>
import ScheduleService from '../services/ScheduleService'

  export default {
    data () {
        return {
            matches: [] // Empty array to hold the parsed user data
        }
    },
    computed: {
        currentUserId () {
            console.log(this.$store.state.user.id)
            return this.$store.state.user.id
        }
    },
    created () {
        console.log('-----Im here----------')

        if (this.$route.params.matches) {
            this.matches = JSON.parse(this.$route.params.matches)
            console.log('HELO')
            console.log(this.matches)
        }
    },
    methods: {
        async acceptMeeting (matchedUserId) {
            // Perform the update for accepting the meeting in the database
            try {
                await this.updateMeetingStatus(matchedUserId, 'Accepted')
            } catch (error) {
                console.error('Error accepting meeting:', error)
            }
        },

        async declineMeeting (matchedUserId) {
            // Perform the update for declining the meeting in the database
            try {
                await this.updateMeetingStatus(matchedUserId, 'Declined')
            } catch (error) {
                console.error('Error declining meeting:', error)
            }
        },
        async updateMeetingStatus (matchedUserId, meetingStatus) {
            try {
                console.log('current', this.currentUserId)
                console.log('matched', matchedUserId)
                console.log(meetingStatus)
                const response = await ScheduleService.updateMeetingStatus({
                    userId: matchedUserId,
                    matchedUserId: this.currentUserId,
                    meetingStatus: meetingStatus
                })
                console.log(response)
                this.matches = response
            } catch (error) {
                throw new Error('Error updating meeting status:', error)
            }
        }
    }
  }
  </script>
  <style scoped>
    .error {
      color: red;
    }
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
    }
  </style>
