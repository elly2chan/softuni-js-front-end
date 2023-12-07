function songs(list) {
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }

        printSong(songType) {
            if (this.typeList === songType || songType === 'all') {
                console.log(this.name)
            }
        }
    }

    let songs = list.shift()
    let songType = list.pop()

    for (let i = 0; i < songs; i++) {
        let [type, name, time] = list[i].split('_')
        let song = new Song(type, name, time)
        song.printSong(songType)
    }
}