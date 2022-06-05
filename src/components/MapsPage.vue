<template>

  <label>Radius</label><input v-model="radius">

    <GMapMap
        :center="position"
        :zoom="7"
        style="width: 100vw; height: 40rem"
    >
      <GMapCluster>
        <GMapMarker
            :position="position"
            :clickable="true"
            :draggable="true"
            @click="center=position"
            @dragend="getMarkerLocation"
        />
      </GMapCluster>
    </GMapMap>
  <button type="button" class="btn btn-primary" @click="getPlaces">Get List</button>

  <table class="table table-dark table-striped">
    <thead>
    <tr>
      <th scope="col">Place Name</th>
      <th scope="col">Place Latitude</th>
      <th scope="col">Place Longitude</th>
      <th scope="col">Place Vicinity</th>
      <th scope="col">Place Rating</th>
    </tr>
    </thead>

    <tbody>
    <tr v-for="(item,index) in list" :key="index">
      <th>{{item.placeName}}</th>
      <th>{{item.placeVicinity}}</th>
      <th>{{item.placeLatitude}}</th>
      <th>{{item.placeLongitude}}</th>
      <th>{{item.placeRating}}</th>
    </tr>

    </tbody>

  </table>

</template>

<script>
import axios from "axios";
export default {

  name: 'MapsPage',
  data() {
    return {

      position: {
        lat: 38.76644721325907, lng: 30.53833007812501
      },

      lat:38.76644721325907,
      lng:30.53833007812501,
      radius:1000,

      list:[]
    }
  },
  methods:{
    getMarkerLocation(location){
      this.lat=location.latLng.lat()
      this.lng=location.latLng.lng()
    },
    getPlaces(){
      axios.get(`https://workshop-spring-nearby-places.herokuapp.com/place/nearby?lat=${this.lat}&lng=${this.lng}&radius=${this.radius}`).then(response=>{
        this.list=response.data
          }
      )
    }
  },
}
</script>

<style scoped>

</style>
