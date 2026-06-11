import { YAMANOTE_STATIONS } from '@/data/stations'

export interface TrainState {
  currentStation: number
  speed: number // km/h
  distance: number // meters from start
  passengers: number
  capacity: number
  doorsOpen: boolean
  isMoving: boolean
}

export default class TrainSimulator {
  private state: TrainState = {
    currentStation: 0,
    speed: 0,
    distance: 0,
    passengers: 50,
    capacity: 200,
    doorsOpen: false,
    isMoving: false,
  }

  private maxSpeed = 100 // km/h
  private acceleration = 2 // km/h per second
  private deceleration = 1.5 // km/h per second
  private stationStopTime = 0
  private currentStationDuration = 0

  constructor() {
    this.state.currentStationDuration = YAMANOTE_STATIONS[0].stopDuration
  }

  update(deltaTime: number): void {
    const station = YAMANOTE_STATIONS[this.state.currentStation]

    if (this.state.doorsOpen) {
      // Doors are open, simulate passenger boarding/alighting
      this.stationStopTime += deltaTime

      if (this.stationStopTime >= this.state.currentStationDuration) {
        // Close doors and start moving
        this.state.doorsOpen = false
        this.stationStopTime = 0
        this.state.isMoving = true
      }
    } else if (this.state.isMoving) {
      // Train is moving, accelerate or decelerate
      if (this.state.speed < this.maxSpeed) {
        this.state.speed += this.acceleration * deltaTime
      }

      // Update distance
      this.state.distance += (this.state.speed / 3.6) * deltaTime // Convert km/h to m/s

      // Check if approaching next station
      const nextStationIndex = (this.state.currentStation + 1) % YAMANOTE_STATIONS.length
      const nextStation = YAMANOTE_STATIONS[nextStationIndex]
      const distanceToNextStation = Math.sqrt(
        Math.pow(nextStation.position.x - station.position.x, 2) +
          Math.pow(nextStation.position.z - station.position.z, 2)
      )

      if (this.state.distance >= distanceToNextStation) {
        this.arrivedAtStation(nextStationIndex)
      }
    }
  }

  private arrivedAtStation(stationIndex: number): void {
    this.state.currentStation = stationIndex
    this.state.speed = 0
    this.state.distance = 0
    this.state.isMoving = false
    this.state.doorsOpen = true
    this.state.currentStationDuration = YAMANOTE_STATIONS[stationIndex].stopDuration

    // Simulate passenger changes
    this.updatePassengers()
  }

  private updatePassengers(): void {
    // Simple passenger simulation
    const exitPassengers = Math.floor(this.state.passengers * 0.3) // 30% exit
    const enterPassengers = Math.min(
      this.state.capacity - (this.state.passengers - exitPassengers),
      Math.floor(Math.random() * 50) + 10 // 10-60 passengers enter
    )

    this.state.passengers = this.state.passengers - exitPassengers + enterPassengers
  }

  getState(): TrainState {
    return { ...this.state }
  }

  getCurrentStation() {
    return YAMANOTE_STATIONS[this.state.currentStation]
  }

  getCrowdedness(): number {
    return this.state.passengers / this.state.capacity
  }
}
