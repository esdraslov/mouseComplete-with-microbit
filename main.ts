/**
 * just with this
 */
basic.forever(function () {
    servos.P0.setAngle(input.acceleration(Dimension.X))
    servos.P1.setAngle(input.acceleration(Dimension.Z))
})
