module.exports = (sequelize, DataTypes) => {
    const Match = sequelize.define('Match', {
        userId: DataTypes.INTEGER,
        matchedUserId: DataTypes.INTEGER,
        meetingDate: DataTypes.DATEONLY,
        meetingTime: DataTypes.TIME,
        gymLocation: DataTypes.STRING,
        meetingStatus: DataTypes.STRING
    }, {
        tableName: 'matches',
        timestamps: false,
        autoIncrement: false
    })

    return Match
}
